const fs = require('fs');
const path = require('path');
const https = require('https');

const icons = [
  { name: 'industries-hearts.svg', url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/08/industries-hearts.svg' },
  { name: 'industries-realstate.svg', url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/08/industries-realstate.svg' },
  { name: 'industries-traveling1.svg', url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/08/industries-traveling1.svg' },
  { name: 'Food-Delivery.svg', url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/08/Food-Delivery.svg' }
];

const destDir = path.join(__dirname, '..', 'public', 'assets', 'industries-icons');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode} for ${url}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', reject);
  });
}

async function run() {
  for (const item of icons) {
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
