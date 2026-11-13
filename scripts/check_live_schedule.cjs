async function run() {
  const res = await fetch('https://nextincep.wpenginepowered.com/');
  const html = await res.text();
  const idx = html.indexOf('id="schedule"');
  console.log(html.slice(idx - 100, idx + 1200));
}
run();
