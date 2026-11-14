import { Link } from 'react-router-dom'

export default function ReactNativeEmergingTech() {
  const techItems = [
    {
      title: 'AI and Machine Learning',
      icon: '/assets/mobile-app/AI-and-machine-learning-1.svg',
      desc: (
        <>
          On-device AI in React Native means intelligence without connectivity gaps. Our{' '}
          <a
            href="https://inceptivesdigital.com/machine-learning-development-services"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            machine learning development services
          </a>{' '}
          use TensorFlow Lite and ML Kit for personalisation, predictive analysis, and adaptive behaviour directly inside the application layer.
        </>
      ),
    },
    {
      title: 'AR with Viro React',
      icon: '/assets/react-native/Augmented-Virtual-Reality-2.svg',
      desc: 'React Native leverages ViroReact and React 360 to deliver immersive AR experiences from one codebase, enabling consistent interactions and product visualization across iOS and Android.',
    },
    {
      title: 'IoT Integration',
      icon: '/assets/mobile-app/Internet-Of-Things-1.svg',
      desc: 'React Native connects to IoT devices through Bluetooth LE and MQTT, bringing real-time monitoring, sensor data processing, and automation into one cross-platform codebase for healthcare, fitness, and automotive.',
    },
    {
      title: 'Blockchain',
      icon: '/assets/mobile-app/blockchain.svg',
      desc: (
        <>
          Data integrity in any industry cannot be an architectural afterthought.{' '}
          <Link
            to="/blockchain-development"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            Blockchain development
          </Link>{' '}
          in React Native brings cryptographic verification and immutable record-keeping into the cross-platform product from the ground up.
        </>
      ),
    },
    {
      title: 'Cloud-Native Architecture',
      icon: '/assets/mobile-app/Cloud-Integration-1.svg',
      desc: 'AWS Amplify, Firebase, and Google Cloud are integrated from the beginning, enabling scalable infrastructure, real-time synchronization, and consistent application experiences across iOS and Android deployments.',
    },
    {
      title: '5G-Ready Development',
      icon: '/assets/ios-app/5G-Architecture.svg',
      desc: '5G transforms what React Native applications can deliver in real time. A single optimized codebase serves both iOS and Android simultaneously, with low-latency interactions and high-bandwidth data exchange.',
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
            The mobile landscape shifts faster than most development cycles can accommodate. As a React Native app development company, Inceptives Digital evaluates emerging technology at the scoping stage of every engagement, integrating the latest technologies where the product specifically demands it.
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
