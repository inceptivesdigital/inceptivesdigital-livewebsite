const fs = require('fs');
const path = require('path');
const https = require('https');

const url = 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/08/homecta.png';
const dest = path.join(__dirname, '..', 'public', 'assets', 'homecta.png');

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

download(url, dest)
  .then(() => console.log('Successfully downloaded homecta.png, size:', fs.statSync(dest).size))
  .catch(err => {
    console.log('Failed from wpengine, trying inceptivesdigital.com...');
    return download('https://inceptivesdigital.com/wp-content/uploads/2026/08/homecta.png', dest);
  })
  .then(() => console.log('Final homecta.png size:', fs.statSync(dest).size))
  .catch(err => console.error('Error downloading:', err.message));
