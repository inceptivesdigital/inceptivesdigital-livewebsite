const fs = require('fs');

const html = fs.readFileSync('scripts/live_footer_dump.html', 'utf8');

const revStart = html.indexOf('Recognized and Reviewed On');
const revEnd = html.indexOf('Our Locations');
console.log(html.slice(revStart, revEnd));
