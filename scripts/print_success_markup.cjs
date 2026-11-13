async function run() {
  const res = await fetch('https://nextincep.wpenginepowered.com/', {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
  });
  const data = await res.text();
  const idx = data.indexOf('Our Success In Numbers');
  // let's grab 6000 chars around it
  const slice = data.slice(idx - 600, idx + 6000);
  console.log('=== FULL SUCCESS SECTION MARKUP ===');
  console.log(slice);
}
run();
