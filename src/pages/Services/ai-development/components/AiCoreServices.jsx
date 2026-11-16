import { useState } from 'react'

export default function AiCoreServices() {
  const [activeTab, setActiveTab] = useState('core')

  const coreServices = [
    {
      title: 'AI App Development',
      desc: 'Web and mobile applications with AI built into the core for performance, scalability, and real-user load.',
    },
    {
      title: 'AI Chatbot Development',
      desc: 'Conversational interfaces designed for your users, resolving, converting, and escalating with precision.',
    },
    {
      title: 'AI Agent Development',
      desc: 'Autonomous agents embedded in workflows to execute multi-step tasks and interact with multiple systems.',
    },
    {
      title: 'Generative AI Content',
      desc: 'Custom LLM and generative AI solutions for content creation, summarization, and knowledge generation.',
    },
    {
      title: 'Machine Learning',
      desc: 'Predictive, classification, recommendation, and anomaly detection models trained for operational use.',
    },
    {
      title: 'NLP Development',
      desc: 'Natural language processing for semantic search, entity extraction, sentiment analysis, and document understanding.',
    },
    {
      title: 'Computer Vision',
      desc: 'Image and video intelligence for object detection, classification, inspection, and real-time monitoring.',
    },
    {
      title: 'AI MVP Development',
      desc: 'A focused build that validates the AI concept before full investment. Scope defined, risks identified, proof delivered in 8 to 12 weeks.',
    },
  ]

  const automationServices = [
    {
      title: 'AI Automation',
      desc: 'Workflow automation where AI makes decisions and humans handle exceptions in high-volume processes.',
    },
    {
      title: 'System Integration & API Automation Services',
      desc: 'Connect applications, data sources, and third-party platforms through reliable API integrations that automate information flow and keep business systems working together.',
    },
    {
      title: 'Business Process Automation Services',
      desc: 'Replace repetitive manual processes with intelligent automation that improves efficiency, reduces operational bottlenecks, and helps teams focus on higher-value work.',
    },
    {
      title: 'RPA Development Services',
      desc: 'Develop robotic process automation solutions that handle repetitive, rule-based tasks across business systems with greater speed, accuracy, and consistency.',
    },
  ]

  const currentCards = activeTab === 'core' ? coreServices : automationServices

  return (
    <section className="relative py-20 lg:py-28 bg-black text-white overflow-hidden border-t border-white/5">
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            <span className="text-[#00CE44]">AI Development Services</span> Built to Perform Under Real Load
          </h2>
          <p className="text-white/70 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto">
            Core AI and automation services designed around your workflows, data, and operational requirements to perform under real-world conditions.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-col items-center justify-center gap-4 mb-14">
          <div className="inline-flex p-1.5 rounded-full bg-[#181818] border border-white/10">
            <button
              type="button"
              onClick={() => setActiveTab('core')}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'core'
                  ? 'bg-[#00CE44] text-black shadow-md'
                  : 'bg-transparent text-white/80 hover:text-white'
              }`}
            >
              Core AI Services
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('automation')}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'automation'
                  ? 'bg-[#00CE44] text-black shadow-md'
                  : 'bg-transparent text-white/80 hover:text-white'
              }`}
            >
              Automation Services
            </button>
          </div>

          <p className="text-white/60 text-xs sm:text-sm tracking-wide text-center">
            Strategy, architecture, and guidance to determine where AI delivers the most impact for your business.
          </p>
        </div>

        {/* Content Layout: Cards Grid on Left + Phone Mockup on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Cards Column */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {currentCards.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-[#121212] hover:bg-[#161616] border border-white/[0.08] hover:border-[#00CE44]/30 rounded-2xl p-6 sm:p-7 transition-all duration-200 flex flex-col justify-between group min-h-[170px]"
                >
                  <div>
                    <h3 className="text-[#00CE44] text-lg sm:text-xl font-bold tracking-tight mb-2 group-hover:translate-x-0.5 transition-transform">
                      {service.title}
                    </h3>
                    <div className="w-10 h-0.5 bg-[#00CE44]/20 mb-3 group-hover:w-16 group-hover:bg-[#00CE44] transition-all" />
                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-normal">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Phone Mockup */}
          <div className="lg:col-span-4 flex justify-center items-center">
            <div className="relative group max-w-[320px] sm:max-w-[360px] w-full">
              {/* Subtle back ambient glow */}
              <div className="absolute inset-0 bg-[#00CE44]/15 rounded-3xl blur-3xl -z-10 group-hover:bg-[#00CE44]/25 transition-all" />
              <img
                src="https://nextincep.wpenginepowered.com/wp-content/uploads/2026/07/mobile-498x1024.png"
                onError={(e) => { e.currentTarget.src = '/assets/ai-development/mobile-498x1024.png' }}
                alt="AI App Interface Mockup"
                className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] select-none"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
