const fs = require('fs');

async function run() {
  const res = await fetch('https://nextincep.wpenginepowered.com/');
  const html = await res.text();
  const idx = html.indexOf('elementor-element-fa9c833');
  const footerSection = html.slice(idx);
  fs.writeFileSync('scripts/live_footer_dump.html', footerSection);
  console.log('Saved live_footer_dump.html length:', footerSection.length);
}
run();
