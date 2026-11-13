const fs = require('fs');
const path = require('path');
const https = require('https');

const assets = [
  { name: 'counterbadges-1.png', url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/08/counterbadges-1.png' },
  { name: 'mvp-badge-1.png', url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/08/mvp-badge-1.png' },
  { name: 'success-icon-1.png', url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/08/success-icon-1.png' },
  { name: 'success02-1.png', url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/08/success02-1.png' }
];

const targetDir = path.join(__dirname, '..', 'public', 'assets', 'success');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode} for ${url}`));
      }
      const stream = fs.createWriteStream(dest);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close();
        resolve();
      });
    }).on('error', reject);
  });
}

async function main() {
  for (const item of assets) {
    const dest = path.join(targetDir, item.name);
    try {
      await download(item.url, dest);
      console.log(`Downloaded ${item.name} (${fs.statSync(dest).size} bytes)`);
    } catch (e) {
      console.error(`Failed ${item.name}:`, e.message);
    }
  }
}
main();
