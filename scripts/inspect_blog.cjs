const fs = require('fs');

async function main() {
  const res = await fetch('https://nextincep.wpenginepowered.com/');
  const html = await res.text();
  console.log(html.substring(371000, 372600));
}

main();
