const fs = require('fs');
const path = require('path');
const https = require('https');

const images = [
  // Tab top icons
  { name: 'tab-1.png', url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/08/tabs-compressor1.png' },
  { name: 'tab-2.png', url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/07/progress-icons.png' },
  { name: 'tab-3.png', url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/08/tabs-compressor2.png' },
  { name: 'tab-4.png', url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/08/exam-compressor.png' },
  { name: 'tab-5.png', url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/08/rocket-compressor.png' },
  { name: 'tab-6.png', url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/08/handshake-compress.png' },

  // Card icons
  { name: 'card-1.png', url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/08/dis.png' },
  { name: 'card-2.png', url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/08/presstwo.png' },
  { name: 'card-3.png', url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/08/proess3.png' },
  { name: 'card-4.svg', url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/08/process-testing.svg' },
  { name: 'card-5.svg', url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/08/process04.svg' },
  { name: 'card-6.svg', url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/08/process-last.svg' }
];

const destDir = path.join(__dirname, '..', 'public', 'assets', 'process');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

function download(u, d) {
  return new Promise((resolve, reject) => {
    https.get(u, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, d).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode} for ${u}`));
      }
      const file = fs.createWriteStream(d);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', reject);
  });
}

async function run() {
  for (const item of images) {
    const dest = path.join(destDir, item.name);
    try {
      await download(item.url, dest);
      console.log(`Downloaded ${item.name} (${fs.statSync(dest).size} bytes)`);
    } catch (err) {
      console.error(`Failed ${item.name}:`, err.message);
    }
  }
}

run();
