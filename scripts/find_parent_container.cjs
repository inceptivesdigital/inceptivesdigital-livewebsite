const fs = require('fs');

const html = fs.readFileSync('scripts/live_footer_dump.html', 'utf8');
const idx = html.indexOf('elementor-element-53dfff6');
console.log(html.slice(idx - 600, idx + 100));
