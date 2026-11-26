import { Link } from 'react-router-dom'

export default function AndroidEmergingTech() {
  const techItems = [
    {
      title: 'AI & Machine Learning',
      icon: '/assets/mobile-app/AI-and-machine-learning-1.svg',
      desc: (
        <>
          Bring on-device{' '}
          <Link
            to="/machine-learning-development-services"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
>
            machine learning
          </Link>{' '}
          into Android products with TensorFlow Lite and ML Kit, enabling personalization, image analysis, text processing, recommendations, and real-time data capabilities across applications.
        </>
      ),
    },
    {
      title: 'Cloud-Native Architecture',
      icon: '/assets/mobile-app/Cloud-Integration-1.svg',
      desc: 'Connect Android applications with AWS, Google Cloud, or Azure for scalable backend services. Cloud infrastructure supports API integrations and data synchronization across mobile applications and enterprise systems.',
    },
    {
      title: 'Augmented Reality with ARCore',
      icon: '/assets/mobile-app/Augmented-Virtual-Reality-1.svg',
      desc: (
        <>
          Create immersive{' '}
          <Link
            to="/blog/android-ar-app-development"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
>
            Android AR
          </Link>{' '}
          experiences with ARCore for property visualization, interactive fitness, location-aware travel features, product visualization, and other spatial use cases requiring contextual user interaction.
        </>
      ),
    },
    {
      title: 'Android IoT Integration',
      icon: '/assets/mobile-app/Internet-Of-Things-1.svg',
      desc: 'Connect Android applications with compatible sensors and smart devices through Bluetooth Low Energy, Wi-Fi, or supported APIs. It enables device monitoring and remote control for connected products.',
    },
    {
      title: 'Blockchain Integration',
      icon: '/assets/mobile-app/blockchain.svg',
      desc: (
        <>
          Support Android products with{' '}
          <Link
            to="/blockchain-development"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
          >
            blockchain development
          </Link>{' '}
          for secure transactions, smart contracts, digital assets, decentralized workflows, and verifiable data exchange where distributed architecture adds practical product value.
        </>
      ),
    },
    {
      title: '5G-Optimized Android Development',
      icon: '/assets/ios-app/5G-Architecture.svg',
      desc: 'Enable high-bandwidth Android experiences across real-time communication, connected devices, streaming, and latency-sensitive functionality where faster networks can support richer product interactions and connected services.',
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#1d1d1d]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header: Centered */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4 text-center">
            Engineering What&apos;s Next in{' '}
            <span className="text-[#00CE44]">Android App Development</span>
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal max-w-3xl mx-auto text-center">
            Our Android app development services support deeper technology integration than any other mobile ecosystem, which is exactly why most of it doesn&apos;t belong in most apps. Each capability below earns its place only where the product genuinely needs it.
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
