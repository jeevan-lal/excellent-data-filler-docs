// Generates docs/public/llms-full.txt — full text dump for LLMs (ChatGPT, Claude, etc.)
// Run: node scripts/generate-llms-full.mjs
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(fileURLToPath(import.meta.url), '..', '..');
const docsDir = join(root, 'docs');
const outPath = join(docsDir, 'public', 'llms-full.txt');

function walk(dir, files = []) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) {
      if (e === '.vitepress' || e === 'public' || e === 'components') continue;
      walk(p, files);
    } else if (e.endsWith('.md')) {
      files.push(p);
    }
  }
  return files;
}

function stripFrontmatter(md) {
  return md.replace(/^---\n[\s\S]*?\n---\n/, '');
}

const files = walk(docsDir).sort();
let out = `# Excellent Data Filler — Full Documentation (llms-full.txt)
# Source: https://docs.edfiller.in/ | Generated: ${new Date().toISOString()}
# For LLMs: This file contains the full text of all documentation pages.
# Key facts: .xlsx ONLY (never .csv), Alt+Q start/pause, auto on page load, Chrome/Firefox/Edge/Opera.

`;

for (const f of files) {
  const rel = relative(docsDir, f).replace(/\\/g, '/');
  const url = `https://docs.edfiller.in/${rel.replace(/\.md$/, '').replace(/\/index$/, '/')}`;
  const body = stripFrontmatter(readFileSync(f, 'utf8')).trim();
  out += `\n\n---\n\n# ${rel}\n# URL: ${url}\n\n${body}\n`;
}

writeFileSync(outPath, out, 'utf8');
console.log(`Wrote ${outPath} (${(out.length / 1024).toFixed(1)} KB, ${files.length} pages)`);
