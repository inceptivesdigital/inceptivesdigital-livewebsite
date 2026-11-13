async function run() {
  const res = await fetch('https://nextincep.wpenginepowered.com/wp-content/uploads/elementor/css/post-14263.css');
  const css = await res.text();
  ['3a810521', '7f0fd104', 'rotate-icon', '5cb1dccd', 'counter-textcenter', '601e06ef', '5036193d'].forEach(id => {
    const reg = new RegExp(`[.#][\\w-]*${id}[^{]*\\{[^}]+\\}`, 'g');
    const matches = css.match(reg);
    console.log(`=== ${id} ===`, matches);
  });
}
run();
