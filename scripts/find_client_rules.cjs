async function run() {
  const res = await fetch('https://nextincep.wpenginepowered.com/');
  const html = await res.text();
  const m = [...html.matchAll(/post-(\d+)\.css/g)].map(x => x[0]);
  console.log('Post css files:', [...new Set(m)]);
  for (const f of [...new Set(m)]) {
    const r = await fetch(`https://nextincep.wpenginepowered.com/wp-content/uploads/elementor/css/${f}`);
    const css = await r.text();
    if (css.includes('f1c0727') || css.includes('9ae4bb0')) {
      console.log('FOUND in', f);
      const rules = css.split('}');
      rules.forEach(rule => {
        if (rule.includes('f1c0727') || rule.includes('9ae4bb0')) {
          console.log(rule + '}');
        }
      });
    }
  }
}
run();
