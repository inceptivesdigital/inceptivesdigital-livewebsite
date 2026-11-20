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
  '/cross-platform-app-development': {
    title: 'Cross-Platform App Development Company | Inceptives Digital',
    description:
      'Top-rated cross-platform app development company building scalable apps for iOS and Android across 20+ industries, driving sustainable growth.',
    canonical: 'https://inceptivesdigital.com/cross-platform-app-development',
  },
  '/product-launch-strategy': {
    title: 'Product Launch Strategy & Consulting Services| Inceptives Digital',
    description:
      'Inceptives Digital builds the go-to-market strategy and executes it, from $10,000 MVPs to $100,000 enterprise launches.',
    canonical: 'https://inceptivesdigital.com/product-launch-strategy',
  },
  '/app-store-optimization': {
    title: 'App Store Optimization Services | Inceptives Digital',
    description:
      'Inceptives Digital is an App Store Optimization company that turns app store pages into conversion engines. Data-backed ASO strategy for iOS and Android.',
    canonical: 'https://inceptivesdigital.com/app-store-optimization',
  },
  '/post-launch-analytics-iteration': {
    title: 'Post-Launch Analytics & Iteration Services — Inceptives Digital',
    description:
      'Inceptives Digital helps digital products grow after launch through structured iteration cycles, data-driven decisions, and continuous improvement.',
    canonical: 'https://inceptivesdigital.com/post-launch-analytics-iteration',
  },
  '/ai-agent-development': {
    title: 'AI Agent Development Company | Custom AI Agent Development',
    description:
      'Inceptives Digital builds intelligent AI agents that automate workflows, integrate enterprise systems, and deliver measurable business impact.',
    canonical: 'https://inceptivesdigital.com/ai-agent-development',
  },
  '/generative-ai-development-company': {
    title: 'Generative AI Development Company',
    description:
      'A generative AI development company building production-ready systems that automate workflows, generate content, and deliver measurable business impact.',
    canonical: 'https://inceptivesdigital.com/generative-ai-development-company',
  },
  '/machine-learning-development-services': {
    title: 'Machine Learning Software Development Services & Solutions',
    description:
      'Our machine learning development services reduce manual tasks by 50%, improve forecasting accuracy, and deliver scalable, reliable AI systems.',
    canonical: 'https://inceptivesdigital.com/machine-learning-development-services',
  },
  '/nlp-development-services': {
    title: 'NLP Development Services | Custom NLP Solutions',
    description:
      'Build custom NLP solutions for text classification, sentiment analysis, entity extraction, semantic search, document processing, and speech recognition. Conversational systems understand intent, retain context, and respond accurately across customer support, sales, and internal knowledge use cases.',
    canonical: 'https://inceptivesdigital.com/nlp-development-services',
  },
  '/ai-mvp-development': {
    title: 'AI MVP Development Services | Validate Your AI Idea',
    description:
      'Validate your AI idea with rapid MVP development. Test feasibility, data, architecture, and user value before committing to a full-scale AI build.',
    canonical: 'https://inceptivesdigital.com/ai-mvp-development',
  },
  '/ai-automation-services': {
    title: 'AI Automation Services for Businesses',
    description:
      'AI automation services that automate workflows, reduce manual effort, and deliver measurable operational impact across enterprise processes.',
    canonical: 'https://inceptivesdigital.com/ai-automation-services',
  },
  '/system-integration-api-automation': {
    title: 'System Integration & API Automation Services',
    description:
      'System integration and API automation services that connect tools, sync data, and enable seamless workflow communication across platforms.',
    canonical: 'https://inceptivesdigital.com/system-integration-api-automation',
  },
  '/business-process-automation': {
    title: 'Business Process Automation Services for Workflow Efficiency',
    description:
      'Business process automation services that streamline workflows, remove manual operations, and improve cross-system efficiency across business processes.',
    canonical: 'https://inceptivesdigital.com/business-process-automation',
  },
  '/rpa-development-services': {
    title: 'RPA Development Services | Workflow Automation',
    description:
      'Automate repetitive workflows with custom RPA development services. Build reliable bots that connect enterprise systems, reduce errors, and improve efficiency.',
    canonical: 'https://inceptivesdigital.com/rpa-development-services',
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
