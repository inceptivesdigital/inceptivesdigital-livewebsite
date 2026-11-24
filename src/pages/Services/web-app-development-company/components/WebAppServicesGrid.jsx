import { Link } from 'react-router-dom'

export default function WebAppServicesGrid() {
  const services = [
    {
      title: 'Web Portal Development',
      icon: '/assets/ios-app/serivces1.svg',
      desc: 'From customer portals to partner dashboards and internal tools, we build web portals that handle complex data, user roles, and integrations without compromising on performance or maintainability.',
    },
    {
      title: (
        <>
          Web Application{' '}
          <a
            href="https://inceptivesdigital.com/ui-ux-design"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-white decoration-2 underline-offset-4 hover:text-white transition-colors"
          >
            UI/UX Design
          </a>
        </>
      ),
      icon: '/assets/ios-app/serivces2.svg',
      desc: 'Users return to web applications daily, often under pressure. The design phase focuses on task efficiency, interaction clarity, and information hierarchy across every state the product can reach.',
    },
    {
      title: 'Full-Stack Web Application Development',
      icon: '/assets/ios-app/serivces3.svg',
      desc: "Production-grade front-end and backend code, modular by design, with integrations and data layers built to your product's actual requirements, structured so future development never requires revisiting the foundation.",
    },
    {
      title: (
        <Link
          to="/backend-api-development"
          className="underline decoration-white decoration-2 underline-offset-4 hover:text-white transition-colors"
        >
          API Development and Systems Integration
        </Link>
      ),
      icon: '/assets/ios-app/serivces4.svg',
      desc: 'Payment processors, CRMs, analytics tools, and data pipelines need integration that holds under load. Every API layer at Inceptives is built with change tolerance and long-term maintainability from the start.',
    },
    {
      title: 'Custom Web Application Development',
      icon: '/assets/ios-app/serivces5.svg',
      desc: (
        <>
          When off-the-shelf options no longer serve the product, we build web{' '}
          <Link
            to="/custom-software-development"
            className="underline font-semibold text-[#00CE44] hover:opacity-80 transition-colors"
          >
            custom software
          </Link>{' '}
          from the ground up. Marketplaces, SaaS platforms, operations tools, and enterprise web app development projects are all scoped and engineered to perform at scale from day one.
        </>
      ),
    },
    {
      title: 'Progressive Web Apps',
      icon: '/assets/ios-app/serivces6.svg',
      desc: 'PWAs deliver fast, reliable, and installable experiences without a separate native build. For products where reach matters as much as performance, PWAs close the gap without splitting the codebase.',
    },
    {
      title: 'Web Application Maintenance and Support',
      icon: '/assets/mobile-app/monitor.svg',
      desc: 'Production performance does not sustain itself. Monitoring, dependency management, security patches, and new feature development are handled as a continuous engagement, keeping the product stable well beyond launch day.',
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#000000]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            <span className="text-[#00CE44]">Custom Web App Development Services</span>{' '}
            Scoped Around What Your Product Actually Needs
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            Most studios fit your product into their process. At Inceptives Digital, every service is scoped around what your product actually needs.
          </p>
        </div>

        {/* Flat Dark Rounded Cards matching CustomMobileServices */}
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-[14px] bg-[#1b1b1b] p-7 sm:p-8 flex flex-col justify-start border-0 shadow-none text-left"
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
