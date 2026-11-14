export default function FlutterEmergingTech() {
  const techItems = [
    {
      title: 'AI-Enhanced Flutter Apps',
      icon: '/assets/mobile-app/Generative-AI.svg',
      desc: (
        <>
          Machine learning integrated at the application layer enables personalization, predictive behavior, and intelligent content surfacing, the kind of work that sits at the center of most{' '}
          <a
            href="https://inceptivesdigital.com/ai-app-development-services"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            ai app development services
          </a>{' '}
          engagements today. Features adapt based on real usage patterns rather than static rules configured at launch.
        </>
      ),
    },
    {
      title: 'Cloud-Powered Infrastructure',
      icon: '/assets/mobile-app/Cloud-Integration-1.svg',
      desc: 'Firebase, AWS, and Google Cloud provide the reliability and scalability that production applications require. Data synchronization, background processing, and real-time features are architected for the infrastructure layer that best suits the product.',
    },
    {
      title: 'AR and VR Experiences',
      icon: '/assets/react-native/Augmented-Virtual-Reality-2.svg',
      desc: "Flutter's rendering capabilities extend into augmented and virtual reality. Interactive product visualizations, educational simulations, and immersive experiences are built where AR and VR genuinely serve the user rather than the feature list.",
    },
    {
      title: 'Blockchain Integrations',
      icon: '/assets/mobile-app/blockchain.svg',
      desc: 'Digital wallets, identity verification, and transparent data provenance are integrated into Flutter applications where trust and auditability are genuine product requirements, not additions made to signal technical credibility.',
    },
    {
      title: 'IoT Connectivity',
      icon: '/assets/mobile-app/Internet-Of-Things-1.svg',
      desc: 'Flutter serves as the interface layer for connected hardware. Real-time sensor data, device control, and automation workflows across home, logistics, and healthcare contexts are engineered into the architecture from the start.',
    },
    {
      title: '5G-Optimized Performance',
      icon: '/assets/ios-app/5G-Architecture.svg',
      desc: 'Applications are profiled and optimized for high-bandwidth, low-latency conditions. The streaming quality and real-time responsiveness that 5G infrastructure enables are built in rather than treated as a future consideration.',
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#1d1d1d]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header: Centered */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4 text-center">
            <span className="text-[#00CE44]">Emerging Technologies</span>{' '}
            That Make Flutter Products Smarter and Scalable
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal max-w-3xl mx-auto text-center">
            Flutter removes the constraints that limit what mobile products can do. Advanced integrations are scoped around genuine product requirements, built into the architecture from the start.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techItems.map((item) => (
            <div
              key={item.title}
              className="p-7 rounded-[16px] bg-[#292929] text-left border-0 shadow-none flex flex-col justify-start"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-10 h-10 object-contain mb-4 select-none"
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
