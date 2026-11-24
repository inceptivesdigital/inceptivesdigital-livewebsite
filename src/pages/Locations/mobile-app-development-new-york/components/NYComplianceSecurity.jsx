import { Link } from 'react-router-dom'

export default function NYComplianceSecurity() {
  const cards = [
    {
      category: 'Healthcare & Patient Data',
      title: 'New York Healthcare Compliance',
      image: '/assets/locations/new-york/ny-compliance-healthcare.jpg',
      items: [
        'New York State Public Health Law § 18',
        'New York SHIELD Act',
        'New York medical confidentiality requirements',
      ],
    },
    {
      category: 'Financial Services & Fintech',
      title: 'New York Financial Cybersecurity',
      image: '/assets/locations/new-york/ny-compliance-fintech.jpg',
      items: [
        'NYDFS Cybersecurity Regulation (23 NYCRR 500)',
        'NYDFS cybersecurity risk assessments',
        'NYDFS incident reporting requirements',
      ],
    },
    {
      category: 'Consumer Data & Biometrics',
      title: 'New York Consumer Privacy Protection',
      image: '/assets/locations/new-york/ny-compliance-privacy.jpg',
      items: [
        'New York SHIELD Act',
        'NYC Biometric Identifier Law (Local Law 3)',
        'New York breach notification requirements',
      ],
    },
    {
      category: 'AI & Automated Decisions',
      title: 'NYC Artificial Intelligence Compliance',
      image: '/assets/locations/new-york/ny-compliance-ai.jpg',
      items: [
        'NYC Local Law 144 (Automated Employment Decision Tools)',
        'Independent bias audit requirements',
        'Candidate notices and audit disclosures',
      ],
    },
    {
      category: 'Government & Education',
      title: 'New York Public Sector Security',
      image: '/assets/locations/new-york/ny-compliance-gov.jpg',
      items: [
        'New York Education Law § 2-d',
        'NYS-P08-005 accessibility policy',
        'New York State government ICT requirements',
      ],
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#000] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-5xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            Security and Compliance for Mobile Applications in{' '}
            <span className="text-[#00CE44]">New York</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            New York businesses face specific requirements for protecting customer information, securing financial systems, and handling automated decisions. Inceptives Digital considers applicable NYC and New York State regulations during mobile app architecture and development, following{' '}
            <Link
              to="/blog/mobile-app-security-best-practices"
              className="text-[#00CE44] font-medium underline underline-offset-4"
            >
              app security best practices
            </Link>
            . From fintech platforms to healthcare applications, security requirements influence how products collect data, manage access, and operate after launch.
          </p>
        </div>

        {/* 3 Top + 2 Bottom Centered Compliance Cards Grid: Zero shadow, zero border, zero card hover */}
        <div className="flex flex-wrap justify-center gap-6 items-stretch">
          {cards.map((card) => (
            <div
              key={card.title}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-[20px] bg-[#101218] p-6 border-0 shadow-none flex flex-col justify-start text-left"
            >
              {/* Top AI Card Image */}
              <div className="w-full h-48 sm:h-52 rounded-[14px] overflow-hidden mb-6 shrink-0">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover select-none"
                  loading="lazy"
                />
              </div>

              {/* Category Label */}
              <span className="text-xs sm:text-sm font-medium text-[#00CE44] mb-1.5 tracking-wide">
                {card.category}
              </span>

              {/* Card Heading */}
              <h3 className="text-lg sm:text-xl font-bold text-white leading-snug mb-4 px-0">
                {card.title}
              </h3>

              {/* Compliance Items with Subtle Horizontal Divider Lines */}
              <ul className="text-white/75 text-sm sm:text-[15px] leading-relaxed">
                {card.items.map((item) => (
                  <li key={item} className="py-1 px-0">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
