import { Link } from 'react-router-dom'
export default function IosAdvancedTech() {
  const techItems = [
    {
      title: 'IoT App Development',
      icon: '/assets/ios-app/Internet-Of-Things.svg',
      desc: (
        <>
          Connect iPhone and iPad applications with smart devices through Core Bluetooth and Bluetooth Low Energy (BLE). Our iOS developers support{' '}
          <Link
            to="/blog/iot-in-healthcare-applications-benefits-and-future-trends"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
>
            IoT in healthcare applications
          </Link>
          , wearable sensors, and industrial monitoring systems.
        </>
      ),
    },
    {
      title: 'Augmented Reality Development',
      icon: '/assets/ios-app/Augmented-Virtual-Reality.svg',
      desc: 'ARKit brings spatial tracking to native iOS applications, while RealityKit handles interactive 3D content. From virtual product previews to immersive training, our iPhone app development services support AR experiences on compatible Apple devices.',
    },
    {
      title: '5G-Enabled iOS Applications',
      icon: '/assets/ios-app/5G-Architecture.svg',
      desc: "Live video and connected-device applications demand efficient data exchange. Our iOS engineers use Apple's networking APIs to support real-time communication and adaptive media delivery over available 5G networks.",
    },
    {
      title: 'Apple Intelligence and Machine Learning',
      icon: '/assets/ios-app/AI-and-machine-learning.svg',
      desc: (
        <>
          Apple&apos;s latest Foundation Models framework brings language understanding and structured generation into supported iPhone applications. Our{' '}
          <Link
            to="/ai-app-development-services"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
>
            AI app development
          </Link>{' '}
          services also use Core ML for specialized on-device inference, with Vision supporting image analysis and App Intents connecting app functionality to Siri.
        </>
      ),
    },
    {
      title: 'Blockchain Integration',
      icon: '/assets/ios-app/blockchain.svg',
      desc: (
        <>
          For iOS fintech applications requiring{' '}
          <Link
            to="/blog/blockchain-integration-mobile-apps"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
>
            blockchain integration in mobile apps
          </Link>
          , our developers integrate wallet authentication and transaction workflows through supported APIs. Sensitive signing operations require appropriate key protection and user authorization.
        </>
      ),
    },
    {
      title: 'Cloud Integration',
      icon: '/assets/ios-app/Cloud-Integration.svg',
      desc: "Custom iPhone applications often depend on cloud infrastructure for account data and synchronization. Inceptives Digital integrates native iOS apps with AWS, Firebase, or Azure through backend APIs, according to the product's requirements.",
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#1d1d1d]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header: Centered */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4 text-center">
            Advanced Technologies Powering Our{' '}
            <span className="text-[#00CE44]">iOS App Development Services</span>
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal max-w-3xl mx-auto text-center">
            Today&apos;s iPhone applications increasingly rely on capabilities beyond standard mobile functionality. Inceptives Digital brings Apple’s latest frameworks into custom iOS development, helping businesses adopt the latest{' '}
            <Link
              to="/blog/ios-app-development-trends"
              className="underline text-[#00CE44] hover:opacity-80 transition-colors"
>
              iOS app development trends
            </Link>{' '}
            without compromising native device compatibility.
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
