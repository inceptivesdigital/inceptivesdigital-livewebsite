export default function ReactNativeWhyChooseUs() {
  const pillars = [
    {
      title: 'Native-Grade Performance Engineering',
      desc: 'React Native applications at Inceptives Digital are optimized through JS thread management, native module integration, and Reanimated to perform at native grade on every device.',
    },
    {
      title: 'Single Codebase, Dual Platform Standard',
      desc: 'One codebase does not mean one standard applied twice. Every React Native build is held to the same engineering precision on iOS and Android simultaneously.',
    },
    {
      title: '150+ Engineers',
      desc: 'A team of 150+ engineers with deep experience across consumer applications and regulated industries, applying the same standard regardless of product scope or complexity.',
    },
    {
      title: 'Transparent Agile Delivery',
      desc: 'Two-week sprints with a working build shared at each cycle close. Every decision is tracked through JIRA and Trello so the product ships exactly as scoped.',
    },
    {
      title: 'Compliance Across Both Platforms',
      desc: 'App Store, Google Play, OWASP, HIPAA, and PCI-DSS compliance are handled simultaneously. Every React Native application is validated against both platform standards before a single submission is made.',
    },
    {
      title: 'Post-Launch Performance Monitoring',
      desc: 'React Native applications require ongoing JS bundle optimization and OS compatibility checks. Post-launch support at Inceptives Digital keeps every product performing precisely through each iOS and Android release.',
    },
  ]

  return (
    <>
      {/* Collaborate CTA Banner */}
      <section className="py-12 sm:py-16 bg-[#000000]">
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
                  <span className="text-[#00CE44]">Collaborate with Our Expert</span>{' '}
                  React Native Engineers You Can Trust
                </h2>

                <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal mb-7 max-w-2xl">
                  No automated responses. Your brief goes directly to an experienced React Native engineer who responds with a fixed estimate within 24 hours.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-sm sm:text-base transition-colors border-0"
                  >
                    Let’s Build Now
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
                <img
                  src="/assets/react-native/cta-mobile.png"
                  alt="Collaborate with Our Expert React Native Engineers"
                  className="w-full max-w-[240px] sm:max-w-[290px] lg:max-w-[330px] xl:max-w-[360px] h-auto object-contain block select-none"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us 6 Cards Section */}
      <section className="py-16 sm:py-24 bg-[#1d1d1d]">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2]">
              Inside a{' '}
              <span className="text-[#00CE44]">React Native Mobile App Development Company</span>{' '}
              That Engineers Differently
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="p-7 rounded-[16px] bg-[#292929] text-left border-0 shadow-none flex flex-col justify-start"
              >
                <img
                  src="/assets/mobile-app/icon01.png"
                  alt={p.title}
                  className="w-9 h-9 object-contain mb-4 select-none"
                  loading="lazy"
                />
                <h3 className="text-lg sm:text-xl font-bold text-[#00CE44] mb-2.5 leading-snug">
                  {p.title}
                </h3>
                <p className="text-white/90 text-xs sm:text-[14px] leading-relaxed font-normal">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
