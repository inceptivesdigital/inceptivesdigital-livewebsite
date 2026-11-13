const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/07/logo.png';
const dest = path.join(__dirname, '..', 'public', 'assets', 'footer-logo.png');

const file = fs.createWriteStream(dest);
https.get(url, res => {
  res.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Downloaded footer-logo.png');
  });
});
