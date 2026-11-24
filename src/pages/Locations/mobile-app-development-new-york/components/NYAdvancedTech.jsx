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

function CloudFullFill({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
    </svg>
  )
}

export default function NYAdvancedTech() {
  const technologies = [
    {
      title: 'Artificial Intelligence & Machine Learning',
      desc: (
        <>
          AI earns its place when it removes friction, improves decisions, or increases retention. We integrate AI through{' '}
          <Link
            to="/machine-learning-development-services"
            className="text-[#00CE44] font-medium underline underline-offset-4"
          >
            machine learning development services
          </Link>{' '}
          where automation, personalization, or prediction create a clear advantage.
        </>
      ),
      icon: AiMlFullFill,
    },
    {
      title: 'Internet of Things (IoT)',
      desc: 'Connected products depend on reliable data moving between devices, users, and systems. We build mobile experiences around real-time visibility, monitoring, and operational control.',
      icon: IotFullFill,
    },
    {
      title: 'Immersive AR/VR Experiences',
      desc: 'Most products do not need AR or VR. For industries like real estate, retail, and training, immersive experiences can reduce uncertainty and improve engagement.',
      icon: ArVrFullFill,
    },
    {
      title: '5G-Powered Mobile Experiences',
      desc: 'Low latency unlocks experiences that depend on real-time interaction. This matters most for streaming, collaboration, connected devices, and live operational workflows.',
      icon: FiveGEdgeFullFill,
    },
    {
      title: 'Blockchain-Powered Applications',
      desc: (
        <>
          <Link
            to="/blockchain-development"
            className="text-[#00CE44] font-medium underline underline-offset-4"
          >
            Blockchain development
          </Link>{' '}
          belongs in products where trust, ownership, or verification are central to the business model. Outside those cases, simpler architectures usually win.
        </>
      ),
      icon: BlockchainFullFill,
    },
    {
      title: 'Cloud-Native & AI-Ready Architecture',
      desc: 'Products rarely stay close to their original assumptions. We design systems that support growth, new capabilities, and evolving business models without expensive rebuilds.',
      icon: CloudFullFill,
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#000] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            Emerging Technologies Reshaping{' '}
            <span className="text-[#00CE44]">Mobile App Development in New York</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Technology only belongs in a product when it improves adoption, efficiency, or business outcomes. We integrate emerging capabilities where they create measurable value rather than unnecessary complexity.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {technologies.map((t) => {
            const IconComponent = t.icon
            return (
              <div
                key={t.title}
                className="p-7 sm:p-8 rounded-[20px] bg-[#14151a] border-0 transition-all duration-300 flex flex-col justify-between text-left hover:-translate-y-1 group shadow-none"
              >
                <div>
                  {/* Clean Solid Full-fill Icon (Zero movement on hover) */}
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
