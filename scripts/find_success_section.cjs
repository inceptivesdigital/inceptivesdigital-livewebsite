const https = require('https');
https.get('https://nextincep.wpenginepowered.com/', res => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    const idx = data.indexOf('Our Success In Numbers');
    if (idx !== -1) {
      console.log('Found section:\n', data.slice(idx - 300, idx + 4000));
    } else {
      console.log('Not found by phrase, searching for 3 Million or Microsoft MVP...');
      const idx2 = data.indexOf('Microsoft');
      if (idx2 !== -1) {
        console.log('Found Microsoft:\n', data.slice(idx2 - 300, idx2 + 2000));
      }
    }
  });
}).on('error', err => console.error(err));
