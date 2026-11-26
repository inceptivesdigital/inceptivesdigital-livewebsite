import { Link } from 'react-router-dom'

// Solid Full-Fill Vector Icons (#00CE44)
function AiMlFullFill({ className = 'w-9 h-9' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M6 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h2v2h2v-2h8v2h2v-2h2c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-2V2h-2v2H8V2H6zm12 16H6V6h12v12zm-3-9H9v6h6V9z" />
    </svg>
  )
}

function IotFullFill({ className = 'w-9 h-9' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M12 3C6.95 3 2.8 6.7 2 11.5l2.4.6C5 7.9 8.2 5.5 12 5.5s7 2.4 7.6 6.6l2.4-.6C21.2 6.7 17.05 3 12 3zm0 5c-2.8 0-5.1 1.8-5.8 4.4l2.4.6c.4-1.6 1.8-2.5 3.4-2.5s3 .9 3.4 2.5l2.4-.6C17.1 9.8 14.8 8 12 8zm0 7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
    </svg>
  )
}

function ArVrFullFill({ className = 'w-9 h-9' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M21 7H3c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h5.5l1.5 2h4l1.5-2H21c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-14 7c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm10 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
    </svg>
  )
}

function BlockchainFullFill({ className = 'w-9 h-9' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 6h2v3h3v2h-3v3h-2v-3H8v-2h3V7z" />
    </svg>
  )
}

function FiveGEdgeFullFill({ className = 'w-9 h-9' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M12 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 2c0-3.31-2.69-6-6-6s-6 2.69-6 6c0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45 0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.48-.81 2.75-2 3.45l1 1.74c1.79-1.04 3-2.97 3-5.19zM12 3C6.48 3 2 7.48 2 13c0 3.7 2.01 6.92 4.99 8.65l1-1.73C5.61 18.33 4 15.86 4 13c0-4.41 3.59-8 8-8s8 3.59 8 8c0 2.86-1.61 5.33-3.99 6.92l1 1.73C19.99 19.92 22 16.7 22 13c0-5.52-4.48-10-10-10z" />
    </svg>
  )
}

function CloudFullFill({ className = 'w-9 h-9' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
    </svg>
  )
}

export default function AustinAdvancedTech() {
  const technologies = [
    {
      title: 'Artificial Intelligence and Machine Learning',
      desc: (
        <>
          On-device ML models, delivered through{' '}
          <Link
            to="/machine-learning-development-services"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
          >
            machine learning development services
          </Link>
          , and LLM integrations enter the architecture where the product scope demands it.
        </>
      ),
      icon: AiMlFullFill,
    },
    {
      title: 'IoT Integration',
      desc: "MQTT and WebSocket-based IoT connectivity for Austin's ClimateTech sector, powering smart grid, EV, and carbon tracking platforms.",
      icon: IotFullFill,
    },
    {
      title: 'Augmented and Virtual Reality',
      desc: 'ARKit and ARCore are integrated into real estate and retail applications where visual engagement directly drives conversion.',
      icon: ArVrFullFill,
    },
    {
      title: 'Blockchain Integration',
      desc: (
        <>
          <Link
            to="/blockchain-development"
            className="underline text-[#00CE44] hover:opacity-80 transition-colors"
          >
            Blockchain development
          </Link>{' '}
          enters the product where ownership, verification, payments, or transaction transparency sit at the center of the product model.
        </>
      ),
      icon: BlockchainFullFill,
    },
    {
      title: '5G-Native Architecture',
      desc: 'Real-time collaboration and ultra-low-latency streaming for telemedicine, live events, and industrial IoT products operating on 5G infrastructure.',
      icon: FiveGEdgeFullFill,
    },
    {
      title: 'Cloud-Native and Scalable Infrastructure',
      desc: 'AWS and Azure backends with microservices architecture and automated deployment pipelines built for products that need to scale without architectural rebuilds.',
      icon: CloudFullFill,
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0c0d10] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            AI, IoT &amp; Emerging Technologies for{' '}
            <span className="text-[#00CE44]">Austin Mobile Applications</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Austin's growing presence in clean technology, life sciences, and advanced manufacturing creates demand for specialized mobile applications. From connected devices to AI-enabled workflows, Inceptives Digital integrates advanced technologies where they address real operational requirements rather than adding unnecessary complexity.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {technologies.map((t) => {
            const IconComponent = t.icon
            return (
              <div
                key={t.title}
                className="p-7 sm:p-8 rounded-[20px] bg-[#14151a] border border-white/5 hover:border-[#00CE44]/40 transition-all duration-300 flex flex-col justify-between text-left hover:-translate-y-1 group"
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
