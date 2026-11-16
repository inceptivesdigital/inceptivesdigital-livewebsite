export default function KmpCostSection() {
  const tiers = [
    {
      name: 'KMP Foundation',
      price: '$25,000 to $55,000',
      bullets: [
        'Core business logic, networking, and data layer',
        'iOS and Android integration included',
        'Suited to startups launching on both platforms',
        'Eight to fourteen weeks',
      ],
    },
    {
      name: 'Full-Product KMP Build',
      price: '$55,000 to $120,000',
      bullets: [
        'Shared module through native platform UI',
        'Jetpack Compose and SwiftUI builds included',
        'App store submission on both platforms',
        'Sixteen to twenty-eight weeks',
      ],
    },
    {
      name: 'KMP Migration and Expansion',
      price: '$70,000 to $180,000+',
      bullets: [
        'Phased migration from the existing native codebase',
        'Audit and roadmap delivered before extraction',
        'Web and desktop targets where needed',
        'Timeline scoped to migration complexity',
      ],
    },
  ]

  return (
    <>
      <section className="py-16 sm:py-24 bg-[#191919]">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          {/* Section Header: Centered (H2 = 40px, Subtitle = 16px center) */}
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
              The Cost of Getting{' '}
              <span className="text-[#00CE44]">KMP Architecture Right</span>
            </h2>
            <p className="text-white/90 text-[16px] text-center leading-relaxed font-normal max-w-3xl mx-auto">
              Kotlin Multiplatform projects vary significantly in scope depending on the size of the shared module, the number of platform targets, whether we are building greenfield or migrating an existing codebase, and the complexity of platform-specific integrations. Like broader{' '}
              <a
                href="https://inceptivesdigital.com/blog/mobile-app-development-cost"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00CE44] underline hover:text-white transition-colors"
              >
                mobile app development cost
              </a>
              , KMP pricing is driven by architecture and scope. The tiers below represent transparent costs for every engagement type.
            </p>
          </div>

          {/* 3 Equal Flat Dark Gray Lined Cards (Container d9fd21a -> #323232) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch w-full mb-10">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="p-8 sm:p-9 rounded-[30px] bg-[#323232] text-left flex flex-col justify-start border-0 shadow-none"
              >
                {/* 1. Heading */}
                <h3 className="text-xl sm:text-2xl font-bold text-white pb-5 mb-5 border-b border-white/25">
                  {tier.name}
                </h3>

                {/* 2. Price */}
                <div className="pb-5 mb-5 border-b border-white/25">
                  <div className="text-lg sm:text-xl lg:text-[22px] font-bold text-[#00CE44] tracking-tight">
                    {tier.price}
                  </div>
                </div>

                {/* 3. Bullet List */}
                <ul className="space-y-3 text-sm sm:text-[15px] font-normal text-white/90 leading-relaxed">
                  {tier.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <span className="text-[#00CE44] font-bold mt-0.5 shrink-0">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed">
              The final{' '}
              <a
                href="https://inceptivesdigital.com/blog/app-development-timeline"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00CE44] underline hover:text-white transition-colors"
              >
                app development timeline
              </a>{' '}
              depends on platform count, migration depth, and shared module complexity.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Estimate CTA Banner (Container 5467e61: full-width #232323 with kotlin-cta.png aligned bottom right) */}
      <section className="pt-12 sm:pt-14 pb-0 bg-[#232323] overflow-hidden">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-6 pb-8 lg:pb-12 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[35px] font-bold text-white tracking-tight leading-[1.2] mb-4 max-w-2xl">
                Get a <span className="text-[#00CE44]">Custom Estimate</span> for Your KMP Project
              </h2>

              <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal mb-7 max-w-2xl">
                Share your product context, and the right engagement gets scoped around your architecture, timeline, and budget.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-sm sm:text-base transition-colors border-0"
                >
                  Talk to Our Engineering Team
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center lg:justify-end items-end self-end">
              <img
                src="/assets/kmp-app/kotlin-cta.png"
                alt="Get a Custom Estimate for Your KMP Project"
                className="w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[500px] h-auto object-contain block select-none"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
