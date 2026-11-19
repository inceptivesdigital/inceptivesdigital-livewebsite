import { Link } from 'react-router-dom'

// 100% Solid Full-Fill Vector Icons (#00CE44) - zero movement on hover
function AiMlFullFill({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M9 2v2H6c-1.1 0-2 .9-2 2v3H2v2h2v2H2v2h2v3c0 1.1.9 2 2 2h3v2h2v-2h2v2h2v-2h3c1.1 0 2-.9 2-2v-3h2v-2h-2v-2h2V9h-2V6c0-1.1-.9-2-2-2h-3V2h-2v2h-2V2H9zm-1 6h8v8H8V8z" />
    </svg>
  )
}

function IotFullFill({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
  )
}

function ArVrFullFill({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M21 7H3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h5.5l1.5 2h4l1.5-2H21c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-14 7c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm10 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
    </svg>
  )
}

function FiveGEdgeFullFill({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M7 2v11h3v9l7-12h-4l4-8z" />
    </svg>
  )
}

function BlockchainFullFill({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 6h2v3h3v2h-3v3h-2v-3H8v-2h3V7z" />
    </svg>
  )
}

export default function LondonAdvancedTech() {
  const technologies = [
    {
      title: 'AI & Machine Learning',
      desc: (
        <>
          <Link
            to="/ai-app-development-services"
            className="text-[#00CE44] hover:underline font-medium"
          >
            AI app development services
          </Link>{' '}
          in London can support intelligent recommendations, fraud detection, and automated customer workflows. The choice between a model integration and custom machine learning depends on available data, performance requirements, operating costs, and a specific, measurable use case.
        </>
      ),
      icon: AiMlFullFill,
    },
    {
      title: 'Internet of Things (IoT)',
      desc: "IoT enters the picture when live data from the physical world should change what happens next. A sensor flagging a failing part before it breaks turns guesswork into a scheduled fix, and that's where we've seen the biggest return.",
      icon: IotFullFill,
    },
    {
      title: 'AR & VR Experiences',
      desc: 'AR and VR suit moments that a flat screen handles poorly, like showing how a machine is serviced or how a product fits a real space. Built well, they cut returns, errors, and training time enough to justify the spend.',
      icon: ArVrFullFill,
    },
    {
      title: '5G-Powered Applications',
      desc: "Most products run comfortably on today's mobile networks and rarely need to be designed around 5G alone. It earns attention in the narrow cases, live video at scale or off-device rendering, where latency is the only thing between a feature and its users.",
      icon: FiveGEdgeFullFill,
    },
    {
      title: 'Blockchain Integration',
      desc: (
        <>
          <Link
            to="/blockchain-development"
            className="text-[#00CE44] hover:underline font-medium"
          >
            Blockchain development
          </Link>{' '}
          answers one question: who keeps the record when no single party should keep it alone? Provable ownership and audit-proof trails fit that case. For most products, a well-designed database does the same job faster and cheaper.
        </>
      ),
      icon: BlockchainFullFill,
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0c0d10] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            Emerging Technologies in London{' '}
            <span className="text-[#00CE44]">Mobile App Development</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Our stance on emerging tech is simple. It joins a product when the impact on the business is clear.
          </p>
        </div>

        {/* 5-Card Grid (3 Top + 2 Bottom Centered) */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {technologies.map((t) => {
            const IconComponent = t.icon
            return (
              <div
                key={t.title}
                className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] p-7 sm:p-8 rounded-[20px] bg-[#14151a] border-0 transition-all duration-300 flex flex-col justify-between text-left hover:-translate-y-1 group shadow-none"
              >
                <div>
                  <div className="mb-6 flex items-center justify-start">
                    <IconComponent className="w-10 h-10 shrink-0" />
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#00CE44] transition-colors mb-3 leading-snug">
                    {t.title}
                  </h3>

                  <p className="text-white/75 text-sm sm:text-[15px] leading-relaxed font-normal">
                    {t.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
