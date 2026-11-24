export default function FlutterCostSection() {
  const tiers = [
    {
      name: '1. Simple Flutter Apps',
      price: '$15K–$40K',
      desc: 'Launch a focused Flutter application that validates your core product concept.',
      features: [
        'Essential screens and core user flow',
        'Standard user authentication',
        'Basic API integrations',
        'iOS and Android deployment',
      ],
    },
    {
      name: '2. Moderate Flutter Apps',
      price: '$40K–$80K',
      desc: 'Develop a production-focused Flutter application with richer functionality and connected business workflows.',
      features: [
        'Custom UI and multi-role workflows',
        'Backend and payment integrations',
        'Push notifications',
        'Cross-device QA',
        'App store release support',
      ],
    },
    {
      name: '3. Complex Flutter Apps',
      price: '$80K–$150K+',
      desc: 'Engineer complex Flutter products around demanding platform requirements and advanced operational workflows.',
      features: [
        'Custom backend architecture',
        'Real-time data synchronization',
        'Advanced native integrations',
        'Applicable security controls',
        'Performance profiling',
        'Multi-platform release planning',
      ],
    },
  ]

  return (
    <>
      <section className="py-16 sm:py-24 bg-[#000000]">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          {/* Section Header */}
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
              How Much Does{' '}
              <span className="text-[#00CE44]">Flutter App Development</span> Cost?
            </h2>
            <p className="text-white/90 text-[16px] text-center leading-relaxed font-normal max-w-3xl mx-auto">
              Flutter app development costs at Inceptives Digital start at $15,000 and exceed $150,000 for complex platforms. Our engineers tailor estimates to your product&apos;s scope and platform requirements.
            </p>
          </div>

          {/* 3 Equal Flat Dark Gray Lined Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch w-full mb-10">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="p-8 sm:p-9 rounded-[20px] bg-[#242424] text-left flex flex-col justify-start border-0 shadow-none"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white pb-5 mb-5 border-b border-white/25">
                  {tier.name}
                </h3>

                <div className="pb-5 mb-5 border-b border-white/25">
                  <div className="text-lg sm:text-xl lg:text-[24px] font-bold text-[#00CE44] tracking-tight">
                    {tier.price}
                  </div>
                </div>

                <div className="pb-5 mb-5 border-b border-white/25">
                  <p className="text-xs sm:text-sm font-normal text-white/90 leading-relaxed">
                    {tier.desc}
                  </p>
                </div>

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
        </div>
      </section>

      {/* Bottom Launch CTA Banner */}
      <section className="py-10 sm:py-14 bg-[#000000]">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div
            className="relative overflow-hidden rounded-[24px] px-6 sm:px-10 lg:px-14 py-10 sm:py-12 lg:py-14"
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

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
              <div className="lg:col-span-7 text-left">
                <h2 className="text-2xl sm:text-3xl lg:text-[35px] font-bold text-white tracking-tight leading-[1.2] mb-4 max-w-2xl">
                  Get a <span className="text-[#00CE44]">Flutter Development Quote</span> Based on Your Scope
                </h2>

                <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal mb-7 max-w-2xl">
                  Have the features and target platforms in mind? Our Flutter team can review your requirements and prepare a development estimate reflecting the engineering work your product demands.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-sm sm:text-base transition-colors border-0"
                  >
                    Estimate My Flutter App Cost
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
                <img
                  src="/assets/flutter-app/comp-flutercta.png"
                  alt="Get a Flutter Development Quote Based on Your Scope"
                  className="w-full max-w-[260px] sm:max-w-[310px] lg:max-w-[360px] xl:max-w-[400px] h-auto object-contain block select-none"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
