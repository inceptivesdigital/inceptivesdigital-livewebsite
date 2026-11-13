async function run() {
  const res = await fetch('https://nextincep.wpenginepowered.com/');
  const html = await res.text();
  const idx = html.indexOf('calendly');
  console.log('Calendly in live site:', idx);
  if (idx !== -1) {
    console.log(html.slice(idx - 300, idx + 1000));
  }
}
run();
