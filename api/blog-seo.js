import fs from 'node:fs'
import path from 'node:path'

const SITE_URL = 'https://inceptivesdigital.com'
const WP_API_BASE = 'https://nextincep.wpenginepowered.com/wp-json/wp/v2'
const WP_TIMEOUT_MS = 5000

const HTML_ENTITIES = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#039;': "'",
  '&#39;': "'",
  '&nbsp;': ' ',
  '&rsquo;': "'",
  '&lsquo;': "'",
  '&rdquo;': '"',
  '&ldquo;': '"',
  '&ndash;': '-',
  '&mdash;': '--',
}

function decodeHtml(str = '') {
  return String(str)
    .replace(
      /&(amp|lt|gt|quot|#039|#39|nbsp|rsquo|lsquo|rdquo|ldquo|ndash|mdash);/g,
      (m) => HTML_ENTITIES[m] || m
    )
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
}

function stripTags(html = '') {
  return decodeHtml(String(html).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim())
}

function escapeHtmlText(str = '') {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function escapeHtmlAttr(str = '') {
  return escapeHtmlText(str).replace(/"/g, '&quot;')
}

let cachedTemplate = ''
async function loadBaseHtml() {
  if (cachedTemplate) return cachedTemplate
  const candidates = [
    path.join(process.cwd(), 'dist', 'index.html'),
    path.join(process.cwd(), 'index.html'),
  ]
  for (const filePath of candidates) {
    try {
      if (fs.existsSync(filePath)) {
        const html = fs.readFileSync(filePath, 'utf8')
        if (html.includes('<div id="root">')) {
          cachedTemplate = html
          return html
        }
      }
    } catch {
      // Try next candidate
    }
  }
  const res = await fetch(`${SITE_URL}/index.html`, {
    signal: AbortSignal.timeout(4000),
  })
  if (!res.ok) throw new Error('Unable to load base HTML template')
  const html = await res.text()
  cachedTemplate = html
  return html
}

async function fetchWpJson(endpoint) {
  const res = await fetch(`${WP_API_BASE}${endpoint}`, {
    headers: { Accept: 'application/json' },
    signal: AbortSignal.timeout(WP_TIMEOUT_MS),
  })
  if (!res.ok) throw new Error(`WP API ${res.status}`)
  return res.json()
}

function applySeoAndBody(baseHtml, seo, bodyHtml) {
  const safeTitle = escapeHtmlText(seo.title)
  const safeTitleAttr = escapeHtmlAttr(seo.title)
  const safeDescAttr = escapeHtmlAttr(seo.description)
  const safeCanonical = escapeHtmlAttr(seo.canonical)
  const safeRobots = escapeHtmlAttr(
    seo.robots || 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
  )
  const safeImage = escapeHtmlAttr(seo.image || `${SITE_URL}/assets/ID-logo.jpg`)

  let out = baseHtml
  out = out.replace(/<title>[\s\S]*?<\/title>/i, `<title>${safeTitle}</title>`)
  out = out.replace(
    /<meta\s+name=["']robots["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta name="robots" content="${safeRobots}" />`
  )
  out = out.replace(
    /<meta\s+name=["']description["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta name="description" content="${safeDescAttr}" />`
  )
  out = out.replace(
    /<link\s+rel=["']canonical["']\s+href=["'][^"']*["']\s*\/?>/i,
    `<link rel="canonical" href="${safeCanonical}" />`
  )
  out = out.replace(
    /<meta\s+property=["']og:type["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta property="og:type" content="${escapeHtmlAttr(seo.ogType || 'article')}" />`
  )
  out = out.replace(
    /<meta\s+property=["']og:title["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta property="og:title" content="${safeTitleAttr}" />`
  )
  out = out.replace(
    /<meta\s+property=["']og:description["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta property="og:description" content="${safeDescAttr}" />`
  )
  out = out.replace(
    /<meta\s+property=["']og:url["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta property="og:url" content="${safeCanonical}" />`
  )
  out = out.replace(
    /<meta\s+property=["']og:image["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta property="og:image" content="${safeImage}" />`
  )
  out = out.replace(
    /<meta\s+name=["']twitter:title["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta name="twitter:title" content="${safeTitleAttr}" />`
  )
  out = out.replace(
    /<meta\s+name=["']twitter:description["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta name="twitter:description" content="${safeDescAttr}" />`
  )
  out = out.replace(
    /<meta\s+name=["']twitter:image["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta name="twitter:image" content="${safeImage}" />`
  )

  if (seo.jsonLd) {
    const ldScript = `<script type="application/ld+json">${JSON.stringify(seo.jsonLd).replace(/</g, '\\u003c')}</script>\n  </head>`
    out = out.replace(/<\/head>/i, ldScript)
  }

  if (bodyHtml) {
    out = out.replace(
      /<div\s+id=["']root["']\s*><\/div>/i,
      `<div id="root">${bodyHtml}</div>`
    )
  }

  return out
}

export default async function handler(req, res) {
  try {
    const baseHtml = await loadBaseHtml()
    const rawSlug = typeof req.query?.slug === 'string' ? req.query.slug : ''
    const slug = rawSlug.trim().replace(/^\/+|\/+$/g, '')

    // Blog index: /blog or /blog/
    if (!slug) {
      let posts = []
      try {
        posts = await fetchWpJson('/posts?per_page=12&_fields=slug,title,excerpt,date')
      } catch {
        posts = []
      }

      const listItems = (Array.isArray(posts) ? posts : [])
        .map((p) => {
          const postTitle = escapeHtmlText(stripTags(p?.title?.rendered || p?.slug || ''))
          const postExcerpt = escapeHtmlText(stripTags(p?.excerpt?.rendered || '').slice(0, 220))
          const postSlug = encodeURIComponent(String(p?.slug || ''))
          return `<li><a href="/blog/${postSlug}">${postTitle}</a><p>${postExcerpt}</p></li>`
        })
        .join('')

      const bodyHtml = `<main class="seo-ssr-blog"><h1>Inceptives Digital Blog</h1><p>Insights on mobile app development, AI engineering, product strategy, and digital transformation.</p><ul>${listItems}</ul></main>`

      const html = applySeoAndBody(
        baseHtml,
        {
          title: 'Blog | Mobile App, AI & Digital Product Insights | Inceptives Digital',
          description:
            'Explore engineering, mobile app development, AI product strategy, and industry guides from Inceptives Digital.',
          canonical: `${SITE_URL}/blog`,
          ogType: 'website',
        },
        bodyHtml
      )

      res.setHeader('Content-Type', 'text/html; charset=utf-8')
      res.setHeader('Cache-Control', 'public, s-maxage=1800, stale-while-revalidate=86400')
      return res.status(200).send(html)
    }

    if (!/^[a-z0-9-]+$/i.test(slug)) {
      const notFoundHtml = applySeoAndBody(
        baseHtml,
        {
          title: 'Article Not Found | Inceptives Digital',
          description: 'The requested blog article could not be found.',
          canonical: `${SITE_URL}/blog/${slug}`,
          robots: 'noindex, nofollow',
        },
        `<main><h1>Article Not Found</h1><p><a href="/blog">Browse all articles</a></p></main>`
      )
      res.setHeader('Content-Type', 'text/html; charset=utf-8')
      return res.status(404).send(notFoundHtml)
    }

    const posts = await fetchWpJson(`/posts?slug=${encodeURIComponent(slug)}&_embed=1`)
    const post = Array.isArray(posts) ? posts[0] : null

    if (!post) {
      const notFoundHtml = applySeoAndBody(
        baseHtml,
        {
          title: 'Article Not Found | Inceptives Digital',
          description: 'The requested blog article could not be found.',
          canonical: `${SITE_URL}/blog/${slug}`,
          robots: 'noindex, nofollow',
        },
        `<main><h1>Article Not Found</h1><p><a href="/blog">Browse all articles</a></p></main>`
      )
      res.setHeader('Content-Type', 'text/html; charset=utf-8')
      res.setHeader('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=3600')
      return res.status(404).send(notFoundHtml)
    }

    const yoast = post.yoast_head_json || {}
    const postTitleText = stripTags(post.title?.rendered || slug)
    const seoTitle = decodeHtml(yoast.title || `${postTitleText} | Inceptives Digital`)
    const excerptText = stripTags(post.excerpt?.rendered || '')
    const seoDesc =
      decodeHtml(yoast.description || yoast.og_description || excerptText).slice(0, 320) ||
      postTitleText
    const canonical = `${SITE_URL}/blog/${slug}`
    const featuredImg =
      yoast.og_image?.[0]?.url ||
      post._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
      `${SITE_URL}/assets/ID-logo.jpg`
    const authorName =
      post._embedded?.author?.[0]?.name || yoast.author || 'Inceptives Digital'
    const robots =
      yoast.robots && typeof yoast.robots === 'object'
        ? Object.values(yoast.robots).filter(Boolean).join(', ')
        : undefined

    const articleContent = String(post.content?.rendered || `<p>${escapeHtmlText(excerptText)}</p>`)
      .replace(/<script\b[\s\S]*?<\/script>/gi, '')

    const bodyHtml = `<main class="seo-ssr-blog"><article><h1>${escapeHtmlText(postTitleText)}</h1>${articleContent}</article></main>`

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: postTitleText,
      description: seoDesc,
      image: featuredImg,
      datePublished: post.date_gmt ? `${post.date_gmt}Z` : undefined,
      dateModified: post.modified_gmt ? `${post.modified_gmt}Z` : undefined,
      author: {
        '@type': 'Person',
        name: authorName,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Inceptives Digital',
        url: SITE_URL,
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonical,
      },
    }

    const html = applySeoAndBody(
      baseHtml,
      {
        title: seoTitle,
        description: seoDesc,
        canonical,
        robots,
        ogType: 'article',
        image: featuredImg,
        jsonLd,
      },
      bodyHtml
    )

    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400')
    return res.status(200).send(html)
  } catch {
    // Fallback to base HTML without wrong homepage canonical if WP API temporarily fails
    try {
      const baseHtml = await loadBaseHtml()
      const rawSlug = typeof req.query?.slug === 'string' ? req.query.slug : ''
      const slug = rawSlug.trim().replace(/^\/+|\/+$/g, '')
      const canonical = slug ? `${SITE_URL}/blog/${slug}` : `${SITE_URL}/blog`
      const html = applySeoAndBody(
        baseHtml,
        {
          title: slug ? `${slug.replace(/-/g, ' ')} | Inceptives Digital` : 'Blog | Inceptives Digital',
          description: 'Inceptives Digital engineering, mobile app, and AI insights.',
          canonical,
          ogType: slug ? 'article' : 'website',
        },
        ''
      )
      res.setHeader('Content-Type', 'text/html; charset=utf-8')
      return res.status(200).send(html)
    } catch {
      return res.status(500).send('Temporary server error')
    }
  }
}
