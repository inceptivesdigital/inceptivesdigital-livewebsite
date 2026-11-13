const fs = require('fs');

const html = fs.readFileSync('scripts/live_footer_dump.html', 'utf8');

const locStart = html.indexOf('Our Locations');
const locEnd = html.indexOf('IT Core Solutions LLC DBA Inceptives Digital');
const locSlice = html.slice(locStart, locEnd);

const regex = /<p class="elementor-image-box-description"><a href="([^"]+)">([\s\S]*?)<\/a><\/p>/g;
let m;
let count = 1;
while ((m = regex.exec(locSlice)) !== null) {
  console.log(`Location ${count++}:`);
  console.log('  URL:', m[1]);
  console.log('  Text:', m[2].trim());
}
