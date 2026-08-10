// Shared card data for the Open Graph images in public/og/.
//
// Card content is derived from the posts themselves: the title comes from the
// postMetadata() call in each app/writing/<slug>/page.tsx, the date from the
// italic line under the h1. public/og/manifest.json records a hash of the
// exact HTML each PNG was rendered from, so scripts/check-og.mjs can tell
// when a card has gone stale without comparing pixels.

import { createHash } from 'node:crypto';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
export const WRITING_DIR = join(ROOT, 'app', 'writing');
export const OUT_DIR = join(ROOT, 'public', 'og');
export const MANIFEST_PATH = join(OUT_DIR, 'manifest.json');

// The home card is not derived from a page; it changes only by hand.
const HOME = {
  slug: 'home',
  head: 'garethdmm.com',
  title: 'Gareth MacLeod',
  line: 'Founder · Engineer · Waterloo, Ontario',
};

// Straight apostrophes read as typewriter, not typeset; the cards use the
// curly form even where the source is lazy about it.
function typeset(text) {
  return text.replace(/([A-Za-z])'([A-Za-z])/g, '$1’$2');
}

function extract(src, slug) {
  const title = src.match(/title:\s*(['"])((?:\\.|(?!\1).)*)\1/);
  const line = src.match(/<p className="m-0 italic">([^<]+)<\/p>/);
  if (!title || !line) {
    throw new Error(
      `app/writing/${slug}/page.tsx: could not find ` +
        `${title ? '' : 'a postMetadata title'}${!title && !line ? ' or ' : ''}` +
        `${line ? '' : 'the italic date line'} — the card scripts expect the ` +
        `same shape as the existing posts.`,
    );
  }
  return {
    slug,
    head: 'Gareth MacLeod',
    title: typeset(title[2].replace(/\\(['"])/g, '$1')),
    line: line[1].trim(),
  };
}

export function derivePages() {
  const slugs = readdirSync(WRITING_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort()
    .filter((slug) => existsSync(join(WRITING_DIR, slug, 'page.tsx')));
  return [HOME, ...slugs.map((slug) => extract(readFileSync(join(WRITING_DIR, slug, 'page.tsx'), 'utf8'), slug))];
}

function escapeHtml(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// The card is the opening of the essay page itself, enlarged: the letterspaced
// running head at the top, the title and italic date at the left, and the
// fleuron centered below them — the essay begins just under the fold.
export function cardHtml({ head, title, line }) {
  return `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<style>
  html, body { margin: 0; padding: 0; }
  body {
    width: 1200px;
    height: 630px;
    background: #fffdf8;
    color: #1a1a1a;
    font-family: Georgia, 'Times New Roman', Times, serif;
    box-sizing: border-box;
    padding: 84px 110px 64px;
    display: flex;
    flex-direction: column;
  }
  .head {
    font-size: 24px;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    margin: 0;
  }
  .title {
    font-size: 80px;
    font-weight: normal;
    line-height: 1.2;
    max-width: 980px;
    margin: auto 0 0;
    text-wrap: balance;
  }
  .line {
    font-style: italic;
    font-size: 30px;
    margin: 18px 0 0;
  }
  .fleuron {
    color: #c0392b;
    font-size: 28px;
    line-height: 1;
    text-align: center;
    margin: auto 0 0;
  }
</style>
</head>
<body>
  <div class="head">${escapeHtml(head)}</div>
  <h1 class="title">${escapeHtml(title)}</h1>
  <p class="line">${escapeHtml(line)}</p>
  <div class="fleuron">&#10086;</div>
</body>
</html>`;
}

export function cardHash(page) {
  return createHash('sha256').update(cardHtml(page)).digest('hex');
}

export function readManifest() {
  if (!existsSync(MANIFEST_PATH)) return {};
  return JSON.parse(readFileSync(MANIFEST_PATH, 'utf8'));
}
