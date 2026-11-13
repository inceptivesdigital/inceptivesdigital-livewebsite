const fs = require('fs');

const html = fs.readFileSync('scripts/live_footer.html', 'utf-8');

console.log('--- SECTION HEADINGS IN LIVE FOOTER ---');
const hMatches = html.match(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/gi) || [];
hMatches.forEach(h => console.log('Heading:', h.replace(/<[^>]+>/g, '').trim()));

console.log('\n--- ALL LINKS TEXT & HREF IN FOOTER ---');
const linkRegex = /<a[^>]+href=["']([^"']*)["'][^>]*>(.*?)<\/a>/gi;
let m;
const links = [];
while ((m = linkRegex.exec(html)) !== null) {
  const text = m[2].replace(/<[^>]+>/g, '').trim();
  if (text || m[1]) {
    links.push({ href: m[1], text });
  }
}
console.log(`Total links: ${links.length}`);
links.forEach(l => {
  if (l.text) console.log(`  [${l.text}] -> ${l.href}`);
});

console.log('\n--- LOCATIONS IN LIVE FOOTER ---');
const locRegex = /<h[3-5][^>]*class=["'][^"']*elementor-heading-title[^"']*["'][^>]*>(.*?)<\/h[3-5]>/gi;
let lm;
while ((lm = locRegex.exec(html)) !== null) {
  console.log('Location/Heading:', lm[1].replace(/<[^>]+>/g, '').trim());
}
