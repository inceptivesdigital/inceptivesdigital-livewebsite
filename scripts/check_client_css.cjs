async function run() {
  const res = await fetch('https://nextincep.wpenginepowered.com/wp-content/uploads/elementor/css/post-9887.css');
  if (res.ok) {
    const css = await res.text();
    const rules = css.split('}');
    rules.forEach(r => {
      if (r.includes('f1c0727') || r.includes('9ae4bb0')) {
        console.log(r + '}');
      }
    });
  }
}
run();
