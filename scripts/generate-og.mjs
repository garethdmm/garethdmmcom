// Generates the Open Graph card images in public/og/.
//
// Run `npm run og` after adding or retitling a post, then commit the PNGs and
// manifest.json. Card content is derived from the post pages themselves (see
// og-pages.mjs), so there is nothing to edit here. Cards whose content is
// unchanged since the last run are skipped; pass --force to re-render all of
// them (e.g. after changing the card template's styling).
//
// Uses headless Chrome; Georgia is a system font on macOS and installable on
// CI, so no packages are needed. Cards are drawn at 1200x630 with a 2x device
// scale factor for crisp text.

import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { cardHash, cardHtml, derivePages, MANIFEST_PATH, OUT_DIR, readManifest } from './og-pages.mjs';

function findChrome() {
  const candidates = [
    process.env.CHROME,
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium-browser',
    '/usr/bin/chromium',
  ].filter(Boolean);
  const chrome = candidates.find(existsSync);
  if (!chrome) throw new Error('Chrome not found; set CHROME=/path/to/chrome');
  return chrome;
}

const force = process.argv.includes('--force');
const chrome = findChrome();
const previous = readManifest();
const manifest = {};

const work = mkdtempSync(join(tmpdir(), 'og-'));
mkdirSync(OUT_DIR, { recursive: true });

for (const page of derivePages()) {
  const hash = cardHash(page);
  manifest[page.slug] = { head: page.head, title: page.title, line: page.line, hash };
  const png = join(OUT_DIR, `${page.slug}.png`);
  if (!force && previous[page.slug]?.hash === hash && existsSync(png)) {
    console.log(`og/${page.slug}.png (fresh, skipped)`);
    continue;
  }
  const htmlPath = join(work, `${page.slug}.html`);
  writeFileSync(htmlPath, cardHtml(page));
  execFileSync(chrome, [
    '--headless',
    '--disable-gpu',
    '--hide-scrollbars',
    // GitHub's Ubuntu runners restrict the user namespaces Chrome's sandbox
    // needs; rendering local static HTML doesn't need a sandbox.
    ...(process.env.CI ? ['--no-sandbox'] : []),
    '--force-device-scale-factor=2',
    '--window-size=1200,630',
    `--screenshot=${png}`,
    `file://${htmlPath}`,
  ]);
  console.log(`og/${page.slug}.png`);
}

for (const slug of Object.keys(previous)) {
  if (!manifest[slug]) console.log(`og/${slug}.png is orphaned (post removed or renamed) — delete it`);
}

writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n');
rmSync(work, { recursive: true, force: true });
