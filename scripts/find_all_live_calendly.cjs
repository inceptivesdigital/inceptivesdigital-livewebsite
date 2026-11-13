async function run() {
  const res = await fetch('https://nextincep.wpenginepowered.com/');
  const html = await res.text();
  let idx = 0;
  while ((idx = html.indexOf('calendly', idx)) !== -1) {
    console.log('Found at:', idx);
    console.log(html.slice(Math.max(0, idx - 100), idx + 250));
    console.log('-------------------');
    idx += 8;
  }
}
run();
