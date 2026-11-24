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

export default function TorontoAdvancedTech() {
  const technologies = [
    {
      title: (
        <>
          AI &amp;{' '}
          <Link
            to="/machine-learning-development-services"
            className="text-[#00CE44] underline underline-offset-4"
          >
            Machine Learning
          </Link>
        </>
      ),
      desc: (
        <>
          Businesses benefit from AI when personalization, forecasting, or decisions are made faster than a person can make by hand, powering recommendation engines, fraud detection, and support{' '}
          <Link
            to="/business-process-automation"
            className="text-[#00CE44] font-medium underline underline-offset-4"
          >
            automation
          </Link>{' '}
          once the data set is large enough to move a business metric.
        </>
      ),
      icon: AiMlFullFill,
    },
    {
      title: 'Internet of Things (IoT)',
      desc: 'IoT earns its place when physical assets need real-time monitoring or control, such as fleet tracking, equipment sensors, or connected wearables, paying off when the data collected changes a decision, like triggering maintenance or adjusting pricing based on usage.',
      icon: IotFullFill,
    },
    {
      title: 'AR & VR Experiences',
      desc: (
        <>
          <Link
            to="/blog/ar-vr-in-fitness-apps"
            className="text-[#00CE44] font-medium underline underline-offset-4"
          >
            AR and VR
          </Link>{' '}
          are worth building when a flat screen falls short, such as training simulations, real estate walkthroughs, remote equipment guidance, or product configuration, and only when they measurably cut errors, returns, or training time, not as a novelty.
        </>
      ),
      icon: ArVrFullFill,
    },
    {
      title: '5G-Powered Applications',
      desc: '5G matters for products built on real-time data at scale, like live video, connected fleets, or cloud gaming, since most apps run fine on existing carrier and device connections. A dedicated investment makes sense only when latency is the bottleneck.',
      icon: FiveGEdgeFullFill,
    },
    {
      title: 'Blockchain Integration',
      desc: 'Blockchain fits narrow cases: provable ownership, multi-party transactions with no trusted single record-holder, or supply chain audit trails that must survive scrutiny. For most roadmaps, a well-designed database solves the same problem faster, cheaper, and with less overhead.',
      icon: BlockchainFullFill,
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0c0d10] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            Technologies We Recommend Only When They{' '}
            <span className="text-[#00CE44]">Solve the Right Problem</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Inceptives Digital recommends a technology only when it solves a business problem better than the alternative, not because it is trending. Every addition to your roadmap is weighed on cost, timeline, and return before it reaches the build.
          </p>
        </div>

        {/* 5-Card Grid (3 Top + 2 Bottom Centered) */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {technologies.map((t, idx) => {
            const IconComponent = t.icon
            return (
              <div
                key={idx}
                className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] p-7 sm:p-8 rounded-[20px] bg-[#14151a] border-0 transition-all duration-300 flex flex-col justify-between text-left hover:-translate-y-1 group shadow-none"
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
