import { Link } from 'react-router-dom'

// Dedicated High-Precision Vector Icons for Dubai D33 Agenda Pillars (#00CE44 Theme)
function FintechIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#00CE44" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="2" fill="#00CE44" fillOpacity="0.12" />
      <line x1="2" y1="10" x2="22" y2="10" />
      <line x1="6" y1="15" x2="9" y2="15" />
      <circle cx="16.5" cy="15" r="1.75" fill="#00CE44" />
      <path d="M12 2v3M8 2v3M16 2v3" strokeWidth="1.5" />
    </svg>
  )
}

function LogisticsIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#00CE44" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M1 3h14v13H1z" fill="#00CE44" fillOpacity="0.12" />
      <path d="M15 8h4l3 3.5V16h-7V8z" fill="#00CE44" fillOpacity="0.2" />
      <circle cx="5.5" cy="18.5" r="2.25" fill="#00CE44" />
      <circle cx="18.5" cy="18.5" r="2.25" fill="#00CE44" />
      <path d="M5 8h6M5 11h4" strokeWidth="1.6" />
    </svg>
  )
}

function CrossBorderTradeIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#00CE44" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="20.5" r="1.75" fill="#00CE44" />
      <circle cx="19" cy="20.5" r="1.75" fill="#00CE44" />
      <path d="M1 2h3.5l2.4 12.3a1.8 1.8 0 0 0 1.8 1.4h9.8a1.8 1.8 0 0 0 1.8-1.4L22 6H5.5" fill="#00CE44" fillOpacity="0.12" />
      <path d="M12 9v5M9.5 11.5h5" strokeWidth="1.6" />
    </svg>
  )
}

function SmartCityIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#00CE44" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21h18" />
      <path d="M4 21V9l7-5v17" fill="#00CE44" fillOpacity="0.12" />
      <path d="M20 21V12l-5-3.5V21" fill="#00CE44" fillOpacity="0.2" />
      <circle cx="7.5" cy="11.5" r="1" fill="#00CE44" />
      <circle cx="7.5" cy="15.5" r="1" fill="#00CE44" />
      <circle cx="17.5" cy="14.5" r="1" fill="#00CE44" />
      <circle cx="17.5" cy="17.5" r="1" fill="#00CE44" />
      <path d="M11 2a4 4 0 0 1 4 4" strokeDasharray="1.5 1.5" />
    </svg>
  )
}

export default function DubaiD33Agenda() {
  const d33Cards = [
    {
      title: 'Fintech & Digital Transactions',
      icon: FintechIcon,
      tag: 'CBUAE & Wallets',
      link: '/fintech-app-development',
      linkText: 'Explore Fintech',
      desc: 'High-performance payment gateways, Central Bank of the UAE regulatory alignment, and multi-currency digital wallet architectures designed for high transaction volume.',
    },
    {
      title: 'Logistics & Regional Supply Chain',
      icon: LogisticsIcon,
      tag: 'GCC Distribution',
      link: '/custom-software-development',
      linkText: 'Explore Logistics',
      desc: 'Fleet telemetry, live dispatch tracking, warehouse automation, and cross-border customs data synchronization engineered for connected GCC distribution networks.',
    },
    {
      title: 'Cross-Border Trade & Retail Platforms',
      icon: CrossBorderTradeIcon,
      tag: 'Omnichannel & Arabic',
      link: '/ecommerce-app-development-company',
      linkText: 'Explore Trade & Retail',
      desc: 'Omnichannel commerce platforms with native Arabic/English localization, localized payment tokenization, and seamless ERP and CRM system integrations.',
    },
    {
      title: 'Smart City & Connected Infrastructure',
      icon: SmartCityIcon,
      tag: 'UAE PASS & IoT',
      link: '/custom-software-development',
      linkText: 'Explore Smart City',
      desc: 'IoT telemetry, smart mobility integrations, and secure UAE PASS digital identity authentication built to support Dubai’s connected digital economy.',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#000000] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading & D33 Narrative */}
        <div className="max-w-6xl mx-auto text-center mb-14 sm:mb-18">
          <span className="text-[#00CE44] text-xs sm:text-sm font-semibold uppercase tracking-widest block mb-3">
            Economic Acceleration &bull; Vision 2033
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            Dubai&apos;s D33 Agenda and the Next Decade of{' '}
            <span className="text-[#00CE44]">Digital Growth</span>
          </h2>
          <div className="space-y-4 text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              Dubai&apos;s Economic Agenda D33 aims to double the emirate&apos;s economy by 2033, with digital transformation projects targeted to contribute AED 100 billion annually. This long-term investment creates opportunities for mobile app development in Dubai, particularly across{' '}
              <Link
                to="/fintech-app-development"
                className="text-[#00CE44] font-medium underline underline-offset-4"
              >
                fintech app development
              </Link>
              , logistics, retail, and enterprise services.
            </p>
            <p className="text-sm sm:text-base text-white/75">
              The agenda also targets AED 1 trillion in private-sector investment and AED 25.6 trillion in foreign trade by 2033. As Dubai strengthens its connections with international markets, businesses have greater reasons to invest in mobile platforms that support digital transactions, multilingual experiences, and cross-border operations.
            </p>
            <p className="text-sm sm:text-base text-white/75">
              Inceptives Digital helps Dubai startups and SMBs develop iOS, Android, and cross-platform applications around these changing market requirements, with architecture designed to support future integrations and regional expansion.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid with Proper Domain-Specific Vector Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {d33Cards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className="rounded-[22px] bg-[#12141a] p-7 sm:p-8 flex flex-col justify-between border-0 shadow-none text-left transition-all duration-300 hover:scale-[1.02] group"
              >
                <div>
                  {/* Clean Bare SVG Icon in Brand Green: No background box, no borders, no padding */}
                  <div className="mb-6 flex items-center justify-between">
                    <Icon className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 text-[#00CE44]" />
                    <span className="text-[11px] font-semibold text-[#00CE44] bg-[#00CE44]/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-[21px] font-bold text-white mb-3 leading-snug group-hover:text-[#00CE44] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-white/75 text-sm sm:text-[14.5px] leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.06]">
                  <Link
                    to={card.link}
                    className="inline-flex items-center text-sm font-medium text-[#00CE44] hover:underline gap-1.5"
                  >
                    {card.linkText} &rarr;
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
