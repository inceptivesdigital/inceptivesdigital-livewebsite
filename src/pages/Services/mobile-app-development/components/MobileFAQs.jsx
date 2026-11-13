import { useState } from 'react'

export default function MobileFAQs() {
  const [openIdx, setOpenIdx] = useState(0)

  const faqs = [
    {
      q: '1. How much does custom mobile app development cost?',
      a: (
        <>
          Custom{' '}
          <a
            href="https://inceptivesdigital.com/blog/mobile-app-development-cost"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            mobile app development costs
          </a>{' '}
          vary by scope. MVPs range from $25,000 to $50,000, growth products from $60,000 to $150,000, and complex enterprise platforms start at $180,000. Structured discovery fixes the final investment in writing before development begins.
        </>
      ),
    },
    {
      q: '2. How long does it take to build a custom mobile app?',
      a: (
        <>
          Building a production-ready mobile app typically follows an{' '}
          <a
            href="https://inceptivesdigital.com/blog/app-development-timeline"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            app development timeline
          </a>{' '}
          of 2–6 months. MVPs launch in 2–3 months and growth products in 3–6, while complex multi-platform enterprise solutions run 6+ months of engineering, QA testing, and release validation.
        </>
      ),
    },
    {
      q: '3. Should I choose native or cross-platform app development?',
      a: 'Choose native for maximum performance and deep hardware access. Choose cross-platform with Flutter or React Native when speed to market and one shared codebase matter more. We confirm the path in discovery, based on your goals and budget.',
    },
    {
      q: '4. How do you choose the right tech stack for a mobile app?',
      a: 'For custom mobile apps, our senior architects evaluate your product requirements, offline data needs, and system dependencies during discovery. They document the reasoning before the first sprint, so the technology supports your roadmap instead of limiting it.',
    },
    {
      q: '5. What is the difference between an MVP and a full-scale mobile app?',
      a: (
        <>
          An{' '}
          <a
            href="https://inceptivesdigital.com/blog/mvp-mobile-app-development"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            MVP
          </a>{' '}
          validates the idea, while a full-scale custom mobile app scales it:
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>MVP: only core features, for rapid market validation.</li>
            <li>
              Full-scale app: advanced functionality, multi-tenant scalability, and third-party enterprise integrations for growing user bases.
            </li>
          </ul>
        </>
      ),
    },
    {
      q: '6. How do you protect user data and ensure app security?',
      a: (
        <>
          Our custom mobile app development services build in{' '}
          <a
            href="https://inceptivesdigital.com/blog/mobile-app-security-best-practices"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            mobile app security best practices
          </a>{' '}
          from the first sprint, using encrypted data storage and OAuth 2.0 authentication, backed by regular vulnerability testing. Regulated products follow GDPR and HIPAA requirements where they apply.
        </>
      ),
    },
    {
      q: '7. Can you modernize or redesign an existing legacy mobile app?',
      a: 'Yes. Modernization starts with a code and performance audit. We refactor outdated codebases and upgrade obsolete SDKs, moving the app to modern cloud architecture without a full rebuild, so users keep the features they rely on.',
    },
    {
      q: '8. What does the mobile app development process look like?',
      a: (
        <>
          Our custom mobile app development process has six stages, with a working build every two weeks:
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Product discovery and scoping</li>
            <li>UX/UI prototyping and validation</li>
            <li>Agile sprint engineering</li>
            <li>Real-hardware QA testing</li>
            <li>App Store and Google Play deployment</li>
            <li>Post-launch monitoring and optimization</li>
          </ul>
        </>
      ),
    },
    {
      q: '9. Do you provide post-launch support and app maintenance?',
      a: 'Yes. Our engineers stay on your product after launch. Our mobile app maintenance services cover OS and SDK upgrades, crash monitoring, bug fixes, and performance tuning, so the app stays stable as devices evolve.',
    },
    {
      q: '10. How do you handle intellectual property (IP) and source code ownership?',
      a: 'You own the intellectual property, source code, and design assets of your app. Full rights transfer to you at each milestone payment, and repository access stays open throughout the development process.',
    },
    {
      q: '11. Should I hire an agency or freelancer for an MVP?',
      a: (
        <>
          For an MVP,{' '}
          <a
            href="https://inceptivesdigital.com/blog/how-to-hire-a-mobile-app-development-company"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            hiring a product studio
          </a>{' '}
          carries less delivery risk than a solo freelancer:
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>
              Freelancer: lower upfront cost, but one person becomes a single point of failure.
            </li>
            <li>
              Studio team: strategy, design, engineering, and QA under one accountable lead.
            </li>
          </ul>
        </>
      ),
    },
    {
      q: '12. Will you sign an NDA?',
      a: 'Yes. We sign an NDA before discovery begins, so your custom mobile app idea, data, and plans stay confidential. Send your own agreement or ask for ours, and we start the discovery consultation once it is in place.',
    },
    {
      q: '13. How do I start a custom mobile app development project with Inceptives Digital?',
      a: 'Start with our contact form or call (469) 788-8527 to book a discovery consultation. We map your technical scope, then confirm the timeline and fixed investment in writing before development begins.',
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
          <span className="text-[#00CE44]">Custom Mobile App Development</span> FAQs
        </h2>

        {/* Accordion Container matching Image 5: Flat #242424 cards, + / - indicator, Zero Borders, Zero Shadows */}
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
                    className={`text-sm sm:text-base font-bold tracking-tight leading-snug transition-colors duration-200 ${isOpen ? 'text-[#00CE44]' : 'text-white'
                      }`}
                  >
                    {faq.q}
                  </h3>

                  <span
                    className={`shrink-0 text-lg font-bold leading-none select-none ${isOpen ? 'text-[#00CE44]' : 'text-white'
                      }`}
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-white/90 text-xs sm:text-sm leading-relaxed font-normal whitespace-pre-line [&_a]:text-[#00CE44] [&_a]:underline hover:[&_a]:text-white [&_a]:transition-colors">
                    {typeof faq.a === 'string' ? (
                      <div dangerouslySetInnerHTML={{ __html: faq.a }} />
                    ) : (
                      <div>{faq.a}</div>
                    )}
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
