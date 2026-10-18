/**
 * Asset Discovery Script
 * Scans public/images/products/ for uploaded images and matches them
 * against canonical product slugs and names.
 *
 * Usage: node scripts/asset-discovery.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const productsDir = path.join(__dirname, '..', 'public', 'images', 'products');
const checklistPath = path.join(__dirname, '..', 'public', 'product-image-checklist.csv');

if (!fs.existsSync(productsDir)) {
  fs.mkdirSync(productsDir, { recursive: true });
}

const files = fs.readdirSync(productsDir);
console.log(`\n🔍 Found ${files.length} files in ${productsDir}`);

if (!fs.existsSync(checklistPath)) {
  console.error('Checklist CSV not found.');
  process.exit(1);
}

const csvLines = fs.readFileSync(checklistPath, 'utf-8').trim().split('\n');
const header = csvLines[0];
const entries = csvLines.slice(1).map(line => {
  const [name, slug, recommended, assigned, status] = line.split(',');
  return { name, slug, recommended, assigned, status };
});

const normalize = (str) =>
  str.toLowerCase().replace(/[^a-z0-9]/g, '');

const matched = [];
const uncertain = [];
const missing = [];

entries.forEach(entry => {
  const normSlug = normalize(entry.slug);
  const normRec = normalize(path.parse(entry.recommended).name);

  // Exact match
  const exactFile = files.find(f => f === entry.recommended || f.startsWith(entry.slug + '.'));
  if (exactFile) {
    matched.push({ entry, file: exactFile, confidence: '100% exact' });
    return;
  }

  // Normalized fuzzy candidate
  const candidate = files.find(f => {
    const normF = normalize(path.parse(f).name);
    return normF === normSlug || normF === normRec;
  });

  if (candidate) {
    uncertain.push({ entry, candidate, reason: 'Normalized string match' });
  } else {
    missing.push(entry);
  }
});

console.log('\n--- ASSET DISCOVERY REPORT ---');
console.log(`✅ Unambiguous Matches: ${matched.length}`);
matched.forEach(m => console.log(`   ${m.entry.name} -> /images/products/${m.file} (${m.confidence})`));

console.log(`\n⚠️  Candidate Matches Requiring Review: ${uncertain.length}`);
uncertain.forEach(u => console.log(`   ${u.entry.name} ?-> ${u.candidate} (${u.reason})`));

console.log(`\n⏳ Awaiting Photography: ${missing.length} products`);
console.log('To link an image, place webp/jpg files into public/images/products/ and rerun this script.\n');

// Write updated CSV
const updatedLines = [header];
entries.forEach(entry => {
  const match = matched.find(m => m.entry.slug === entry.slug);
  if (match) {
    const ext = path.extname(match.file);
    updatedLines.push(`${entry.name},${entry.slug},${match.file},/images/products/${match.file},Active Photography`);
  } else {
    updatedLines.push(`${entry.name},${entry.slug},${entry.recommended},${entry.assigned},${entry.status}`);
  }
});

fs.writeFileSync(checklistPath, updatedLines.join('\n') + '\n', 'utf-8');
console.log('✅ Updated public/product-image-checklist.csv with active photography matches.\n');

