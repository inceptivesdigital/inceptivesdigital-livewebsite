const fs = require('fs');

const html = fs.readFileSync('scripts/live_footer_dump.html', 'utf8');

const locStart = html.indexOf('Our Locations');
const locEnd = html.indexOf('IT Core Solutions LLC DBA Inceptives Digital');
const locSlice = html.slice(locStart, locEnd);

const regex = /href="(https:\/\/maps\.app\.goo\.gl\/[^"]+)"/g;
let m;
while ((m = regex.exec(locSlice)) !== null) {
  console.log(m[1]);
}
