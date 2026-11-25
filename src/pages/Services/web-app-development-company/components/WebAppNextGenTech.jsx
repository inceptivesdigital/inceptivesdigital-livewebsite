export default function WebAppNextGenTech() {
  const items = [
    {
      title: 'AI and Intelligent Automation',
      icon: '/assets/mobile-app/AI-and-machine-learning-1.svg',
      desc: 'AI can turn a conventional workflow into something that understands and processes information. We integrate language models, document processing, and contextual assistance into web applications where automated decisions or information retrieval add practical value.',
    },
    {
      title: 'Cloud-Native and Serverless Architecture',
      icon: '/assets/mobile-app/Cloud-Integration-1.svg',
      desc: 'Traffic patterns and infrastructure demands change as products gain users. Cloud-native architecture lets us use managed services and serverless components where they suit the workload, without committing every application to the same deployment model.',
    },
    {
      title: 'Headless CMS and API-First Development',
      icon: '/assets/mobile-app/Third-Part-Integration-1.svg',
      desc: "A product shouldn't need a separate content system for every digital channel. Headless CMS architecture separates content from presentation, while API-first development lets the same backend serve web applications and connected platforms.",
    },
    {
      title: 'WebAssembly and Progressive Web Apps',
      icon: '/assets/mobile-app/Offline-Access.svg',
      desc: 'Browser-based products can handle more demanding workloads with the right architecture. WebAssembly supports suitable computational tasks, while PWA capabilities bring installable experiences and offline access to supported web applications.',
    },
    {
      title: 'IoT and Connected Systems',
      icon: '/assets/mobile-app/Internet-Of-Things-1.svg',
      desc: 'Connected devices become more useful when their data reaches the people managing them. We integrate IoT services with web dashboards, giving operators access to device information and remote controls through connected application interfaces.',
    },
    {
      title: 'Blockchain and Digital Trust',
      icon: '/assets/mobile-app/blockchain.svg',
      desc: 'Some applications need more than conventional database records. Blockchain integration can support verifiable transactions, shared records, and digital asset ownership where distributed verification serves a genuine product requirement.',
    },
  ]

  return (
    <section
      className="relative py-16 sm:py-24 bg-[#1d1d1d] bg-cover bg-center bg-no-repeat text-white overflow-hidden"
      style={{ backgroundImage: "url('/assets/web-app/ios-bg-section.webp')" }}
    >
      <div className="absolute inset-0 bg-[#0D0D0D]/80 pointer-events-none" />
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4 text-center">
            Future-Forward Web App Development Services,{' '}
            <span className="text-[#00CE44]">Woven With Next-Gen Technology</span>
          </h2>
          <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal max-w-3xl mx-auto text-center">
            Web applications are no longer just software. Our custom web app development company builds products integrated with capabilities that were enterprise-only a few years ago.
          </p>
        </div>

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
              <p className="text-white/90 text-xs sm:text-[14px] leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
