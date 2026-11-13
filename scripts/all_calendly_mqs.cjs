async function run() {
  const res = await fetch('https://assets.calendly.com/assets/booking/css/booking-aa32c25db.css');
  const css = await res.text();
  const mqs = [...css.matchAll(/@media[^{]+\{/g)].map(m => m[0]);
  const uniqueMQs = [...new Set(mqs)];
  console.log('Unique MQs in Calendly booking css:', uniqueMQs);
}
run();
