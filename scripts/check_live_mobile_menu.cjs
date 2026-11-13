async function run() {
  const res = await fetch('https://nextincep.wpenginepowered.com/');
  const html = await res.text();
  // search for mobile menu or ekit-menu
  const m = [...html.matchAll(/class="[^"]*elementskit-menu[^"]*"/g)].map(x => x[0]);
  console.log('ElementsKit menu classes:', m.slice(0, 5));
  const idx = html.indexOf('elementskit-menu-container');
  if (idx !== -1) {
    console.log(html.slice(idx, idx + 2500));
  }
}
run();
