async function main() {
  const res = await fetch('https://nextincep.wpenginepowered.com/?nocache=' + Date.now());
  const html = await res.text();
  const footerIdx = html.indexOf('<footer');
  const freshFooterHtml = html.substring(footerIdx);
  const oldFooterHtml = require('fs').readFileSync('scripts/live_footer.html', 'utf-8');
  console.log('Fresh length:', freshFooterHtml.length);
  console.log('Old length:', oldFooterHtml.length);
  console.log('Are they identical?', freshFooterHtml === oldFooterHtml);
  if (freshFooterHtml !== oldFooterHtml) {
    console.log('Length diff:', freshFooterHtml.length - oldFooterHtml.length);
  }
}
main();
