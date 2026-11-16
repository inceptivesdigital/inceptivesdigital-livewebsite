import { useState } from 'react'

export default function WebAppFAQs() {
  const [openIdx, setOpenIdx] = useState(0)

  const faqs = [
    {
      q: '1. What is a web application?',
      a: 'A web application is software that runs in a browser, such as Salesforce, Notion, or Shopify. It processes data, responds to user inputs, and scales with the business.',
    },
    {
      q: '2. What is the difference between a web app and a website?',
      a: 'A website presents information. A web application is interactive software. Users log in, complete tasks, and the product responds to their inputs in real time.',
    },
    {
      q: '3. How long does it take to build a web application?',
      a: 'A focused MVP takes eight to fourteen weeks. A production-ready product runs twelve to twenty-four weeks. Enterprise platforms vary based on scope and integrations.',
    },
    {
      q: '4. How much does web application development cost?',
      a: 'The range sits between $20,000 for an early-stage product and $200,000 or more for enterprise platforms with complex backend and integration requirements.',
    },
    {
      q: '5. What tech stack do you use?',
      a: 'It depends on the product. React and Next.js on the front-end, Node.js or Python on the backend, and AWS or Google Cloud for infrastructure.',
    },
    {
      q: '6. Do you work with startups?',
      a: 'Yes. From early-stage teams validating a product idea to enterprises rebuilding legacy systems. The process is scoped around what the product needs, regardless of company size.',
    },
    {
      q: '7. Can you migrate an existing web application to a new stack?',
      a: 'Yes. As a custom web app development firm, we handle full migrations, including codebase restructuring, feature parity validation, and performance benchmarking, without disrupting the users already on the product.',
    },
    {
      q: '8. How do you handle security in web applications?',
      a: 'Security is built into the architecture from day one. Zero-trust access controls, encrypted communication, and strict API boundaries are standard across every product we build.',
    },
    {
      q: '9. What happens after the web application launches?',
      a: 'Launch is the beginning. Performance monitoring, bug fixes, dependency updates, and new feature development continue as a dedicated engagement for as long as the product needs it.',
    },
    {
      q: '10. Do you build custom web applications or use templates?',
      a: "Everything is built from scratch around the product's actual requirements. Templates and off-the-shelf solutions stop serving complex products at a predictable point.",
    },
    {
      q: '11. How do you ensure the web application performs at scale?',
      a: 'Applications are profiled under realistic load conditions before launch. Infrastructure is architected for the traffic the product will face, not just what it faces on day one.',
    },
    {
      q: '12. Can you integrate third-party tools into our web application?',
      a: 'Yes. Payment processors, CRMs, analytics platforms, logistics APIs, and data pipelines are all handled. Every integration is built with long-term maintainability in mind.',
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
          <span className="text-[#00CE44]">Web App Development Services</span>
        </h2>

        {/* Accordion Container matching IosFAQs */}
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
