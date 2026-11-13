async function main() {
  const res = await fetch('https://nextincep.wpenginepowered.com/');
  const html = await res.text();
  const idx = html.indexOf('ekit-menu-nav-link');
  console.log(html.substring(idx - 200, idx + 2000));
}
main();
