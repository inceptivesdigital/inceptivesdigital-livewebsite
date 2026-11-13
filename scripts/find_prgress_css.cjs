const https = require('https');
https.get('https://nextincep.wpenginepowered.com/', res => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    const idx = data.indexOf('.prgress-iconssty');
    if (idx !== -1) {
      console.log('prgress-iconssty CSS:\n', data.slice(idx - 100, idx + 400));
    }
  });
});
