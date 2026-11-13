const fs = require('fs');

const html = fs.readFileSync('scripts/live_footer_dump.html', 'utf8');

const navStart = html.indexOf('elementor-element-b2fe202');
const navEnd = html.indexOf('Recognized and Reviewed On');
const navSlice = html.slice(navStart, navEnd);

// Find headings and their links
const cols = navSlice.split(/<h\d[^>]*class="[^"]*elementor-heading-title[^"]*"[^>]*>([\s\S]*?)<\/h\d>/g);
console.log('Cols count:', cols.length);
for (let i = 1; i < cols.length; i += 2) {
  const title = cols[i].trim();
  const content = cols[i+1];
  console.log('COLUMN:', title);
  const links = [];
  const linkRegex = /<a[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g;
  let lm;
  while ((lm = linkRegex.exec(content)) !== null) {
    links.push({ href: lm[1], text: lm[2].replace(/<[^>]+>/g, '').trim() });
  }
  console.log(links);
}
