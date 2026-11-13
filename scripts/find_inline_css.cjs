const https = require('https');
https.get('https://nextincep.wpenginepowered.com/', res => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    const idx = data.indexOf('.process-icons');
    if (idx !== -1) {
      console.log('Found .process-icons in inline style:', data.slice(idx - 100, idx + 400));
    } else {
      console.log('No .process-icons style block');
    }
  });
});
