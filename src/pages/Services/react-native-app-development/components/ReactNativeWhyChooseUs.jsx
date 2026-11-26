import { Link } from 'react-router-dom'

export default function ReactNativeWhyChooseUs() {
  const pillars = [
    {
      title: 'Performance-Driven React Native Engineering',
      desc: (
        <>
          Our React Native engineers optimize JavaScript execution and native integrations to maintain responsive{' '}
          <Link
            to="/blog/mobile-app-performance-optimization"
            className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
          >
            mobile app performance
          </Link>
          . Targeted performance testing helps identify bottlenecks before they affect critical user interactions.
        </>
      ),
    },
    {
      title: 'One Codebase, Platform-Specific Precision',
      desc: (
        <>
          <Link
            to="/blog/how-to-reduce-mobile-app-development-cost"
            className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
          >
            Reduce mobile app development costs
          </Link>{' '}
          without sacrificing essential iOS and Android functionality. Through shared architecture and platform-specific integrations, our react native mobile app developers maintain consistent experiences while addressing each product&apos;s native requirements.
        </>
      ),
    },
    {
      title: '150+ Engineers Across Product Disciplines',
      desc: (
        <>
          With 150+ engineers spanning mobile and{' '}
          <Link
            to="/backend-api-development"
            className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
          >
            backend development
          </Link>
          , Inceptives Digital brings cross-functional expertise to complex React Native projects. Clients gain coordinated technical support without managing multiple development vendors.
        </>
      ),
    },
    {
      title: 'Transparent Agile Delivery',
      desc: "Track your React Native project's progress through two-week agile sprints and working build demonstrations. Our engineers incorporate feedback throughout development, giving you direct visibility into deliverables and milestone completion.",
    },
    {
      title: 'Security and Compliance-Focused Development',
      desc: (
        <>
          For applications handling sensitive data, our engineers integrate{' '}
          <Link
            to="/blog/mobile-app-security-best-practices"
            className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
          >
            mobile app security best practices
          </Link>{' '}
          into the development architecture. OWASP-aligned practices and applicable{' '}
          <Link
            to="/blog/hipaa-compliant-app-development"
            className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
          >
            HIPAA
          </Link>{' '}
          or PCI DSS controls guide implementation according to each product’s regulatory scope.
        </>
      ),
    },
    {
      title: 'Post-Launch Performance Accountability',
      desc: (
        <>
          Beyond the initial release, our React Native support focuses on protecting application stability as platform requirements evolve. Engineers monitor production performance through{' '}
          <Link
            to="/post-launch-analytics-iteration"
            className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
          >
            post-launch analytics
          </Link>{' '}
          and address compatibility issues to help sustain reliable operations.
        </>
      ),
    },
  ]

  const awardBadges = [
    {
      label: 'Clutch Top App Development Company, San Francisco 2026',
      src: '/assets/awards-images/award-clutch-austin.png',
    },
    {
      label: 'Clutch Top Android App Development Company, San Francisco 2026',
      src: '/assets/awards-images/award-top-developers.png',
    },
    {
      label: 'Clutch Top iPhone App Development Company, United States 2026',
      src: '/assets/ios-app/iPhone_App_Development_Companies_in_the_United_States.png',
    },
    {
      label: 'RightFirms Top Mobile App Development 2026',
      src: '/assets/ios-app/rf-badge-top-mobile-app-development-2026-982x1024.png',
    },
  ]

  return (
    <>
      {/* Let's Put Your React Native Project in Experienced Engineering Hands CTA Banner */}
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
                <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-white tracking-tight leading-[1.2] mb-4">
                  Let&apos;s Put Your <span className="text-[#00CE44]">React Native Project</span> in Experienced Engineering Hands
                </h2>

                <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal mb-7 max-w-2xl">
                  Turn your development requirements into a clear technical direction. Connect with our React Native developers to discuss the engineering scope and next steps toward delivery.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors border-0"
                  >
                    Talk to React Native Engineers
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
                <img
                  src="/assets/react-native/cta-mobile.png"
                  alt="Let's Put Your React Native Project in Experienced Engineering Hands"
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
              Why Choose Inceptives Digital as Your{' '}
              <span className="text-[#00CE44]">React Native Mobile App Development Company</span>
            </h2>
            <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
              For businesses investing in React Native, engineering expertise must translate into dependable product delivery. Our cross-functional team combines native platform knowledge with accountable engineering practices, bringing technical consistency to every React Native application we develop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p, idx) => (
              <div
                key={p.title}
                className="p-7 rounded-[16px] bg-[#292929] text-left border-0 shadow-none flex flex-col justify-start"
              >
                <div className="w-10 h-10 mb-4 flex items-center justify-start shrink-0">
                  <img
                    src="/assets/mobile-app/icon01.png"
                    alt={p.title}
                    className="w-full h-full object-contain select-none"
                    loading="lazy"
                  />
                </div>
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

      {/* Awards & Recognition We’ve Earned */}
      <section className="py-16 sm:py-20 bg-[#141414] border-t border-white/10">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-tight mb-4">
            Awards &amp; Recognition <span className="text-[#00CE44]">We’ve Earned</span>
          </h2>
          <p className="text-white/80 text-[16px] leading-relaxed font-normal max-w-3xl mx-auto mb-12">
            Our achievements in{' '}
            <Link
              to="/mobile-app-development"
              className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
            >
              mobile app development
            </Link>{' '}
            reflect extensive engineering experience across iOS and Android. Recognition from leading platforms reinforces our expertise and established presence in the industry.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-14 lg:gap-20">
            {awardBadges.map((b) => (
              <div
                key={b.label}
                className="h-24 sm:h-28 lg:h-32 w-auto max-w-[140px] sm:max-w-[160px] lg:max-w-[180px] flex items-center justify-center transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={b.src}
                  alt={b.label}
                  className="max-h-full max-w-full w-auto h-auto object-contain select-none"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
