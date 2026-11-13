async function run() {
  const r = await fetch('https://assets.calendly.com/assets/booking/css/booking-aa32c25db.css');
  const css = await r.text();
  // search for max-width in 2-column or container
  const rules = css.split('}');
  rules.forEach(rule => {
    if (rule.includes('895px') && (rule.includes('width') || rule.includes('card') || rule.includes('layout') || rule.includes('wrapper') || rule.includes('container'))) {
      console.log(rule.slice(0, 200) + '}');
    }
  });
}
run();
