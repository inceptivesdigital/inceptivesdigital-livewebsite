const fs = require('fs');

const html = fs.readFileSync('scripts/live_footer_dump.html', 'utf8');

const navStart = html.indexOf('Services');
const navEnd = html.indexOf('Recognized and Reviewed On');
console.log(html.slice(navStart - 100, navStart + 2500));
