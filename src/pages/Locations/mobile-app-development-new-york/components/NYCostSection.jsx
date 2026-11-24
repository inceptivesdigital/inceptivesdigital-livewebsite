import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'

export default function NYCostSection() {
  const tiers = [
    {
      title: 'Foundation App',
      tag: 'Card 1 — Foundation',
      price: '$25,000 to $60,000',
      timeline: '8 to 14 weeks',
      desc: (
        <>
          For New York startups pursuing{' '}
          <Link
            to="/mvp-development"
            className="text-[#00CE44] font-medium underline underline-offset-4"
          >
            MVP development
          </Link>{' '}
          to validate a focused product before a wider investment.
        </>
      ),
      includes: [
        'User authentication',
        'Core features and dashboard',
        'Push notifications',
        'Admin panel',
        'Cloud backend setup',
      ],
      subtext:
        'Built for founders who need a market-ready product without enterprise complexity.',
    },
    {
      title: 'Growth App',
      tag: 'Card 2 — Growth',
      price: '$60,000 to $150,000',
      timeline: '14 to 24 weeks',
      featured: true,
      desc: 'For businesses scaling products across users, features, and integrations.',
      includes: [
        'Native or cross-platform development',
        'API and payment integrations',
        'Multi-role user management',
        'AI-powered features',
        'Compliance-ready architecture',
      ],
      subtext:
        'Ideal for products where scale, integrations, and performance all matter.',
    },
    {
      title: 'Enterprise App',
      tag: 'Card 3 — Enterprise',
      price: '$150,000 to $250,000+',
      timeline: '20 to 32 weeks',
      desc: (
        <>
          For New York enterprises modernizing legacy applications through{' '}
          <Link
            to="/product-rescue-scaling"
            className="text-[#00CE44] font-medium underline underline-offset-4"
          >
            product rescue scaling
          </Link>
          , integrating business systems, or developing mobile products for regulated operations.
        </>
      ),
      includes: [
        'Enterprise-grade architecture',
        'Custom API integrations',
        'AI and automation capabilities',
        'Role-based access controls',
        'Security controls aligned with applicable regulatory and compliance requirements',
      ],
      subtext:
        'Designed for organizations where security, compliance, and scale are non-negotiable.',
    },
  ]

  const hourlyRates = [
    {
      rate: '170-250/hr',
      level: 'Senior Developers | 6+ Years',
    },
    {
      rate: '130-170/hr',
      level: 'Mid-Level Developers | 3–5 Years',
    },
    {
      rate: '90-130/hr',
      level: 'Junior Developers | 0–2 Years',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#07080a] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            How Much Does Mobile App Development Cost in{' '}
            <span className="text-[#00CE44]">NYC?</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            <Link
              to="/blog/mobile-app-development-cost"
              className="text-[#00CE44] font-medium underline underline-offset-4"
            >
              Mobile app development pricing
            </Link>{' '}
            in NYC varies with product scope, target platforms, integrations, and security requirements. These planning ranges distinguish an MVP from a growing application or complex enterprise platform; discovery refines the estimate before work begins.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {tiers.map((t) => (
            <div
              key={t.title}
              className="p-7 sm:p-9 rounded-2xl bg-[#12141a] border-0 text-left flex flex-col justify-between transition-colors shadow-none"
            >
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  {t.title}
                </h3>

                <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-6">
                  {t.desc}
                </p>

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
                <div className="mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-white/50 mb-3">
                    Includes:
                  </div>
                  <ul className="space-y-2.5">
                    {t.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
                        {/* Clean Check Icon: Zero bg, zero border, zero padding */}
                        <Check className="w-4 h-4 text-[#00CE44] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-5 border-t border-white/10 text-xs sm:text-sm text-white/60 italic leading-relaxed">
                {t.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* NYC App Developer Hourly Rates by Experience */}
        <div className="rounded-2xl bg-[#12141a] border-0 p-8 sm:p-10 lg:p-12 text-left">
          <div className="max-w-3xl mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
              NYC App Developer Hourly Rates by Experience
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {hourlyRates.map((rate) => (
              <div
                key={rate.level}
                className="p-6 rounded-xl bg-[#181a20] border-0 transition-colors shadow-none"
              >
                <div className="text-2xl sm:text-3xl font-bold text-[#00CE44] mb-2 tracking-tight">
                  {rate.rate}
                </div>
                <div className="text-base sm:text-lg font-bold text-white">
                  {rate.level}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 text-center">
            <p className="text-white/80 text-sm sm:text-base leading-relaxed font-normal max-w-4xl mx-auto">
              The right development expertise matters more than the hourly rate. Compare technical experience, delivery expectations, and total project costs before you{' '}
              <Link
                to="/blog/how-to-choose-the-right-mobile-app-development-company"
                className="text-[#00CE44] font-medium underline underline-offset-4"
              >
                hire a company
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
