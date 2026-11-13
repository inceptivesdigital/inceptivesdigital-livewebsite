async function run() {
  const res = await fetch('https://nextincep.wpenginepowered.com/');
  const html = await res.text();
  const idx = html.indexOf('data-id="2842b881"');
  console.log(html.slice(idx, idx + 1000));
}
run();
