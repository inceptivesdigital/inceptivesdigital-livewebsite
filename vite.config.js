import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const SEO_ROUTES = {
  '/mobile-app-development': {
    title: 'Custom Mobile App Development Services | Inceptives Digital',
    description:
      'Inceptives Digital provides custom mobile app development services in the USA, covering native iOS, Android, and cross-platform applications.',
    canonical: 'https://inceptivesdigital.com/mobile-app-development',
  },
}

function applyRouteSeoToHtml(html, seo) {
  if (!seo) return html
  return html
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${seo.title}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="description" content="${seo.description}" />`
    )
    .replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
      `<link rel="canonical" href="${seo.canonical}" />`
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:title" content="${seo.title}" />`
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:description" content="${seo.description}" />`
    )
    .replace(
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
      `<meta property="og:url" content="${seo.canonical}" />`
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="twitter:title" content="${seo.title}" />`
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="twitter:description" content="${seo.description}" />`
    )
    .replace(
      /"@type":\s*"WebPage"[\s\S]*?"inLanguage":\s*"en-US"/,
      `"@type": "WebPage",\n          "@id": "${seo.canonical}",\n          "url": "${seo.canonical}",\n          "name": "${seo.title}",\n          "isPartOf": { "@id": "https://nextincep.wpenginepowered.com/#website" },\n          "about": { "@id": "https://nextincep.wpenginepowered.com/#organization" },\n          "description": "${seo.description}",\n          "inLanguage": "en-US"`
    )
}

function routeSeoPlugin() {
  return {
    name: 'route-seo-html-plugin',
    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        const rawUrl = ctx?.originalUrl || ctx?.path || '/'
        const cleanPath = rawUrl.split('?')[0].replace(/\/+$/, '') || '/'
        const seo = SEO_ROUTES[cleanPath]
        return applyRouteSeoToHtml(html, seo)
      },
    },
    closeBundle() {
      const distDir = path.resolve(process.cwd(), 'dist')
      const baseHtmlPath = path.join(distDir, 'index.html')
      if (!fs.existsSync(baseHtmlPath)) return
      const baseHtml = fs.readFileSync(baseHtmlPath, 'utf-8')
      for (const [routePath, seo] of Object.entries(SEO_ROUTES)) {
        const routeDir = path.join(distDir, routePath.replace(/^\/+/, ''))
        fs.mkdirSync(routeDir, { recursive: true })
        fs.writeFileSync(
          path.join(routeDir, 'index.html'),
          applyRouteSeoToHtml(baseHtml, seo),
          'utf-8'
        )
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    routeSeoPlugin(),
    react(),
    tailwindcss(),
  ],
})
