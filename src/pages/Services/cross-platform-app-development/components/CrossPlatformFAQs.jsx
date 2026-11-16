import { useState } from 'react'

export default function CrossPlatformFAQs() {
  const [openIdx, setOpenIdx] = useState(0)

  const faqs = [
    {
      q: '1. What is cross-platform app development?',
      a: 'Cross-platform app development is the process of building a single application that runs on both iOS and Android from one shared codebase. Frameworks like Flutter and React Native make this possible, allowing businesses to reach both platform audiences simultaneously without the overhead of two separate native builds.',
    },
    {
      q: '2. What is the difference between cross-platform and native app development?',
      a: (
        <>
          Native development builds separately for iOS and Android in platform-specific languages, delivering deeper hardware access and tighter OS integration.{' '}
          <a
            href="https://inceptivesdigital.com/blog/native-vs-hybrid-vs-cross-platform-app-development"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            Native vs hybrid vs cross-platform app development
          </a>{' '}
          differs primarily in codebase structure, engineering overhead, platform access, and time to market when the architecture is built correctly.
        </>
      ),
    },
    {
      q: '3. Is cross-platform app development right for my business?',
      a: 'Cross-platform app development is right for businesses that need iOS and Android coverage without two separate native builds. It works well for startups, SMBs, and high-growth businesses. Products requiring deep hardware-specific native integration may be better served by a native build, established at the scoping stage before any development commitment is made.',
    },
    {
      q: '4. Which is better, Flutter or React Native?',
      a: 'Neither is universally better. Flutter suits products requiring high visual fidelity and consistent rendering across devices. React Native works well for products that require a lot of platform API access or integration with the JavaScript ecosystem. What separates credible cross-platform app development companies is the discipline applied in selecting the right one, not the frameworks they offer.',
    },
    {
      q: '5. How much does cross-platform app development cost?',
      a: 'Basic cross-platform applications start at $10,000. Mid-complexity builds start at $30,000. Complex platforms with advanced integrations and compliance requirements start at $65,000. Every estimate is scoped against the product’s actual complexity and fixed in writing before development begins, with no revisions to the agreed number at delivery.',
    },
    {
      q: '6. Can cross-platform apps match native app performance?',
      a: 'Yes. Flutter renders through its own graphics engine independently of platform UI components. React Native bridges directly to native elements on each platform. Both deliver native-equivalent performance when rendering pipelines and API access are addressed at the architecture stage from the first sprint.',
    },
    {
      q: '7. How do you ensure consistent performance across iOS and Android?',
      a: 'Every application is tested on real hardware across device tiers, active OS versions, and screen configurations on both platforms using Appium, Detox, and Firebase Test Lab. Performance, functional, and security issues are resolved before either store receives a release candidate, with architectural decisions addressing performance at the foundation rather than post-launch.',
    },
    {
      q: '8. Can a cross-platform app access all native device features?',
      a: 'Yes. Both Flutter and React Native provide access to camera, GPS, biometrics, push notifications, and Bluetooth through native packages or custom platform channel bridges. Any limitation is identified at the scoping stage and resolved in the architecture before development begins.',
    },
    {
      q: '9. How long does cross-platform app development take?',
      a: (
        <>
          Basic applications take six to ten weeks from scope confirmation. Mid-complexity builds take ten to eighteen weeks. Complex platforms with advanced integrations and compliance requirements follow an individually scoped{' '}
          <a
            href="https://inceptivesdigital.com/blog/app-development-timeline"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            app development timeline
          </a>
          .
        </>
      ),
    },
    {
      q: '10. Are App Store and Google Play submissions included?',
      a: (
        <>
          Yes. Both App Store and Google Play submissions are handled in-house. Signed build preparation, policy compliance, metadata, graphic assets, and{' '}
          <a
            href="https://inceptivesdigital.com/blog/app-store-optimization-aso"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            app store optimization and ASO
          </a>{' '}
          strategy are managed for both platforms simultaneously, with every listing optimized for discoverability and keyword ranking from launch day.
        </>
      ),
    },
    {
      q: '11. What support is provided after the app launches?',
      a: 'Our post-launch support covers OS compatibility updates across both iOS and Android release cycles, performance monitoring, bug resolution, and feature iteration managed against the shared codebase. Both platform schedules are tracked actively so compatibility issues, security vulnerabilities, and performance regressions are resolved before they reach users.',
    },
  ]

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx)
  }

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-[#000000] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Top Heading */}
        <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-tight mb-12 sm:mb-16">
          Frequently Asked Questions About{' '}
          <span className="text-[#00CE44]">Cross-Platform App Development</span>
        </h2>

        {/* Accordion Container matching IosFAQs */}
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
