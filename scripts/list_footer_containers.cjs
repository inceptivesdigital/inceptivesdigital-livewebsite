const fs = require('fs');

const html = fs.readFileSync('scripts/live_footer.html', 'utf-8');

// Find all top-level containers inside the footer
const containerRegex = /<div class="elementor-element elementor-element-([a-z0-9]+)[^"]*e-parent"[^>]*data-settings='([^']*)'[^>]*>/gi;
// Or let's find all parent containers
let match;
const parentRegex = /data-id="([a-z0-9]+)" data-element_type="container" data-e-type="container"[^>]*>/gi;
let p;
while ((p = parentRegex.exec(html)) !== null) {
  const snippet = html.substring(p.index, p.index + 400).replace(/\s+/g, ' ');
  console.log('Container ID:', p[1], '-->', snippet.substring(0, 150));
}
