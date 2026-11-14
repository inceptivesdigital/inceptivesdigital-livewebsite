import { useState } from 'react'

export default function AndroidFAQs() {
  const [openIdx, setOpenIdx] = useState(0)

  const faqs = [
    {
      q: '1. How much does it cost to hire an Android app development company?',
      a: 'Basic Android applications typically cost $15,000 - $40,000, mid-complexity products range from $40,000 - $80,000, and advanced platforms start at $80,000 and can exceed $150,000. The final development cost depends on application features, system integrations, and security requirements.',
    },
    {
      q: '2. How long does it take to develop an Android application?',
      a: 'A basic Android app typically takes 8–12 weeks, while mid-complexity applications require around 12–20 weeks. Enterprise platforms may take six months or longer, depending on integrations, security requirements, and development scope.',
    },
    {
      q: '3. Can I hire a dedicated Android development team?',
      a: (
        <>
          Yes. Inceptives Digital provides dedicated Android developers who extend your{' '}
          <a
            href="https://inceptivesdigital.com/blog/in-house-development-vs-app-development-partner"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            in-house team
          </a>
          , plus complete project teams for end-to-end delivery. Your development scope and internal resources determine which engagement model fits.
        </>
      ),
    },
    {
      q: '4. Should I hire an Android app development company or a freelancer?',
      a: (
        <>
          Hire a freelancer for a limited Android development task with clear requirements.{' '}
          <a
            href="https://inceptivesdigital.com/blog/how-to-choose-the-right-mobile-app-development-company"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            Choose an Android app development company
          </a>{' '}
          when your product needs coordinated design, backend engineering, testing, and ongoing technical support.
        </>
      ),
    },
    {
      q: '5. Is Kotlin or Java better for Android app development?',
      a: (
        <>
          Kotlin is the recommended choice for most new Android applications because Google prioritizes Kotlin support and modern{' '}
          <a
            href="https://inceptivesdigital.com/blog/android-app-development-tools"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            Android development tools
          </a>
          . Java remains practical for maintaining existing Android codebases and legacy integrations.
        </>
      ),
    },
    {
      q: '6. Should I choose native Kotlin or Flutter for my Android app?',
      a: (
        <>
          Choose native Kotlin for Android-specific integrations, demanding performance requirements, or deeper platform control.{' '}
          <a
            href="https://inceptivesdigital.com/blog/flutter-vs-react-native-android-app-development"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            Flutter or React Native
          </a>{' '}
          are suitable when your product targets both Android and iOS and can share most application functionality.
        </>
      ),
    },
    {
      q: '7. Can you rebuild or modernize an existing Android app?',
      a: 'Yes. Inceptives Digital can modernize existing Android applications after reviewing their codebase, architecture, and dependencies. The assessment determines whether targeted improvements or a complete rebuild better meets your business requirements.',
    },
    {
      q: '8. Can Android apps integrate with existing CRM or ERP software?',
      a: (
        <>
          Yes. Custom Android applications can integrate with CRM, ERP, and other enterprise systems through supported{' '}
          <a
            href="https://inceptivesdigital.com/backend-api-development"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            backend APIs
          </a>
          . Integration complexity depends on system compatibility, authentication requirements, and how data moves between platforms.
        </>
      ),
    },
    {
      q: '9. How long does it take to publish an Android app on Google Play?',
      a: (
        <>
          <a
            href="https://inceptivesdigital.com/blog/publish-update-an-app-on-app-store-google-play"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            Publishing on Google Play
          </a>{' '}
          can take seven days or longer for review. New personal developer accounts also need a closed test with 12 testers for 14 continuous days before requesting production access.
        </>
      ),
    },
    {
      q: '10. Who owns the source code of my Android app?',
      a: 'Android app source code ownership depends on your development contract. At Inceptives Digital, the agreement should specify intellectual property rights, source code delivery, and ownership of design assets before development begins.',
    },
    {
      q: '11. Do you help promote my Android app after launch?',
      a: (
        <>
          Yes. Inceptives Digital offers{' '}
          <a
            href="https://inceptivesdigital.com/app-store-optimization"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            App Store Optimization
          </a>{' '}
          for Google Play and{' '}
          <a
            href="https://inceptivesdigital.com/post-launch-analytics-iteration"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            post-launch analytics
          </a>{' '}
          support. Store listing improvements support app discoverability, while user behavior data helps identify opportunities for product improvements.
        </>
      ),
    },
    {
      q: '12. How do you secure a custom Android application?',
      a: 'Custom Android app security involves secure authentication, encrypted communication, and protected data storage. Inceptives Digital also considers Android Keystore, API access controls, and applicable compliance requirements during technical planning.',
    },
  ]

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx)
  }

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-[#000000] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Top Heading: H2, 40px bold, centered */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-[#00CE44] text-xs sm:text-sm font-bold uppercase tracking-wider block mb-2.5">
            Android App Development FAQs
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-tight">
            Frequently Asked Questions About{' '}
            <span className="text-[#00CE44]">Android App Development</span>
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
                  className="w-full flex items-center justify-between text-left px-6 py-4 sm:py-5 gap-4 cursor-pointer focus:outline-none rounded-none"
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
