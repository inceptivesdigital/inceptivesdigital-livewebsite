import { Link } from 'react-router-dom'

export default function ReactNativeCostSection() {
  const tiers = [
    {
      name: 'Basic React Native App',
      price: '$10,000–$30,000',
      target:
        'For businesses validating a product idea or launching a focused, single-purpose cross-platform application.',
      features: [
        'Core screens and single-purpose user flow',
        'Standard authentication and light third-party integrations',
        'React Native UI built across key iOS and Android device sizes',
        'App Store and Play Store submission included',
        'Eight to twelve weeks from scope confirmation',
      ],
    },
    {
      name: 'Mid-Complexity React Native App',
      price: '$30,000 - $70,000',
      target: (
        <>
          For businesses building a production-ready product beyond the{' '}
          <Link
            to="/services/mobile-app-development"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            MVP development
          </Link>{' '}
          stage.
        </>
      ),
      features: [
        'Multi-flow product with platform-specific UI components',
        'Custom backend connectivity and push notifications',
        'Redux state management and custom authentication',
        'Real device QA across iOS and Android OS versions',
        'Twelve to twenty weeks from scope confirmation',
      ],
    },
    {
      name: 'Complex React Native App',
      price: '$70,000 - $150,000+',
      target:
        'For businesses requiring advanced architecture, native module integration, and regulatory compliance.',
      features: [
        'Custom backend with real-time cross-platform architecture',
        'AI, AR, IoT, or blockchain integrated natively',
        'HIPAA, PCI-DSS, and GDPR compliance covered',
        'JS bundle optimization and post-launch iteration included',
        'Timeline defined by scope and compliance requirements',
      ],
    },
  ]

  return (
    <>
      <section className="py-16 sm:py-24 bg-[#000000]">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          {/* Section Header: Centered */}
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
              How Much Does{' '}
              <span className="text-[#00CE44]">React Native App Development</span> Cost?
            </h2>
            <p className="text-white/90 text-[16px] text-center leading-relaxed font-normal max-w-3xl mx-auto">
              React Native app development cost at Inceptives Digital ranges from $10,000 for a focused MVP to $150,000+ for compliance-driven platforms. Our in-house engineers scope your product first, so each tier below matches the work your app needs. Tell us about your product, and we will outline the scope and a tailored estimate.
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

                {/* 3. Target */}
                <div className="pb-5 mb-5 border-b border-white/25">
                  <span className="text-xs uppercase font-medium text-[#00CE44] tracking-wider block mb-1">
                    Best for:
                  </span>
                  <div className="text-white/90 text-sm leading-relaxed font-normal">
                    {tier.target}
                  </div>
                </div>

                {/* 4. Features */}
                <div className="mt-2">
                  <span className="text-xs uppercase font-medium text-[#00CE44] tracking-wider block mb-3">
                    Includes:
                  </span>
                  <ul className="space-y-3">
                    {tier.features.map((feat) => (
                      <li
                        key={feat}
                        className="text-white/90 text-sm leading-relaxed flex items-start gap-2.5 font-normal"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44] mt-2 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Quote CTA Banner */}
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
                  <span className="text-[#00CE44]">Find Out What Your React Native App</span>{' '}
                  Costs Exactly.
                </h2>

                <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal mb-7 max-w-2xl">
                  We personally review each submission and respond with a precise estimate on the same day.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors border-0"
                  >
                    Discover My Price
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
                <img
                  src="/assets/react-native/CTA-22-1.png"
                  alt="Find Out What Your React Native App Costs Exactly."
                  className="w-full max-w-[240px] sm:max-w-[290px] lg:max-w-[330px] xl:max-w-[360px] h-auto object-contain block select-none"
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
