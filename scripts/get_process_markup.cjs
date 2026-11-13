const https = require('https');
https.get('https://nextincep.wpenginepowered.com/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const idx = data.indexOf('Senior minds');
    if (idx !== -1) {
      console.log(data.slice(idx, idx + 4000));
    } else {
      console.log('Not found');
    }
  });
}).on('error', e => console.error(e));
