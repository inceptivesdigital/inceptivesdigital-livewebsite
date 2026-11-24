import React from 'react'
import { Link } from 'react-router-dom'
import {
  Users,
  Cloud,
  Zap,
  Smartphone,
  Globe,
  Briefcase,
} from 'lucide-react'

const appTypes = [
  {
    icon: Users,
    title: '1. AI Consumer Apps',
    description:
      'Intelligent applications built for end users. Personalisation, recommendation engines, and conversational interfaces that improve with every interaction.',
    bullets: [
      'Personalised recommendation systems',
      'AI-powered chat and voice interfaces',
      'Behavioural analytics and adaptive content',
    ],
  },
  {
    icon: Cloud,
    title: '2. AI SaaS Platforms',
    description:
      'Multi-tenant AI platforms for businesses that want to offer intelligent capabilities as a core product feature. Scalable architecture and automated workflows built in from the start.',
    bullets: [
      'Multi-tenant AI infrastructure',
      'Automated workflow and reporting systems',
      'Real-time analytics and intelligence dashboards',
    ],
  },
  {
    icon: Zap,
    title: '3. AI Automation Apps',
    externalLink: 'https://inceptivesdigital.com/ai-automation-services',
    description:
      'Applications that remove manual effort from high-volume operational processes. AI makes the decisions. The team handles the exceptions.',
    bullets: [
      'Workflow automation and process orchestration',
      'Document processing and data extraction',
      'Intelligent routing and exception management',
    ],
  },
  {
    icon: Smartphone,
    title: '4. AI Mobile Apps for iOS and Android',
    description: (
      <>
        Intelligent{' '}
        <a
          href="https://inceptivesdigital.com/blog/ai-powered-mobile-apps-uae-business-operations"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00CE44] group-hover:text-black underline"
        >
          AI-powered mobile applications
        </a>{' '}
        built for real user load on both platforms. Machine learning, NLP, and computer vision are integrated into native and cross-platform mobile products.
      </>
    ),
    bullets: [
      <>
        AI{' '}
        <Link
          to="/mobile-app-development"
          className="text-[#00CE44] group-hover:text-black underline"
        >
          mobile app development
        </Link>{' '}
        for iOS and Android
      </>,
      'Cross-platform builds using Flutter and React Native',
      'On-device AI processing for performance-sensitive applications',
    ],
  },
  {
    icon: Globe,
    title: '5. AI Web Applications',
    description:
      'Scalable web applications with AI models and real-time intelligence integrated from the architecture stage. Built to handle data volume and user load without degradation.',
    bullets: [
      'Real-time AI-powered data processing',
      'Smart search and recommendation engines',
      <>
        Automated workflows and{' '}
        <a
          href="https://inceptivesdigital.com/system-integration-api-automation"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00CE44] group-hover:text-black underline"
        >
          system integration api automation
        </a>
      </>,
    ],
  },
  {
    icon: Briefcase,
    title: '6. Internal Business AI Tools',
    description: (
      <>
        Private applications built for internal operations. Knowledge management, analytics dashboards, and productivity tools that make teams more effective through{' '}
        <a
          href="https://inceptivesdigital.com/business-process-automation"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00CE44] group-hover:text-black underline"
        >
          business process automation
        </a>
        .
      </>
    ),
    bullets: [
      'Internal knowledge bases with RAG architecture',
      'AI-powered analytics and reporting dashboards',
      'Workflow automation and employee productivity tools',
    ],
  },
]

export default function AiAppTypesGrid() {
  return (
    <section className="w-full bg-[#111111] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="text-center max-w-[980px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] text-white mb-4">
            Our AI Applications{' '}
            <span className="text-[#00CE44]">Built Across Every Format</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Web, mobile, SaaS, and internal tools. Each{' '}
            <a
              href="https://inceptivesdigital.com/digital-product-development"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00CE44] underline hover:opacity-80 transition-colors"
            >
              digital product
            </a>{' '}
            is built for a specific operational context, not a generic template.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appTypes.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="group bg-[#1b1c21] hover:bg-[#00CE44] rounded-[18px] p-7 sm:p-8 flex flex-col items-start text-left transition-colors duration-200"
              >
                <Icon
                  className="w-9 h-9 text-[#00CE44] group-hover:text-black mb-5 transition-colors duration-200"
                  strokeWidth={1.8}
                />
                <h3 className="text-[#00CE44] group-hover:text-black text-[19px] sm:text-[21px] font-bold leading-snug mb-3 transition-colors duration-200">
                  {item.externalLink ? (
                    <a
                      href={item.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-[#00CE44]/60 group-hover:decoration-black"
                    >
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </h3>
                <p className="text-white/80 group-hover:text-black/90 text-[14px] sm:text-[15px] leading-[1.65] font-normal mb-5 transition-colors duration-200">
                  {item.description}
                </p>
                <ul className="space-y-2 mt-auto">
                  {item.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-white/90 group-hover:text-black text-[14px] leading-snug transition-colors duration-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44] group-hover:bg-black mt-1.5 shrink-0 transition-colors duration-200" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
