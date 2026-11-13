const fs = require('fs');
const path = require('path');
const https = require('https');

const dir = path.join(process.cwd(), 'public', 'assets', 'awards-images');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const awards = [
  { name: 'award-designrush.webp', url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/07/new-review-icon-add2.webp' },
  { name: 'award-top-developers.png', url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/07/badge-top-mobile-app-developers-2025.png' },
  { name: 'award-clutch-austin.png', url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/07/new-review-icon-add6.png' },
  { name: 'award-rightfirms.png', url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/07/rightfirms-badge-company.png' },
  { name: 'award-clutch-gaming.png', url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/07/new-review-icon-add4.png' }
];

let remaining = awards.length;

awards.forEach(({ name, url }) => {
  const filePath = path.join(dir, name);
  https.get(url, (res) => {
    if (res.statusCode === 200) {
      const stream = fs.createWriteStream(filePath);
      res.pipe(stream);
      stream.on('finish', () => {
        console.log('Downloaded:', name, fs.statSync(filePath).size, 'bytes');
        remaining--;
        if (remaining === 0) process.exit(0);
      });
    } else {
      console.error('Failed:', name, res.statusCode);
      remaining--;
      if (remaining === 0) process.exit(0);
    }
  }).on('error', (err) => {
    console.error('Error:', name, err.message);
    remaining--;
    if (remaining === 0) process.exit(0);
  });
});
