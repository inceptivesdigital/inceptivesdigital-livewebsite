export default function IosCostSection() {
  const tiers = [
    {
      name: 'Basic iOS App',
      price: '$15,000 – $35,000',
      desc: (
        <>
          Launching an iPhone MVP? This range covers native{' '}
          <a
            href="https://inceptivesdigital.com/mvp-development"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
          >
            MVP development
          </a>{' '}
          for a focused application with essential features and limited integrations.
        </>
      ),
      features: [
        <span key="1">Core screens, focused single-purpose flow</span>,
        <span key="2">Light integrations, standard authentication included</span>,
        <span key="3">Ideal for validating a product idea</span>,
        <span key="4">
          App Store submission and{' '}
          <a
            href="https://inceptivesdigital.com/blog/app-store-optimization-aso"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
          >
            ASO
          </a>{' '}
          covered
        </span>,
        <span key="5">Eight to twelve weeks from scope confirmation</span>,
      ],
    },
    {
      name: 'Mid-Complexity iOS App',
      price: '$35,000 – $90,000',
      desc: 'Custom iPhone and iPad apps with more involved user workflows fall into this range. Backend complexity and native Apple integrations influence the final estimate.',
      features: [
        <span key="1">Multi-flow product, richer UI design</span>,
        <span key="2">
          <a
            href="https://inceptivesdigital.com/backend-api-development"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
          >
            Backend connectivity
          </a>{' '}
          and push notifications included
        </span>,
        <span key="3">Custom authentication and role-based access</span>,
        <span key="4">Production-ready standard beyond the MVP stage</span>,
        <span key="5">Twelve to twenty weeks from scope confirmation</span>,
      ],
    },
    {
      name: 'Complex iOS App',
      price: '$90,000 – $150,000+',
      desc: 'Enterprise iOS applications with complex backend architecture, advanced Apple integrations, or development across multiple Apple devices fall into this range.',
      features: [
        <span key="1">Custom backend with real-time architecture</span>,
        <span key="2">AI, AR, IoT, or blockchain integrated natively</span>,
        <span key="3">
          <a
            href="https://inceptivesdigital.com/blog/hipaa-compliant-app-development"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
          >
            HIPAA-compliant
          </a>
          , PCI-DSS, and GDPR compliance covered
        </span>,
        <span key="4">
          <a
            href="https://inceptivesdigital.com/post-launch-analytics-iteration"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
          >
            Post-launch optimization
          </a>{' '}
          and iteration included
        </span>,
        <span key="5">Timeline defined by scope and compliance requirements</span>,
      ],
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#000000]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header: Centered (H2 = 40px, Subtitle = 16px center) */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            How Much Does{' '}
            <span className="text-[#00CE44]">iOS App Development Cost?</span>
          </h2>
          <p className="text-white/90 text-[16px] text-center leading-relaxed font-normal max-w-3xl mx-auto">
            Every business deserves to know what they&apos;re paying before development begins. At Inceptives Digital, we provide transparent{' '}
            <a
              href="https://inceptivesdigital.com/blog/ios-app-development-cost"
              className="underline text-[#00CE44] hover:opacity-80 transition-colors"
            >
              iOS app development cost
            </a>{' '}
            estimates based on project requirements, with defined milestones for fixed-scope engagements.
          </p>
        </div>

        {/* 3 Equal Flat Dark Gray Lined Cards in Exact Order: Heading -> Price -> Intro -> Bullets */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch w-full">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="p-8 sm:p-9 rounded-[20px] bg-[#242424] text-left flex flex-col justify-start border-0 shadow-none"
            >
              {/* 1. Heading */}
              <h3 className="text-xl sm:text-2xl font-bold text-white pb-5 mb-5 border-b border-white/25">
                {tier.name}
              </h3>

              {/* 2. Price */}
              <div className="pb-5 mb-5 border-b border-white/25">
                <div className="text-lg sm:text-xl lg:text-[24px] font-bold text-[#00CE44] tracking-tight">
                  {tier.price}
                </div>
              </div>

              {/* 3. Description */}
              <div className="pb-5 mb-5 border-b border-white/25">
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
      </div>
    </section>
  )
}
