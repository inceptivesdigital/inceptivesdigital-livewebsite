export default function NextGenTech() {
  const techItems = [
    {
      title: 'AI & Machine Learning',
      desc: 'Our AI mobile development expertise brings TensorFlow and PyTorch models into applications requiring predictive analytics and intelligent automation.',
      icon: '/assets/mobile-app/AI-and-machine-learning-1.svg',
    },
    {
      title: 'Generative AI',
      desc: 'LLM-powered mobile applications incorporate OpenAI and Gemini APIs for contextual assistants, with RAG supporting knowledge-driven user experiences.',
      icon: '/assets/mobile-app/Generative-AI.svg',
    },
    {
      title: 'Internet of Things (IoT)',
      desc: 'Connected mobile app development integrates sensors through MQTT and Bluetooth Low Energy for device monitoring and remote operations.',
      icon: '/assets/mobile-app/Internet-Of-Things-1.svg',
    },
    {
      title: 'Augmented & Virtual Reality',
      desc: 'Immersive mobile app development brings ARKit and ARCore into spatial experiences, with Unity supporting interactive product visualization.',
      icon: '/assets/mobile-app/Augmented-Virtual-Reality-1.svg',
    },
    {
      title: 'Blockchain',
      desc: 'Custom blockchain mobile applications connect digital wallets with smart contracts through network APIs that support decentralized transactions.',
      icon: '/assets/mobile-app/blockchain.svg',
    },
    {
      title: 'Cloud-Native Applications',
      desc: 'Cloud-native mobile development uses AWS infrastructure and serverless services to support demanding backend workloads and evolving application requirements.',
      icon: '/assets/mobile-app/Cloud-Integration-1.svg',
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#1d1d1d]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header: Centered */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4 text-center">
            Future-Ready Custom Mobile Apps,{' '}
            <span className="text-[#00CE44]">Built With Emerging Technology</span>
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal max-w-3xl mx-auto text-center">
            Advanced technologies extend mobile product capabilities beyond conventional application development. Our engineers integrate them according to specific business requirements.
          </p>
        </div>

        {/* 6 Cards Grid: Flat Dark Gray, Bare Green Icon, Zero Borders, Zero Shadows */}
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
