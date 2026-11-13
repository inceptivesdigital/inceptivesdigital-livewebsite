const https = require('https');
const fs = require('fs');
const path = require('path');

const badges = [
  { name: 'clutch.png', url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/07/clutch.png' },
  { name: 'bark.png', url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/07/bark.png' },
  { name: 'trustpilot.png', url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/07/trustpilot.png' }
];

badges.forEach(b => {
  const dest = path.join(__dirname, '..', 'public', 'assets', b.name);
  const file = fs.createWriteStream(dest);
  https.get(b.url, res => {
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${b.name}, size: ${fs.statSync(dest).size}`);
    });
  });
});
