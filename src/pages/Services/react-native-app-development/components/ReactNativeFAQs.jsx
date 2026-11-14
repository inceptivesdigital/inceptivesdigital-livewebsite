import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ReactNativeFAQs() {
  const [openIdx, setOpenIdx] = useState(0)

  const faqs = [
    {
      q: '1. What is React Native app development?',
      a: "React Native app development is the process of building mobile applications for both iOS and Android using a single JavaScript and TypeScript codebase. Built on Meta's React Native framework, it delivers native-grade performance across both platforms without the cost and complexity of maintaining two separate native builds.",
    },
    {
      q: '2. What is the difference between React Native and native app development?',
      a: (
        <>
          Native development builds separately for{' '}
          <Link
            to="/ios-app-development"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            iOS app development
          </Link>{' '}
          in Swift and Android in Kotlin, requiring two codebases, two engineering teams, and two development timelines. React Native uses one JavaScript and TypeScript codebase that performs across both platforms simultaneously, cutting development time and cost without sacrificing performance on either platform.
        </>
      ),
    },
    {
      q: '3. What technologies are used in React Native app development services?',
      a: "The core layer runs on JavaScript and TypeScript within Meta's React Native framework. Redux manages state, React Navigation handles routing, and Reanimated powers complex animations. Backend infrastructure connects through Firebase, AWS Amplify, and Google Cloud, with Fastlane handling automated deployment to both platforms.",
    },
    {
      q: '4. How do you ensure React Native apps perform like native applications?',
      a: 'Performance is treated as an architecture decision at Inceptives Digital, not a post-launch fix. JS thread optimization, native module integration, and careful state management are built into every product from the first sprint. Testing happens on real hardware across both platforms before any submission is made.',
    },
    {
      q: '5. Can React Native access native device features?',
      a: 'Yes. React Native accesses native device features, including camera, GPS, Bluetooth, accelerometer, and push notifications, through native modules and the React Native bridge. Where the standard library does not cover a specific hardware requirement, custom native modules are built to bridge the gap on both platforms.',
    },
    {
      q: '6. Why should I choose React Native for my mobile app?',
      a: 'When a business needs to reach iOS and Android without building twice, React Native is the most commercially sound decision available. One codebase, one development timeline, and one engineering team delivering native-grade performance across both platforms simultaneously. Facebook, Instagram, and Shopify all built their mobile products on React Native for exactly these reasons.',
    },
    {
      q: '7. How do react native app development companies differ in their approach?',
      a: 'The difference between React Native app development companies comes down to how they handle performance, compliance, and post-launch accountability. A credible studio builds natively in JavaScript and TypeScript, tests on real hardware across both platforms, holds a documented sprint process, and provides a fixed cost before the engagement begins rather than a range that shifts mid-delivery.',
    },
    {
      q: '8. How long does React Native app development take?',
      a: 'Basic React Native applications take eight to twelve weeks from scope confirmation. Mid-complexity builds with custom backends and richer UI take twelve to twenty weeks. Complex platforms with advanced integrations, native modules, and compliance requirements are scoped individually. Every timeline is fixed in writing before the first sprint begins.',
    },
    {
      q: '9. Are App Store and Play Store submissions included in the React Native app development services?',
      a: 'Yes. Both submissions are handled simultaneously in-house. IPA and APK preparation, policy compliance, metadata, and ASO are covered for both platforms. Every listing goes live optimized for discoverability and ranking rather than simply cleared for distribution.',
    },
    {
      q: '10. What is the react native app development cost?',
      a: 'Basic React Native applications start at $10,000. Mid-complexity builds start at $30,000. Complex platforms with advanced integrations, native modules, and compliance requirements start at $70,000. Every react native app development cost is determined at the scoping stage, fixed in writing, and unchanged at delivery.',
    },
    {
      q: '11. What post-launch support is available for React Native apps?',
      a: 'iOS and Android release updates on independent cycles, which means React Native applications need active maintenance to stay current on both. Post-launch support at Inceptives Digital covers JS bundle optimization, OS compatibility testing, performance monitoring, and feature iteration as the product and both platforms evolve.',
    },
  ]

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx)
  }

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-[#000000] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Top Heading: H2, 40px bold, centered */}
        <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-tight mb-12 sm:mb-16">
          <span className="text-[#00CE44]">React Native App Development</span> FAQs
        </h2>

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
