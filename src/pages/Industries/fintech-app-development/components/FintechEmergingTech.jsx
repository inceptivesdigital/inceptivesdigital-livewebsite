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

export default function FintechEmergingTech() {
  const cards = [
    {
      title: 'AI and Machine Learning',
      icon: '/assets/mobile-app/AI-and-machine-learning-1.svg',
      desc: 'Predictive modelling, behaviour-based risk analysis, and automated fraud detection are built into fintech platforms. Personalised recommendations, dynamic credit scoring, and real-time decision-making that improve with every user interaction.',
    },
    {
      title: 'Cloud Computing',
      icon: '/assets/mobile-app/Internet-Of-Things-1.svg',
      desc: 'Secure, compliant cloud infrastructure that delivers high performance, continuous deployment, and easy scalability. Financial applications built to handle transaction surges without downtime or performance degradation.',
    },
    {
      title: 'Biometric Authentication',
      icon: '/assets/mobile-app/blockchain.svg',
      desc: 'Fingerprint, facial, and voice recognition are integrated for multi-layered identity verification. Stronger security than password-based authentication with faster, more seamless user access aligned with KYC and AML compliance standards.',
    },
    {
      title: 'Data Analytics',
      icon: '/assets/fintech/data-analytics.svg',
      desc: 'Real-time analytics and visualisation tools that turn raw financial data into actionable business intelligence. Customer spending patterns, credit risk modelling, and performance dashboards built for strategic financial decision-making.',
    },
    {
      title: 'APIs and Open Banking',
      icon: '/assets/healthcare/big-data.svg',
      desc: 'Robust APIs and open banking frameworks that connect financial institutions, fintech platforms, and third-party providers. Secure data sharing, streamlined payments, and innovative financial products built on interoperability.',
    },
    {
      title: 'Robotic Process Automation',
      icon: '/assets/fitness/Cloud-Integration.svg',
      desc: 'Repetitive financial workflows automated for speed and accuracy. Document verification, compliance checks, and transaction reconciliation are handled without manual intervention at every stage.',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#000000] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.16] mb-4">
            Modern Technologies Built Into Our{' '}
            <span className="text-[#00CE44]">Fintech App Development Services</span>
          </h2>
          <p className="text-white/85 text-sm sm:text-base leading-relaxed font-normal">
            The capabilities that separate a fintech application built for today from one built for where financial technology is going.
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
                    {card.title}
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
