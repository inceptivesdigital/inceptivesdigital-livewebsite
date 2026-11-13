const fs = require('fs');

async function run() {
  const res = await fetch('https://nextincep.wpenginepowered.com/');
  const html = await res.text();
  const cssMatches = [...html.matchAll(/<link[^>]+href="([^">]+\.css[^">]*)"/g)].map(m => m[1]);
  
  for (const href of cssMatches) {
    if (href.includes('elementor') || href.includes('post-')) {
      try {
        const cRes = await fetch(href);
        const css = await cRes.text();
        if (css.includes('2657555') || css.includes('location-link') || css.includes('18ca075')) {
          console.log('FOUND MATCH IN:', href);
          // print relevant parts
          const lines = css.split('}');
          lines.forEach(l => {
            if (l.includes('2657555') || l.includes('location-link') || l.includes('18ca075')) {
              console.log(l + '}');
            }
          });
        }
      } catch (e) {}
    }
  }
}
run();
