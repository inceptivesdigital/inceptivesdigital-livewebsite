import { useState } from 'react'

export default function KmpFAQs() {
  const [openIdx, setOpenIdx] = useState(0)

  const faqs = [
    {
      q: '1. Is Kotlin Multiplatform production-ready?',
      a: 'Yes. JetBrains released a stable version of Kotlin Multiplatform in November 2023, and it is in active production use at companies including Netflix, VMware, and Philips. Core libraries Ktor, SQLDelight, and Kotlin Coroutines all support KMP targets at stable maturity levels.',
    },
    {
      q: '2. What is the difference between Kotlin Multiplatform and Compose Multiplatform?',
      a: 'Kotlin Multiplatform shares business logic, networking, data, and domain across platforms while keeping UI native. Compose Multiplatform extends sharing to the UI layer itself, running on Android, iOS (currently in beta), web, and desktop. The two are complementary. KMP forms the foundation, and Compose Multiplatform is introduced where UI sharing makes architectural sense.',
    },
    {
      q: '3. Does KMP require rewriting an existing Android app?',
      a: 'No. KMP is built for incremental adoption. A single layer, authentication, networking, or data models, can move into a shared module while the rest of the Android app stays unchanged. iOS then consumes that shared module alongside its existing native code. Migrations run in phases specifically to avoid disrupting the current release cadence.',
    },
    {
      q: '4. Does KMP on iOS still require Swift developers?',
      a: 'Yes. KMP shares the business logic layer, but the iOS UI is still written in Swift using SwiftUI or UIKit. A Swift developer builds the interface and configures the framework integration. What KMP eliminates is re-implementing domain logic, networking, and the data layer in Swift, since that comes from the shared Kotlin module.',
    },
    {
      q: '5. What are the current limitations of KMP?',
      a: 'Compose Multiplatform on iOS is still in beta and needs careful evaluation before production use. The Kotlin/Native runtime has performance characteristics that differ from the JVM, which matters for CPU-intensive shared code. Tooling maturity on iOS, debugging and profiling, is improving but still trails Android. These factor into architecture decisions from the start of every engagement.',
    },
    {
      q: '6. KMP vs Flutter: How should a team decide?',
      a: 'KMP is the stronger choice for platform-native UI behaviour, deep OS integration, and teams already working in Kotlin. Flutter is more efficient for maximum UI consistency across platforms with a single team, since it shares the UI layer and reduces total development time. Budget and team composition typically settle the decision.',
    },
    {
      q: '7. Can KMP target web and desktop or only mobile?',
      a: 'KMP targets iOS, Android, web (via Kotlin/JS or Kotlin/Wasm), and desktop (via Compose Multiplatform for macOS, Windows, and Linux). The shared business logic module runs across all of these. Web and desktop UI require additional platform-specific work, but the core product logic is written once.',
    },
    {
      q: '8. How long does a KMP project take?',
      a: 'A focused shared module covering networking, data, and domain logic for iOS and Android typically takes eight to sixteen weeks, depending on complexity. A full-product build including platform UIs runs sixteen to thirty-two weeks for mid-complexity products. Migration timelines depend on the size and architecture of the existing codebase.',
    },
    {
      q: '9. What happens if a KMP bug affects both platforms simultaneously?',
      a: 'A bug in shared code can affect every platform at once, which is the real trade-off of code sharing in KMP. The mitigation is rigorous unit testing at the shared module layer before platform integration, plus CI pipelines that run shared tests against every target on every commit. A well-tested shared module reduces total bugs across platforms rather than introducing more.',
    },
    {
      q: '10. Is ongoing engineering support available after launch?',
      a: (
        <>
          Yes. Post-launch retainer engagements cover feature development, dependency updates, platform OS compatibility updates, and{' '}
          <a
            href="https://inceptivesdigital.com/blog/mobile-app-performance-optimization"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            mobile app performance optimization
          </a>
          . KMP products benefit from continuity with the original engineering team, since context on architecture boundary decisions rarely transfers fully through documentation alone.
        </>
      ),
    },
    {
      q: '11. What does a Kotlin Multiplatform project typically cost?',
      a: 'A focused KMP shared module engagement typically starts around $25,000, while a full-product build spans a wider range depending on platform UI complexity and target surface. Cost scales with shared module scope, the number of platform targets, and whether the work is greenfield or migration. A fixed estimate follows a technical discovery session.',
    },
    {
      q: '12. Does a KMP team need separate Android and iOS developers?',
      a: 'Yes, a KMP team needs Android and iOS developers alongside an engineer dedicated to the shared Kotlin module. Android engineers build the Jetpack Compose UI, iOS engineers build the SwiftUI or UIKit layer, and both consume the same shared business logic from that module.',
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
            <span className="text-[#00CE44]">Kotlin Multiplatform</span> App Development FAQs
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
