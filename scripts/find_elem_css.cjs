async function run() {
  const res = await fetch('https://nextincep.wpenginepowered.com/');
  const html = await res.text();
  const m = [...html.matchAll(/href="([^"]*elementor\/css\/[^"]*)"/g)].map(x => x[1]);
  console.log(m);
  for (const url of m) {
    const r = await fetch(url);
    const txt = await r.text();
    if (txt.includes('--e-global-color-secondary')) {
      const idx = txt.indexOf('--e-global-color-secondary:');
      if (idx !== -1) {
        console.log('Found definition in:', url, txt.slice(idx, idx + 100));
      }
    }
  }
}
run();
