import { Link } from 'react-router-dom'

export default function SingaporeAdvancedTech() {
  const cards = [
    {
      title: 'Generative AI Integration',
      desc: (
        <>
          <Link
            to="/generative-ai-development-company"
            className="text-[#00CE44] font-medium underline underline-offset-4"
          >
            Generative AI
          </Link>{' '}
          is introduced where conversational experiences, intelligent search, content generation, or knowledge retrieval create measurable business value. Depending on the product requirements, solutions may leverage leading AI models such as OpenAI, Gemini, or Claude to deliver context-aware user experiences.
        </>
      ),
      icon: (
        <svg className="w-10 h-10 text-[#00CE44]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z" />
        </svg>
      ),
    },
    {
      title: 'AI Agents and Workflow Automation',
      desc: (
        <>
          <Link
            to="/ai-agent-development"
            className="text-[#00CE44] font-medium underline underline-offset-4"
          >
            AI agents
          </Link>{' '}
          become valuable when repetitive workflows begin slowing operations or limiting growth. Built on modern LLMs and intelligent orchestration, they can automate customer support, internal processes, and routine decision-making while keeping people involved where oversight matters most.
        </>
      ),
      icon: (
        <svg className="w-10 h-10 text-[#00CE44]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z" />
        </svg>
      ),
    },
    {
      title: 'Predictive Analytics and Personalization',
      desc: (
        <>
          The right data becomes more valuable when it influences future decisions. Products with growing user bases can use predictive analytics and personalization from{' '}
          <Link
            to="/machine-learning-development-services"
            className="text-[#00CE44] font-medium underline underline-offset-4"
          >
            machine learning development services
          </Link>{' '}
          to improve customer experiences, strengthen retention, and support more informed business decisions over time.
        </>
      ),
      icon: (
        <svg className="w-10 h-10 text-[#00CE44]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
        </svg>
      ),
    },
    {
      title: 'IoT-Powered Applications',
      desc: 'Some mobile products extend well beyond the screen. Connected devices, sensors, and equipment can share real-time information with the application, creating greater visibility across logistics, healthcare, manufacturing, and other operational environments.',
      icon: (
        <svg className="w-10 h-10 text-[#00CE44]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      ),
    },
    {
      title: 'Augmented and Virtual Reality',
      desc: 'Immersive experiences make sense when users need to interact with products, spaces, or information in ways a traditional interface cannot provide. Retail, real estate, education, and training platforms often benefit from AR and VR when they improve understanding, confidence, or decision-making.',
      icon: (
        <svg className="w-10 h-10 text-[#00CE44]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#000000] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <span className="text-[#00CE44] text-xs sm:text-sm font-semibold uppercase tracking-widest block mb-3">
            Next-Gen Intelligence
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18] mb-5">
            AI and Emerging Technologies in{' '}
            <span className="text-[#00CE44]">Singapore App Development</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            <Link
              to="/ai-app-development-services"
              className="text-[#00CE44] font-medium underline underline-offset-4"
            >
              AI app development services
            </Link>{' '}
            in Singapore can involve intelligent search, workflow automation, and predictive capabilities. The engineering approach depends on the use case, available data, integration requirements, and what the application must achieve.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`bg-[#12141a] rounded-[22px] p-7 sm:p-8 flex flex-col justify-between border-0 shadow-none text-left transition-all duration-300 hover:scale-[1.02] ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="mb-6 flex items-center justify-start">
                  {card.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug mb-4">
                  {card.title}
                </h3>
                <div className="text-white/80 text-sm sm:text-base leading-relaxed font-normal">
                  {card.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
