import { Link } from 'react-router-dom'

function CheckCircleFill({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  )
}

export default function LondonCostSection() {
  const tiers = [
    {
      title: 'MVP Application',
      timeline: '8–12 Weeks',
      price: '£20,000 – £40,000',
      includes: [
        'Ships with essential core features',
        'Puts the concept before real users',
        'Captures early user feedback',
        'Tests genuine market demand',
        'Lays a foundation for growth',
      ],
    },
    {
      title: 'Standard Business App',
      timeline: '3–5 Months',
      price: '£40,000 – £85,000',
      includes: [
        'Delivers a complete mobile product',
        'Includes the features that daily operations need',
        'Connects key third-party integrations',
        'Handles real customer traffic reliably',
        'Scales as the business grows',
      ],
    },
    {
      title: 'Enterprise Mobile Application',
      timeline: '6–12+ Months',
      price: '£85,000 – £175,000+',
      includes: [
        'Handles intricate, high-volume workflows',
        'Enforces strict enterprise-grade security',
        'Connects deep system integrations',
        'Delivers architecture stable at scale',
        'Supports thousands of concurrent users',
        'Sustains scalability across years of releases',
      ],
    },
  ]

  const costDrivers = [
    { driver: 'AI Features', impact: 'High' },
    { driver: 'Backend Complexity', impact: 'High' },
    { driver: 'Enterprise Security & Compliance', impact: 'High' },
    { driver: 'Third-Party Integrations', impact: 'Medium' },
    { driver: 'Native iOS and Android Development', impact: 'Medium' },
    { driver: 'Advanced UX/UI Requirements', impact: 'Medium' },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#07080a] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            How Much Does Mobile App Development Cost for{' '}
            <span className="text-[#00CE44]">London Businesses?</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            <Link
              to="/blog/mobile-app-development-cost"
              className="text-[#00CE44] font-medium underline underline-offset-4"
            >
              Mobile app development cost
            </Link>{' '}
            in London depends on scope, platform choice, integrations, and security needs. Indicative budgets range from £20,000 for an MVP to over £175,000 for enterprises.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {tiers.map((t) => (
            <div
              key={t.title}
              className="p-7 sm:p-9 rounded-2xl bg-[#12141a] border-0 text-left flex flex-col justify-between transition-colors shadow-none"
            >
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#00CE44] mb-5">
                  {t.title}
                </h3>

                {/* Price Box */}
                <div className="bg-[#181a20] border-0 p-5 rounded-xl mb-6">
                  <div className="text-xs uppercase tracking-wider text-white/50 font-bold mb-1">
                    Estimated Cost:
                  </div>
                  <div className="whitespace-nowrap font-bold text-lg sm:text-xl lg:text-[19px] xl:text-2xl tracking-tight text-white mb-1.5 shrink-0">
                    {t.price}
                  </div>
                  <div className="text-xs sm:text-sm text-[#00CE44] font-medium">
                    Timeline: {t.timeline}
                  </div>
                </div>

                {/* Includes List */}
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-white/50 mb-3">
                    Includes:
                  </div>
                  <ul className="space-y-2.5">
                    {t.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                        <CheckCircleFill className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* What Changes Mobile App Development Cost? Table */}
        <div className="w-full">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-white tracking-tight leading-tight">
              What Changes Mobile App{' '}
              <span className="text-[#00CE44]">Development Cost?</span>
            </h3>
          </div>

          <div className="w-full overflow-x-auto no-scrollbar pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <table className="w-full text-left border-separate border-spacing-y-2.5 min-w-[480px]">
              <thead>
                <tr className="bg-[#00CE44] text-black">
                  <th className="py-4 sm:py-5 px-6 text-sm sm:text-base font-extrabold text-black rounded-l-xl">
                    Cost Driver
                  </th>
                  <th className="py-4 sm:py-5 px-6 text-sm sm:text-base font-extrabold text-black text-center rounded-r-xl">
                    Impact
                  </th>
                </tr>
              </thead>
              <tbody>
                {costDrivers.map((row) => (
                  <tr
                    key={row.driver}
                    className="bg-[#121318] hover:bg-[#181922] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.6)] group relative z-0 hover:z-10 cursor-pointer select-none"
                  >
                    <td className="py-4 px-6 text-sm sm:text-[15px] font-medium text-white/90 rounded-l-xl border-0 group-hover:text-white transition-all duration-300 ease-out">
                      {row.driver}
                    </td>
                    <td className="py-4 px-6 text-sm sm:text-[15px] font-semibold text-[#00CE44] text-center rounded-r-xl border-0 transition-all duration-300 ease-out">
                      {row.impact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
