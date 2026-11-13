async function run() {
  const res = await fetch('https://nextincep.wpenginepowered.com/');
  const html = await res.text();
  const idx = html.indexOf('From Startups to');
  console.log(html.slice(idx - 100, idx + 3500));
}
run();
