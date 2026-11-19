import { useState } from 'react'

export const singaporeFaqs = [
  {
    q: '1. How much does mobile app development cost in Singapore?',
    a: 'MVP builds start around SGD 30,000 and take 8 to 12 weeks. Feature-rich platforms with AI integration or custom backend work run from SGD 80,000 to over SGD 200,000, with a 3 to 6 month timeline, depending on platform count and integration complexity.',
  },
  {
    q: '2. How long does it take to build a mobile app?',
    a: 'An MVP typically takes 8 to 12 weeks to build. Larger, feature-rich products take 3 to 6 months, depending on the number of platforms, integrations, and how much custom backend work the product needs.',
  },
  {
    q: '3. Should I build a native or cross-platform mobile app?',
    a: 'Native development suits products that need deep platform-specific features, top-tier performance, or heavy App Store optimization. Cross-platform frameworks like Flutter or React Native suit products prioritizing speed to market and a shared codebase across iOS and Android.',
  },
  {
    q: '4. Do you develop mobile apps for startups and established businesses in Singapore?',
    a: 'Yes. Inceptives Digital builds mobile apps for startups validating a first product and for established Singapore businesses scaling an existing platform, with the same senior engineering team involved from discovery through launch on both.',
  },
  {
    q: '5. Do you provide mobile app modernisation services in Singapore?',
    a: 'Yes. Existing applications are assessed for performance issues, outdated architecture, usability problems, and integration limitations. The findings determine whether targeted improvements, infrastructure upgrades, or a complete rebuild make commercial and technical sense.',
  },
  {
    q: '6. Which industries does Inceptives Digital build mobile apps for?',
    a: 'Inceptives Digital has shipped mobile apps across more than 20 industries, including FinTech, healthcare, logistics, eCommerce, education, real estate, manufacturing, travel, and fitness. A related industry outside this list is still worth a conversation.',
  },
  {
    q: '7. Do you provide UI/UX design as part of mobile app development?',
    a: 'Yes. UI/UX design runs inside the discovery and validation stage of the project, with real users testing interactive prototypes before development starts, so usability problems surface while they are still cheap to fix.',
  },
  {
    q: '8. Can you integrate third-party services and enterprise systems into my mobile app?',
    a: 'Yes. Backend and API development covers integrations with payment platforms such as PayNow and SGQR, identity and authentication services like SingPass and MyInfo, as well as CRM, ERP, and other third-party APIs. Every integration is designed to support reliable performance and future product growth.',
  },
  {
    q: '9. Will you publish my app to the Apple App Store and Google Play?',
    a: 'Yes. The deployment stage covers App Store and Google Play submissions, including production configuration, listing requirements, and final release checks. Both stores retain control over review decisions, and any requested changes are addressed during submission.',
  },
  {
    q: '10. Do you provide mobile app maintenance services in Singapore?',
    a: 'Yes. Support covers application monitoring, bug fixes, security updates, operating-system compatibility, and feature improvements. The initial thirty-day support period is followed by ongoing maintenance arrangements according to the agreed project terms.',
  },
  {
    q: '11. How do you ensure security and PDPA compliance in mobile apps?',
    a: 'Every build follows PDPA data handling requirements, OWASP Top 10 protections against common vulnerabilities, and encryption for data at rest and in transit, with security reviews running through the QA stage before any release reaches production.',
  },
  {
    q: '12. Why choose Inceptives Digital as your mobile app development company in Singapore?',
    a: 'Senior engineers stay on the project from discovery through launch, architecture considers applicable PDPA requirements, and the same team has shipped mobile apps across more than 20 industries.',
  },
  {
    q: '13. Do you sign NDAs before discussing a mobile app idea?',
    a: 'Yes. Inceptives Digital signs a mutual NDA before any product discussion that involves proprietary details, protecting the idea, the data, and the business model discussed on the call.',
  },
  {
    q: '14. Can I hire mobile app developers in Singapore for an existing project?',
    a: 'Yes. Inceptives Digital offers dedicated mobile app developers and specialist engineering support for existing applications. Engagements can cover iOS, Android, Flutter, React Native, and backend development, with responsibilities and resource allocation agreed before work begins.',
  },
]

export default function SingaporeFaqs() {
  const [openIdx, setOpenIdx] = useState(0)

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx)
  }

  return (
    <section id="faqs" className="py-20 lg:py-28 bg-[#000000] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Top Heading: H2, 40px bold, white, centered matching Homepage FAQ */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="text-[#00CE44] text-xs sm:text-sm font-semibold uppercase tracking-widest block mb-3">
            Common Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-tight">
            Frequently Asked <span className="text-[#00CE44]">Questions</span>
          </h2>
        </div>

        {/* Accordion Container matching Homepage FAQSection full 1600px width */}
        <div className="w-full space-y-4 sm:space-y-5">
          {singaporeFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx

            return (
              <div
                key={faq.q}
                className="bg-[#1b1c21] rounded-[16px] sm:rounded-[18px] border border-white/[0.04] overflow-hidden transition-colors duration-300"
              >
                {/* Accordion Header / Trigger Button */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between text-left p-4 sm:p-6 lg:p-6 gap-4 cursor-pointer focus:outline-none transition-colors group"
                  aria-expanded={isOpen}
                >
                  {/* Question Text: Green #00CE44 when active/open, White when closed */}
                  <h3
                    className={`text-[17px] sm:text-[19px] lg:text-[20px] font-medium tracking-tight leading-snug transition-colors duration-200 ${
                      isOpen
                        ? 'text-[#00CE44]'
                        : 'text-white group-hover:text-white/90'
                    }`}
                  >
                    {faq.q}
                  </h3>

                  {/* Chevron Icon: Green pointing up when open, gray pointing down when closed */}
                  <span
                    className={`shrink-0 transition-transform duration-300 ease-in-out ${
                      isOpen
                        ? 'rotate-180 text-[#00CE44]'
                        : 'rotate-0 text-slate-400 group-hover:text-slate-200'
                    }`}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>

                {/* Smooth Animated Accordion Dropdown Content (CSS Grid Row Transition) */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 sm:px-6 lg:px-8 pb-5 sm:pb-6 text-white/80 text-sm sm:text-base leading-relaxed border-t border-white/[0.04] pt-4">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
