const fs = require('fs');

async function main() {
  const res = await fetch('https://nextincep.wpenginepowered.com/');
  const html = await res.text();
  const footerIdx = html.indexOf('<footer');
  const fresh = html.substring(footerIdx);
  const old = fs.readFileSync('scripts/live_footer.html', 'utf-8');
  for (let i = 0; i < fresh.length; i++) {
    if (fresh[i] !== old[i]) {
      console.log('First diff at', i);
      console.log('Fresh:', fresh.substring(i - 30, i + 100));
      console.log('Old  :', old.substring(i - 30, i + 100));
      break;
    }
  }
}
main();
