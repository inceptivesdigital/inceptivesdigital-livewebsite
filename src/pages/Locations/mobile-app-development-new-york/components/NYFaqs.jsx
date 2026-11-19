import { useState } from 'react'

export const nyFaqs = [
  {
    q: 'Q1. How much does it cost to build a mobile app in New York?',
    a: 'Mobile app development costs in New York typically range from $25,000 for an MVP to $250,000+ for enterprise platforms. Final pricing depends on features, integrations, compliance requirements, and platform selection.',
  },
  {
    q: 'Q2. How long does mobile app development take in New York?',
    a: 'A focused MVP is estimated at 8–14 weeks; growth applications at 14–24 weeks; and enterprise platforms at 20–32 weeks. Integrations, approvals, and security reviews can extend delivery.',
  },
  {
    q: 'Q3. Should I choose native or cross-platform app development in New York?',
    a: 'Native iOS or Android development suits demanding hardware and performance requirements. Cross-platform development with Flutter or React Native can reach both audiences from shared code when feature requirements allow it.',
  },
  {
    q: 'Q4. How do I protect my app idea before speaking with an app development company?',
    a: 'A reputable mobile app development company should be willing to sign an NDA before discussing sensitive business details. Intellectual property ownership and confidentiality terms should also be clearly defined in the contract.',
  },
  {
    q: 'Q5. Can NYC startups launch an MVP before a full mobile app?',
    a: 'Yes. A focused MVP helps NYC startups test a core use case with real customers before funding a wider release. Architecture and analytics should support subsequent iterations without assuming that every future feature belongs in the first build.',
  },
  {
    q: 'Q6. What should I expect during the mobile app development process?',
    a: 'A structured process typically includes discovery, product planning, design, development, testing, and launch support. Regular sprint reviews and demos ensure visibility throughout the project lifecycle.',
  },
  {
    q: 'Q7. How do I compare mobile app development companies in New York?',
    a: 'Look beyond hourly rates or the lowest app development quote in New York. Compare relevant projects, technical depth, delivery ownership, documented scope, and ongoing support. Request a clear mobile app development estimate before making a commitment.',
  },
  {
    q: 'Q8. Can I hire mobile app developers in NYC for an existing project?',
    a: 'Yes. Inceptives Digital provides mobile app developers for New York businesses that need additional engineering support or expertise for an existing product. Depending on the project, teams can work with iOS, Android, Flutter, React Native, and backend developers through flexible engagement models.',
  },
  {
    q: 'Q9. What happens after my mobile app is launched?',
    a: 'Mobile app maintenance services in NYC may include crash monitoring, security patches, operating-system compatibility, and fixes based on user feedback. Confirm the support period and ongoing service terms in the agreement.',
  },
]

export default function NYFaqs() {
  const [openIdx, setOpenIdx] = useState(0)

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx)
  }

  return (
    <section id="faqs" className="py-20 lg:py-20 bg-[#000] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Top Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-tight mb-12 sm:mb-16">
          FAQs About Mobile App Development in{' '}
          <span className="text-[#00CE44]">New York</span>
        </h2>

        {/* Accordion Container: Zero Border on Cards */}
        <div className="w-full space-y-4 sm:space-y-5">
          {nyFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx
            return (
              <div
                key={faq.q}
                className="bg-[#1b1c21] rounded-[16px] sm:rounded-[18px] border-0 overflow-hidden transition-colors duration-300 shadow-none"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between text-left p-4 sm:p-6 lg:p-5 gap-4 cursor-pointer focus:outline-none transition-colors group"
                  aria-expanded={isOpen}
                >
                  <h3
                    className={`text-[17px] sm:text-[19px] lg:text-[20px] font-medium tracking-tight leading-snug transition-colors duration-200 ${
                      isOpen
                        ? 'text-[#00CE44]'
                        : 'text-white group-hover:text-white/90'
                    }`}
                  >
                    {faq.q}
                  </h3>

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

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 sm:px-6 lg:px-5 pb-5 sm:pb-6 pt-0 text-white/80 text-sm sm:text-base leading-relaxed font-normal text-left">
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
