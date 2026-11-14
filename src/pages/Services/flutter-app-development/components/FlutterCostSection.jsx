export default function FlutterCostSection() {
  const tiers = [
    {
      name: 'Simple Apps',
      price: '$15k to $40k',
      desc: (
        <>
          A focused MVP or single-purpose app with core screens, light integrations, and a straightforward user flow, priced closer to the lower end of typical{' '}
          <a
            href="https://inceptivesdigital.com/blog/mvp-development-cost"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            MVP development cost
          </a>{' '}
          figures. Built for teams that need to validate an idea quickly without overbuilding from the start.
        </>
      ),
    },
    {
      name: 'Moderate Apps',
      price: '$40k to $80k',
      desc: 'Multi-flow products with richer UI, standard third-party integrations, authentication, and consistent performance across iOS and Android. Suited for businesses moving beyond MVP into a production-ready product.',
    },
    {
      name: 'Complex Apps',
      price: '$80k to $150k+',
      desc: 'Highly complex products with custom backend architecture, real-time features, advanced security, AI or IoT integrations, and ongoing optimization requirements. Built for products that need to perform at scale from launch.',
    },
  ]

  return (
    <>
      <section className="py-16 sm:py-24 bg-[#000000]">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          {/* Section Header: Centered (H2 = 40px, Subtitle = 16px center) */}
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
              How Much Does{' '}
              <span className="text-[#00CE44]">Flutter App Development</span> Cost?
            </h2>
            <p className="text-white/90 text-[16px] text-center leading-relaxed font-normal max-w-3xl mx-auto">
              Flutter app development cost runs from $15,000 for simple apps to $150,000 and above for enterprise-grade products with complex backend and integration requirements, and the same{' '}
              <a
                href="https://inceptivesdigital.com/blog/factors-affecting-app-development-cost"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00CE44] underline hover:text-white transition-colors"
              >
                factors affecting app development cost
              </a>{' '}
              apply whether the build is Flutter, native, or something hybrid.
            </p>
          </div>

          {/* 3 Equal Flat Dark Gray Lined Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch w-full mb-10">
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
                  <div className="text-lg sm:text-xl lg:text-[22px] font-bold text-[#00CE44] tracking-tight">
                    {tier.price}
                  </div>
                </div>

                {/* 3. Description */}
                <p className="text-sm sm:text-[15px] font-normal text-white/90 leading-relaxed">
                  {tier.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Footer Note + Centered Primary CTA */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed mb-7">
              Tell us what you are building and get a scoped Flutter app development cost.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-sm sm:text-base transition-colors border-0"
            >
              Get a Scoped Estimate
            </a>
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
                  <span className="text-[#00CE44]">Let&apos;s Launch Your App</span>{' '}
                  Across Every Device With a Single Codebase
                </h2>

                <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal mb-7 max-w-2xl">
                  Bring the idea. We handle the scope, the build, and the estimate, starting with the same{' '}
                  <a
                    href="https://inceptivesdigital.com/product-launch-strategy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00CE44] underline hover:text-white transition-colors"
                  >
                    product launch strategy
                  </a>{' '}
                  work that shapes every engagement here. Everything needed to make a confident decision before the build starts.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-sm sm:text-base transition-colors border-0"
                  >
                    Let&apos;s Get Started
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
                <img
                  src="/assets/flutter-app/comp-flutercta.png"
                  alt="Let's Launch Your App Across Every Device With a Single Codebase"
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
