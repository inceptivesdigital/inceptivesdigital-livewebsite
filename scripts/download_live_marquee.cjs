const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'assets', 'marquee');

const liveLogos = [
  { url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/09/brandlogo-01sec.png', name: 'ap.png' },
  { url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/10/trustpilotslider.png', name: 'trustpilot.png' },
  { url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/10/googleslider.png', name: 'google.png' },
  { url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/09/brandlogo-04sec.png', name: 'nyt.png' },
  { url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/09/brandlogo-06sec.png', name: 'globeandmail.png' },
  { url: 'https://nextincep.wpenginepowered.com/wp-content/uploads/2026/09/brandlogo-07sec.png', name: 'usatoday.png' }
];

async function run() {
  for (const l of liveLogos) {
    const res = await fetch(l.url);
    if (res.ok) {
      const buf = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(path.join(dir, l.name), buf);
      console.log(`Downloaded ${l.name} (${buf.length} bytes) from ${l.url}`);
    } else {
      console.error(`Failed ${l.name}: ${res.status}`);
    }
  }
}

run();
