import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function AiCoreServices() {
  const [activeTab, setActiveTab] = useState('core')

  const coreServices = [
    {
      title: 'AI App Development',
      desc: 'Web and mobile applications with AI built into the core for performance, scalability, and real-user load.',
      link: '/ai-development/app/',
    },
    {
      title: 'AI Chatbot Development',
      desc: 'Conversational interfaces designed for your users, resolving, converting, and escalating with precision.',
      link: '/ai-development/chatbot/',
    },
    {
      title: 'AI Agent Development',
      desc: 'Autonomous agents embedded in workflows to execute multi-step tasks and interact with multiple systems.',
      link: '/ai-development/agents/',
    },
    {
      title: 'Generative AI Content',
      desc: 'Custom LLM and generative AI solutions for content creation, summarization, and knowledge generation.',
      link: '/ai-development/generative-ai/',
    },
    {
      title: 'Machine Learning',
      desc: 'Predictive, classification, recommendation, and anomaly detection models trained for operational use.',
      link: '/ai-development/machine-learning/',
    },
    {
      title: 'NLP Development',
      desc: 'Natural language processing for semantic search, entity extraction, sentiment analysis, and document understanding.',
      link: '/ai-development/nlp/',
    },
    {
      title: 'Computer Vision',
      desc: 'Image and video intelligence for object detection, classification, inspection, and real-time monitoring.',
      link: '/ai-development/computer-vision/',
    },
    {
      title: 'AI MVP Development',
      desc: 'A focused build that validates the AI concept before full investment. Scope defined, risks identified, proof delivered in 8 to 12 weeks.',
      link: '/ai-development/ai-mvp/',
    },
  ]

  const automationServices = [
    {
      title: 'AI Automation',
      desc: 'Workflow automation where AI makes decisions and humans handle exceptions in high-volume processes.',
      link: '/ai-development/automation/',
    },
    {
      title: 'System Integration & API Automation Services',
      desc: 'Connect applications, data sources, and third-party platforms through reliable API integrations that automate information flow and keep business systems working together.',
      link: '/ai-development/api-automation/',
    },
    {
      title: 'Business Process Automation Services',
      desc: 'Replace repetitive manual processes with intelligent automation that improves efficiency, reduces operational bottlenecks, and helps teams focus on higher-value work.',
      link: '/ai-development/bpa/',
    },
    {
      title: 'RPA Development Services',
      desc: 'Develop robotic process automation solutions that handle repetitive, rule-based tasks across business systems with greater speed, accuracy, and consistency.',
      link: '/ai-development/rpa/',
    },
  ]

  const currentCards = activeTab === 'core' ? coreServices : automationServices
  const currentImage = activeTab === 'core'
    ? '/assets/ai-development/ai-tabs-mobile.png'
    : '/assets/ai-development/mobile-498x1024.png'

  return (
    <section className="relative py-20 lg:py-28 bg-black text-white overflow-hidden border-t border-white/5">
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-black tracking-tight mb-4">
            <span className="text-[#00CE44]">AI Development Services</span> Built to Perform Under Real Load
          </h2>
          <p className="text-white/70 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
            Core AI and automation services designed around your workflows, data, and operational requirements to perform under real-world conditions.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-col items-center justify-center gap-4 mb-12 sm:mb-16">
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

          <p className="text-white/60 text-xs sm:text-sm max-w-2xl text-center">
            {activeTab === 'core'
              ? 'Strategy, architecture, and guidance to determine where AI delivers the most impact for your business.'
              : 'Workflow automation where AI makes decisions, handles repetitive tasks, and frees teams to focus on high-value work. Built for operational scale and reliability.'}
          </p>
        </div>

        {/* Content Layout: 3 Columns of Cards on Left + Phone on Right (Matching media_1794893158350_0962a603.jpg) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Cards Grid: 3 columns on desktop */}
          <div className="lg:col-span-8 xl:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
              {currentCards.map((service, idx) => (
                <Link
                  key={idx}
                  to={service.link}
                  className="bg-[#121212] hover:bg-[#161616] border border-white/[0.08] hover:border-[#00CE44]/40 rounded-2xl p-5 sm:p-6 transition-all duration-200 flex flex-col justify-start group block text-left min-h-[160px]"
                >
                  <h3 className="text-[17px] sm:text-[18px] font-bold text-[#00CE44] tracking-tight mb-2.5 transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-white/70 text-xs sm:text-[13px] leading-relaxed font-normal">
                    {service.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Phone Mockup */}
          <div className="lg:col-span-4 xl:col-span-3 flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={currentImage}
                alt={activeTab === 'core' ? 'Core AI Services Interface' : 'Automation Services Interface'}
                className="w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[320px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] select-none transition-all duration-300"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
