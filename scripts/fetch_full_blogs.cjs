const fs = require('fs');
const path = require('path');

async function fetchFullBlogs() {
  const url = 'https://nextincep.wpenginepowered.com/wp-json/wp/v2/posts?_embed&per_page=10';
  const res = await fetch(url);
  const posts = await res.json();

  // Also fetch users map for reviewers
  const usersRes = await fetch('https://nextincep.wpenginepowered.com/wp-json/wp/v2/users?per_page=50');
  const users = await usersRes.json();
  const userMap = {};
  users.forEach(u => {
    userMap[u.id] = { id: u.id, name: u.name, slug: u.slug };
  });

  const parsed = posts.map(p => {
    const reviewerId = p.meta?._flow_reviewer_id || null;
    const reviewer = reviewerId && userMap[reviewerId] ? userMap[reviewerId] : (reviewerId ? { id: reviewerId, name: 'Muhammad Usman' } : null);
    
    return {
      id: p.id,
      slug: p.slug,
      title: p.title?.rendered?.replace(/&#8217;/g, "'").replace(/&#8211;/g, "–").replace(/&amp;/g, '&'),
      excerpt: p.excerpt?.rendered?.replace(/<[^>]+>/g, '').trim(),
      date: p.date,
      link: `/blog/${p.slug}`,
      wp_link: p.link,
      author: {
        id: p.author,
        name: p._embedded?.author?.[0]?.name || 'Editorial Team',
        slug: p._embedded?.author?.[0]?.slug || 'author',
        avatar: p._embedded?.author?.[0]?.avatar_urls?.['96'] || ''
      },
      approved_by: reviewer,
      review_status: p.meta?._flow_review_status || 'approved',
      categories: (p._embedded?.['wp:term']?.[0] || []).map(cat => ({
        id: cat.id,
        name: cat.name,
        slug: cat.slug
      })),
      featured_image: p._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/images/blog/image-san-francisco.jpg',
      featured_image_alt: p._embedded?.['wp:featuredmedia']?.[0]?.alt_text || p.title?.rendered
    };
  });

  // Make sure post 24223 (San Francisco) is included
  const hasSF = parsed.some(p => p.id === 24223);
  if (!hasSF) {
    const sfRes = await fetch('https://nextincep.wpenginepowered.com/wp-json/wp/v2/posts/24223?_embed');
    if (sfRes.ok) {
      const p = await sfRes.json();
      const reviewerId = p.meta?._flow_reviewer_id || 6;
      const reviewer = userMap[reviewerId] || { id: 6, name: 'Muhammad Usman' };
      parsed.unshift({
        id: p.id,
        slug: p.slug,
        title: p.title?.rendered?.replace(/&#8217;/g, "'").replace(/&#8211;/g, "–").replace(/&amp;/g, '&'),
        excerpt: p.excerpt?.rendered?.replace(/<[^>]+>/g, '').trim(),
        date: p.date,
        link: `/blog/${p.slug}`,
        wp_link: p.link,
        author: {
          id: p.author,
          name: p._embedded?.author?.[0]?.name || 'Noshaba Noor',
          slug: p._embedded?.author?.[0]?.slug || 'noshaba_noor',
          avatar: p._embedded?.author?.[0]?.avatar_urls?.['96'] || ''
        },
        approved_by: reviewer,
        review_status: p.meta?._flow_review_status || 'approved',
        categories: (p._embedded?.['wp:term']?.[0] || []).map(cat => ({
          id: cat.id,
          name: cat.name,
          slug: cat.slug
        })),
        featured_image: p._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/images/blog/image-san-francisco.jpg',
        featured_image_alt: p._embedded?.['wp:featuredmedia']?.[0]?.alt_text || p.title?.rendered
      });
    }
  }

  const outDir = path.join(__dirname, '..', 'src', 'data');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'blogPosts.json'), JSON.stringify(parsed, null, 2));
  console.log(`Saved ${parsed.length} posts to src/data/blogPosts.json`);
}

fetchFullBlogs();
