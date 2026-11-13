const fs = require('fs');

const html = fs.readFileSync('scripts/live_footer_dump.html', 'utf8');

// 1. Top Section
console.log('=== TOP SECTION EXTRACT ===');
const topStart = 0;
const topEnd = html.indexOf('Recognized and Reviewed On');
const topSlice = html.slice(topStart, topEnd);

// Find social icons
const socials = [];
let m;
const socialRegex = /<a href="([^"]+)"[^>]*class="[^"]*elementor-social-icon[^"]*"[^>]*>([\s\S]*?)<\/a>/g;
while ((m = socialRegex.exec(topSlice)) !== null) {
  socials.push({ href: m[1], content: m[2].trim() });
}
console.log('Socials:', socials);

// 2. Recognized and Reviewed On
console.log('=== REVIEWS SECTION ===');
const revEnd = html.indexOf('Our Locations');
const revSlice = html.slice(topEnd, revEnd);
const imgRegex = /<img[^>]+src="([^">]+)"[^>]*>/g;
let revImgs = [];
while ((m = imgRegex.exec(revSlice)) !== null) {
  revImgs.push(m[1]);
}
console.log('Review images:', revImgs);

// 3. Locations
console.log('=== LOCATIONS SECTION ===');
const locEnd = html.indexOf('IT Core Solutions LLC DBA Inceptives Digital');
const locSlice = html.slice(revEnd, locEnd);

// Find all location elements or text
const locImgs = [];
while ((m = imgRegex.exec(locSlice)) !== null) {
  locImgs.push(m[1]);
}
console.log('Location flags/images:', locImgs);

// Find headings or text blocks in locations
const headingRegex = /<h\d[^>]*>([\s\S]*?)<\/h\d>/g;
let headings = [];
while ((m = headingRegex.exec(locSlice)) !== null) {
  headings.push(m[1].replace(/<[^>]+>/g, '').trim());
}
console.log('Location headings:', headings);

// Find paragraphs in locations
const pRegex = /<p[^>]*>([\s\S]*?)<\/p>/g;
let paragraphs = [];
while ((m = pRegex.exec(locSlice)) !== null) {
  paragraphs.push(m[1].replace(/<[^>]+>/g, '').trim());
}
console.log('Location paragraphs:', paragraphs);

// 4. Copyright
console.log('=== COPYRIGHT SECTION ===');
const copySlice = html.slice(locEnd);
let copyImgs = [];
while ((m = imgRegex.exec(copySlice)) !== null) {
  copyImgs.push(m[1]);
}
console.log('Copyright images:', copyImgs);
