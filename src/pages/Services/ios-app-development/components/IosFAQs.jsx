import { useState } from 'react'

export default function IosFAQs() {
  const [openIdx, setOpenIdx] = useState(0)

  const faqs = [
    {
      q: '1. How much does custom iOS app development cost?',
      a: 'Custom iOS app development costs $15,000 - $35,000 for basic applications and $35,000 - $90,000 for mid-complexity projects. Enterprise iOS platforms can exceed $150,000, depending on functionality, backend requirements, and supported Apple devices.',
    },
    {
      q: '2. How long does it take an iOS app development company to build an app?',
      a: 'A basic iPhone app typically takes 8–12 weeks, while mid-complexity applications require 12–20 weeks. Enterprise iOS development timelines depend on technical requirements, Apple integrations, and testing complexity before App Store submission.',
    },
    {
      q: '3. Should I choose native iOS app development or cross-platform frameworks?',
      a: (
        <>
          Choose native iOS development for applications requiring advanced Apple integrations, such as HealthKit or ARKit. Cross-platform development, including{' '}
          <a
            href="https://inceptivesdigital.com/kotlin-multiplatform-app-development"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            Kotlin Multiplatform app development
          </a>
          , suits businesses launching on iPhone and Android when both platforms share similar functionality.
        </>
      ),
    },
    {
      q: '4. How do you ensure a high App Store first-submission acceptance rate?',
      a: "Our iOS developers review Apple's submission guidelines, privacy disclosures, and in-app purchase requirements before release. These checks support our reported 96% first-submission acceptance rate, although Apple makes the final approval decision.",
    },
    {
      q: '5. Do we own the source code and intellectual property from day one?',
      a: "Yes. You'll have access to your iOS application's source code during development. Your contract specifies when intellectual property ownership transfers and which project assets you'll receive at each agreed milestone.",
    },
    {
      q: '6. Can you modernize legacy iOS applications from Objective-C to Swift?',
      a: 'Yes. Our iOS developers can migrate legacy Objective-C components to Swift without unnecessarily rebuilding the application. Existing UIKit interfaces can remain where appropriate, with modernization priorities determined through a codebase assessment.',
    },
    {
      q: '7. What post-launch support and iOS app maintenance plans are available?',
      a: 'We provide iOS app maintenance after launch, including bug fixes and compatibility updates. You can also request ongoing development support, with response times and coverage defined in your service agreement.',
    },
    {
      q: '8. How do you handle data security, privacy, and regulatory compliance?',
      a: 'We protect iOS application data through secure authentication and encrypted communication. For healthcare or financial apps, our engineers assess applicable HIPAA, PCI DSS, and privacy requirements before implementing additional safeguards.',
    },
    {
      q: '9. Can you integrate Apple Intelligence and on-device AI into our iOS app?',
      a: (
        <>
          Yes. Our{' '}
          <a
            href="https://inceptivesdigital.com/ai-development"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            AI development
          </a>{' '}
          team supports Core ML, Apple’s Foundation Models framework, and App Intents where compatible. These technologies enable on-device AI capabilities, depending on hardware support and application requirements.
        </>
      ),
    },
    {
      q: '10. What is your development process for custom iOS mobile apps?',
      a: (
        <>
          We begin{' '}
          <a
            href="https://inceptivesdigital.com/blog/guide-to-custom-ios-app-development-for-businesses"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            custom iOS app development
          </a>{' '}
          with discovery and an approved interface prototype. Swift engineering proceeds through Agile sprints, followed by device testing and preparation for App Store submission.
        </>
      ),
    },
    {
      q: '11. What engagement models do you offer for hiring iOS developers?',
      a: 'We offer fixed-scope development, Agile delivery, dedicated iOS product teams, and team extension. Businesses can select an engagement model based on their project scope, internal engineering capacity, and expected development duration.',
    },
    {
      q: '12. Do you develop native applications for both iPhone and iPad?',
      a: 'Yes. Our iPhone and iPad app development services use Swift and SwiftUI to support both devices. Shared application logic reduces duplication, while adaptive interfaces accommodate iPad multitasking and larger displays.',
    },
    {
      q: '13. Can I hire dedicated iOS developers for an existing application?',
      a: "Yes. Businesses can hire dedicated iOS developers to work directly with their existing engineering team. Whether you're extending a SwiftUI application or maintaining legacy UIKit code, the engagement follows your established development workflow.",
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
          Frequently Asked Questions About{' '}
          <span className="text-[#00CE44]">iOS App Development</span>
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
