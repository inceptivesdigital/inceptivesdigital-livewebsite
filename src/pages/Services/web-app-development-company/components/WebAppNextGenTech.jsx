export default function WebAppNextGenTech() {
  const items = [
    {
      title: 'AI and Intelligent Automation',
      icon: '/assets/mobile-app/AI-and-machine-learning-1.svg',
      desc: (
        <>
          AI-native web applications make decisions in real time based on user behavior, not static rules. Personalization, predictive workflows, and process automation are built into the architecture from the start, not added later. Our{' '}
          <a
            href="https://inceptivesdigital.com/blog/artificial-intelligence-mvp-development"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            AI-powered MVP development
          </a>{' '}
          blog breaks down how these systems get built without over-engineering the first release.
        </>
      ),
    },
    {
      title: 'Cloud-Native and Serverless Architecture',
      icon: '/assets/mobile-app/Cloud-Integration-1.svg',
      desc: 'Serverless adoption surpassed 75% in 2025. Applications are built for cloud-native infrastructure from day one, scaling automatically with traffic, reducing operational overhead, and eliminating the cost of underutilized server capacity.',
    },
    {
      title: 'Headless CMS and API-First Development',
      icon: '/assets/mobile-app/Third-Part-Integration-1.svg',
      desc: 'Content and functionality are decoupled by design. An API-first approach gives product teams the flexibility to deliver content across web, mobile, and third-party surfaces from a single, maintainable backend.',
    },
    {
      title: 'WebAssembly and PWAs',
      icon: '/assets/mobile-app/Offline-Access.svg',
      desc: 'WebAssembly removes the performance ceiling that JavaScript alone cannot overcome. Combined with PWA capabilities like offline access, background sync, and push notifications, web applications deliver experiences that rival native products without the overhead.',
    },
    {
      title: 'IoT and Connected Systems',
      icon: '/assets/mobile-app/Internet-Of-Things-1.svg',
      desc: (
        <>
          Web applications increasingly serve as the interface layer for connected hardware. Real-time sensor data, device control, and automated workflows across logistics, healthcare, and industrial environments are engineered into the architecture from the start. For a closer look at real-world deployments, see how{' '}
          <a
            href="https://inceptivesdigital.com/blog/iot-in-healthcare-applications-benefits-and-future-trends"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            IoT in healthcare applications
          </a>{' '}
          is reshaping patient monitoring and care delivery.
        </>
      ),
    },
    {
      title: 'Blockchain and Digital Trust Solutions',
      icon: '/assets/mobile-app/blockchain.svg',
      desc: (
        <>
          Digital wallets, identity verification, and transparent data provenance are integrated where trust and auditability are genuine product requirements. Blockchain is applied where it solves a real problem, not to signal technical ambition. Read more on how{' '}
          <a
            href="https://inceptivesdigital.com/blog/blockchain-in-software-development"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            blockchain in software development
          </a>{' '}
          is being applied beyond hype-driven use cases.
        </>
      ),
    },
  ]

  return (
    <section
      className="relative py-16 sm:py-24 bg-[#1d1d1d] bg-cover bg-center bg-no-repeat text-white overflow-hidden"
      style={{ backgroundImage: "url('/assets/backend-api/ios-bg-section.webp')" }}
    >
      <div className="absolute inset-0 bg-[#0D0D0D]/80 pointer-events-none" />
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4 text-center">
            Technologies Powering the{' '}
            <span className="text-[#00CE44]">Next Generation of Web Applications</span>
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal max-w-3xl mx-auto text-center">
            Web applications are no longer just software. Our custom web app development company built products integrated with capabilities that were enterprise-only a few years ago.
          </p>
        </div>

        {/* 6 Cards Grid matching mobile-app NextGenTech.jsx */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="p-7 rounded-[16px] bg-[#292929] text-left border-0 shadow-none flex flex-col justify-start"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-10 h-10 object-contain mb-4 p-0 border-0 bg-transparent select-none"
                loading="lazy"
              />
              <h3 className="text-lg sm:text-xl font-bold text-[#00CE44] mb-2.5 leading-snug">
                {item.title}
              </h3>
              <p className="text-white/90 text-xs sm:text-[13.5px] leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
