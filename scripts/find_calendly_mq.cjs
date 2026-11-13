async function run() {
  const res = await fetch('https://calendly.com/inceptivesdigital-info/30min?embed_type=Inline&embed_domain=1&month=2026-11');
  const html = await res.text();
  // find css files in html
  const cssMatches = [...html.matchAll(/href=["']([^"']+\.css[^"']*)["']/g)].map(m => m[1]);
  console.log('Calendly CSS files:', cssMatches);
  for (const cssUrl of cssMatches) {
    const fullUrl = cssUrl.startsWith('http') ? cssUrl : 'https://calendly.com' + cssUrl;
    const cssRes = await fetch(fullUrl);
    const cssText = await cssRes.text();
    // search for media queries
    const mqs = [...cssText.matchAll(/@media[^{]+\{/g)].map(m => m[0]);
    console.log(`Media queries in ${fullUrl.split('/').pop()}:`, mqs.filter(m => m.includes('min-width') || m.includes('max-width')));
  }
}
run();
