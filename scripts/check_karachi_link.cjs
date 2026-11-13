const fs = require('fs');

const html = fs.readFileSync('scripts/live_footer_dump.html', 'utf8');

const kIdx = html.indexOf('Karachi');
console.log(html.slice(kIdx - 200, kIdx + 400));
