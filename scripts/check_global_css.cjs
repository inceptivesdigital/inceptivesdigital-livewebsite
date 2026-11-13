async function run() {
  const res = await fetch('https://nextincep.wpenginepowered.com/wp-content/uploads/elementor/css/post-653.css');
  const css = await res.text();
  const rules = css.split('}');
  rules.forEach(r => {
    if (r.includes('location-link')) {
      console.log(r + '}');
    }
  });

  const gRes = await fetch('https://nextincep.wpenginepowered.com/wp-content/uploads/elementor/css/global.css');
  const gCss = await gRes.text();
  const gRules = gCss.split('}');
  gRules.forEach(r => {
    if (r.includes('--e-global-color-secondary')) {
      console.log('Global:', r + '}');
    }
  });
}
run();
