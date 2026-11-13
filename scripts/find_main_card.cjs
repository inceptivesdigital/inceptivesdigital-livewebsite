async function run() {
  const r = await fetch('https://assets.calendly.com/assets/booking/css/booking-aa32c25db.css');
  const css = await r.text();
  const rules = css.split('}');
  rules.forEach(rule => {
    if (rule.includes('.c1cs8mjp') && !rule.includes('@media')) {
      console.log(rule + '}');
    }
  });
}
run();
