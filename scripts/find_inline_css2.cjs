const https = require('https');
https.get('https://nextincep.wpenginepowered.com/', res => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    const idx = data.indexOf('span.process-icons');
    if (idx !== -1) {
      console.log('CSS block:\n', data.slice(idx - 600, idx + 1000));
    }
  });
});
