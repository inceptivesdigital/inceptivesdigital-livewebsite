import fs from 'node:fs'
import path from 'node:path'

const WP_BASE = 'https://nextincep.wpenginepowered.com'
const SITE_BASE = 'https://inceptivesdigital.com'
const PRESS_RELEASE_CAT_ID = 53
const PUBLIC_DIR = path.resolve(process.cwd(), 'public')

function escapeXml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function toIsoDate(dateGmt = '') {
  if (!dateGmt) return new Date().toISOString()
  const normalized = dateGmt.endsWith('Z') ? dateGmt : `${dateGmt}Z`
  const d = new Date(normalized)
  return Number.isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString()
}

async function fetchAllWpPosts() {
  const all = []
  let page = 1
  while (true) {
    const url = `${WP_BASE}/wp-json/wp/v2/posts?per_page=100&page=${page}&status=publish&_fields=id,slug,date_gmt,modified_gmt,categories,link,_embedded&_embed=author`
    const res = await fetch(url)
    if (!res.ok) {
      if (res.status === 400) break
      throw new Error(`WP posts page ${page} returned ${res.status}`)
    }
    const items = await res.json()
    if (!Array.isArray(items) || items.length === 0) break
    all.push(...items)
    const totalPages = Number(res.headers.get('x-wp-totalpages') || 1)
    if (page >= totalPages) break
    page++
  }
  return all
}

async function fetchAllWpUsers(posts = []) {
  const map = new Map()
  try {
    const res = await fetch(`${WP_BASE}/wp-json/wp/v2/users?per_page=100`)
    if (res.ok) {
      const users = await res.json()
      if (Array.isArray(users)) {
        for (const u of users) {
          if (u?.slug) {
            map.set(u.slug, {
              slug: u.slug,
              name: u.name || u.slug,
            })
          }
        }
      }
    }
  } catch {
    // fallback to embedded authors
  }

  for (const p of posts) {
    const embeddedAuthor = p?._embedded?.author?.[0]
    if (embeddedAuthor?.slug && !map.has(embeddedAuthor.slug)) {
      map.set(embeddedAuthor.slug, {
        slug: embeddedAuthor.slug,
        name: embeddedAuthor.name || embeddedAuthor.slug,
      })
    }
  }

  return [...map.values()]
}

async function main() {
  console.log('Fetching live posts and authors from WordPress...')
  const posts = await fetchAllWpPosts()
  const users = await fetchAllWpUsers(posts)

  // Build post-sitemap.xml
  const postEntries = posts.map((p) => {
    const cats = Array.isArray(p.categories) ? p.categories : []
    const isPressRelease = cats.includes(PRESS_RELEASE_CAT_ID)
    const loc = isPressRelease
      ? `${SITE_BASE}/press-release/${p.slug}`
      : `${SITE_BASE}/blog/${p.slug}`
    const lastmod = toIsoDate(p.modified_gmt || p.date_gmt)
    return `  <url>\n    <loc>${escapeXml(loc)}</loc>\n    <lastmod>${escapeXml(lastmod)}</lastmod>\n  </url>`
  })

  const postSitemapXml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...postEntries,
    '</urlset>',
    '',
  ].join('\n')

  fs.writeFileSync(path.join(PUBLIC_DIR, 'post-sitemap.xml'), postSitemapXml, 'utf-8')
  console.log(`Wrote public/post-sitemap.xml (${posts.length} posts)`)

  // Build author-sitemap.xml
  const authorEntries = users.map((u) => {
    const loc = `${SITE_BASE}/author/${u.slug}`
    return `  <url>\n    <loc>${escapeXml(loc)}</loc>\n  </url>`
  })

  const authorSitemapXml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...authorEntries,
    '</urlset>',
    '',
  ].join('\n')

  fs.writeFileSync(path.join(PUBLIC_DIR, 'author-sitemap.xml'), authorSitemapXml, 'utf-8')
  console.log(`Wrote public/author-sitemap.xml (${users.length} authors)`)
}

main().catch((err) => {
  console.error('Failed to generate sitemaps:', err)
  process.exit(1)
})
