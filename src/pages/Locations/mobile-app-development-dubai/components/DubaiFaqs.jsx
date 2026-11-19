import { useState } from 'react'

export default function DubaiFaqs() {
  // Default first item expanded as on homepage
  const [openIdx, setOpenIdx] = useState(0)

  const faqs = [
    {
      q: '1. How much does mobile app development cost in Dubai?',
      a: 'Mobile app development cost in Dubai typically ranges from AED 110,000 for an MVP to AED 550,000+ for enterprise platforms. The final investment depends on product scope, technical complexity, and integrations, with a fixed proposal prepared following the discovery phase.',
    },
    {
      q: '2. How long does it take to build a mobile app in Dubai?',
      a: 'A focused MVP typically takes 8–14 weeks, while growth-stage applications require 14–24 weeks. Enterprise platforms may take 20–32 weeks or longer, depending on integrations, security requirements, and external approvals.',
    },
    {
      q: '3. What is the difference between native and cross-platform app development?',
      a: 'Native development builds separately for iOS and Android using Swift and Kotlin, best suited to performance-heavy features. Cross-platform development, through Flutter or React Native, shares one codebase across both platforms, cutting timeline and long-term maintenance cost.',
    },
    {
      q: '4. What data protection laws apply to mobile apps built in Dubai?',
      a: 'The UAE Personal Data Protection Law governs applicable personal data processing, individual rights, and security obligations. Additional requirements may arise under DIFC regulations or sector-specific laws. Data hosting and international transfers require assessment against the relevant legal framework.',
    },
    {
      q: '5. Do mobile apps built for the Dubai market need multilingual support?',
      a: "Most do. Dubai's resident and customer base regularly switches between Arabic, English, Hindi, and Urdu, so interfaces typically need Arabic right-to-left layouts alongside these languages from the first wireframe rather than as a later localization pass.",
    },
    {
      q: '6. Which industries use custom mobile app development services in Dubai?',
      a: 'FinTech, healthcare, real estate, logistics, retail, hospitality, and government-adjacent projects represent the most active sectors, though most customer-facing or operational businesses now use custom development. Inceptives Digital has delivered projects across more than twenty of these sectors.',
    },
    {
      q: '7. What mobile app development services are available in Dubai?',
      a: 'Available services typically span iOS, Android, React Native, Flutter, Kotlin Multiplatform, and cross-platform development, alongside web application and backend engineering. Inceptives Digital offers all of these under one engagement rather than splitting a project across separate vendors.',
    },
    {
      q: '8. Which mobile app development company in Dubai works with startups and growth-stage founders?',
      a: 'Inceptives Digital works with founders building a new product and product leaders scaling an existing one, covering iOS, Android, cross-platform, and backend engineering across Dubai and international markets under a single engagement.',
    },
    {
      q: '9. Do mobile app development companies in Dubai offer post-launch support?',
      a: 'Yes. Most reputable studios include monitoring, performance tuning, and bug fixes as part of a build, though the length and depth of that support vary by contract. Inceptives Digital sets a defined response window for critical fixes versus routine updates, agreed in writing rather than left open-ended.',
    },
    {
      q: '10. What makes a mobile app development company one of the best in Dubai?',
      a: 'Inceptives Digital brings over eight years of product engineering experience, with 70+ projects delivered across 20+ industries. Clients can assess its development expertise through published case studies, independent reviews, and documented delivery processes.',
    },
    {
      q: '11. Who owns the code and intellectual property after a mobile app is built?',
      a: 'The client typically owns all code and intellectual property once final payment clears, provided the contract states this explicitly. Inceptives Digital transfers full IP ownership on project completion, a term confirmed in writing before development starts rather than negotiated after launch.',
    },
    {
      q: '12. Can I hire mobile app developers in Dubai for an existing project?',
      a: 'Yes. Inceptives Digital offers dedicated development teams and IT staff augmentation for businesses extending an existing application or adding engineering capacity. Engagements can include iOS, Android, cross-platform, and backend specialists, with responsibilities agreed before development begins.',
    },
  ]

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx)
  }

  return (
    <section id="faqs" className="py-20 lg:py-24 bg-[#000] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Top Heading: Exact Homepage Typography */}
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-tight mb-12 sm:mb-16">
          Frequently Asked Questions.
        </h2>

        {/* Accordion Container: Exact Homepage FAQSection Structure */}
        <div className="w-full space-y-4 sm:space-y-5">
          {faqs.map((faq, idx) => {
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
                  className="w-full flex items-center justify-between text-left p-4 sm:p-6 lg:p-5 gap-4 cursor-pointer focus:outline-none transition-colors group"
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
                      aria-hidden="true"
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
                    <div className="px-4 sm:px-6 lg:px-5 pb-6 sm:pb-7 pt-0 text-slate-300 text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed font-normal [&_a]:text-[#00CE44] [&_a]:underline hover:[&_a]:text-white [&_a]:transition-colors">
                      <p>{faq.a}</p>
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
