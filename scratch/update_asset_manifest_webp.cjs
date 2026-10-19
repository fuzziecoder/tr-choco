const fs = require('fs');
const path = require('path');

const manifestPath = path.join(__dirname, '../src/data/assetManifest.ts');
let content = fs.readFileSync(manifestPath, 'utf8');

// Replace any /images/products/*.png or *.jpg with *.webp if the webp exists
const productsDir = path.join(__dirname, '../public/images/products');

content = content.replace(/\/images\/products\/([a-zA-Z0-9_\-\.]+)\.(png|jpg|jpeg)/g, (match, name, ext) => {
  const webpName = `${name}.webp`;
  if (fs.existsSync(path.join(productsDir, webpName))) {
    return `/images/products/${webpName}`;
  }
  return match;
});

// Missing mappings to add before the closing of productImages
const missingMappings = `
  // Additional Products & Fallback Photography
  "chocolate-beans-bottle": "/images/products/file_0000000011ac822f991267cb07aa9668.jpg.webp",
  "stone-chocolate": "/images/products/file_0000000084f881f5b42a5ed766976f13.jpg.webp",
  "bubble-chocolate": "/images/products/coconut-truffle.webp",
  "glucose-candy": "/images/products/fruit-flavours.webp",
  "cherry": "/images/products/white-crunchy.webp",
  "fruit-jelly-100g": "/images/products/mango-truffle.webp",
  "choco-chips-100g": "/images/products/roasted-almond.webp",
  "choco-lollipop": "/images/products/fruit-flavours.webp",
  "red-velvet": "/images/products/brownie-with-chocolate.webp",
  "chocolate-bun": "/images/products/brownie-tub.webp",
  "blue-tea": "/images/products/green-tea-jar.webp",
  "instant-filter-coffee": "/images/products/coffee.webp",
  "drinking-chocolate": "/images/products/hot-chocolate-coffee.webp",
  "egg-puffs": "/images/products/veg-sandwich.webp",
  "veg-puffs": "/images/products/avocado-sandwich.webp",
  "bath-brush": "/images/products/file_000000004d54820abaa7ae26c1025ca8.webp",
  "wine-bottle": "/images/products/file_00000000076081f5af1f2f2fd3d6ad8e.jpg.webp",
};`;

content = content.replace(/\n\};\n\n\/\*\*\n \* Product Galleries/g, missingMappings + '\n\n/**\n * Product Galleries');

fs.writeFileSync(manifestPath, content, 'utf8');
console.log('assetManifest.ts successfully updated with WebP paths and missing mappings!');
