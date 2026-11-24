export default function FlutterEmergingTech() {
  const techItems = [
    {
      title: '1. AI-Enhanced Flutter Apps',
      icon: '/assets/mobile-app/Generative-AI.svg',
      desc: "Integrate AI-powered recommendations into Flutter applications, with our engineers tailoring model connectivity to your product's requirements.",
    },
    {
      title: '2. Cloud-Powered Infrastructure',
      icon: '/assets/mobile-app/Cloud-Integration-1.svg',
      desc: 'Our Flutter cloud integrations connect applications with AWS, Firebase, and Google Cloud for scalable backend operations.',
    },
    {
      title: '3. AR and VR Experiences',
      icon: '/assets/react-native/Augmented-Virtual-Reality-2.svg',
      desc: 'Create immersive Flutter experiences through compatible AR and VR integrations that support interactive visualization and specialized product requirements.',
    },
    {
      title: '4. Blockchain Integrations',
      icon: '/assets/mobile-app/blockchain.svg',
      desc: 'For blockchain-enabled Flutter products, our engineers integrate supported networks and smart contracts around secure transaction requirements.',
    },
    {
      title: '5. IoT Connectivity',
      icon: '/assets/mobile-app/Internet-Of-Things-1.svg',
      desc: 'Connect Flutter applications with compatible IoT devices, enabling real-time sensor monitoring and operational controls across connected systems.',
    },
    {
      title: '6. 5G-Optimized Performance',
      icon: '/assets/ios-app/5G-Architecture.svg',
      desc: 'Our developers optimize Flutter application networking for high-bandwidth experiences while maintaining responsiveness across varying mobile connection conditions.',
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#1d1d1d]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4 text-center">
            <span className="text-[#00CE44]">Emerging Technologies</span>{' '}
            That Make Flutter Applications Smarter and Scalable
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal max-w-3xl mx-auto text-center">
            Advanced integrations are scoped around genuine product requirements, built into the architecture from the start.
          </p>
        </div>

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
