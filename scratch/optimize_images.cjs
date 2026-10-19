const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, '../public/images/products');
const files = fs.readdirSync(dir);

async function run() {
  console.log('Optimizing product images in:', dir);
  let convertedCount = 0;
  let totalSavedBytes = 0;

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
      const srcPath = path.join(dir, file);
      const base = path.basename(file, ext);
      const destWebp = path.join(dir, `${base}.webp`);

      const origStat = fs.statSync(srcPath);
      
      try {
        // Optimize to WebP with sharp
        await sharp(srcPath)
          .resize({ width: 800, withoutEnlargement: true }) // Perfect for retina card displays
          .webp({ quality: 85, effort: 4 })
          .toFile(destWebp);

        const newStat = fs.statSync(destWebp);
        const saved = origStat.size - newStat.size;
        totalSavedBytes += saved;
        convertedCount++;
        console.log(`✓ ${file} (${Math.round(origStat.size/1024)}KB) -> ${base}.webp (${Math.round(newStat.size/1024)}KB) [Saved ${Math.round(saved/origStat.size*100)}%]`);
      } catch (err) {
        console.error(`Error converting ${file}:`, err.message);
      }
    }
  }

  console.log(`\nDone! Converted ${convertedCount} images. Total saved: ${Math.round(totalSavedBytes / (1024 * 1024))} MB.`);
}

run();
