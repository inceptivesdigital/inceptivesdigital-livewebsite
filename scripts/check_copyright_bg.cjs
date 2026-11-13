const fs = require('fs');

// We can read pixels or find the color in the live site's CSS!
// Remember in scripts/post-653.css earlier:
// Let's check post-653.css for the copyright container background!
async function run() {
  const res = await fetch('https://nextincep.wpenginepowered.com/wp-content/uploads/elementor/css/post-653.css');
  const css = await res.text();
  // Find rule around copyright or footer bottom
  const rules = css.split('}');
  rules.forEach(r => {
    if (r.includes('ac242d0') || r.includes('797129f') || r.includes('background') && (r.includes('#0') || r.includes('green') || r.includes('rgba'))) {
      if (r.includes('background') && (r.includes('14') || r.includes('1a') || r.includes('00') || r.includes('0f') || r.includes('0a'))) {
        console.log(r + '}');
      }
    }
  });
}
run();
