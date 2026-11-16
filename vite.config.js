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
  '/ios-app-development': {
    title: 'iOS App Development Company in the USA | Inceptives Digital',
    description:
      'Inceptives Digital is an iOS app development company in USA delivering custom iPhone apps, Swift engineering, App Store deployment, and post-launch support.',
    canonical: 'https://inceptivesdigital.com/ios-app-development',
  },
  '/android-app-development': {
    title: 'Android App Development Company in USA | Inceptives Digital',
    description:
      'Inceptives Digital builds native Android apps in Kotlin and Java for startups, SMBs, and enterprise teams. Get a scoped estimate for your Android product in 48 hours.',
    canonical: 'https://inceptivesdigital.com/android-app-development',
  },
  '/anroid-app-development': {
    title: 'Android App Development Company in USA | Inceptives Digital',
    description:
      'Inceptives Digital builds native Android apps in Kotlin and Java for startups, SMBs, and enterprise teams. Get a scoped estimate for your Android product in 48 hours.',
    canonical: 'https://inceptivesdigital.com/android-app-development',
  },
  '/blockchain-development': {
    title: 'Blockchain App Development Services | DApps & DeFi',
    description:
      'Blockchain app development services for DApps, DeFi, NFT platforms, and smart contracts. Build secure, scalable blockchain solutions for modern businesses.',
    canonical: 'https://inceptivesdigital.com/blockchain-development',
  },
  '/react-native-app-development': {
    title: 'React-Native App Development Company | Inceptives Digital',
    description:
      'Inceptives Digital excels in React Native app development, providing businesses with robust cross-platform apps that ensure native-grade performance on both iOS and Android devices.',
    canonical: 'https://inceptivesdigital.com/react-native-app-development',
  },
  '/flutter-app-development': {
    title: 'Flutter App Development Company | Inceptives Digital',
    description:
      'Inceptives Digital is a Flutter app development company delivering native quality apps across iOS, Android and web. Get estimates for your product today.',
    canonical: 'https://inceptivesdigital.com/flutter-app-development',
  },
  '/kotlin-multiplatform-app-development': {
    title: 'Kotlin Multiplatform App Development Services | Inceptives Digital',
    description:
      'Discover Inceptives Digital, a leader in Kotlin multiplatform app development. We create production-grade KMP products with shared business logic and native UI.',
    canonical: 'https://inceptivesdigital.com/kotlin-multiplatform-app-development',
  },
  '/backend-api-development': {
    title: 'Backend & API Development Services | Inceptives Digital',
    description:
      'Inceptives Digital delivers backend & API development services built for scale, security, and long-term performance. Partner with engineers who build scalable systems.',
    canonical: 'https://inceptivesdigital.com/backend-api-development',
  },
  '/web-app-development-company': {
    title: 'Web App Development Company | Inceptives Digital',
    description:
      'Inceptives Digital is a web app development company that builds scalable, high-performance digital products. Explore our services and start your project today.',
    canonical: 'https://inceptivesdigital.com/web-app-development-company',
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
