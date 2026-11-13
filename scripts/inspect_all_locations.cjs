const fs = require('fs');

const html = fs.readFileSync('scripts/live_footer_dump.html', 'utf8');

const locStart = html.indexOf('Our Locations');
const locEnd = html.indexOf('IT Core Solutions LLC DBA Inceptives Digital');
const locSlice = html.slice(locStart, locEnd);

// Let's find every image-box or card container
const cardBlocks = locSlice.split('elementor-widget-image-box');
console.log('Cards count:', cardBlocks.length - 1);

cardBlocks.slice(1).forEach((cb, idx) => {
  const imgM = cb.match(/<img[^>]+src="([^">]+)"/);
  const titleM = cb.match(/<span class="elementor-image-box-title">([\s\S]*?)<\/span>/);
  const descM = cb.match(/<p class="elementor-image-box-description">([\s\S]*?)<\/p>/);
  console.log(`\nCard ${idx + 1}:`);
  console.log('  Image:', imgM ? imgM[1] : null);
  console.log('  Title:', titleM ? titleM[1].trim() : null);
  console.log('  Desc:', descM ? descM[1].replace(/<[^>]+>/g, '').trim() : null);
});
