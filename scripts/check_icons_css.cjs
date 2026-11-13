const https = require('https');
const urls = [
  'https://nextincep.wpenginepowered.com/wp-content/uploads/elementor/css/post-7.css',
  'https://nextincep.wpenginepowered.com/wp-content/themes/hello-elementor/assets/css/theme.css'
];

urls.forEach(u => {
  https.get(u, res => {
    let data = '';
    res.on('data', c => data += c);
    res.on('end', () => {
      const idx = data.indexOf('process-icons');
      if (idx !== -1) {
        console.log(`Found in ${u}:`, data.slice(idx - 100, idx + 300));
      } else {
        console.log(`Not found in ${u}`);
      }
    });
  });
});
