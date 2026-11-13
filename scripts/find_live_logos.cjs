async function main() {
  const res = await fetch('https://nextincep.wpenginepowered.com/');
  const html = await res.text();
  // Find all images in the first 100k of HTML
  const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*alt=["']?([^"'>]*)["']?/gi;
  let match;
  while ((match = imgRegex.exec(html)) !== null) {
    if (match[1].includes('2026') || match[1].includes('upload') || match[2]) {
      console.log('src:', match[1], 'alt:', match[2]);
    }
  }
}
main();
