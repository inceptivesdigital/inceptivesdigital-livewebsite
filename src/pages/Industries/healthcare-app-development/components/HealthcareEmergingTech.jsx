import { Link } from 'react-router-dom'

function FourPointStar({ className = '' }) {
  return (
    <svg
      className={className}
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M22 0C22 14 29 22 44 22C29 22 22 30 22 44C22 30 15 22 0 22C15 22 22 14 22 0Z"
        fill="#BDBDBD"
      />
    </svg>
  )
}

export default function HealthcareEmergingTech() {
  const cards = [
    {
      title: 'Artificial Intelligence',
      icon: '/assets/healthcare/health-ai-icon.svg',
      desc: 'Predictive analytics, smart diagnostics, and automated administrative workflows are built into healthcare platforms. Clinical teams make faster, more accurate decisions with AI-generated insights behind them.',
      link: '/ai-development',
      underline: false,
    },
    {
      title: 'Internet Of Medical Things',
      icon: '/assets/mobile-app/Internet-Of-Things-1.svg',
      desc: 'Patient-worn devices, sensors, and healthcare systems are connected for continuous monitoring and real-time data exchange. Health metrics delivered to clinical teams without manual data handling at every step.',
      link: null,
      underline: false,
    },
    {
      title: 'Blockchain',
      icon: '/assets/mobile-app/blockchain.svg',
      desc: 'Tamper-proof health record management and transparent data handling built for healthcare platforms where patient trust and regulatory compliance are non-negotiable.',
      link: '/blockchain-development',
      underline: true,
    },
    {
      title: 'Augmented And Virtual Reality',
      icon: '/assets/react-native/Augmented-Virtual-Reality-2.svg',
      desc: 'AR and VR are built into healthcare applications for medical training, patient education, and virtual consultation experiences that require immersive clinical environments.',
      link: null,
      underline: false,
    },
    {
      title: 'Big Data And Analytics',
      icon: '/assets/healthcare/big-data.svg',
      desc: 'Large healthcare datasets are processed into actionable clinical insights. Treatment plans informed by data. Resource management optimised by pattern recognition at scale.',
      link: null,
      underline: false,
    },
    {
      title: 'Cloud Computing',
      icon: '/assets/mobile-app/Cloud-Integration-1.svg',
      desc: 'Scalable, reliable, and regulation-compliant cloud infrastructure built for healthcare platforms that need patient data to be accessible, secure, and available at all times.',
      link: null,
      underline: false,
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#000000] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.16] mb-4">
            Emerging Technologies Powering Our{' '}
            <span className="text-[#00CE44]">Healthcare App</span>
            <span className="block text-[#00CE44]">Development Services</span>
          </h2>
          <p className="text-white/85 text-sm sm:text-base leading-relaxed font-normal">
            The capabilities that separate a healthcare application built for today from one built for where healthcare is going.
          </p>
        </div>

        {/* 3x2 Architectural Grid with Exact Cell-Corner Anchored 4-Point Stars */}
        <div className="px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {cards.map((card, idx) => {
              const isTopRow = idx < 3
              const isCol2Or3 = idx % 3 !== 0

              return (
                <div
                  key={idx}
                  className={`relative bg-[#000000] p-8 sm:p-10 lg:p-12 flex flex-col justify-start text-left border-white/25 ${
                    isTopRow ? 'border-b' : 'border-b md:border-b-0'
                  } ${isCol2Or3 ? 'md:border-l' : ''}`}
                >
                  {/* Exact Corner Stars anchored directly to Row 1 bottom border & vertical grid intersections */}
                  {idx === 0 && (
                    <>
                      <FourPointStar className="hidden md:block absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 z-10 pointer-events-none" />
                      <FourPointStar className="hidden md:block absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 z-10 pointer-events-none" />
                    </>
                  )}
                  {idx === 1 && (
                    <FourPointStar className="hidden md:block absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 z-10 pointer-events-none" />
                  )}
                  {idx === 2 && (
                    <FourPointStar className="hidden md:block absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 z-10 pointer-events-none" />
                  )}

                  <div className="w-12 h-12 flex items-center justify-start mb-5">
                    <img
                      src={card.icon}
                      alt={card.title}
                      className="max-h-11 max-w-11 object-contain select-none"
                      loading="lazy"
                    />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#00CE44] tracking-tight mb-3">
                    {card.link ? (
                      <Link
                        to={card.link}
                        className={
                          card.underline
                            ? 'underline hover:text-white transition-colors'
                            : 'hover:underline'
                        }
                      >
                        {card.title}
                      </Link>
                    ) : (
                      card.title
                    )}
                  </h3>

                  <p className="text-white/85 text-sm sm:text-[15px] leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
