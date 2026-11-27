import fs from 'node:fs'
import path from 'node:path'

const DOMAIN = 'https://inceptivesdigital.com'

function decodeJsString(raw) {
  if (!raw) return ''
  // Handle single-quoted, double-quoted, or backtick literal string
  return raw
    .replace(/\\'/g, "'")
    .replace(/\\"/g, '"')
    .replace(/\\n/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function extractVarOrInline(src, names) {
  for (const name of names) {
    // Match: const title = '...' or const seoTitle = "..." (including multiline after =)
    const re = new RegExp(
      `(?:const|let)\\s+${name}\\s*=\\s*(?:\\n\\s*)?(['"\`])([\\s\\S]*?)\\1`
    )
    const m = src.match(re)
    if (m && m[2]) return decodeJsString(m[2])
  }
  return ''
}

function extractMetaFromPageFile(filePath, routePath) {
  const src = fs.readFileSync(filePath, 'utf8')

  let title = extractVarOrInline(src, ['title', 'seoTitle', 'pageTitle', 'metaTitle'])
  if (!title) {
    const m = src.match(/document\.title\s*=\s*(['"`])([\s\S]*?)\1/)
    if (m && m[2]) title = decodeJsString(m[2])
  }

  let description = extractVarOrInline(src, [
    'description',
    'seoDesc',
    'seoDescription',
    'metaDescription',
    'desc',
  ])
  if (!description) {
    const m = src.match(
      /setMeta\(\s*['"]meta\[name="description"\]['"]\s*,\s*(?:['"]content['"]\s*,\s*|['"]name['"]\s*,\s*['"]description['"]\s*,\s*)?(['"`])([\s\S]*?)\1/
    )
    if (m && m[2]) description = decodeJsString(m[2])
  }

  let canonical = extractVarOrInline(src, ['canonical', 'canonicalUrl'])
  if (!canonical) {
    const m = src.match(
      /(?:setMeta\([^)]*canonical[^)]*,\s*|canonical\.setAttribute\(\s*['"]href['"]\s*,\s*)(['"`])(https:\/\/inceptivesdigital\.com[^'"`]*)\1/
    )
    if (m && m[2]) canonical = decodeJsString(m[2])
  }
  if (!canonical) {
    canonical = `${DOMAIN}${routePath === '/' ? '' : routePath}`
  }

  return { title, description, canonical }
}

export function collectAllRouteSeo() {
  const appSrc = fs.readFileSync('src/App.jsx', 'utf8')
  const imports = {}
  for (const m of appSrc.matchAll(
    /const\s+(\w+)\s*=\s*lazy\(\(\)\s*=>\s*import\(['"]\.\/pages\/([^'"]+)['"]\)\)/g
  )) {
    imports[m[1]] = m[2]
  }

  const results = {}
  for (const m of appSrc.matchAll(
    /<Route\s+path=['"]([^'"]+)['"]\s+element=\{<(\w+)/g
  )) {
    const routePath = m[1]
    const comp = m[2]
    if (routePath.includes(':') || routePath === '*' || routePath === '/') continue

    const pageDir = imports[comp]
    if (!pageDir) continue

    let file = path.join('src/pages', `${pageDir}.jsx`)
    if (!fs.existsSync(file)) file = path.join('src/pages', pageDir, 'index.jsx')
    if (!fs.existsSync(file)) continue

    const meta = extractMetaFromPageFile(file, routePath)
    if (meta.title && meta.description) {
      results[routePath] = meta
    }
  }
  return results
}

function escapeHtmlAttr(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function escapeHtmlText(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export function applyRouteSeoToHtml(html, seo) {
  if (!seo) return html
  const safeTitle = escapeHtmlText(seo.title)
  const safeTitleAttr = escapeHtmlAttr(seo.title)
  const safeDescAttr = escapeHtmlAttr(seo.description)
  const safeCanonical = escapeHtmlAttr(seo.canonical)

  let out = html
  out = out.replace(/<title>[\s\S]*?<\/title>/i, `<title>${safeTitle}</title>`)
  out = out.replace(
    /<meta\s+name=["']description["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta name="description" content="${safeDescAttr}" />`
  )
  out = out.replace(
    /<link\s+rel=["']canonical["']\s+href=["'][^"']*["']\s*\/?>/i,
    `<link rel="canonical" href="${safeCanonical}" />`
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
    /<meta\s+name=["']twitter:title["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta name="twitter:title" content="${safeTitleAttr}" />`
  )
  out = out.replace(
    /<meta\s+name=["']twitter:description["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta name="twitter:description" content="${safeDescAttr}" />`
  )
  return out
}

// CLI execution: verify extraction or write dist/<route>/index.html
const isMain = process.argv[1] && path.resolve(process.argv[1]) === path.resolve(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'))
if (isMain) {
  const routes = collectAllRouteSeo()
  const count = Object.keys(routes).length
  console.log('EXTRACTED_ROUTES=', count)
  console.log('SINGAPORE=', JSON.stringify(routes['/mobile-app-development-company-singapore']))
  console.log('CONTACT=', JSON.stringify(routes['/contact-us']))
}
