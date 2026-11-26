import { Link } from 'react-router-dom'

// Solid Full-Fill Vector Icons (#00CE44)
function AiMlFullFill({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M6 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h2v2h2v-2h8v2h2v-2h2c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-2V2h-2v2H8V2H6zm12 16H6V6h12v12zm-3-9H9v6h6V9z" />
    </svg>
  )
}

function GenAiFullFill({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M12 1L9.2 8.8 1.5 11.5l7.7 2.7L12 22l2.8-7.8 7.7-2.7-7.7-2.7L12 1zm7 13.5l-1.3 3.2-3.2 1.3 3.2 1.3 1.3 3.2 1.3-3.2 3.2-1.3-3.2-1.3-1.3-3.2z" />
    </svg>
  )
}

function IotFullFill({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44">
      <path d="M12 3C6.95 3 2.8 6.7 2 11.5l2.4.6C5 7.9 8.2 5.5 12 5.5s7 2.4 7.6 6.6l2.4-.6C21.2 6.7 17.05 3 12 3zm0 5c-2.8 0-5.1 1.8-5.8 4.4l2.4.6c.4-1.6 1.8-2.5 3.4-2.5s3 .9 3.4 2.5l2.4-.6C17.1 9.8 14.8 8 12 8zm0 7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
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
      <path d="M12 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 2c0-3.31-2.69-6-6-6s-6 2.69-6 6c0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45 0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.48-.81 2.75-2 3.45l1 1.74c1.79-1.04 3-2.97 3-5.19zM12 3C6.48 3 2 7.48 2 13c0 3.7 2.01 6.92 4.99 8.65l1-1.73C5.61 18.33 4 15.86 4 13c0-4.41 3.59-8 8-8s8 3.59 8 8c0 2.86-1.61 5.33-3.99 6.92l1 1.73C19.99 19.92 22 16.7 22 13c0-5.52-4.48-10-10-10z" />
    </svg>
  )
}

export default function DubaiAdvancedTech() {
  const cards = [
    {
      title: 'Artificial Intelligence and Machine Learning',
      icon: AiMlFullFill,
      desc: (
        <>
          Personalization engines, fraud detection, and predictive analytics from{' '}
          <Link
            to="/machine-learning-development-services"
            className="text-[#00CE44] font-medium underline underline-offset-4"
          >
            machine learning development services
          </Link>{' '}
          are incorporated where they solve real product challenges. AI models support smarter decisions, automate workflows, and improve user experiences through capabilities aligned with business objectives.
        </>
      ),
    },
    {
      title: 'IoT and Smart City Integration',
      icon: IotFullFill,
      desc: "Connected products require reliable communication between applications, devices, and underlying systems. IoT capabilities support real-time monitoring, automation, and data exchange across smart environments, with relevance to Dubai's D33 agenda and its focus on connected digital infrastructure.",
    },
    {
      title: 'Augmented and Virtual Reality',
      icon: ArVrFullFill,
      desc: 'Immersive experiences create value when they influence how users explore, understand, or interact with products. AR and VR capabilities support applications across real estate, retail, healthcare, and training environments.',
    },
    {
      title: '5G-Enabled Applications',
      icon: FiveGEdgeFullFill,
      desc: 'High-performance applications increasingly depend on responsive connectivity and real-time data processing. 5G-ready architecture supports interactive experiences, live streaming, connected devices, and applications requiring faster communication between users and systems.',
    },
    {
      title: 'Generative AI and LLM Integration',
      icon: GenAiFullFill,
      desc: (
        <>
          Our{' '}
          <Link
            to="/generative-ai-development-company"
            className="text-[#00CE44] font-medium underline underline-offset-4"
          >
            generative AI development company
          </Link>{' '}
          team integrates generative AI capabilities into product workflows where they improve automation, search, support experiences, and user interactions. LLM-based features enable intelligent assistants and contextual experiences across multilingual applications.
        </>
      ),
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0b0c0f] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-[1.18] mb-5">
            AI-Powered Mobile App Development in{' '}
            <span className="text-[#00CE44]">Dubai</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            AI belongs in a mobile product when it improves a specific workflow or customer interaction, as these{' '}
            <Link
              to="/blog/ai-powered-mobile-apps-uae-business-operations"
              className="text-[#00CE44] font-medium underline underline-offset-4"
            >
              AI-powered apps in the UAE
            </Link>{' '}
            show. Inceptives Digital offers{' '}
            <Link
              to="/ai-app-development-services"
              className="text-[#00CE44] font-medium underline underline-offset-4"
            >
              AI app development services
            </Link>{' '}
            that integrate intelligent search, conversational features, and automation into existing applications and new products, with technical decisions guided by data availability, integration requirements, and measurable outcomes.
          </p>
        </div>

        {/* 5 Cards Centered Grid (3 top + 2 bottom centered) */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-7">
          {cards.map((c, i) => {
            const Icon = c.icon
            return (
              <div
                key={i}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-19px)] rounded-[20px] bg-[#14151a] p-7 sm:p-8 border border-white/5 hover:border-[#00CE44]/40 transition-all duration-300 flex flex-col justify-start text-left group"
              >
                <div className="mb-5 flex items-center justify-start">
                  <Icon className="w-10 h-10 shrink-0" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-[#00CE44] transition-colors">
                  {c.title}
                </h3>
                <div className="text-white/75 text-sm sm:text-[15px] leading-relaxed font-normal">
                  {c.desc}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
