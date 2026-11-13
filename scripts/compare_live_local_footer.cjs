const fs = require('fs');

const liveHtml = fs.readFileSync('scripts/live_footer.html', 'utf-8');
const localFooter = fs.readFileSync('src/components/Footer.jsx', 'utf-8');

console.log('=== 1. EMAIL & PHONE IN LIVE FOOTER ===');
const emails = liveHtml.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g);
console.log('Live emails:', [...new Set(emails)]);

const phones = liveHtml.match(/\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g);
console.log('Live phones:', [...new Set(phones)]);

console.log('\n=== 2. SOCIAL LINKS IN LIVE FOOTER ===');
const socialRegex = /href=["']([^"']*(?:linkedin|instagram|facebook|twitter|youtube|x\.com)[^"']*)["']/gi;
let sm;
const socials = [];
while ((sm = socialRegex.exec(liveHtml)) !== null) {
  socials.push(sm[1]);
}
console.log('Live socials:', [...new Set(socials)]);

console.log('\n=== 3. COPYRIGHT BAR TEXT & LINKS IN LIVE FOOTER ===');
const copyrightIdx = liveHtml.indexOf('©');
if (copyrightIdx !== -1) {
  console.log(liveHtml.substring(copyrightIdx, copyrightIdx + 400).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
}

console.log('\n=== 4. LOCATION CARDS HEADINGS & ADDRESSES IN LIVE FOOTER ===');
const locCardRegex = /<figure[^>]*>.*?<img[^>]+alt=["']([^"']*)["'][^>]*>.*?<\/figure>.*?<div class=["']elementor-image-box-content["']>.*?<(?:span|h\d)[^>]*>(.*?)<\/(?:span|h\d)>.*?<p[^>]*>(.*?)<\/p>/gis;
let lcm;
while ((lcm = locCardRegex.exec(liveHtml)) !== null) {
  console.log({
    flagAlt: lcm[1],
    title: lcm[2].replace(/<[^>]+>/g, '').trim(),
    address: lcm[3].replace(/<[^>]+>/g, '').trim()
  });
}
