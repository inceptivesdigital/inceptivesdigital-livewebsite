export default function BackendServicesGrid() {
  const services = [
    {
      title: 'Custom Backend Development',
      icon: '/assets/backend-api/api-icon1.png',
      desc: "Backend systems are designed around your product's actual data flows, business logic, and load patterns, not a generic framework. Every system ships with service boundaries, data ownership, and a scaling strategy already built in.",
    },
    {
      title: 'API Development & System Integrations',
      icon: '/assets/backend-api/api-icon2.png',
      desc: (
        <>
          REST, GraphQL, gRPC, and webhook-based APIs are built for clarity and stability, so internal teams and third-party partners integrate without friction. Payment processors, CRMs, and ERPs connect through{' '}
          <a
            href="https://inceptivesdigital.com/system-integration-api-automation"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            system integration API automation
          </a>{' '}
          with the same architectural rigor as the core system.
        </>
      ),
    },
    {
      title: 'Microservices Architecture & Development',
      icon: '/assets/backend-api/api-icon3.png',
      desc: 'Monolithic systems are decomposed into independently deployable services with clear boundaries and ownership. Each service can be scaled, updated, or replaced without putting the rest of the system at risk, which is the actual value microservices provide.',
    },
    {
      title: 'Cloud-Native Backend Development',
      icon: '/assets/backend-api/api-icon4.png',
      desc: 'Backend infrastructure built for AWS, Google Cloud, or Azure from the start treats auto-scaling, managed services, and distributed architecture as default choices, which is why performance holds as load increases instead of degrading under it.',
    },
    {
      title: 'Database Design & Performance Optimization',
      icon: '/assets/backend-api/puzzle.png',
      desc: (
        <>
          Relational and NoSQL schemas are designed around the product&apos;s actual access patterns, then tuned through indexing, query optimization, caching, and{' '}
          <a
            href="https://inceptivesdigital.com/blog/mobile-app-performance-optimization"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            mobile app performance optimization
          </a>
          , so the database performs under production load instead of only under the conditions it was tested in.
        </>
      ),
    },
    {
      title: 'Backend Modernization & Migration',
      icon: '/assets/backend-api/api-icon6.png',
      desc: (
        <>
          Legacy systems are migrated to modern architecture without pausing the product&apos;s release cadence. As a result,{' '}
          <a
            href="https://inceptivesdigital.com/product-rescue-scaling"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            product rescue scaling
          </a>{' '}
          rebuilds the system for scale and maintainability without the downtime or rebuild risk most migrations carry.
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
            Comprehensive{' '}
            <span className="text-[#00CE44]">Backend &amp; API Solutions</span> Built Around Your Product
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            Inceptives Digital provides backend &amp; API development services built around what the product actually needs, whether that&apos;s a new architecture, an integration layer, or a migration from something legacy.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="p-7 rounded-[20px] bg-[#323232] text-left border-0 shadow-none flex flex-col justify-start"
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
