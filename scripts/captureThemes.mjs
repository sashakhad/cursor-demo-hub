#!/usr/bin/env node
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
const OUT_DIR = join(process.cwd(), 'screenshots');

const THEMES = ['light', 'dark', 'purple', 'orange'];

async function ensureOutDir() {
  try {
    mkdirSync(OUT_DIR, { recursive: true });
  } catch {}
}

async function captureTheme(page, theme) {
  // Set theme before navigate to avoid flash
  await page.addInitScript((t) => {
    try {
      localStorage.setItem('theme', t);
    } catch {}
  }, theme);

  await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });

  // Verify selector exists, then ensure html attribute is applied
  const selector = await page.locator('[data-testid="theme-selector"]');
  await selector.waitFor({ state: 'visible' });

  // Use the dropdown to select the theme to exercise UI path
  await selector.selectOption(theme);

  // Wait for html attribute and class changes
  await page.waitForFunction((t) => {
    const root = document.documentElement;
    const attrOk = root.getAttribute('data-theme') === t;
    const darkOk = t !== 'dark' || root.classList.contains('dark');
    const notDarkOk = t === 'dark' || !root.classList.contains('dark');
    return attrOk && darkOk && notDarkOk;
  }, theme);

  // Give Tailwind/layout a moment to settle
  await page.waitForTimeout(100);

  await page.screenshot({ path: join(OUT_DIR, `home-${theme}.png`), fullPage: true });
}

async function main() {
  await ensureOutDir();
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await context.newPage();
  for (const theme of THEMES) {
    await captureTheme(page, theme);
    // Clear between themes to mimic fresh load
    await page.evaluate(() => localStorage.clear());
  }
  await browser.close();
  console.log('Screenshots saved to', OUT_DIR);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});


