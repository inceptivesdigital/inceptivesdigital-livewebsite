import { useState } from 'react'

export default function FAQSection({ faqs: customFaqs, heading = "Frequently Asked Questions." }) {
  // Default first item expanded as on live site
  const [openIdx, setOpenIdx] = useState(0)

  const defaultFaqs = [
    {
      q: 'Will my app look and feel native on both platforms?',
      a: 'Every project starts with a structured discovery phase. Goals, industry dynamics, and user profiles are documented before development begins, so the application produces measurable business outcomes rather than just technical deliverables.'
    },
    {
      q: 'Which frameworks do you use for cross-platform development?',
      a: 'Yes. The full iOS application development lifecycle is managed in-house: discovery, UI/UX, development, QA, App Store submission, and post-launch optimization. One team, one point of accountability.'
    },
    {
      q: 'Is cross-platform better than native development?',
      a: 'The difference between iOS app development companies that deliver and those that do not comes down to process discipline, compliance depth, and post-launch accountability. A company worth engaging can show a documented sprint process, a verifiable App Store acceptance rate, written SLA terms for post-launch support, and a clean IP transfer policy.'
    },
    {
      q: 'Will you keep us involved throughout the development process?',
      a: 'Yes. Development runs on two-week Agile sprints with a working build shared for review at each cycle. Feedback and scope adjustments are built into the process.'
    }
  ]

  const faqs = customFaqs && customFaqs.length > 0 ? customFaqs : defaultFaqs

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx)
  }

  return (
    <section id="faqs" className="py-20 lg:py-20 bg-[#000] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        
        {/* Top Heading: H2, 40px bold, white, centered */}
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-tight mb-12 sm:mb-16">
          {heading}
        </h2>

        {/* Accordion Container */}
        <div className="w-full space-y-4 sm:space-y-5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx
            const qText = faq.q || faq.question
            const aContent = faq.a ?? faq.answer

            return (
              <div
                key={typeof qText === 'string' ? qText : idx}
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
                    {qText}
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
                    <div className="px-4 sm:px-6 lg:px-5 pb-6 sm:pb-7 pt-0 text-slate-300 text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed font-normal [&_a]:text-[#00CE44] [&_a]:underline hover:[&_a]:text-white [&_a]:transition-colors">
                      {typeof aContent === 'string' ? (
                        <p dangerouslySetInnerHTML={{ __html: aContent }} />
                      ) : (
                        <p>{aContent}</p>
                      )}
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
