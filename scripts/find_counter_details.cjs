async function run() {
  const res = await fetch('https://nextincep.wpenginepowered.com/wp-content/uploads/elementor/css/post-14263.css');
  const css = await res.text();
  const ids = ['27107993', '74550001', '6f0cb167', '5d1c9061', '66341035', '465da6ae', '53f2c641', '525d1cb1', '3a6565ca'];
  ids.forEach(id => {
    const reg = new RegExp(`[.#][\\w-]*${id}[^{]*\\{[^}]+\\}`, 'g');
    console.log(`=== ${id} ===`, css.match(reg));
  });
}
run();
