export default function FlutterServicesGrid() {
  const services = [
    {
      title: 'Flutter App Consultation',
      icon: '/assets/ios-app/serivces1.svg',
      desc: 'Before investing in Flutter development, get clarity on the architecture your product actually needs. Our consultants assess platform suitability and technical dependencies to establish a realistic development scope aligned with your business priorities.',
    },
    {
      title: 'Flutter App UI/UX Design',
      icon: '/assets/ios-app/serivces2.svg',
      desc: "Our Flutter UI/UX designers shape custom interfaces around how users interact with your product. Through Figma prototypes and Flutter's widget capabilities, we establish a consistent experience that reflects your application requirements.",
    },
    {
      title: 'Custom Flutter App Development',
      icon: '/assets/ios-app/serivces3.svg',
      desc: "Our Flutter developers engineer custom applications around the workflows that define each product. Dart and Flutter's widget architecture give businesses precise control over interface behavior while supporting consistent experiences across iOS and Android.",
    },
    {
      title: 'Flutter App Migration',
      icon: '/assets/ios-app/serivces4.svg',
      desc: 'Planning to move an existing application to Flutter? Our migration engineers evaluate the current codebase and native dependencies to establish a transition strategy that protects essential functionality and limits operational disruption.',
    },
    {
      title: 'Flutter Web App Development',
      icon: '/assets/ios-app/serivces5.svg',
      desc: 'Bring existing Flutter product experiences to the browser without rebuilding every interface from scratch. Our web development specialists assess code-sharing opportunities and browser requirements to define a practical implementation approach.',
    },
    {
      title: 'Flutter App Maintenance and Support',
      icon: '/assets/ios-app/serivces6.svg',
      desc: "Keep your Flutter application current as platform requirements and business priorities change. Our maintenance engineers manage SDK upgrades and compatibility issues while supporting enhancements that extend the product's useful life.",
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#1d1d1d]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            <span className="text-[#00CE44]">Custom Flutter App Development Services</span>{' '}
            for Mobile and Web
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            Our Flutter app development services help businesses turn product requirements into applications that work across their intended platforms. Experienced Flutter developers bring technical judgment to each engagement, keeping engineering decisions aligned with commercial priorities.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
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

        {/* Bottom CTA Bar */}
        <div className="w-full mx-auto px-6 sm:px-10 lg:px-12 py-8 sm:py-10 rounded-[28px] sm:rounded-[36px] bg-[#00CE44] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8 border-0 shadow-none">
          <div className="text-left max-w-3xl">
            <h2 className="cta-heading text-2xl sm:text-3xl lg:text-[32px] font-black text-black tracking-tight leading-tight mb-2">
              Bring Your Next Product to Top Flutter Mobile App Developers
            </h2>
            <p className="text-black/90 text-sm sm:text-base font-normal leading-relaxed">
              Ready to move forward with your Flutter application? Connect with our engineers to discuss your development requirements and take the next step toward production.
            </p>
          </div>
          <div className="shrink-0 self-start lg:self-auto">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 sm:py-4 rounded-none bg-black hover:bg-[#181818] text-white font-semibold text-xs sm:text-sm tracking-tight whitespace-nowrap transition-all duration-150 border-0"
            >
              Consult Our Flutter Developers
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
