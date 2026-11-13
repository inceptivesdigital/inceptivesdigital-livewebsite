async function run() {
  const res = await fetch('https://nextincep.wpenginepowered.com/');
  const html = await res.text();
  const idx = html.indexOf('--e-global-color-secondary');
  console.log(html.slice(idx - 50, idx + 200));
}
run();
