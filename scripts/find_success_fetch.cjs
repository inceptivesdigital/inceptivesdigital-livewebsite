async function run() {
  try {
    const res = await fetch('https://nextincep.wpenginepowered.com/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    });
    const data = await res.text();
    console.log('Fetched HTML length:', data.length);
    const keywords = ['Our Success In Numbers', 'Success In Numbers', 'Applications Launched', 'Active Developers', '3 Million', 'Industry Leader'];
    for (const kw of keywords) {
      const idx = data.indexOf(kw);
      if (idx !== -1) {
        console.log(`=== Found keyword "${kw}" at index ${idx} ===`);
        console.log(data.slice(Math.max(0, idx - 400), idx + 3000));
        return;
      }
    }
    console.log('None of the keywords found on homepage, checking all img tags for phones or mockups...');
    const imgs = [...data.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/g)].map(m => m[1]);
    console.log('Images with phone, app, success, or banner:', imgs.filter(i => /phone|mockup|app|success|number|count|screen/i.test(i)));
  } catch (err) {
    console.error('Fetch error:', err);
  }
}
run();
