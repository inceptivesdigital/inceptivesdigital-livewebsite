import { Link } from 'react-router-dom'

export default function ReactNativeEmergingTech() {
  const techItems = [
    {
      title: 'AI and Machine Learning',
      icon: '/assets/mobile-app/AI-and-machine-learning-1.svg',
      desc: (
        <>
          Our React Native engineers integrate{' '}
          <Link
            to="/ai-app-development-services"
            className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
          >
            AI
          </Link>{' '}
          and{' '}
          <Link
            to="/machine-learning-development-services"
            className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
          >
            machine learning
          </Link>{' '}
          models using TensorFlow Lite and ML Kit to support intelligent mobile features and on-device processing where appropriate.
        </>
      ),
    },
    {
      title: 'Augmented Reality Integration',
      icon: '/assets/react-native/Augmented-Virtual-Reality-2.svg',
      desc: 'Bring interactive 3D experiences into React Native applications with ViroReact. Our developers assess device compatibility to deliver AR functionality suited to your product.',
    },
    {
      title: 'IoT Integration',
      icon: '/assets/mobile-app/Internet-Of-Things-1.svg',
      desc: 'Connect React Native applications with IoT devices through Bluetooth Low Energy and MQTT, enabling real-time monitoring and reliable data exchange across connected products.',
    },
    {
      title: 'Blockchain Integration',
      icon: '/assets/mobile-app/blockchain.svg',
      desc: (
        <>
          For products that need{' '}
          <Link
            to="/blockchain-development"
            className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
          >
            blockchain development
          </Link>
          , our engineers integrate supported networks and smart contracts into React Native applications, with security requirements guiding the implementation approach.
        </>
      ),
    },
    {
      title: 'Cloud-Native Architecture',
      icon: '/assets/mobile-app/Cloud-Integration-1.svg',
      desc: 'Our cloud engineering approach connects React Native applications with AWS, Firebase, and Google Cloud services to support scalable backend infrastructure and data synchronization.',
    },
    {
      title: '5G-Enabled Mobile Experiences',
      icon: '/assets/ios-app/5G-Architecture.svg',
      desc: 'React Native applications can leverage 5G connectivity for high-bandwidth experiences. Our engineers optimize network handling to maintain responsive functionality as connection conditions change.',
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#1d1d1d]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header: Centered */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4 text-center">
            Future-Ready React Native Products Through{' '}
            <span className="text-[#00CE44]">Emerging Technology</span>
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal max-w-3xl mx-auto text-center">
            Our React Native app development capabilities extend to products requiring AI, connected devices, and advanced mobile integrations. Engineers assess compatibility with the existing architecture before selecting the technologies that fit each product.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techItems.map((item, idx) => (
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
