const https = require('https');

https.get('https://nextincep.wpenginepowered.com/wp-content/uploads/elementor/css/post-14263.css', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Downloaded post-14263.css, length:', data.length);
    const m = data.match(/\.elementor-element-376d37a5[^{]*\{([^}]+)\}/);
    if (m) console.log('376d37a5:', m[0]);
    const m2 = data.match(/\.elementor-element-6b4cc2a8[^{]*\{([^}]+)\}/);
    if (m2) console.log('6b4cc2a8:', m2[0]);
    const urls = [...data.matchAll(/url\(([^)]+)\)/g)].map(x => x[1]);
    console.log('All image URLs in post-14263.css:', urls);
  });
}).on('error', err => console.error(err));
