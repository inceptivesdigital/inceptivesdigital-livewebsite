const TIERS = [
  {
    name: 'Simple Web Applications',
    price: '$20,000 to $50,000',
    desc: 'A focused MVP or single-purpose tool with core functionality, standard integrations, and a clear user flow. For teams that need to validate a product idea with real users without overbuilding.',
    features: [
      'Core web flows & responsive interface',
      'Standard authentication & role permissions',
      'Essential third-party API integrations',
      'Eight to fourteen weeks from scope confirmation',
    ],
  },
  {
    name: 'Mid-Complexity Products',
    price: '$50,000 to $100,000',
    desc: 'Multi-flow applications with richer data requirements, third-party integrations, authentication, and performance optimization. For businesses moving from a validated concept into a production-ready product.',
    features: [
      'Multi-flow product & custom UI/UX design',
      'Modular frontend and backend architecture',
      'Multiple CRM, payment, or analytics integrations',
      'Twelve to twenty-four weeks from scope confirmation',
    ],
  },
  {
    name: 'Complex and Enterprise-Grade Platforms',
    price: '$100,000 to $200,000+',
    desc: 'Custom backend architecture, real-time features, advanced security requirements, AI integrations, and systems scoped for high traffic from day one. For products that need to perform at scale and stay maintainable as the business evolves.',
    features: [
      'Custom backend with real-time & event-driven systems',
      'AI, serverless, IoT, or blockchain integrations',
      'Zero-trust access controls & strict API security',
      'Timeline defined by scope and enterprise scale',
    ],
  },
]

export default function WebAppCostAndCTA() {
  return (
    <>
      <section className="py-16 sm:py-24 bg-[#000000] border-t border-white/10">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          {/* Section Header: Centered (H2 = 40px, Subtitle = 16px center) */}
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
              How Much Does{' '}
              <span className="text-[#00CE44]">Web Application Development Cost?</span>
            </h2>
            <p className="text-white/90 text-[16px] text-center leading-relaxed font-normal max-w-3xl mx-auto">
              The range sits between $20,000 for an early-stage product and $200,000 or more for enterprise platforms built for scale, security, and long-term operational complexity.
            </p>
          </div>

          {/* 3 Equal Flat Dark Gray Lined Cards matching IosCostSection */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch w-full mb-10">
            {TIERS.map((tier) => (
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

          {/* Estimate Callout Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#141414] border border-white/10 p-6 sm:p-8 rounded-[16px]">
            <p className="text-white text-base font-medium">
              Share what you are building, and we will give you a clear, accurate estimate.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors shrink-0"
            >
              Get a Scoped Estimate
            </a>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-[#141414] text-white py-16 sm:py-20 overflow-hidden">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-[28px] sm:text-[35px] font-bold text-white leading-[1.22] tracking-tight mb-4">
                Let&apos;s Build a Web App That Moves Your Business Forward
              </h2>
              <p className="text-[#D4D4D4] text-[16px] leading-relaxed mb-8 max-w-2xl">
                Contact the team today and get a result-driven roadmap to build, launch, and scale your web application the right way.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors border-0"
              >
                Book a Discovery Session
              </a>
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <img
                src="/assets/mobile-app/compress-cta-1024x469.webp"
                alt="Web Application Architecture"
                className="w-full max-w-[440px] h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
