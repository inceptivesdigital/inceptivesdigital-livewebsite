const https = require('https');
https.get('https://nextincep.wpenginepowered.com/wp-content/uploads/elementor/css/post-14263.css', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    ['prgress-iconssty', 'process-icon', 'process-icons', 'tabs-aitabs'].forEach(cls => {
      const regex = new RegExp(`\\.${cls}[^{]*\\{[^}]+\\}`, 'g');
      const matches = data.match(regex);
      console.log(`=== ${cls} ===`, matches);
    });
  });
}).on('error', err => console.error(err));
