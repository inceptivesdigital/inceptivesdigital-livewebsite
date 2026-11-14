import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function FlutterFAQs() {
  const [openIdx, setOpenIdx] = useState(0)

  const faqs = [
    {
      q: '1. What is Flutter, and why is it used for app development?',
      a: "Flutter is Google's open-source framework that builds natively compiled apps for mobile, web, and desktop from a single codebase, cutting development time significantly.",
    },
    {
      q: '2. What platforms does Flutter support?',
      a: (
        <>
          Flutter supports iOS, Android, web, Windows, macOS, and Linux from a single codebase. Our{' '}
          <Link
            to="/ios-app-development"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            iOS app development
          </Link>{' '}
          work runs alongside every other platform your product needs, without maintaining separate builds.
        </>
      ),
    },
    {
      q: '3. How much does Flutter app development cost?',
      a: (
        <>
          Most Flutter products we build range from $15,000 to $150,000, depending on complexity, integrations, and design requirements, a spread that lines up with general{' '}
          <a
            href="https://inceptivesdigital.com/blog/mobile-app-development-cost"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            mobile app development cost
          </a>{' '}
          benchmarks across the industry. Every estimate is scoped after a discovery session.
        </>
      ),
    },
    {
      q: '4. Is Flutter good for large-scale enterprise products?',
      a: (
        <>
          Absolutely. Google, Nubank, and BMW each run mission-critical products on Flutter, including regulated categories like{' '}
          <a
            href="https://inceptivesdigital.com/fintech-app-development"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            fintech app development
          </a>
          , where reliability at scale isn&apos;t optional. Our team has delivered enterprise-scale Flutter products across multiple industries with the same rigor.
        </>
      ),
    },
    {
      q: '5. What do your Flutter web app development services include?',
      a: (
        <>
          Our Flutter{' '}
          <a
            href="https://inceptivesdigital.com/web-app-development-company"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            web app development services
          </a>{' '}
          cover the full build, from UI and backend integration to deployment, performance optimization, and post-launch support across all browsers.
        </>
      ),
    },
    {
      q: '6. Can an existing native app be migrated to Flutter?',
      a: 'Yes. We handle the full migration process, including codebase consolidation, feature parity validation, and performance benchmarking.',
    },
    {
      q: '7. Does Flutter perform as well as native apps?',
      a: 'Flutter uses its own rendering engine rather than platform UI libraries. The products we build perform at native quality across every device without platform-specific compromises.',
    },
    {
      q: '8. Can Flutter apps integrate with AI, IoT, and blockchain?',
      a: (
        <>
          Yes. We integrate AI, IoT,{' '}
          <Link
            to="/blockchain-development"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            blockchain development
          </Link>
          , AR/VR, and 5G capabilities into Flutter products where the use case genuinely calls for them, not as additions for their own sake.
        </>
      ),
    },
    {
      q: '9. What happens after the app is launched?',
      a: 'We handle ongoing maintenance covering bug fixes, platform updates, performance monitoring, and new feature development as part of a continuous support engagement after launch.',
    },
    {
      q: '10. Do you work with startups or only established businesses?',
      a: (
        <>
          Inceptives Digital works with both. From early-stage MVPs to full-scale{' '}
          <a
            href="https://inceptivesdigital.com/startup-product-development"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            startup product development
          </a>{' '}
          engagements, the process is scoped around what the product actually needs, regardless of company size.
        </>
      ),
    },
    {
      q: '11. How do we get started with Inceptives Digital?',
      a: 'Book a session with us. The first conversation covers the brief, the scope, and the estimate, so you have everything needed to make a confident decision.',
    },
  ]

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx)
  }

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-[#000000] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Top Heading: H2, 40px bold, centered */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[#00CE44] text-sm sm:text-base font-bold uppercase tracking-wider block mb-2">
            FAQs
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-tight">
            <span className="text-[#00CE44]">Flutter App Development</span> Services
          </h2>
        </div>

        {/* Accordion Container */}
        <div className="w-full space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx

            return (
              <div
                key={faq.q}
                className="bg-[#242424] rounded-[12px] border-0 shadow-none overflow-hidden transition-colors duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between text-left px-6 py-4 sm:py-5 gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <h3
                    className={`text-sm sm:text-base font-bold tracking-tight leading-snug transition-colors duration-200 ${
                      isOpen ? 'text-[#00CE44]' : 'text-white'
                    }`}
                  >
                    {faq.q}
                  </h3>

                  <span
                    className={`shrink-0 text-lg font-bold leading-none select-none ${
                      isOpen ? 'text-[#00CE44]' : 'text-white'
                    }`}
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-white/90 text-xs sm:text-sm leading-relaxed font-normal whitespace-pre-line">
                    <div>{faq.a}</div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
