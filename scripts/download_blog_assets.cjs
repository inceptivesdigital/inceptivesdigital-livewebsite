const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'images', 'blog');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const images = [
  { url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/08/sparkle.png', filename: 'sparkle.png' },
  { url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/11/Image-1.jpg', filename: 'image-san-francisco.jpg' },
  { url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/11/Image-1-3.jpg', filename: 'image-no-code-mvp.jpg' },
  { url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/11/Image-1-2.jpg', filename: 'image-austin.jpg' }
];

async function download() {
  for (const img of images) {
    try {
      console.log(`Downloading ${img.url}...`);
      const res = await fetch(img.url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(path.join(dir, img.filename), buffer);
      console.log(`Saved ${img.filename} (${buffer.length} bytes)`);
    } catch (e) {
      console.error(`Failed ${img.filename}:`, e.message);
    }
  }
}

download();
