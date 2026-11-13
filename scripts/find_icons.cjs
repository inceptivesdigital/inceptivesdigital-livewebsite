const fs = require('fs');
const html = fs.readFileSync('C:/Users/User/.gemini/antigravity/brain/fa50bdcd-7af7-4f89-97bf-56ebfff4a545/scratch/homepage.html', 'utf8');
const start = html.indexOf('Digital Products Designed Around Industry Realities');
const end = html.indexOf('From Startups', start);
const section = html.substring(start, end > 0 ? end : start + 15000);

const regex = /<img[^>]+src=["']([^"']+)["'][^>]*alt=["']([^"']*)["']/g;
let match;
const results = [];
while ((match = regex.exec(section)) !== null) {
  results.push({ src: match[1], alt: match[2] });
}
console.log(JSON.stringify(results, null, 2));
