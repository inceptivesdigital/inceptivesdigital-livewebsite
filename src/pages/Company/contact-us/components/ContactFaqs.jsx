import { useState } from 'react'

const faqs = [
  {
    q: 'What industries does Inceptives Digital have experience in?',
    a: "Healthcare, fintech, e-commerce, and logistics are among the industries we've delivered products for, with our approach adapting to each one's specific needs.",
  },
  {
    q: 'What type of digital products do you build?',
    a: 'We build web applications, mobile apps, and custom software products, covering everything from early-stage MVPs to full-scale platforms for established businesses.',
  },
  {
    q: 'Do you work with startups or only established companies?',
    a: 'We work with both, and we have supported early-stage founders building their first product as well as established teams scaling existing platforms.',
  },
  {
    q: 'How experienced is your development and design team?',
    a: 'Our team includes engineers and designers who have shipped 70+ products, bringing hands-on experience across different tech stacks and industries.',
  },
  {
    q: 'How do I get started with a project?',
    a: 'Reach out through the contact form or book a call, and our team will respond within one business day to discuss your goals.',
  },
  {
    q: 'What should I prepare before reaching out?',
    a: 'A brief overview of your project, your industry, your timeline, and any existing materials like designs or documentation help us respond faster and more accurately.',
  },
  {
    q: 'Do you offer ongoing support after a product launches?',
    a: 'Yes, we provide post-launch support and maintenance, so your product keeps running smoothly and evolves as your business grows.',
  },
  {
    q: 'Can you work with an existing codebase or team?',
    a: "Yes, we regularly join existing projects to improve, extend, or rebuild parts of a product alongside a client's in-house team.",
  },
  {
    q: 'How long does it typically take to receive a project quote?',
    a: 'Most clients receive a detailed quote within 2 to 3 business days after an initial discussion about their project.',
  },
  {
    q: 'What makes Inceptives Digital different from other digital product studios?',
    a: 'We combine technical depth with design thinking, and our team stays involved through launch and beyond rather than handing off and disappearing.',
  },
]

export default function ContactFaqs() {
  // Default first item open as on site-wide FAQ sections
  const [openIdx, setOpenIdx] = useState(0)

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx)
  }

  return (
    <section id="faqs" className="py-20 lg:py-24 bg-[#000] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Top Heading: H2, 40px bold, white, centered */}
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-tight mb-12 sm:mb-16">
          Frequently Asked Questions.
        </h2>

        {/* Accordion Container */}
        <div className="w-full max-w-5xl mx-auto space-y-4 sm:space-y-5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx

            return (
              <div
                key={faq.q}
                className="bg-[#1b1c21] rounded-[16px] sm:rounded-[18px] border border-white/[0.04] overflow-hidden transition-colors duration-300 text-left"
              >
                {/* Accordion Header / Trigger Button */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between text-left p-4 sm:p-6 lg:p-5 gap-4 cursor-pointer focus:outline-none transition-colors group bg-transparent border-0"
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
                    {idx + 1}. {faq.q}
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

                {/* Smooth Animated Accordion Dropdown Content */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 sm:px-6 lg:px-5 pb-6 sm:pb-7 pt-0 text-slate-300 text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed font-normal">
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
