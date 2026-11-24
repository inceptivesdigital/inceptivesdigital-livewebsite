import { Link } from 'react-router-dom'

export default function AsoCostSection() {
  const tiers = [
    {
      name: 'Foundation',
      price: '$1,500 to $3,000 / month',
      desc: (
        <>
          Keyword research, metadata optimization, and monthly performance reporting for a single platform. Suited to apps that need disciplined visibility work without a full creative overhaul.
        </>
      ),
      features: [
        'Keyword research & metadata optimization',
        'Single-platform coverage (iOS or Android)',
        'Monthly ranking & performance reporting',
        'Category benchmark tracking',
        'Dedicated ASO specialist review',
      ],
    },
    {
      name: 'Growth',
      price: '$3,000 to $6,000 / month',
      desc: (
        <>
          Full metadata and creative optimization across both App Store and Google Play, including A/B testing cycles, competitive monitoring, and localization for up to two markets.
        </>
      ),
      features: [
        'Dual-platform coverage (App Store & Google Play)',
        'Full creative screenshot & preview optimization',
        'Bi-weekly native A/B testing cycles',
        'Competitive intelligence & ranking alerts',
        'Multi-market localization for up to 2 regions',
      ],
    },
    {
      name: 'Scale',
      price: '$6,000 to $12,000+ / month',
      desc: (
        <>
          Multi-market localization, full creative production, continuous testing, review management, and attribution integration across acquisition channels, especially where{' '}
          <Link
            to="/blog/mobile-app-monetization-strategies"
            className="underline text-[#00CE44] font-normal hover:opacity-80 transition-colors"
          >
            mobile app monetization strategies
          </Link>{' '}
          depend directly on store visibility. Built for products where store performance directly moves revenue.
        </>
      ),
      features: [
        'Full multi-market localization (global coverage)',
        'Continuous end-to-end creative production',
        'Review sentiment & rating optimization',
        'Attribution integration with paid UA channels',
        'Weekly strategic check-ins and executive roadmaps',
      ],
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#000000]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            How Much Does{' '}
            <span className="text-[#00CE44]">App Store Optimization Cost?</span>
          </h2>
          <p className="text-white/90 text-[16px] text-center leading-relaxed font-normal max-w-3xl mx-auto">
            ASO pricing ranges from $1,500 per month for foundation work to $12,000 and above, depending on scope, platforms covered, and whether creative production is included, a range worth comparing against general{' '}
            <Link
              to="/blog/mobile-app-development-cost"
              className="text-[#00CE44] underline font-normal hover:opacity-80 transition-colors"
            >
              mobile app development cost
            </Link>{' '}
            benchmarks before setting a budget.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch w-full mb-16">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="p-8 sm:p-9 rounded-[20px] bg-[#1a1a1a] text-left flex flex-col justify-start border-0 shadow-none"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white pb-4 mb-4 border-b border-white/20">
                {tier.name}
              </h3>

              <div className="pb-4 mb-4 border-b border-white/20">
                <div className="text-xl sm:text-2xl font-bold text-[#00CE44] tracking-tight">
                  {tier.price}
                </div>
              </div>

              <div className="pb-5 mb-5 border-b border-white/20">
                <p className="text-xs sm:text-[13.5px] font-normal text-white/90 leading-relaxed">
                  {tier.desc}
                </p>
              </div>

              <ul className="space-y-2.5 text-white/90 text-xs sm:text-[13.5px] leading-relaxed">
                {tier.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44] mt-2 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div
          className="relative overflow-hidden rounded-[20px] pt-10 sm:pt-14 lg:pt-0 pb-0"
          style={{
            background:
              'radial-gradient(circle at 85% 50%, rgba(0, 206, 68, 0.16) 0%, transparent 55%), linear-gradient(135deg, #0b3519 0%, #0d3c1e 50%, #072310 100%)',
          }}
        >
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: `repeating-radial-gradient(circle at 80% 100%, transparent 0, transparent 18px, rgba(0, 206, 68, 0.18) 19px, transparent 20px)`,
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end px-6 sm:px-10 lg:px-12 relative z-10">
            {/* Left Content Column */}
            <div className="lg:col-span-7 lg:py-14 pb-4 lg:pb-14 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white tracking-tight leading-[1.2] mb-3 max-w-2xl">
                Stop Guessing. Start Growing With an ASO Specialist.
              </h2>

              <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal mb-6 max-w-2xl">
                Your app deserves more than a one-time fix. Talk to a specialist who works from data, not assumptions.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors border-0"
                >
                  Book a Free ASO Consultation
                </a>
              </div>
            </div>

            {/* Right Graphic / Phone Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end items-end self-end pt-4 lg:pt-6 pb-0">
              <img
                src="/assets/app-store-optimization/aso-cta-section.png"
                alt="ASO Consultation"
                className="w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px] h-auto object-contain object-bottom block select-none"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
