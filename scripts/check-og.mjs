// Verifies the Open Graph cards in public/og/ are current: every post has a
// PNG, and manifest.json shows each PNG was rendered from the post's current
// title and date (and the current card template). Run by CI on pull requests;
// exits 1 with instructions when a card needs regenerating.

import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { cardHash, derivePages, OUT_DIR, readManifest } from './og-pages.mjs';

const manifest = readManifest();
const pages = derivePages();
const problems = [];

for (const page of pages) {
  const entry = manifest[page.slug];
  if (!existsSync(join(OUT_DIR, `${page.slug}.png`))) {
    problems.push(`og/${page.slug}.png is missing`);
  } else if (!entry) {
    problems.push(`og/${page.slug}.png has no manifest entry`);
  } else if (entry.hash !== cardHash(page)) {
    problems.push(`og/${page.slug}.png is stale — the post's title or date (or the card template) changed since it was rendered`);
  }
}

const known = new Set(pages.map((page) => page.slug));
for (const slug of Object.keys(manifest)) {
  if (!known.has(slug)) problems.push(`og/${slug}.png is orphaned (no matching post) — delete it and rerun npm run og`);
}

if (problems.length > 0) {
  console.error('Open Graph cards need regenerating:\n');
  for (const problem of problems) console.error(`  - ${problem}`);
  console.error('\nRun `npm run og` and commit public/og/, or dispatch the');
  console.error('"Regenerate OG cards" workflow on this branch from the Actions tab.');
  process.exit(1);
}

console.log(`All ${pages.length} Open Graph cards are current.`);
