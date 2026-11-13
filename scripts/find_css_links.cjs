const https = require('https');
https.get('https://nextincep.wpenginepowered.com/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // find all <link rel="stylesheet" href="...">
    const links = [...data.matchAll(/<link[^>]+href=["']([^"']+\.css[^"']*)["']/g)].map(m => m[1]);
    console.log('CSS links:', links);
  });
}).on('error', err => console.error(err));
