async function run() {
  const res = await fetch('https://nextincep.wpenginepowered.com/wp-content/uploads/elementor/css/post-653.css');
  const css = await res.text();
  const rules = css.split('}');
  rules.forEach(r => {
    if (r.includes('c6e2df6')) {
      console.log(r + '}');
    }
  });
}
run();
