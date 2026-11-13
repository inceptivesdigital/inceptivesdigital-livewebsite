const fs = require('fs');

const html = fs.readFileSync('scripts/live_footer_dump.html', 'utf8');

const socPos = html.indexOf('elementor-widget-social-icons');
console.log(html.slice(socPos, socPos + 3500));
