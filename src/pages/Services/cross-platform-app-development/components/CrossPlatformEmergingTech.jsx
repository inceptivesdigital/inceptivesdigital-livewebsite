export default function CrossPlatformEmergingTech() {
  const items = [
    {
      title: 'AI & Machine Learning',
      icon: '/assets/mobile-app/AI-and-machine-learning-1.svg',
      desc: (
        <>
          Integrating on-device models via TensorFlow Lite and cloud AI APIs to power predictive data flows, automated workflows, and tailored content engines, as part of our broader{' '}
          <a
            href="https://inceptivesdigital.com/ai-development"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            AI development
          </a>{' '}
          practice.
        </>
      ),
    },
    {
      title: 'Cloud-Native Backends',
      icon: '/assets/mobile-app/Cloud-Integration-1.svg',
      desc: 'To smoothly handle traffic spikes, orchestrate AWS, GCP, or Firebase infrastructures with auto-scaling serverless logic, web sockets, and resilient global databases.',
    },
    {
      title: 'Blockchain Integration',
      icon: '/assets/mobile-app/blockchain.svg',
      desc: (
        <>
          Embedding decentralized identity verification, immutable ledger syncing, and secure cryptographic transactions into high-security cross-platform environments through our{' '}
          <a
            href="https://inceptivesdigital.com/blockchain-development"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            blockchain development
          </a>{' '}
          capability.
        </>
      ),
    },
    {
      title: 'Spatial Computing & AR',
      icon: '/assets/mobile-app/Augmented-Virtual-Reality-1.svg',
      desc: 'Native ARKit and ARCore capabilities are wrapped within the unified codebase to enable interactive 3D product visualisations and immersive spatial features.',
    },
    {
      title: 'IoT & Device Connectivity',
      icon: '/assets/mobile-app/Internet-Of-Things-1.svg',
      desc: 'Implementing low-energy Bluetooth (BLE), Wi-Fi, and MQTT protocols to turn your application into a reliable control hub for connected hardware and wearables.',
    },
    {
      title: '5G Optimization',
      icon: '/assets/ios-app/5G-Architecture.svg',
      desc: 'Mobile state management engineered for high-bandwidth 5G streams, optimizing serialization to achieve ultra-low-latency rendering on modern cellular networks.',
    },
  ]

  return (
    <section
      className="relative py-16 sm:py-24 bg-[#1d1d1d] bg-cover bg-center bg-no-repeat text-white overflow-hidden"
      style={{ backgroundImage: "url('/assets/backend-api/ios-bg-section.webp')" }}
    >
      <div className="absolute inset-0 bg-[#0D0D0D]/85 pointer-events-none" />
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4 text-center">
            New Technologies That Expand the{' '}
            <span className="text-[#00CE44]">Potential of Cross-Platform Products</span>
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal max-w-3xl mx-auto text-center">
            Platform coverage is the baseline. What separates cross-platform products that lead their market from those that follow is the depth of capability built into the shared architecture.
          </p>
        </div>

        {/* 6 Cards Grid */}
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
              <h3 className="text-lg sm:text-xl font-bold text-[#00CE44] mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-white/85 text-xs sm:text-[13.5px] leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
