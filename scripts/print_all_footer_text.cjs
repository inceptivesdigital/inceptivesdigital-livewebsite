const fs = require('fs');

const html = fs.readFileSync('scripts/live_footer.html', 'utf-8');

// Extract all visible text snippets in the footer
const clean = html
  .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
  .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
  .replace(/<[^>]+>/g, '\n')
  .split('\n')
  .map(s => s.trim())
  .filter(s => s.length > 0 && !s.startsWith('{') && !s.startsWith('.'));

console.log(clean.join(' | '));
