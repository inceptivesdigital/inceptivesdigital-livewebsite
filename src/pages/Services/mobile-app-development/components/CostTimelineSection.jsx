export default function CostTimelineSection() {
  const tiers = [
    {
      name: 'MVP Mobile App',
      priceAndTimeline: '$25,000 – $50,000 | 2–3 months',
      target: 'For initial product validation',
      features: [
        'Core user journeys and screens',
        'Focused native or cross-platform build',
        'Standard login and essential APIs',
        'App Store and Google Play submission',
      ],
    },
    {
      name: 'Growth-Stage Mobile App',
      priceAndTimeline: '$60,000 – $150,000 | 3–6 months',
      target: 'For expanding product capabilities',
      features: [
        'Multiple user roles and workflows',
        'Custom UI/UX and backend APIs',
        'Third-party business integrations',
        'Real-time features and notifications',
        'Admin dashboard and product analytics',
        'Cross-device QA and production release',
      ],
    },
    {
      name: 'Enterprise Mobile App',
      priceAndTimeline: '$180,000+ | 6+ months',
      target: 'For complex, business-critical platforms',
      features: [
        'Multi-department operational workflows',
        'Enterprise SSO and granular permissions',
        'ERP/CRM and legacy system integration',
        'Complex backend and data architecture',
        'Advanced AI or IoT integrations',
        'Offline synchronization where required',
        'Industry-specific compliance controls',
        'Performance and security testing',
        'CI/CD and phased deployment planning',
        'Defined maintenance and support options',
      ],
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#000000]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header: Centered (H2 = 40px, Subtitle = 16px center) */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            <span className="text-[#00CE44]">Custom Mobile App Development</span>{' '}
            Cost &amp; Timeline
          </h2>
          <p className="text-white/90 text-[16px] text-center leading-relaxed font-normal max-w-3xl mx-auto">
            The scope of a custom mobile app determines the investment behind it. Inceptives Digital estimates projects against actual engineering requirements, with clear deliverables and development timelines established during technical discovery. We confirm the final figure in writing before development begins.
          </p>
        </div>

        {/* 3 Equal Flat Dark Gray Lined Cards in Exact Docx Order: Heading -> Price -> Sm-Heading -> Bullets */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch w-full mb-12">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="p-8 sm:p-9 rounded-[20px] bg-[#242424] text-left flex flex-col justify-start border-0 shadow-none"
            >
              {/* 1. Heading */}
              <h3 className="text-xl sm:text-2xl font-bold text-white pb-5 mb-5 border-b border-white/25">
                {tier.name}
              </h3>

              {/* 2. Price & Timeline */}
              <div className="pb-5 mb-5 border-b border-white/25">
                <div className="text-lg sm:text-xl lg:text-[22px] font-bold text-white tracking-tight">
                  {tier.priceAndTimeline}
                </div>
              </div>

              {/* 3. Small Heading (Target) */}
              <div className="pb-5 mb-5 border-b border-white/25">
                <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                  {tier.target}
                </h4>
              </div>

              {/* 4. Bullet List */}
              <ul className="space-y-2.5 text-white/90 text-xs sm:text-sm leading-relaxed">
                {tier.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44] mt-2 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Centered Primary CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-sm sm:text-base transition-colors border-0"
          >
            Request a Custom App Development Estimate
          </a>
        </div>
      </div>
    </section>
  )
}
