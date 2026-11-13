const fs = require('fs');
const html = fs.readFileSync('scripts/live_footer_dump.html', 'utf8');

// Let's find any hex codes in post-653.css
async function run() {
  const res = await fetch('https://nextincep.wpenginepowered.com/wp-content/uploads/elementor/css/post-653.css');
  const css = await res.text();
  console.log('Matches for background in post-653:');
  const bgs = css.match(/background-color:[^;]+;/g);
  console.log([...new Set(bgs)]);

  const colors = css.match(/--e-global-color-[a-z0-9_-]+:[^;]+;/g);
  console.log([...new Set(colors)]);
}
run();
