import { Link } from 'react-router-dom'
export default function AndroidCostSection() {
  const tiers = [
    {
      name: 'Basic Android App',
      price: '$15,000 – $40,000',
      desc: 'For focused Android MVPs and applications with a limited number of core workflows.',
      features: [
        'Core screens and single-purpose user flow',
        'Standard authentication and light third-party integrations',
        'Material Design UI built across key device sizes',
        'Play Store submission and ASO included',
        'Eight to twelve weeks from scope confirmation',
      ],
    },
    {
      name: 'Mid-Complexity Android App',
      price: '$40,000 – $80,000',
      desc: 'For Android applications with multiple user journeys, backend connectivity, integrations, and broader testing requirements.',
      features: [
        'Multi-flow product with richer UI design',
        'Custom backend connectivity and push notifications',
        'Custom authentication and role-based access',
        'Real device QA across multiple OS versions',
        'Twelve to twenty weeks from scope confirmation',
      ],
    },
    {
      name: 'Complex Android App',
      price: '$80,000 – $150,000+',
      desc: 'For advanced Android platforms requiring specialized architecture, native technology integration, and regulatory compliance.',
      features: [
        'Custom backend with real-time data architecture',
        'AI, AR, IoT, or blockchain integrated natively',
        'HIPAA, PCI-DSS, and GDPR compliance covered',
        'Post-launch optimisation and feature iteration included',
        'Timeline defined by scope and compliance requirements',
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
            <span className="text-[#00CE44]">Android App Development Cost?</span>
          </h2>
          <p className="text-white/90 text-[16px] text-center leading-relaxed font-normal max-w-3xl mx-auto">
            <Link
              to="/blog/android-app-development-cost"
              className="underline text-[#00CE44] hover:opacity-80 transition-colors"
>
              Android app development cost
            </Link>{' '}
            is determined by what the product actually needs. Complexity, compliance requirements, and feature scope shape every estimate at Inceptives Digital, fixed in writing before development begins so there is financial clarity from day one.
          </p>
        </div>

        {/* 3 Equal Flat Dark Gray Lined Cards */}
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

        {/* Centered CTA Button */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-sm sm:text-base transition-colors border-0"
          >
            Get Your Fixed Estimate
          </a>
        </div>
      </div>
    </section>
  )
}
