async function run() {
  const res = await fetch('https://nextincep.wpenginepowered.com/', {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
  });
  const data = await res.text();
  const idx = data.indexOf('mvp-badge-1.png');
  const slice = data.slice(idx, idx + 4000);
  console.log('=== RIGHT SIDE OF SUCCESS SECTION ===');
  console.log(slice);
}
run();
