async function run() {
  const res = await fetch('https://nextincep.wpenginepowered.com/wp-content/uploads/elementor/css/post-14263.css');
  const css = await res.text();
  ['6b826671', '2ab69a24', '7e23bdd5', 'html-iframe', 'schedule'].forEach(id => {
    const reg = new RegExp(`[.#][\\w-]*${id}[^{]*\\{[^}]+\\}`, 'g');
    console.log(`=== ${id} ===`, css.match(reg));
  });
}
run();
