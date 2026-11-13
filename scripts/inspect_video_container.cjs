const fs = require('fs');

const html = fs.readFileSync('scripts/live_footer_dump.html', 'utf8');

const vidPos = html.indexOf('<video');
console.log(html.slice(vidPos - 300, vidPos + 400));
