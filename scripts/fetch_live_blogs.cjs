async function run() {
  const url = 'https://nextincep.wpenginepowered.com/wp-json/wp/v2/posts?_embed&per_page=10';
  const res = await fetch(url);
  console.log('Status:', res.status);
  if (res.ok) {
    const posts = await res.json();
    console.log(`Fetched ${posts.length} posts:`);
    posts.forEach((p, idx) => {
      console.log(`\nPost ${idx + 1}:`);
      console.log('  ID:', p.id);
      console.log('  Slug:', p.slug);
      console.log('  Title:', p.title?.rendered);
      console.log('  Date:', p.date);
      console.log('  Author ID:', p.author);
      console.log('  Author Name:', p._embedded?.author?.[0]?.name);
      console.log('  Categories:', p._embedded?.['wp:term']?.[0]?.map(t => t.name));
      const featuredMedia = p._embedded?.['wp:featuredmedia']?.[0]?.source_url;
      console.log('  Featured Image:', featuredMedia);
    });
  } else {
    console.error('Failed to fetch:', res.statusText);
  }
}
run();
