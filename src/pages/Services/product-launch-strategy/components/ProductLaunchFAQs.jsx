import { useState } from 'react'

export default function ProductLaunchFAQs() {
  const [openIdx, setOpenIdx] = useState(0)

  const faqs = [
    {
      q: 'What is a product launch strategy?',
      a: 'A product launch strategy is a documented framework that defines who your product is for, how it will be positioned against alternatives, and the exact steps required to bring it to market. It covers the four to eight weeks before launch and the four to eight weeks after, since most launch failures happen in one of those two windows rather than at the go-live moment itself.',
    },
    {
      q: 'How long does a product launch strategy take to develop?',
      a: 'It depends on the product and market complexity, but most launch strategies are developed and ready for execution within two to four weeks.',
    },
    {
      q: 'What is the difference between a soft launch and a full launch?',
      a: 'A soft launch tests the product with a limited audience before the full release. A full launch targets the entire market with a complete campaign behind it.',
    },
    {
      q: 'When should a launch strategy be started?',
      a: 'Ideally, six to eight weeks before the planned go-live date. Starting too late leaves little room to refine positioning, build campaigns, and prepare the right assets.',
    },
    {
      q: 'What does a product launch strategy include?',
      a: 'It covers market research, positioning, messaging, go-to-market planning, campaign execution, app store optimization, and a post-launch growth framework built around the product and its audience.',
    },
    {
      q: 'How much does a product launch strategy cost?',
      a: 'Engagements typically range from $10,000 for focused MVP launches to $100,000 and above for enterprise-scale products requiring full end-to-end strategy and execution support.',
    },
    {
      q: 'Do you work with early-stage startups or only established companies?',
      a: 'Both. The approach adapts to the stage of the product, whether it is a first-time MVP entering the market or an established product expanding into a new one.',
    },
    {
      q: 'What happens after the product launches?',
      a: 'The engagement continues with performance tracking, retention frameworks, and iterative growth planning to sustain momentum and keep the product moving in the right direction post-launch.',
    },
    {
      q: 'How is success measured in a product launch strategy?',
      a: 'Success is measured through installs, sign-ups, retention rates, cost per acquisition, and revenue generated against the targets set at the beginning of the engagement.',
    },
    {
      q: 'Can the launch strategy be adjusted after it goes live?',
      a: 'Absolutely. Performance data is monitored continuously, and the strategy is refined based on what the market responds to, ensuring the launch stays on track toward its goals.',
    },
    {
      q: 'What industries do you work with?',
      a: 'The studio has run launch engagements across fintech, healthtech, consumer apps, enterprise platforms, and more. The methodology adapts to the industry without compromising the standards behind it.',
    },
    {
      q: 'Why is a dedicated launch strategy important?',
      a: 'Without a structured strategy, even the best products get lost. A dedicated launch plan ensures the right audience finds the product at the right time through the right channels.',
    },
  ]

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx)
  }

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-[#000000] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Top Heading */}
        <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-tight mb-12 sm:mb-16">
          Frequently Asked Questions About{' '}
          <span className="text-[#00CE44]">Product Launch Strategy</span>
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
                    {idx + 1}. {faq.q}
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
