async function run() {
  const res = await fetch('https://calendly.com/inceptivesdigital-info/30min?embed_type=Inline&embed_domain=1&month=2026-11');
  const html = await res.text();
  console.log('HTML length:', html.length);
  // find css links
  const cssMatches = [...html.matchAll(/href="([^">]+\.css[^">]*)"/g)].map(m => m[1]);
  console.log('Calendly CSS links:', cssMatches);
  for (const url of cssMatches) {
    const r = await fetch(url);
    const css = await r.text();
    // search media queries
    const mqs = [...css.matchAll(/@media[^{]+min-width[^{]+{/g)].map(m => m[0]);
    console.log('Media queries in', url.slice(-30), mqs);
  }
}
run();
