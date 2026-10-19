const fs = require('fs');

const manifestText = fs.readFileSync('./src/data/assetManifest.ts', 'utf8');
const productsText = fs.readFileSync('./src/data/products.ts', 'utf8');

// Match keys in productImages
const imageMatches = [...manifestText.matchAll(/\"([^\"]+)\":\s*\"([^\"]+)\"/g)];
console.log('Manifest productImages count:', imageMatches.length);
imageMatches.slice(0, 10).forEach(m => console.log('  ', m[1], '=>', m[2]));

// Find products in products.ts
const idMatches = [...productsText.matchAll(/id:\s*\"([^\"]+)\",\s*slug:\s*\"([^\"]+)\",\s*name:\s*\"([^\"]+)\",/g)];
console.log('\nTotal products count in products.ts:', idMatches.length);

// Count how many products have image: productImages["..."]
const prodWithImages = [...productsText.matchAll(/name:\s*\"([^\"]+)\"[\s\S]*?image:\s*productImages\[\"([^\"]+)\"\]/g)];
console.log('Products referencing productImages:', prodWithImages.length);
prodWithImages.forEach(m => {
  const slug = m[2];
  const found = imageMatches.find(im => im[1] === slug);
  if (!found) {
    console.log('MISSING in manifest:', m[1], slug);
  }
});
