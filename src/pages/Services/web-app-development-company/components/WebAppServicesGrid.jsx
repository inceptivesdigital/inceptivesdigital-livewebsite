export default function WebAppServicesGrid() {
  const services = [
    {
      title: 'Custom Web Application Development',
      icon: '/assets/ios-app/serivces5.svg',
      desc: 'Off-the-shelf software often falls short when your business has specific workflows or operational requirements. We engineer custom web applications around those gaps, giving you greater control over business logic, user permissions, and how the platform connects with existing systems.',
    },
    {
      title: 'Full-Stack Web Development',
      icon: '/assets/ios-app/serivces3.svg',
      desc: 'The interface is only one part of a working application. Our full-stack web developers use React, Next.js, and Vue alongside Node.js and Python to connect frontend experiences with backend logic, APIs, and databases.',
    },
    {
      title: 'Web Application UI/UX Design',
      icon: '/assets/ios-app/serivces2.svg',
      desc: 'Complex workflows demand interfaces that users can navigate without unnecessary steps. We map critical user journeys into wireframes and interactive prototypes, resolving navigation issues before development and shaping interfaces around how people actually work.',
    },
    {
      title: 'API Development and Integration',
      icon: '/assets/ios-app/serivces4.svg',
      desc: 'Your existing software should work with the new application, not become another disconnected system. From CRM and ERP integrations to payment gateways, we develop custom APIs that keep data moving reliably between platforms.',
    },
    {
      title: 'MVP Web App Development',
      icon: '/assets/ios-app/serivces1.svg',
      desc: 'Have a product idea worth testing? Start with the features customers need to experience its core value. We define the first release around a clear validation goal, keeping development focused on what the market needs to prove.',
    },
    {
      title: 'Progressive Web App Development',
      icon: '/assets/ios-app/serivces6.svg',
      desc: 'Bring your application directly to users through an installable web experience. We engineer PWAs with responsive interfaces, offline functionality where supported, and browser-based notifications, reducing the need for separate native applications when a web-first approach fits.',
    },
    {
      title: 'Web Application Modernization',
      icon: '/assets/mobile-app/Third-Part-Integration-1.svg',
      desc: "An aging application doesn't always need a complete replacement. We assess the existing codebase before restructuring backend components, upgrading frameworks, or migrating infrastructure, preserving the functionality your business still relies on.",
    },
    {
      title: 'Cloud Application Development',
      icon: '/assets/mobile-app/Cloud-Integration-1.svg',
      desc: 'Cloud architecture starts with understanding how your application handles data, traffic, and connected services. Working with AWS, Google Cloud, and Microsoft Azure, we configure infrastructure around those demands while accounting for security and operating costs.',
    },
    {
      title: 'Web Application Maintenance and Support',
      icon: '/assets/mobile-app/monitor.svg',
      desc: "Production software needs more than occasional bug fixes. We monitor application performance, resolve production issues, and maintain dependencies so technical problems don't interrupt the workflows your business relies on.",
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#000000]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            <span className="text-[#00CE44]">Web Application Development Services</span>{' '}
            for Every Stage of Your Product
          </h2>
          <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            Whether you&apos;re developing a new web application or improving an existing platform, the engineering requirements change with the product. Inceptives Digital provides web application development services covering custom builds, system integrations, and ongoing improvements, with each engagement scoped around your technical requirements and business priorities.
          </p>
        </div>

        {/* 9 Cards 3x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="rounded-[14px] bg-[#1b1b1b] p-7 sm:p-8 flex flex-col justify-start border border-white/[0.06] text-left"
            >
              <div className="w-11 h-11 mb-5 flex items-center justify-start">
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
              <p className="text-white/90 text-xs sm:text-[14px] leading-relaxed font-normal">
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
