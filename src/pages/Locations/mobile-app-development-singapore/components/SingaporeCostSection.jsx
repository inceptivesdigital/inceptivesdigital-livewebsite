import { Link } from 'react-router-dom'

export default function SingaporeCostSection() {
  const tiers = [
    {
      title: 'MVP Mobile Applications',
      price: 'SGD 30,000 – 80,000+',
      timeline: '8–12 Weeks',
      desc: (
        <>
          A focused starting point for Singapore startups using{' '}
          <Link to="/mvp-development" className="text-[#00CE44] font-medium underline underline-offset-4">
            MVP development
          </Link>{' '}
          to test essential functionality and customer demand.
        </>
      ),
      includes: [
        'Core mobile features',
        'Single platform focus',
        'Basic backend requirements',
        'Initial user validation',
      ],
    },
    {
      title: 'Custom Mobile Applications',
      price: 'SGD 80,000 – 200,000+',
      timeline: '3–6 Months',
      desc: 'Fits businesses that need advanced workflows, a polished experience, and stronger product infrastructure.',
      includes: [
        'iOS and Android development',
        'Custom UI/UX systems',
        'API integrations',
        'Advanced backend capabilities',
      ],
    },
    {
      title: 'Enterprise Mobile App Development',
      price: 'SGD 200,000+',
      timeline: '6+ Months',
      desc: 'Complex products need deeper engineering investment to support large-scale operations, security requirements, and evolving business needs.',
      includes: [
        'Complex user roles',
        'Enterprise integrations',
        'Advanced security standards',
        'Scalable cloud architecture',
      ],
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0c0d10] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <span className="text-[#00CE44] text-xs sm:text-sm font-semibold uppercase tracking-widest block mb-3">
            Investment Transparency
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            How Much Does Mobile App Development{' '}
            <span className="text-[#00CE44]">Cost in Singapore?</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            At Inceptives Digital, we scope{' '}
            <Link
              to="/blog/mobile-app-development-cost"
              className="text-[#00CE44] font-medium underline underline-offset-4"
            >
              mobile app development cost
            </Link>{' '}
            around features, architecture decisions, platform requirements, and the foundation needed for long-term product growth.
          </p>
        </div>

        {/* 3 Pricing Cards: Matching screenshot #15 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`bg-[#12141a] rounded-[24px] p-8 sm:p-10 flex flex-col justify-between border-0 shadow-none text-left transition-all duration-300 hover:scale-[1.02] ${
                idx === 1 ? 'relative' : ''
              }`}
            >
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
                  {tier.title}
                </h3>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#00CE44] tracking-tight mb-2">
                  {tier.price}
                </div>
                <div className="text-white/60 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-6">
                  Typical Timeline: {tier.timeline}
                </div>

                <div className="text-white/80 text-sm sm:text-base leading-relaxed font-normal mb-8 pb-6 border-b border-white/10">
                  {tier.desc}
                </div>

                <div className="space-y-3.5 mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-white/50 block mb-2">
                    Included Features:
                  </span>
                  {tier.includes.map((inc, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-[#00CE44] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                      <span className="text-white/90 text-sm font-medium">
                        {inc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Link
                  to="/contact-us"
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-sm transition-colors border-0"
                >
                  Request a Detailed Scope
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
