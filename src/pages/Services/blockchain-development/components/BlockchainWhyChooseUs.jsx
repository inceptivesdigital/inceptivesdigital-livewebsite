import { Link } from 'react-router-dom'

export default function BlockchainWhyChooseUs() {
  const pillars = [
    {
      title: 'Product-First Blockchain Approach',
      desc: 'We focus on business models, user experiences, and adoption challenges before selecting technologies or development paths.',
    },
    {
      title: 'Blockchain Expertise Across Multiple Use Cases',
      desc: (
        <>
          From DApps and DeFi platforms to NFT ecosystems, smart contracts, and enterprise blockchain solutions, we build products across diverse blockchain applications and evolving{' '}
          <a
            href="https://inceptivesdigital.com/blog/blockchain-technology-trends"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            blockchain technology trends
          </a>
          .
        </>
      ),
    },
    {
      title: 'Scalable & Secure Engineering',
      desc: 'Our development approach prioritizes reliable architecture, smart contract security, and infrastructure designed for future growth.',
    },
    {
      title: 'Full-Cycle Product Development',
      desc: 'From strategy and architecture to development, deployment, and ongoing optimization, we support blockchain products throughout their lifecycle.',
    },
    {
      title: 'Experience Across Industries',
      desc: 'With experience building digital solutions across 20+ industries, we understand how blockchain applications need to adapt to different business environments.',
    },
    {
      title: 'Focus on Adoption & User Experience',
      desc: 'We design blockchain applications with usability in mind, reducing complexity for users while creating seamless experiences around decentralized technologies.',
    },
  ]

  const stats = [
    {
      value: '150+',
      label: 'Developers',
      icon: '/assets/mobile-app/apps-launch.svg',
    },
    {
      value: '20+',
      label: 'Industries Served',
      icon: '/assets/mobile-app/active-developer.svg',
    },
    {
      value: '99.9%',
      label: 'Infrastructure Uptime',
      icon: '/assets/mobile-app/app-downloads.svg',
    },
    {
      value: '4.7',
      label: 'Rating on Clutch',
      icon: '/assets/mobile-app/rating.svg',
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#1d1d1d]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header: Centered (H2 = 40px, Subtitle = 16px center) */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            <span className="text-[#00CE44]">Why Businesses Choose</span> Our Blockchain App Development Services
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            Building a blockchain product requires more than technical expertise. We combine{' '}
            <Link
              to="/custom-software-development"
              className="text-[#00CE44] underline hover:text-white transition-colors"
            >
              custom software development
            </Link>
            , product strategy, blockchain engineering, and user-focused design to help businesses create applications that solve real problems and deliver long-term value.
          </p>
        </div>

        {/* 6 Cards Grid: Flat Dark Gray, Zero Borders, Zero Shadows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14 sm:mb-18">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="p-7 rounded-[16px] bg-[#292929] text-left border-0 shadow-none flex flex-col justify-start"
            >
              <img
                src="/assets/mobile-app/icon01.png"
                alt={p.title}
                className="w-9 h-9 object-contain mb-4 select-none"
                loading="lazy"
              />
              <h3 className="text-lg sm:text-xl font-bold text-[#00CE44] mb-2.5 leading-snug">
                {p.title}
              </h3>
              <p className="text-white/90 text-xs sm:text-[14px] leading-relaxed font-normal">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 4 Stats Counters Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center pt-10 border-t border-white/10">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center justify-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 flex items-center justify-center">
                <img
                  src={s.icon}
                  alt={s.label}
                  className="w-full h-full object-contain select-none"
                  loading="lazy"
                />
              </div>
              <div className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#00CE44] tracking-tight leading-none mb-1.5">
                {s.value}
              </div>
              <div className="text-white text-xs sm:text-sm font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
