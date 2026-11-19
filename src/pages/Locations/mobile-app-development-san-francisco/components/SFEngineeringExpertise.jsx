// Mobile App Development San Francisco: Engineering Expertise for Ambitious Businesses
// Dark theme: bg-[#0a0b0e] border-y border-white/10
// Dark cards: bg-[#14151a] border border-white/10
// Left: Heading (40px), Paragraph, and 3 Award Badges from project files
// Right: 3 horizontal cards with solid full-fill green vector icons (#00CE44) and chevron number flags (300+, 39+, 200+)

// Full-fill solid green vector icons
function PhoneFullFill({ className = 'w-9 h-9' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
    </svg>
  )
}

function AiCloudFullFill({ className = 'w-9 h-9' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M12 2L9.5 8.5 3 11l6.5 2.5L12 20l2.5-6.5L21 11l-6.5-2.5L12 20zm6.5 12.5l-1.25 3.25-3.25 1.25 3.25 1.25 1.25 3.25 1.25-3.25 3.25-1.25-3.25-1.25-1.25-3.25z" />
    </svg>
  )
}

function LayersFullFill({ className = 'w-9 h-9' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9.07l-9-7-9 7 1.63 1.27L12 16z" />
    </svg>
  )
}

export default function SFEngineeringExpertise() {
  const cards = [
    {
      title: 'iOS & Android',
      subtitle: 'Native Mobile Engineering • 300+ Apps',
      stat: '300+',
      icon: PhoneFullFill,
    },
    {
      title: 'AI & Cloud',
      subtitle: 'Advanced Technology Expertise • 39+ Verticals',
      stat: '39+',
      icon: AiCloudFullFill,
    },
    {
      title: 'MVP to Enterprise',
      subtitle: 'End-to-End Product Development • 200+ Engineers',
      stat: '200+',
      icon: LayersFullFill,
    },
  ]

  const awards = [
    {
      src: '/assets/awards-images/award-clutch-austin.png',
      alt: 'Clutch Top App Development Company San Francisco 2026',
    },
    {
      src: '/assets/awards-images/award-top-developers.png',
      alt: 'Clutch Top Android App Development Company San Francisco 2026',
    },
    {
      src: '/assets/awards-images/award-clutch-gaming.png',
      alt: 'Clutch Top iPhone App Development Company San Francisco 2026',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0a0b0e] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Heading (40px), Paragraph, 3 Award Badges as simple clean images (no box, no text) */}
          <div className="lg:col-span-6 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
              Mobile App Development San Francisco:{' '}
              <span className="text-[#00CE44] block">
                Engineering Expertise
              </span>{' '}
              for Ambitious Businesses
            </h2>

            <p className="text-white/80 text-base sm:text-[17px] leading-relaxed mb-8 font-normal">
              Mission Bay&apos;s health-tech ecosystem faces different product demands than software businesses around Yerba Buena. Both need applications that can withstand operational scrutiny, whether that means sensitive data handling or complex system integrations. Inceptives Digital delivers custom mobile app development for businesses managing complex workflows, enterprise integrations, and evolving customer expectations. Our expertise covers native iOS and Android engineering, AI-powered applications, and cross-platform solutions built to meet the technical and commercial requirements.
            </p>

            {/* 3 Award Badges: Simple images with no boxes, no background, and no text captions */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-3">
              {awards.map((a) => (
                <div key={a.alt} className="transition-transform duration-200 hover:scale-105">
                  <img
                    src={a.src}
                    alt={a.alt}
                    className="h-20 sm:h-24 w-auto object-contain select-none"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 3 Clean Dark Cards with Full-Fill Green Icons */}
          <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-5">
            {cards.map((card) => {
              const Icon = card.icon
              return (
                <div
                  key={card.title}
                  className="bg-[#14151a] rounded-[18px] border border-white/10 shadow-xl hover:border-[#00CE44]/60 flex items-center justify-between overflow-hidden min-h-[96px] group transition-all duration-300 hover:-translate-y-0.5"
                >
                  {/* Left: Solid Full-Fill Green Icon & Title/Subtitle */}
                  <div className="flex items-center gap-4 sm:gap-5 px-5 sm:px-7 py-5">
                    <div className="shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <Icon className="w-9 h-9" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg sm:text-xl leading-snug group-hover:text-[#00CE44] transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-white/60 uppercase tracking-wider mt-0.5">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Right: Chevron Flag Tag with Stat Number */}
                  <div
                    className="bg-[#1f2027] text-white group-hover:bg-[#00CE44] group-hover:text-black font-extrabold text-2xl sm:text-3xl px-8 sm:px-12 py-7 shrink-0 min-w-[130px] sm:min-w-[150px] flex items-center justify-center select-none transition-all duration-300"
                    style={{
                      clipPath: 'polygon(24px 0%, 100% 0%, 100% 100%, 24px 100%, 0% 50%)',
                    }}
                  >
                    {card.stat}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
