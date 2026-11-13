const fs = require('fs');

const html = fs.readFileSync('scripts/live_footer_dump.html', 'utf8');

const navStart = html.indexOf('Services');
const navEnd = html.indexOf('Recognized and Reviewed On');
const navSlice = html.slice(navStart - 100, navEnd);

const spans = navSlice.split(/<span class="elementor-heading-title[^"]*">([\s\S]*?)<\/span>/g);
for (let i = 1; i < spans.length; i += 2) {
  const heading = spans[i].trim();
  const chunk = spans[i+1];
  console.log('=== HEADING:', heading);
  const links = [];
  const linkRegex = /<li class="menu-item[^"]*"><a href="([^"]+)"[^>]*>([\s\S]*?)<\/a><\/li>/g;
  let lm;
  while ((lm = linkRegex.exec(chunk)) !== null) {
    links.push({ href: lm[1], text: lm[2].trim() });
  }
  console.log(links);
}
