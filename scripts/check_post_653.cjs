async function run() {
  const res = await fetch('https://nextincep.wpenginepowered.com/wp-content/uploads/elementor/css/post-653.css');
  if (res.ok) {
    const css = await res.text();
    console.log('post-653.css length:', css.length);
    // search for location-link or 2657555 or background
    const rules = css.split('}');
    rules.forEach(r => {
      if (r.includes('location-link') || r.includes('2657555') || r.includes('18ca075')) {
        console.log(r + '}');
      }
    });
  } else {
    console.log('Status:', res.status);
  }
}
run();
