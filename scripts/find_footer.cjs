async function run() {
  const res = await fetch('https://nextincep.wpenginepowered.com/');
  const html = await res.text();
  const idx = html.indexOf('IT Core Solutions');
  if (idx !== -1) {
    console.log('=== FOUND FOOTER COPYRIGHT ===');
    console.log(html.slice(idx - 600, idx + 4000));
  } else {
    console.log('Searching for footer...');
    const footerIdx = html.indexOf('<footer');
    if (footerIdx !== -1) {
      console.log('Found <footer> at:', footerIdx);
      console.log(html.slice(footerIdx, footerIdx + 3000));
    } else {
      console.log('No footer tag, checking end of body...');
      console.log(html.slice(html.length - 8000));
    }
  }
}
run();
