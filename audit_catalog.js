
const { PRODUCT_CATALOG } = require('./src/lib/catalog.ts');

// We need to handle the typescript import. Since I can't easily compile TS here, I'll regex parse the file content instead.
// It's safer and faster for a quick audit than setting up ts-node if it's not already there.
// Actually, I'll just read the file and parse it with regex because importing TS in a JS script without build steps is annoying.

const fs = require('fs');
const content = fs.readFileSync('./src/lib/catalog.ts', 'utf8');

// Primitive parsing to find items
const itemRegex = /id:\s*"([^"]+)"[\s\S]*?image:\s*"([^"]+)"[\s\S]*?(availableColors:\s*\[[^\]]*\]|availableColors:\s*[A-Z_]+)?[\s\S]*?(colorImages:\s*\{[\s\S]*?\})?/g;

// Wait, regex for nested objects is hard.
// Let's use the fact that the file is well formatted.

const items = [];
const lines = content.split('\n');
let currentItem = {};
let captureColorImages = false;

lines.forEach(line => {
    const trim = line.trim();
    if (trim.startsWith('id:')) currentItem.id = trim.split('"')[1];
    if (trim.startsWith('title:')) currentItem.title = trim.split('"')[1];
    if (trim.startsWith('image:')) currentItem.image = trim.split('"')[1];
    if (trim.startsWith('availableColors:')) currentItem.hasAvailableColors = true;
    if (trim.startsWith('colorImages:')) {
        currentItem.hasColorImages = true;
        captureColorImages = true;
    }
    if (trim.includes('},') && captureColorImages) captureColorImages = false; // crude

    // reset on sortOrder (usually last prop) or closing brace
    if (trim.startsWith('sortOrder:')) {
        items.push({ ...currentItem });
        currentItem = {};
    }
});

console.log("ID | Image | Has Colors | Has Color Images");
console.log("---|---|---|---");
items.forEach(item => {
    if (!item.id) return;
    const isPlaceholder = item.image && item.image.includes('placeholder');
    const missingColorImages = item.hasAvailableColors && !item.hasColorImages;

    if (isPlaceholder || missingColorImages) {
        console.log(`${item.id} | ${item.image} | ${item.hasAvailableColors} | ${item.hasColorImages ? 'YES' : 'NO'}`);
    }
});
