async function main() {
  try {
    const res = await fetch('https://nextincep.wpenginepowered.com/portfolio/');
    console.log('Portfolio page status:', res.status);
    const html = await res.text();
    console.log('Portfolio title:', html.match(/<title>(.*?)<\/title>/)?.[1]);
    
    // Find case studies or headings
    const headings = html.match(/<h[1-3][^>]*>(.*?)<\/h[1-3]>/gi) || [];
    console.log('Headings in live portfolio:');
    headings.slice(0, 15).forEach(h => console.log('  ', h.replace(/<[^>]+>/g, '').trim()));
  } catch (e) {
    console.error(e.message);
  }
}
main();
