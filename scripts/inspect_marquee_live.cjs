async function main() {
  const res = await fetch('https://nextincep.wpenginepowered.com/');
  const html = await res.text();
  const idx = html.indexOf('.elementor-element-accfdfe{');
  console.log(html.substring(idx, idx + 600));
}
main();
