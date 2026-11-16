export default function CrossPlatformServicesGrid() {
  const services = [
    {
      title: 'Cross-Platform Product Consultation',
      icon: '/assets/ios-app/serivces1.svg',
      desc: 'The best framework for a product is determined by its understanding. Business objectives, audience requirements, and platform constraints are thoroughly evaluated and documented before a development commitment is made, giving every engagement a validated foundation.',
    },
    {
      title: (
        <>
          Platform-Agnostic{' '}
          <a
            href="https://inceptivesdigital.com/ui-ux-design"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-white decoration-2 underline-offset-4 hover:text-[#00CE44] transition-colors"
          >
            UI/UX Design
          </a>
        </>
      ),
      icon: '/assets/ios-app/serivces2.svg',
      desc: (
        <>
          Every cross-platform interface is designed to the interaction standard each platform expects. Material Design 3 on Android and Human Interface Guidelines on iOS are applied within a shared component system, with{' '}
          <a
            href="https://inceptivesdigital.com/interactive-prototyping"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            interactive prototyping
          </a>{' '}
          verified across the full device spectrum before engineering begins.
        </>
      ),
    },
    {
      title: 'Custom Framework Engineering',
      icon: '/assets/ios-app/serivces3.svg',
      desc: (
        <>
          Most cross-platform products underperform because the shared codebase was built for speed, not scale. Every application here is engineered in Flutter or React Native with native API access, modular structure, and rendering performance that both platforms demand. Selecting among the leading{' '}
          <a
            href="https://inceptivesdigital.com/blog/5-cross-platform-frameworks-for-mobile-app-development"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            cross-platform frameworks for mobile app development
          </a>{' '}
          depends on those same product requirements.
        </>
      ),
    },
    {
      title: 'Multi-Platform Testing and QA',
      icon: '/assets/ios-app/serivces4.svg',
      desc: (
        <>
          Every build is tested on real hardware across iOS and Android device tiers, active OS versions, and screen configurations using Appium, Detox, and Firebase Test Lab. Proven{' '}
          <a
            href="https://inceptivesdigital.com/blog/mobile-app-testing-strategies"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            mobile app testing strategies
          </a>{' '}
          are applied until no functional, performance, or security issue remains on either platform.
        </>
      ),
    },
    {
      title: 'Deployment and App Store Optimization (ASO)',
      icon: '/assets/ios-app/serivces5.svg',
      desc: (
        <>
          A compliant submission gets the product live. An optimized one gets it found. Metadata, graphic assets, keyword strategy, policy compliance, and{' '}
          <a
            href="https://inceptivesdigital.com/app-store-optimization"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            app store optimization
          </a>{' '}
          are managed in-house for both the App Store and Google Play to drive immediate search visibility.
        </>
      ),
    },
    {
      title: 'Ongoing Maintenance and Framework Support',
      icon: '/assets/ios-app/serivces6.svg',
      desc: (
        <>
          iOS and Android release independently, and every cycle they drift further apart. Compatibility updates, security patches, and performance fixes are applied to the shared codebase against both platform schedules, supported by continuous{' '}
          <a
            href="https://inceptivesdigital.com/post-launch-analytics-iteration"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            post-launch analytics iteration
          </a>{' '}
          before either cycle creates a user-facing issue.
        </>
      ),
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#000000]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            Our Comprehensive{' '}
            <span className="text-[#00CE44]">Cross-Platform App Development Services</span>
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            As a cross platform mobile app development company, Inceptives Digital makes one team accountable for every decision made across the product lifecycle. Strategy, UI/UX design, framework engineering, QA, and dual-store deployment are managed in-house, ensuring architectural integrity holds from the first sprint to post-launch support.
          </p>
        </div>

        {/* Flat Dark Rounded Cards matching CustomMobileServices */}
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-[14px] bg-[#1b1b1b] p-7 sm:p-8 flex flex-col justify-start border-0 shadow-none text-left"
            >
              <div className="w-11 h-11 mb-5 flex items-center justify-start p-0 border-0 bg-transparent">
                <img
                  src={svc.icon}
                  alt=""
                  className="w-full h-full object-contain select-none"
                  loading="lazy"
                />
              </div>
              <h3 className="text-[18px] sm:text-[20px] font-bold text-[#00CE44] mb-2.5 leading-snug">
                {svc.title}
              </h3>
              <p className="text-white/90 text-xs sm:text-[13.5px] leading-relaxed font-normal">
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
