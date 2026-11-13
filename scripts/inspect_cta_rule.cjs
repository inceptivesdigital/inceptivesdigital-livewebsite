const https = require('https');

https.get('https://nextincep.wpenginepowered.com/wp-content/uploads/elementor/css/post-14263.css', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const idx = data.indexOf('homecta.png');
    if (idx !== -1) {
      console.log('Rule around homecta.png:\n', data.substring(idx - 150, idx + 250));
    }
    const idx2 = data.indexOf('last-cta.png');
    if (idx2 !== -1) {
      console.log('Rule around last-cta.png:\n', data.substring(idx2 - 150, idx2 + 250));
    }
  });
}).on('error', err => console.error(err));
