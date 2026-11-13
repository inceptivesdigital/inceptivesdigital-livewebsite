async function run() {
  const res = await fetch('https://nextincep.wpenginepowered.com/');
  const html = await res.text();
  const idx = html.indexOf('Printer Pix');
  console.log('Printer Pix index:', idx);
  if (idx !== -1) {
    console.log(html.slice(idx - 300, idx + 600));
  } else {
    // search for Kaefer or Brsk
    const kIdx = html.indexOf('Brsk');
    console.log('Brsk index:', kIdx);
    if (kIdx !== -1) {
      console.log(html.slice(kIdx - 300, kIdx + 600));
    }
  }
}
run();
