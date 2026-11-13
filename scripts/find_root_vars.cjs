async function run() {
  const res = await fetch('https://nextincep.wpenginepowered.com/');
  const html = await res.text();
  const idx = html.indexOf('--e-global-color-secondary:');
  if (idx !== -1) {
    console.log(html.slice(idx, idx + 100));
  } else {
    // search in custom-frontend.min.css or global.css
    const m = html.match(/href="([^"]*global[^"]*\.css[^"]*)"/);
    console.log('Global css link:', m ? m[1] : 'none');
    if (m) {
      const gres = await fetch(m[1]);
      const gtext = await gres.text();
      const gidx = gtext.indexOf('--e-global-color-secondary');
      console.log(gtext.slice(gidx, gidx + 100));
    }
  }
}
run();
