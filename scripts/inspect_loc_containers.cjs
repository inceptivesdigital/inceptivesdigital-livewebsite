const fs = require('fs');

const html = fs.readFileSync('scripts/live_footer_dump.html', 'utf8');

const locStart = html.indexOf('Our Locations');
const locEnd = html.indexOf('IT Core Solutions LLC DBA Inceptives Digital');
const locSlice = html.slice(locStart, locEnd);

// Find container class or data-settings
console.log('Location containers:');
const conMatches = locSlice.match(/<div class="elementor-element elementor-element-[^"]*[^>]*>/g);
console.log(conMatches ? conMatches.slice(0, 10) : 'none');
