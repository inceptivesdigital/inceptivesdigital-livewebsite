async function run() {
  const r = await fetch('https://assets.calendly.com/assets/booking/css/booking-aa32c25db.css');
  const css = await r.text();
  console.log('css length:', css.length);
  // search for media
  const mqs = [...css.matchAll(/@media[^{]+{/g)].map(m => m[0]);
  console.log('All media queries:', mqs);
}
run();
