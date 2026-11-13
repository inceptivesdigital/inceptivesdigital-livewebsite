const https = require('https');
const fs = require('fs');
const path = require('path');

const flags = [
  { name: 'us.png', url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/07/united-states-1.png' },
  { name: 'ca.png', url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/07/canda.png' },
  { name: 'uk.webp', url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/07/uk-icon.webp' },
  { name: 'ae.webp', url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/07/uae-flag.webp' },
  { name: 'sg.png', url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/07/singa.png' },
  { name: 'pk.png', url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/07/pakistan.png' },
  { name: 'dmca.png', url: 'https://images.dmca.com/Badges/dmca-badge-w100-5x1-08.png?ID=f91eaa7d-6fbf-4058-bfda-4801f7c9b566' }
];

const targetDir = path.join(__dirname, '..', 'public', 'assets', 'flags');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

flags.forEach(f => {
  const dest = path.join(targetDir, f.name);
  const file = fs.createWriteStream(dest);
  https.get(f.url, res => {
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${f.name}`);
    });
  }).on('error', err => {
    console.error(`Error downloading ${f.name}:`, err.message);
  });
});
