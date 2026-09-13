// Dev-only tool. Requires the site running locally and Playwright installed
// (npm i -D playwright, then npx playwright install chromium) since neither
// is a project dependency. Run: node scripts/generate-pdf.mjs

import { chromium } from "playwright";
import { fileURLToPath } from "node:url";
import path from "node:path";

const url = process.env.PDF_SOURCE_URL || "http://localhost:3100";
const outPath = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "public",
  "shahin-sarker-biodata.pdf",
);

const browser = await chromium.launch({
  executablePath: process.env.PLAYWRIGHT_CHROMIUM_PATH || undefined,
});
const page = await browser.newPage();
await page.goto(url, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(500);
await page.emulateMedia({ media: "print" });
await page.pdf({
  path: outPath,
  format: "A4",
  printBackground: true,
  margin: { top: "10mm", bottom: "10mm", left: "10mm", right: "10mm" },
});
await browser.close();

console.log("Saved:", outPath);
