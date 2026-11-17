import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ReactNativeFAQs() {
  const [openIdx, setOpenIdx] = useState(0)

  const faqs = [
    {
      q: '1. What is React Native app development?',
      a: (
        <>
          React Native app development is the process of building{' '}
          <Link
            to="/ios-app-development"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            iOS
          </Link>{' '}
          and{' '}
          <Link
            to="/android-app-development"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            Android
          </Link>{' '}
          apps from one JavaScript and TypeScript codebase. Meta created the framework, and it renders real native components, so apps feel at home on each platform.
        </>
      ),
    },
    {
      q: '2. What is the difference between React Native and native app development?',
      a: (
        <>
          React Native uses a shared JavaScript and TypeScript codebase for{' '}
          <Link
            to="/ios-app-development"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            iOS
          </Link>{' '}
          and{' '}
          <Link
            to="/android-app-development"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            Android
          </Link>
          , while native development uses platform-specific code.
          <br />
          <br />
          Businesses can reduce duplicated engineering work with React Native.{' '}
          <Link
            to="/mobile-app-development"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            Native development
          </Link>{' '}
          offers greater direct control over platform-specific functionality.
        </>
      ),
    },
    {
      q: '3. How do you ensure React Native apps perform like native applications?',
      a: (
        <>
          We optimize React Native performance from the architecture stage, focusing on responsive interactions and efficient JavaScript execution.
          <br />
          <br />
          Our engineers integrate native modules where necessary and test application performance on real iOS and Android devices before launch.
        </>
      ),
    },
    {
      q: '4. Can React Native access native device features?',
      a: (
        <>
          Yes. React Native supports cameras, GPS, Bluetooth, and push notifications through compatible libraries and native APIs.
          <br />
          <br />
          For specialized hardware requirements, our developers build custom Swift or Kotlin modules that extend the application&apos;s native capabilities.
        </>
      ),
    },
    {
      q: '5. When should I choose React Native over Flutter?',
      a: (
        <>
          Choose React Native when you need fast iOS and Android delivery and deep native integration.{' '}
          <Link
            to="/flutter-app-development"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            Flutter
          </Link>{' '}
          suits products that need identical, highly custom interfaces across platforms. We build with both, so the recommendation follows your product.
        </>
      ),
    },
    {
      q: '6. How much does React Native app development cost?',
      a: (
        <>
          React Native app development costs range from $10,000 to $150,000+, depending on project complexity.
          <br />
          <br />
          Basic applications start at $10,000, while advanced platforms require larger investments. Our technical discovery process sets estimates against the scope you approve.
        </>
      ),
    },
    {
      q: '7. How long does React Native app development take?',
      a: (
        <>
          Basic React Native applications typically take 8–12 weeks, while mid-complexity projects require 12–20 weeks.
          <br />
          <br />
          Enterprise applications follow project-specific app development timelines. Our engineers assess integration requirements and testing scope before confirming the development schedule.
        </>
      ),
    },
    {
      q: '8. How do I choose the right React Native app development company?',
      a: (
        <>
          Choose a{' '}
          <Link
            to="/cross-platform-app-development"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            React Native app development company
          </Link>{' '}
          with projects you can verify and clear delivery commitments.
          <br />
          <br />
          Before hiring a development partner, evaluate:
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong className="text-white">Experience:</strong> Relevant React Native applications running in production</li>
            <li><strong className="text-white">Testing:</strong> Real-device QA across iOS and Android</li>
            <li><strong className="text-white">Ownership:</strong> Clear source code and intellectual property terms</li>
            <li><strong className="text-white">Pricing:</strong> Transparent estimates and a written project scope</li>
          </ul>
        </>
      ),
    },
    {
      q: '9. How do you handle custom native modules when JavaScript isn’t enough?',
      a: (
        <>
          Our React Native engineers develop custom native modules when standard libraries cannot meet specific hardware or platform requirements.
          <br />
          <br />
          Using Swift or Kotlin, they connect specialized native functionality to the shared React Native codebase while maintaining cross-platform compatibility.
        </>
      ),
    },
    {
      q: '10. Is React Native suitable for enterprise-grade or high-scale applications?',
      a: (
        <>
          Yes. React Native supports enterprise applications with complex integrations and demanding performance requirements.
          <br />
          <br />
          Our engineers design secure architectures around business workloads. Where applicable, the development approach incorporates relevant HIPAA, PCI DSS, or GDPR requirements.
        </>
      ),
    },
    {
      q: '11. Who owns the source code and App Store developer accounts?',
      a: (
        <>
          Your business owns the application source code and controls its Apple App Store and Google Play developer accounts.
          <br />
          <br />
          Our development agreement documents intellectual property rights and the conditions for transferring project deliverables.
        </>
      ),
    },
    {
      q: '12. What causes React Native app development budgets to exceed the original estimate?',
      a: (
        <>
          Unclear requirements and underestimated integrations often create hidden costs that push React Native development beyond the original estimate. Our technical discovery process identifies these app development risks early.
        </>
      ),
    },
    {
      q: '13. How are OS updates and breaking platform changes handled post-launch?',
      a: (
        <>
          Our React Native maintenance services cover compatibility testing and framework updates as iOS and Android evolve.
          <br />
          <br />
          Engineers review third-party dependencies and resolve compatibility issues, helping applications maintain reliable functionality across supported operating system versions.
        </>
      ),
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
                  <div className="px-6 pb-6 pt-0 text-white/90 text-xs sm:text-sm leading-relaxed font-normal">
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
