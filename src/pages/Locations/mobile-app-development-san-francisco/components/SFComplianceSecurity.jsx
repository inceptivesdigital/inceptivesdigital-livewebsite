// Full fill icons for compliance cards
function HealthShieldFillIcon({ className = 'w-8 h-8' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 6h2v3h3v2h-3v3h-2v-3H8v-2h3V7z" />
    </svg>
  )
}

function LockFillIcon({ className = 'w-8 h-8' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
    </svg>
  )
}

function PrivacyDocFillIcon({ className = 'w-8 h-8' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
    </svg>
  )
}

function BuildingFillIcon({ className = 'w-8 h-8' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
    </svg>
  )
}

export default function SFComplianceSecurity() {
  const complianceCards = [
    {
      num: '1.',
      title: 'Healthcare and Medical Data Protection',
      icon: HealthShieldFillIcon,
      points: [
        { name: 'HIPAA', desc: 'Protects health information handled by covered entities and business associates.' },
        { name: 'California CMIA', desc: 'Establishes confidentiality requirements for medical information in covered circumstances.' },
        { name: 'California Health Data Requirements', desc: 'Address medical data access, disclosure, and security obligations applicable to the product.' },
      ],
    },
    {
      num: '2.',
      title: 'FinTech and Financial Data Security',
      icon: LockFillIcon,
      points: [
        { name: 'CFIPA', desc: "Regulates the sharing of consumers' nonpublic financial information by covered financial institutions." },
        { name: 'Gramm-Leach-Bliley Act (GLBA)', desc: 'Establishes financial privacy and information security obligations for covered institutions.' },
        { name: 'PCI DSS', desc: 'Sets security requirements for environments handling payment cardholder data.' },
      ],
    },
    {
      num: '3.',
      title: 'California Consumer Privacy and AI Regulations',
      icon: PrivacyDocFillIcon,
      points: [
        { name: 'CCPA / CPRA', desc: 'Establishes consumer privacy rights and obligations for covered California businesses.' },
        { name: 'CalOPPA', desc: 'Requires covered mobile services to provide accessible privacy policies.' },
        { name: 'CPPA Automated Decisionmaking', desc: 'Introduce obligations for covered uses of AI in significant consumer decisions, beginning January 1, 2027.' },
      ],
    },
    {
      num: '4.',
      title: 'San Francisco Enterprise and Public-Sector Security',
      icon: BuildingFillIcon,
      points: [
        { name: 'SF Cybersecurity Procurement', desc: 'City technology vendors may undergo security assessments when accessing municipal systems or sensitive City data.' },
        { name: 'SOC 2 Type II', desc: 'Provides independent assurance about relevant service-organization controls when enterprise buyers request it.' },
        { name: 'OWASP MASVS', desc: 'Guides mobile application security testing, including authentication, storage, network communications, and platform interactions.' },
      ],
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#07080a] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            California Compliance and Mobile App{' '}
            <span className="text-[#00CE44]">Security Standards</span> for San Francisco Businesses
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Mobile app development in San Francisco must account for California&apos;s privacy laws, sector-specific regulations, and enterprise security requirements. Inceptives Digital incorporates applicable safeguards into application architecture, data handling, and access controls, helping businesses prepare for regulatory and customer security reviews.
          </p>
        </div>

        {/* 4 Cards Grid: Clean icons with NO bg, border, or padding */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-stretch">
          {complianceCards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className="p-7 sm:p-8 rounded-[22px] bg-[#121318] border border-white/5 hover:border-[#00CE44]/40 transition-all duration-300 flex flex-col justify-between text-left hover:-translate-y-1 group"
              >
                <div>
                  {/* Clean Icon: No background, no border, no padding */}
                  <div className="mb-5 flex items-center justify-start text-[#00CE44]">
                    <Icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-5 leading-snug group-hover:text-[#00CE44] transition-colors">
                    {card.title}
                  </h3>

                  <div className="space-y-4">
                    {card.points.map((pt) => (
                      <div key={pt.name} className="text-xs sm:text-[13px] leading-relaxed">
                        <span className="font-bold text-[#00CE44] block mb-0.5">
                          {pt.name}:
                        </span>
                        <span className="text-white/70 font-normal">
                          {pt.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
