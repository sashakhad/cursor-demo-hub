#!/usr/bin/env node

/**
 * Generate PDFs from Markdown files in docs/presenter-docs/
 *
 * Usage:
 *   pnpm docs:pdf          # Generate PDFs for changed files
 *   pnpm docs:pdf --force  # Regenerate all PDFs
 *   pnpm docs:pdf --check  # Show which files need regeneration (dry run)
 *
 * Requires: pandoc, weasyprint (brew install pandoc weasyprint)
 */

import { execSync } from "node:child_process";
import { readdir, stat } from "node:fs/promises";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = join(__dirname, "../..");
const DOCS_DIR = join(ROOT_DIR, "docs/presenter-docs");

const args = process.argv.slice(2);
const forceAll = args.includes("--force");
const checkOnly = args.includes("--check");

/**
 * Recursively find all .md files in a directory
 * @param {string} dir
 * @returns {Promise<string[]>}
 */
async function findMarkdownFiles(dir) {
  const files = [];
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await findMarkdownFiles(fullPath)));
    } else if (entry.name.endsWith(".md")) {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Check if PDF needs regeneration based on modification times
 * @param {string} mdPath
 * @param {string} pdfPath
 * @returns {Promise<boolean>}
 */
async function needsRegeneration(mdPath, pdfPath) {
  if (forceAll) return true;

  try {
    const [mdStat, pdfStat] = await Promise.all([stat(mdPath), stat(pdfPath)]);
    return mdStat.mtime > pdfStat.mtime;
  } catch {
    return true;
  }
}

/**
 * Generate PDF from a Markdown file using pandoc
 * @param {string} mdPath
 * @param {string} pdfPath
 */
function generatePdf(mdPath, pdfPath) {
  execSync(`pandoc "${mdPath}" -o "${pdfPath}" --pdf-engine=weasyprint`, {
    stdio: "pipe",
  });
}

async function main() {
  // Check dependencies
  try {
    execSync("which pandoc", { stdio: "pipe" });
    execSync("which weasyprint", { stdio: "pipe" });
  } catch {
    console.error("Missing dependencies. Run: brew install pandoc weasyprint");
    process.exit(1);
  }

  console.log(
    checkOnly ? "Checking for stale PDFs..." : "Generating PDFs...\n"
  );

  const mdFiles = await findMarkdownFiles(DOCS_DIR);
  const toGenerate = [];

  for (const mdPath of mdFiles) {
    const pdfPath = mdPath.replace(/\.md$/, ".pdf");
    if (await needsRegeneration(mdPath, pdfPath)) {
      toGenerate.push({ mdPath, pdfPath });
    }
  }

  if (toGenerate.length === 0) {
    console.log("All PDFs are up to date.");
    return;
  }

  if (checkOnly) {
    console.log(`${toGenerate.length} file(s) need regeneration:\n`);
    for (const { mdPath } of toGenerate) {
      console.log(`  - ${relative(ROOT_DIR, mdPath)}`);
    }
    console.log("\nRun `pnpm docs:pdf` to generate them.");
    return;
  }

  for (const { mdPath, pdfPath } of toGenerate) {
    const relPath = relative(ROOT_DIR, mdPath);
    process.stdout.write(`  ${relPath} ... `);
    try {
      generatePdf(mdPath, pdfPath);
      console.log("done");
    } catch (err) {
      console.log("FAILED");
      console.error(`    Error: ${err.message}`);
    }
  }

  console.log(`\nGenerated ${toGenerate.length} PDF(s).`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
