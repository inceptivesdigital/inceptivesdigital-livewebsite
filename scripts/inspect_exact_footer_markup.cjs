const fs = require('fs');

const html = fs.readFileSync('scripts/live_footer_dump.html', 'utf8');

// Location box search
const locPos = html.indexOf('New York, USA');
console.log('=== LOCATION BOX SAMPLE ===');
console.log(html.slice(locPos - 400, locPos + 600));

// Review box search
const revPos = html.indexOf('Recognized and Reviewed On');
console.log('=== REVIEW BOX SAMPLE ===');
console.log(html.slice(revPos - 200, revPos + 1200));

// Social links search
const socPos = html.indexOf('info@inceptivesdigital.com');
console.log('=== SOCIAL LINKS SAMPLE ===');
console.log(html.slice(socPos - 200, socPos + 800));
