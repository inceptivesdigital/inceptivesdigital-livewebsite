async function run() {
  const res = await fetch('https://assets.calendly.com/assets/booking/css/booking-aa32c25db.css');
  const css = await res.text();
  const idx = css.indexOf('(max-width: 895px)');
  console.log('=== CSS around 895px ===');
  console.log(css.slice(idx, idx + 1000));
}
run();
