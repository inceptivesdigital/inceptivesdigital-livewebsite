const TIERS = [
  {
    name: 'Basic Cross-Platform App',
    price: '$10,000 – $30,000',
    desc: 'For businesses validating a product idea across iOS and Android simultaneously.',
    features: [
      'Core screens and single-purpose user flow',
      'Standard authentication and light third-party integrations',
      'Platform-adapted UI in a shared component architecture',
      'App Store and Google Play submission with ASO',
      'Six to ten weeks from scope confirmation',
    ],
  },
  {
    name: 'Mid-Complexity Cross-Platform App',
    price: '$30,000 – $65,000',
    desc: 'For businesses building a production-ready product beyond MVP standard.',
    features: [
      'Multi-flow product with richer shared UI',
      'Custom backend, push notifications, and real-time data',
      'Custom authentication and role-based access control',
      'Production-ready standard across both platforms',
      'Ten to eighteen weeks from scope confirmation',
    ],
  },
  {
    name: 'Complex Cross-Platform App',
    price: '$65,000 – $120,000+',
    desc: 'For businesses requiring advanced architecture, deep integrations, and regulatory compliance.',
    features: [
      'Custom backend with real-time data architecture',
      'AI, AR, IoT, or blockchain within the shared codebase',
      'HIPAA, PCI-DSS, and GDPR compliance covered',
      'Post-launch optimisation and iteration included',
      'Timeline defined by scope and compliance requirements',
    ],
  },
]

export default function CrossPlatformCostSection() {
  return (
    <>
      <section className="py-16 sm:py-24 bg-[#000000] border-t border-white/10">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          {/* Section Header */}
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
              How Much Does{' '}
              <span className="text-[#00CE44]">Cross-Platform App Development</span> Cost
            </h2>
            <p className="text-white/90 text-[16px] text-center leading-relaxed font-normal max-w-3xl mx-auto">
              Cross-platform app development offers a real cost advantage, and Inceptives Digital makes sure that advantage is felt from the first estimate. Every number is scoped against product complexity, documented before development begins, and held to throughout every sprint that follows.
            </p>
          </div>

          {/* 3 Equal Flat Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch w-full mb-10">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className="p-8 sm:p-9 rounded-[20px] bg-[#1a1b20] text-left flex flex-col justify-start border border-white/5"
              >
                {/* 1. Heading */}
                <h3 className="text-xl sm:text-2xl font-bold text-white pb-5 mb-5 border-b border-white/15">
                  {tier.name}
                </h3>

                {/* 2. Price */}
                <div className="pb-5 mb-5 border-b border-white/15">
                  <div className="text-lg sm:text-xl lg:text-[24px] font-bold text-[#00CE44] tracking-tight">
                    {tier.price}
                  </div>
                </div>

                {/* 3. Description */}
                <div className="pb-5 mb-5 border-b border-white/15">
                  <p className="text-xs sm:text-sm font-normal text-white/90 leading-relaxed">
                    {tier.desc}
                  </p>
                </div>

                {/* 4. Bullet List */}
                <ul className="space-y-2.5 text-white/90 text-xs sm:text-sm leading-relaxed">
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

          {/* Estimate Callout Bar */}
          <div className="w-full mx-auto px-6 sm:px-10 lg:px-12 py-8 sm:py-10 rounded-[28px] sm:rounded-[36px] bg-[#00CE44] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 text-left">
            <p className="text-black text-base sm:text-lg font-bold leading-snug max-w-3xl">
              The number agreed before development begins is the final number.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 sm:py-4 rounded-none bg-black hover:bg-[#181818] text-white font-semibold text-xs sm:text-sm tracking-tight whitespace-nowrap transition-all duration-150 shrink-0 border-0 self-start lg:self-auto"
            >
              Get Your Fixed Estimate
            </a>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner: Know What Your Cross-Platform App Will Cost */}
      <section className="bg-[#121316] text-white py-16 sm:py-20 overflow-hidden border-t border-white/10">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 text-left">
              <span className="text-[#00CE44] text-xs sm:text-sm font-bold uppercase tracking-wider block mb-2.5">
                ESTIMATE YOUR BUILD
              </span>
              <h2 className="text-[28px] sm:text-[38px] font-bold text-white leading-[1.22] tracking-tight mb-4">
                Know What Your Cross-Platform App Will Cost
              </h2>
              <p className="text-[#D4D4D4] text-[16px] leading-relaxed mb-8 max-w-2xl font-normal">
                Share your product requirements and receive a detailed estimate based on your features, integrations, platforms, and technical complexity.
              </p>
              <div>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors border-0"
                >
                  Get Your Cost Estimate
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <img
                src="/assets/backend-api/api-1.png"
                alt="Cross-Platform App Development Cost"
                className="w-full max-w-[420px] h-auto object-contain select-none"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
