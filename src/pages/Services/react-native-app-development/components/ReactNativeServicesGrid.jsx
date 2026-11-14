export default function ReactNativeServicesGrid() {
  const services = [
    {
      title: 'React Native App Consultation',
      icon: '/assets/ios-app/serivces1.svg',
      desc: "Inceptives Digital's React Native consultation service turns business objectives into a validated product strategy. Architecture, technology selection, and platform requirements are defined upfront, giving every engagement a foundation that holds through every sprint.",
    },
    {
      title: 'React Native UI/UX Design',
      icon: '/assets/ios-app/serivces2.svg',
      desc: (
        <>
          Interfaces that feel native on iOS and Android simultaneously require more than good design. Inceptives Digital applies{' '}
          <a
            href="https://inceptivesdigital.com/ui-ux-design"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            UI/UX design
          </a>{' '}
          principles to every screen using platform-specific interaction standards in Figma and Adobe XD, with usability validated before engineering begins.
        </>
      ),
    },
    {
      title: 'Custom React Native App Development',
      icon: '/assets/ios-app/serivces3.svg',
      desc: (
        <>
          Single-codebase applications engineered in JavaScript and TypeScript with native module integration, modular architecture, and optimized JS thread handling. Selecting the right{' '}
          <a
            href="https://inceptivesdigital.com/blog/mobile-app-tech-stack"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            mobile app tech stack
          </a>{' '}
          at the architecture stage helps ensure the application remains maintainable.
        </>
      ),
    },
    {
      title: 'React Native App Migration',
      icon: '/assets/ios-app/serivces4.svg',
      desc: 'Existing applications migrated to React Native without compromising performance or cross-platform compatibility. Code analysis, API integration, and functionality validation are completed before migration begins, so continuity is maintained throughout.',
    },
    {
      title: 'Dual-Platform Deployment and ASO',
      icon: '/assets/ios-app/serivces5.svg',
      desc: (
        <>
          React Native&apos;s single codebase advantage extends to deployment. App Store and Google Play submission, policy compliance, metadata, graphic assets, and{' '}
          <a
            href="https://inceptivesdigital.com/app-store-optimization"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            app store optimization
          </a>{' '}
          are all handled in-house, with every listing optimized for discoverability and ranking on both platforms simultaneously.
        </>
      ),
    },
    {
      title: 'React Native Maintenance and Enhancement',
      icon: '/assets/ios-app/serivces6.svg',
      desc: (
        <>
          Post-launch support covering OS compatibility updates, performance monitoring, bug resolution, and feature iteration. Every React Native application is kept current through each iOS and Android release cycle, with the long-term{' '}
          <a
            href="https://inceptivesdigital.com/blog/mobile-app-maintenance-cost"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            mobile app maintenance cost
          </a>
          .
        </>
      ),
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#1d1d1d]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header: Centered (H2 = 40px, Subtitle = 16px center) */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            All-inclusive{' '}
            <span className="text-[#00CE44]">React Native App Development Services</span>{' '}
            Under One Roof
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            React Native app development services at Inceptives Digital cover every stage of the product lifecycle without gaps in engineering standards, from the initial question of{' '}
            <a
              href="https://inceptivesdigital.com/blog/how-to-build-cross-platform-mobile-app"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#00CE44] hover:text-white transition-colors"
            >
              how to build a cross-platform mobile app
            </a>{' '}
            through to launch. From the first consultation to post-launch support, one team manages the entire engagement in-house, so the product that ships reflects the precision applied from the first sprint.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="p-7 rounded-[16px] bg-[#292929] text-left border-0 shadow-none flex flex-col justify-start"
            >
              <img
                src={svc.icon}
                alt={svc.title}
                className="w-10 h-10 object-contain mb-4 select-none"
                loading="lazy"
              />
              <h3 className="text-lg sm:text-xl font-bold text-[#00CE44] mb-2.5 leading-snug">
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
