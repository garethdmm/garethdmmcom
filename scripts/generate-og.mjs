// Generates the Open Graph card images in public/og/.
//
// Run `npm run og` after adding a post (add its entry to PAGES below first),
// then commit the PNGs. Uses the installed Google Chrome headless; Georgia is
// a system font, so no packages are needed. Cards are drawn at 1200x630 with
// a 2x device scale factor for crisp text.

import { execFileSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const OUT_DIR = new URL('../public/og/', import.meta.url).pathname;

const PAGES = [
  {
    slug: 'home',
    head: 'garethdmm.com',
    title: 'Gareth MacLeod',
    line: 'Founder · Engineer · Waterloo, Ontario',
  },
  {
    slug: 'its-the-money-silly',
    head: 'Gareth MacLeod',
    title: 'It’s the money, silly',
    line: 'November 2025',
  },
  {
    slug: 'i-worked-with-a-man-who-faked-his-own-death',
    head: 'Gareth MacLeod',
    title: 'I worked with a man who faked his own death',
    line: 'June 2024',
  },
  {
    slug: 'how-to-feel-when-your-startup-feels-easy',
    head: 'Gareth MacLeod',
    title: 'How to feel when your startup feels easy',
    line: 'March 2024',
  },
  {
    slug: 'prepare-for-a-y-combinator-interview',
    head: 'Gareth MacLeod',
    title: 'A simple method to prepare for a Y Combinator interview',
    line: 'October 2020',
  },
  {
    slug: 'surviving-five-years-in-the-most-dangerous-market',
    head: 'Gareth MacLeod',
    title: 'Thriving in the presence of risk — Crypto 2013–17',
    line: 'August 2019',
  },
];

// The card is the opening of the essay page itself, enlarged: the letterspaced
// running head at the top, the title and italic date at the left, and the
// fleuron centered below them — the essay begins just under the fold.
function card({ head, title, line }) {
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
  <div class="head">${head}</div>
  <h1 class="title">${title}</h1>
  <p class="line">${line}</p>
  <div class="fleuron">&#10086;</div>
</body>
</html>`;
}

const work = mkdtempSync(join(tmpdir(), 'og-'));
mkdirSync(OUT_DIR, { recursive: true });

for (const page of PAGES) {
  const htmlPath = join(work, `${page.slug}.html`);
  writeFileSync(htmlPath, card(page));
  execFileSync(CHROME, [
    '--headless',
    '--disable-gpu',
    '--hide-scrollbars',
    '--force-device-scale-factor=2',
    '--window-size=1200,630',
    `--screenshot=${join(OUT_DIR, `${page.slug}.png`)}`,
    `file://${htmlPath}`,
  ]);
  console.log(`og/${page.slug}.png`);
}

rmSync(work, { recursive: true, force: true });
