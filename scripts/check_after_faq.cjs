const fs = require('fs');

async function run() {
  const res = await fetch('https://nextincep.wpenginepowered.com/');
  const html = await res.text();
  const faqIdx = html.indexOf('Frequently Asked Questions');
  console.log('After FAQ:');
  const slice = html.slice(faqIdx, faqIdx + 4000);
  console.log(slice.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').slice(0, 500));
}
run();
