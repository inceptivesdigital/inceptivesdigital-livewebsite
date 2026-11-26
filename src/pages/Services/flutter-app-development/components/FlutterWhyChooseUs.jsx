export default function FlutterWhyChooseUs() {
  const pillars = [
    {
      title: 'Experienced Flutter App Developers',
      desc: 'Work with Flutter developers who understand Dart architecture and complex widget systems. Our engineers account for platform-specific requirements during implementation, giving your product the technical attention its functionality demands.',
    },
    {
      title: 'Architecture Built for Growth',
      desc: 'Our Flutter architects assess state management requirements and native dependencies before development begins. This technical groundwork helps businesses avoid costly architectural changes as their applications expand.',
    },
    {
      title: 'Cross-Functional Product Team',
      desc: 'With mobile engineering and backend expertise working within one delivery team, technical dependencies receive coordinated attention. Clients can move through complex development engagements without managing multiple vendors.',
    },
    {
      title: 'Direct Collaboration With Engineers',
      desc: 'Get direct insight into the engineering decisions shaping your application. Our Flutter developers discuss implementation requirements with clients throughout delivery, keeping technical priorities aligned with the agreed scope.',
    },
    {
      title: 'Performance Validation on Real Devices',
      desc: 'Flutter applications undergo performance checks across supported device configurations. Our engineers investigate rendering behavior through profiling tools and test critical interactions before approving production releases.',
    },
    {
      title: 'Long-Term Flutter Product Ownership',
      desc: 'Our Flutter engineering support extends into subsequent releases through SDK compatibility reviews and application maintenance. This continuity helps businesses manage platform updates while planning future product development.',
    },
  ]

  const badges = [
    {
      title: 'Top Mobile App Development Company in the United States by Clutch',
      src: '/assets/ios-app/iPhone_App_Development_Companies_in_the_United_States.png',
    },
    {
      title: 'Top App Development Company by RightFirms',
      src: '/assets/ios-app/rf-badge-top-mobile-app-development-2026-982x1024.png',
    },
    {
      title: 'Top Mobile App Developers 2025',
      src: '/assets/ios-app/top-mobile-app-development-company-2025.png',
    },
    {
      title: 'Top Rated Mobile App Studio',
      src: '/assets/ios-app/top-rated-logo-1024x1024.png',
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
                  Ready to Work With an{' '}
                  <span className="text-[#00CE44]">Experienced Flutter Development Company?</span>
                </h2>

                <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal mb-7 max-w-2xl">
                  Bring your application requirements to the team behind our delivered Flutter products. Our engineers can review the proposed functionality and discuss the approach your next project requires.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-sm sm:text-base transition-colors border-0"
                  >
                    Discuss Your Flutter Project
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
                <img
                  src="/assets/mobile-app/cta-mobile.webp"
                  alt="Ready to Work With an Experienced Flutter Development Company"
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
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
              Why Choose{' '}
              <span className="text-[#00CE44]">Inceptives Digital</span>{' '}
              as Your Flutter Application Development Company?
            </h2>
            <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
              Our Flutter engineering expertise extends from custom interface architecture to production-ready application delivery. Businesses gain access to experienced Dart developers who understand the technical demands behind complex, multi-platform products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
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

          <p className="text-white/85 text-sm sm:text-base text-center max-w-4xl mx-auto leading-relaxed">
            Our Flutter engineering team connects applications with Firebase for real-time data, Stripe for payment workflows, and cloud infrastructure for scalable backend operations. These integrations support the product&apos;s commercial requirements.
          </p>
        </div>
      </section>

      {/* Recognized for Excellence in Mobile App Development */}
      <section className="py-16 sm:py-24 bg-[#141414]">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-5">
                Recognized for{' '}
                <span className="text-[#00CE44]">Excellence in Mobile App Development</span>
              </h2>
              <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal max-w-2xl">
                Our mobile product engineering expertise has earned recognition from Clutch and RightFirms. These distinctions strengthen our track record as an experienced product studio delivering custom applications across diverse business requirements.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-6 sm:gap-8 items-center justify-items-center">
              {badges.map((b) => (
                <div
                  key={b.title}
                  className="h-24 sm:h-28 lg:h-32 flex items-center justify-center transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={b.src}
                    alt={b.title}
                    className="max-h-full max-w-[140px] w-auto h-auto object-contain select-none"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
