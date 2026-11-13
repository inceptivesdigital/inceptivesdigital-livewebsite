const fs = require('fs');

async function main() {
  const res = await fetch('https://nextincep.wpenginepowered.com/');
  const html = await res.text();
  const footerIdx = html.indexOf('<footer');
  const footerHtml = html.substring(footerIdx);
  fs.writeFileSync('scripts/live_footer.html', footerHtml);
  console.log('Saved live footer HTML, length:', footerHtml.length);
}
main();
