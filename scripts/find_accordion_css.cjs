async function run() {
  const res = await fetch('https://nextincep.wpenginepowered.com/wp-content/uploads/elementor/css/post-14263.css');
  const css = await res.text();
  const m = css.match(/e-n-accordion[^{]*\{[^}]+\}/g);
  console.log('Accordion CSS:', m);
  const m2 = css.match(/\.elementor-element-1559ecb6[^{]*\{[^}]+\}/g);
  console.log('1559ecb6 CSS:', m2);
}
run();
