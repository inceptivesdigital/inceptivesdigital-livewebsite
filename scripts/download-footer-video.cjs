const https = require('https');
const fs = require('fs');
const path = require('path');

const fileUrl = 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/07/footer.mp4';
const outputPath = path.join(__dirname, '..', 'public', 'assets', 'footer.mp4');

console.log(`Downloading ${fileUrl} to ${outputPath}...`);

const file = fs.createWriteStream(outputPath);

https.get(fileUrl, (response) => {
  if (response.statusCode === 301 || response.statusCode === 302) {
    console.log(`Redirecting to ${response.headers.location}...`);
    https.get(response.headers.location, (res) => {
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('Download complete!');
      });
    }).on('error', (err) => {
      fs.unlink(outputPath, () => {});
      console.error('Error on redirect:', err.message);
    });
    return;
  }

  if (response.statusCode !== 200) {
    console.error(`Failed with status code: ${response.statusCode}`);
    return;
  }

  response.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Download complete!');
  });
}).on('error', (err) => {
  fs.unlink(outputPath, () => {});
  console.error('Download error:', err.message);
});
