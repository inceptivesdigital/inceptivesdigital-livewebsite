import { useState, useRef } from 'react'

export default function BlockchainProcess() {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollContainerRef = useRef(null)

  const handleTabClick = (idx, e) => {
    setActiveIndex(idx)
    if (e && e.currentTarget && scrollContainerRef.current) {
      e.currentTarget.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      })
    }
  }

  const steps = [
    {
      num: '01',
      tabLabel: 'Discovery',
      title: 'Discovery & Use Case Validation',
      tabIcon: '/assets/process/tab-1.png',
      cardIcon: '/assets/process/card-1.png',
      desc: 'We analyze your business objectives, product idea, and blockchain requirements to identify where decentralization creates real value.',
    },
    {
      num: '02',
      tabLabel: 'Blockchain',
      title: 'Blockchain Strategy & Architecture',
      tabIcon: '/assets/process/tab-2.png',
      cardIcon: '/assets/process/card-2.png',
      desc: 'We define the product architecture, select the right blockchain network, and plan the infrastructure required for scalability, security, and future growth.',
    },
    {
      num: '03',
      tabLabel: 'UX Design',
      title: 'UX Design & Product Planning',
      tabIcon: '/assets/process/tab-3.png',
      cardIcon: '/assets/process/card-3.png',
      desc: 'We design intuitive user experiences and map interactions across wallets, smart contracts, digital assets, and decentralized features.',
    },
    {
      num: '04',
      tabLabel: 'Development',
      title: 'Blockchain Application Development',
      tabIcon: '/assets/process/tab-4.png',
      cardIcon: '/assets/process/card-4.svg',
      desc: 'We build DApps, DeFi platforms, NFT marketplaces, smart contract systems, and enterprise blockchain solutions using secure and scalable development practices.',
    },
    {
      num: '05',
      tabLabel: 'Testing',
      title: 'Testing, Security & Deployment',
      tabIcon: '/assets/process/tab-5.png',
      cardIcon: '/assets/process/card-5.svg',
      desc: 'We test application performance, validate smart contract functionality, conduct security checks, and deploy the solution on the selected blockchain ecosystem.',
    },
    {
      num: '06',
      tabLabel: 'Optimization',
      title: 'Optimization & Product Growth',
      tabIcon: '/assets/process/tab-6.png',
      cardIcon: '/assets/process/card-6.svg',
      desc: (
        <>
          After launch,{' '}
          <a
            href="https://inceptivesdigital.com/post-launch-analytics-iteration"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            post-launch analytics iteration
          </a>{' '}
          monitors performance, improves user experience, adds new capabilities, and helps your blockchain product evolve with changing market needs.
        </>
      ),
    },
  ]

  const currentStep = steps[activeIndex]

  return (
    <section className="py-16 sm:py-24 bg-[#0d0e11] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Top Heading & Subtitle */}
        <div className="max-w-4xl mx-auto text-center mb-14 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            Comprehensive{' '}
            <span className="text-[#00CE44]">Blockchain App Development Process</span>{' '}
            We Follow
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            Building a successful blockchain application requires the right product strategy, technical architecture, and security approach. Our process for{' '}
            <a
              href="https://inceptivesdigital.com/blog/how-to-create-a-blockchain-app"
              className="underline text-[#00CE44] hover:text-white transition-colors"
            >
              how to create a blockchain app
            </a>{' '}
            combines blockchain expertise with product thinking to create applications designed for usability, scalability, and long-term adoption.
          </p>
        </div>

        {/* 6 Interactive Circular Process Step Tabs */}
        <div className="relative max-w-6xl mx-auto mb-10 sm:mb-14">
          <div className="hidden lg:block absolute top-[48px] left-[8%] right-[8%] h-px bg-white/15 pointer-events-none z-0" />

          <div
            ref={scrollContainerRef}
            className="flex lg:grid lg:grid-cols-6 gap-5 sm:gap-6 overflow-x-auto lg:overflow-visible no-scrollbar py-3 px-2 relative z-10 snap-x snap-mandatory"
          >
            {steps.map((step, idx) => {
              const isActive = idx === activeIndex
              return (
                <button
                  key={step.num}
                  type="button"
                  onClick={(e) => handleTabClick(idx, e)}
                  className="group flex flex-col items-center text-center focus:outline-none cursor-pointer select-none shrink-0 w-[125px] sm:w-[140px] lg:w-auto snap-center"
                >
                  <div className="relative mb-3.5 flex items-center justify-center">
                    <span
                      className={`absolute -top-1 -right-3.5 sm:-right-4.5 z-10 text-[11px] sm:text-[12px] font-mono font-medium px-2 sm:px-2.5 py-0.5 rounded-[50px] border whitespace-nowrap transition-colors ${
                        isActive
                          ? 'bg-[#121317] text-[#00CE44] border-[#00CE44]'
                          : 'bg-[#121317] text-white border-[#34363d] group-hover:border-[#00CE44]/60'
                      }`}
                    >
                      {step.num}.
                    </span>

                    <div
                      className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center transition-all duration-200 border ${
                        isActive
                          ? 'bg-[#1c221e] border-[#00CE44] scale-105'
                          : 'bg-[#1a1b1f] border-[#2c2e35] group-hover:border-white/30'
                      }`}
                    >
                      <img
                        src={step.tabIcon}
                        alt={step.tabLabel}
                        className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <span
                    className={`text-xs sm:text-sm font-medium transition-colors leading-snug max-w-[140px] ${
                      isActive ? 'text-[#00CE44]' : 'text-slate-300 group-hover:text-white'
                    }`}
                  >
                    {step.tabLabel}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Active Step Content Card */}
        <div className="max-w-5xl mx-auto">
          <div className="rounded-[24px] bg-[#222327] border border-white/[0.08] p-7 sm:p-10 lg:p-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-9 transition-all duration-300">
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-[#00CE44] flex items-center justify-center shrink-0 shadow-none">
              <img
                src={currentStep.cardIcon}
                alt={currentStep.title}
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 object-contain brightness-0"
              />
            </div>

            <div className="text-left">
              <div className="text-xs font-bold uppercase tracking-wider text-[#00CE44] mb-1">
                Step {currentStep.num}
              </div>
              <h3 className="text-[22px] sm:text-[25px] font-bold text-white leading-tight mb-3">
                {currentStep.title}
              </h3>
              <p className="text-[15px] sm:text-[16px] text-slate-200 leading-relaxed font-normal">
                {currentStep.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
