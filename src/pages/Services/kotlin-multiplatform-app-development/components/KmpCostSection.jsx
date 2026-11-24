import { Link } from 'react-router-dom'

export default function KmpCostSection() {
  const tiers = [
    {
      name: 'KMP Foundation',
      price: '$25,000 to $55,000',
      bullets: [
        'Core business logic, networking, and data layer',
        'iOS and Android integration included',
        <>
          Suited to startups taking on{' '}
          <Link
            to="/mvp-development"
            className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
          >
            MVP development
          </Link>{' '}
          on both platforms
        </>,
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
          {/* Section Header */}
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
              How Much Do{' '}
              <span className="text-[#00CE44]">Kotlin Multiplatform Development Services</span> Cost?
            </h2>
            <p className="text-white/90 text-[16px] text-center leading-relaxed font-normal max-w-3xl mx-auto">
              Kotlin Multiplatform development services start at $25,000. Final{' '}
              <Link
                to="/blog/mobile-app-development-cost"
                className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
              >
                mobile app development cost
              </Link>{' '}
              depends on shared-module complexity, native integrations, and whether your project involves a new application or an existing codebase.
            </p>
          </div>

          {/* 3 Equal Flat Dark Gray Lined Cards */}
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
                  {tier.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
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
              <Link
                to="/blog/app-development-timeline"
                className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
              >
                app development timeline
              </Link>{' '}
              depends on platform count, migration depth, and shared module complexity.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Estimate CTA Banner */}
      <section className="pt-12 sm:pt-14 pb-0 bg-[#232323] overflow-hidden">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-6 pb-8 lg:pb-12 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[35px] font-bold text-white tracking-tight leading-[1.2] mb-4 max-w-2xl">
                Get a <span className="text-[#00CE44]">Development Quote</span> for Your Kotlin Multiplatform Project
              </h2>

              <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal mb-7 max-w-2xl">
                Have a budget and project requirements in mind? Share your product scope with our engineers for an estimate covering the intended platforms and development effort.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-sm sm:text-base transition-colors border-0"
                >
                  Scope My KMP Cost
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center lg:justify-end items-end self-end">
              <img
                src="/assets/kmp-app/kotlin-cta.png"
                alt="Get a Development Quote for Your Kotlin Multiplatform Project"
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
