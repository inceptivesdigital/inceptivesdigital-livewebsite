const fs = require('fs');
const path = 'C:/Users/User/.gemini/antigravity/brain/fa50bdcd-7af7-4f89-97bf-56ebfff4a545/.user_uploaded/media_1794552884234_1925935b.png';

// Let's inspect the live site's element for copyright
async function run() {
  const html = fs.readFileSync('scripts/live_footer_dump.html', 'utf8');
  const copyIdx = html.indexOf('IT Core Solutions');
  console.log('Copyright HTML context:');
  console.log(html.slice(copyIdx - 600, copyIdx + 400));
}
run();
