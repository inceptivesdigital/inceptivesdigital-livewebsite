async function run() {
  const res = await fetch('https://nextincep.wpenginepowered.com/');
  const html = await res.text();
  const idx = html.indexOf('Frequently Asked Questions');
  const slice = html.slice(idx, idx + 8000);
  
  const questions = [...slice.matchAll(/<h3 class="e-n-accordion-item-title-text">\s*([^<]+)\s*<\/h3>/g)].map(m => m[1].trim());
  const answers = [...slice.matchAll(/<div class="elementor-element[^"]*elementor-widget-text-editor"[^>]*>\s*<p>([\s\S]*?)<\/p>\s*<\/div>/g)].map(m => m[1].trim());
  
  console.log(`Found ${questions.length} questions:`);
  questions.forEach((q, i) => {
    console.log(`Q${i+1}: ${q}`);
    console.log(`A${i+1}: ${answers[i] || 'N/A'}`);
    console.log('---');
  });
}
run();
