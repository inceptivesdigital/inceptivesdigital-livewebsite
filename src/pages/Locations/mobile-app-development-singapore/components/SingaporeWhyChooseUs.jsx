import { Link } from 'react-router-dom'

export default function SingaporeWhyChooseUs() {
  const pillars = [
    {
      title: 'Senior Ownership at Every Stage',
      desc: (
        <>
          Every engagement is led by senior product strategists, solution architects, and engineering leads who stay involved from discovery through launch, not handed off once the contract is signed, which settles the{' '}
          <Link
            to="/blog/in-house-development-vs-app-development-partner"
            className="text-[#00CE44] font-medium underline underline-offset-4"
          >
            in-house vs development partner
          </Link>{' '}
          question for many clients.
        </>
      ),
      icon: (
        <svg className="w-10 h-10 text-[#00CE44]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
        </svg>
      ),
    },
    {
      title: 'Architecture Designed for Growth',
      desc: (
        <>
          Scalable cloud infrastructure and modern microservices, backed by{' '}
          <Link
            to="/blog/mobile-app-performance-optimization"
            className="text-[#00CE44] font-medium underline underline-offset-4"
          >
            mobile app performance optimization
          </Link>
          , handle growing traffic, regional expansion, and new features without requiring a rebuild of the systems already in production.
        </>
      ),
      icon: (
        <svg className="w-10 h-10 text-[#00CE44]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
        </svg>
      ),
    },
    {
      title: 'Continuous Monitoring After Launch',
      desc: (
        <>
          24/7 performance monitoring, security patching, and scheduled feature releases keep the product stable long after ship date, and a clear view of{' '}
          <Link
            to="/blog/mobile-app-maintenance-cost"
            className="text-[#00CE44] font-medium underline underline-offset-4"
          >
            mobile app maintenance cost
          </Link>{' '}
          keeps budgets predictable.
        </>
      ),
      icon: (
        <svg className="w-10 h-10 text-[#00CE44]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
        </svg>
      ),
    },
    {
      title: 'Compliance Built From the Beginning',
      desc: (
        <>
          We address PDPA-aligned data handling and MAS-aware architecture for regulated builds in fintech, healthcare, and other sensitive industries at the architecture stage, using{' '}
          <Link
            to="/blog/app-development-risk-management"
            className="text-[#00CE44] font-medium underline underline-offset-4"
          >
            app development risk management
          </Link>
          , rather than patching them in before an audit.
        </>
      ),
      icon: (
        <svg className="w-10 h-10 text-[#00CE44]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#000000] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <span className="text-[#00CE44] text-xs sm:text-sm font-semibold uppercase tracking-widest block mb-3">
            The Inceptives Difference
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            The Reasons Businesses{' '}
            <span className="text-[#00CE44]">Choose to Build With Us</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Strong engineering is only part of a successful product, and knowing how to{' '}
            <Link
              to="/blog/how-to-choose-the-right-mobile-app-development-company"
              className="text-[#00CE44] font-medium underline underline-offset-4"
            >
              choose the right company
            </Link>{' '}
            matters just as much. Businesses in Singapore choose Inceptives Digital for the combination of product strategy, technical leadership, and long-term thinking that guides every stage of development.
          </p>
        </div>

        {/* 4 Pillars Grid: Matching screenshot #16 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch mb-12">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className="bg-[#12141a] rounded-[22px] p-7 sm:p-9 flex flex-col justify-between border-0 shadow-none text-left transition-all duration-300 hover:scale-[1.01]"
            >
              <div>
                <div className="mb-6 flex items-center justify-start">
                  {p.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug mb-4">
                  {p.title}
                </h3>
                <div className="text-white/80 text-sm sm:text-base leading-relaxed font-normal">
                  {p.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/contact-us"
            className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-base transition-colors border-0"
          >
            Start the Conversation
          </Link>
        </div>
      </div>
    </section>
  )
}
