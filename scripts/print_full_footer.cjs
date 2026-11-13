async function run() {
  const res = await fetch('https://nextincep.wpenginepowered.com/');
  const html = await res.text();
  const idx = html.indexOf('<footer');
  const slice = html.slice(idx, idx + 12000);
  console.log(slice);
}
run();
