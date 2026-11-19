// 100% Solid Full-Fill Vector Icons (#00CE44)
function AwardBadgeFill({ className = 'w-8 h-8' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
    </svg>
  )
}

function CodeCapFill({ className = 'w-8 h-8' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
    </svg>
  )
}

function TechLeadFill({ className = 'w-8 h-8' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    </svg>
  )
}

function MilestoneFill({ className = 'w-8 h-8' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
    </svg>
  )
}

export default function LondonAwardsCapabilities() {
  const awards = [
    {
      title: 'Clutch Top App Development Company London 2026',
      logo: '/assets/awards-images/award-clutch-austin.png',
    },
    {
      title: 'Clutch Top iPhone App Development Company London 2026',
      logo: '/assets/ios-app/iPhone_App_Development_Companies_in_the_United_States.png',
    },
    {
      title: 'Clutch Top iPhone App Development Company United Kingdom 2026',
      logo: '/assets/ios-app/rf-badge-top-mobile-app-development-2026-982x1024.png',
    },
  ]

  const capabilities = [
    {
      title: 'Source Code & IP Ownership',
      desc: 'Contract-defined ownership and handover',
      icon: CodeCapFill,
    },
    {
      title: 'Dedicated Technical Leadership',
      desc: 'Architecture reviews and engineering oversight',
      icon: TechLeadFill,
    },
    {
      title: 'Structured Project Delivery',
      desc: 'Documented milestones and progress reviews',
      icon: MilestoneFill,
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0c0d10] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            Recognised Mobile App Development{' '}
            <span className="text-[#00CE44]">Expertise in London</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Inceptives Digital provides custom mobile app development services for London startups and SMBs, supported by industry recognition from Clutch, RightFirms, and SoftwareWorld. Native iOS and Android applications and complex business platforms consistently follow clearly defined engineering, security, and delivery requirements.
          </p>
        </div>

        {/* 2-Column Split: Awards Left & Development Capabilities Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Side: Awards & Recognition */}
          <div className="lg:col-span-6 bg-[#14151a] rounded-[24px] p-7 sm:p-10 border-0 shadow-none text-left flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <AwardBadgeFill className="w-8 h-8 shrink-0" />
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Awards &amp; Recognition
                </h3>
              </div>

              <div className="space-y-4">
                {awards.map((a) => (
                  <div
                    key={a.title}
                    className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-[#1b1c22] border-0 shadow-none"
                  >
                    <img
                      src={a.logo}
                      alt={a.title}
                      className="h-12 w-12 object-contain shrink-0 select-none"
                      loading="lazy"
                    />
                    <span className="text-sm sm:text-base font-bold text-white leading-snug">
                      {a.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Development Capabilities */}
          <div className="lg:col-span-6 bg-[#14151a] rounded-[24px] p-7 sm:p-10 border-0 shadow-none text-left flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <CodeCapFill className="w-8 h-8 shrink-0" />
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Development Capabilities
                </h3>
              </div>

              <div className="space-y-4">
                {capabilities.map((cap) => {
                  const Icon = cap.icon
                  return (
                    <div
                      key={cap.title}
                      className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-[#1b1c22] border-0 shadow-none"
                    >
                      <div className="shrink-0 mt-0.5">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-white mb-1">
                          {cap.title}
                        </h4>
                        <p className="text-white/75 text-xs sm:text-sm leading-relaxed font-normal">
                          {cap.desc}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
