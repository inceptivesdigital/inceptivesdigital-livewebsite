import { Link } from 'react-router-dom'

function OpenAiBadgeIcon({ className = 'w-9 h-9' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 2.5a4.5 4.5 0 0 1 3.9 2.25 4.5 4.5 0 0 1 5.6 5.6 4.5 4.5 0 0 1 0 3.3 4.5 4.5 0 0 1-5.6 5.6 4.5 4.5 0 0 1-7.8 0 4.5 4.5 0 0 1-5.6-5.6 4.5 4.5 0 0 1 0-3.3 4.5 4.5 0 0 1 5.6-5.6A4.5 4.5 0 0 1 12 2.5Z" />
      <path d="M12 7.5 15.9 9.75v4.5L12 16.5l-3.9-2.25v-4.5L12 7.5Z" />
      <path d="M12 2.5v5M19.8 7l-3.9 2.75M19.8 17l-3.9-2.75M12 21.5v-5M4.2 17l3.9-2.75M4.2 7l3.9 2.75" />
    </svg>
  )
}

function AnthropicBadgeIcon({ className = 'w-9 h-9' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.83 5h-2.3L6.2 19h2.25l1.08-3.05h5.34L15.95 19h2.25L13.83 5Zm-3.6 9 1.97-5.56L14.17 14h-3.94ZM17.6 5l3.9 14h-2.15L15.45 5h2.15Z" />
    </svg>
  )
}

function LangChainBadgeIcon({ className = 'w-9 h-9' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.5 8.5c3.5 0 6.5 2.5 6.5 6-3.5 0-6.5-2.5-6.5-6ZM13 5c3.5 0 6.5 2.5 6.5 6-3.5 0-6.5-2.5-6.5-6ZM12.5 14.5c2.8 0 5 1.8 5 4.5-2.8 0-5-1.8-5-4.5ZM5.5 15.5c2.2 0 4 1.5 4 3.5-2.2 0-4-1.5-4-3.5Z" />
    </svg>
  )
}

function HuggingFaceBadgeIcon({ className = 'w-9 h-9' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="11" r="7" />
      <circle cx="9.5" cy="9.5" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="9.5" r="0.9" fill="currentColor" stroke="none" />
      <path d="M9 12.8c.8 1.2 2 1.7 3 1.7s2.2-.5 3-1.7" />
      <path d="M6 16.5c-.8-1-1.5-2-1.5-3.2 0-.8.6-1.3 1.3-1.3.8 0 1.4.8 1.7 2M18 16.5c.8-1 1.5-2 1.5-3.2 0-.8-.6-1.3-1.3-1.3-.8 0-1.4.8-1.7 2" />
    </svg>
  )
}

function LlamaBadgeIcon({ className = 'w-9 h-9' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M8.5 7 7 3.5 10.5 6h3L17 3.5 15.5 7c1.6 1.2 2.5 3.2 2.5 5.5 0 3.6-2.5 6.5-6 6.5s-6-2.9-6-6.5c0-2.3.9-4.3 2.5-5.5Z" />
      <circle cx="9.8" cy="11" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="14.2" cy="11" r="0.9" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="14.5" rx="2.4" ry="1.8" />
      <path d="M11 14.5h2" />
    </svg>
  )
}

export default function AiPlatforms() {
  const platforms = [
    {
      name: 'OpenAI',
      Icon: OpenAiBadgeIcon,
      desc: 'GPT models for generative AI products, document processing, reasoning systems, and conversational interfaces. The most capable general-purpose LLM family available for production deployment.',
      link: '/generative-ai-development-company',
    },
    {
      name: 'Anthropic',
      Icon: AnthropicBadgeIcon,
      desc: 'Claude for reasoning-heavy applications and safety-critical AI contexts. Built for products where accuracy, nuance, and responsible output are non-negotiable requirements.',
      link: '/generative-ai-development-company',
    },
    {
      name: 'LangChain',
      Icon: LangChainBadgeIcon,
      desc: 'The orchestration layer for multi-step agent workflows, RAG systems, and complex AI pipelines. What connects the model to the rest of the product architecture?',
      link: '/ai-agent-development',
    },
    {
      name: 'Hugging Face',
      Icon: HuggingFaceBadgeIcon,
      desc: 'Open-source model deployment for fine-tuned and domain-specific applications. The right choice when a foundation model needs to be adapted to your data before it performs precisely.',
      link: '/machine-learning-development-services',
    },
    {
      name: 'LLaMA',
      Icon: LlamaBadgeIcon,
      desc: 'Open-source LLM deployment for clients who require on-premises or private AI infrastructure. Full capability without external data transmission.',
      link: '/generative-ai-development-company',
    },
  ]

  return (
    <section className="relative py-20 lg:py-28 bg-black text-white overflow-hidden">
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            <span className="text-[#00CE44]">AI Development Services Powered</span> by Industry-Leading AI Platforms
          </h2>
          <p className="text-white/75 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto">
            Model selection is a technical decision made in Discovery, based on the specific requirements of your product. Not a preference we apply universally.
          </p>
        </div>

        {/* 3 + 2 Centered Cards Grid with Floating Top-Center Green Icon Badges */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-14 lg:gap-x-8 lg:gap-y-16 pt-4">
          {platforms.map((p) => {
            const BadgeIcon = p.Icon
            return (
              <Link
                key={p.name}
                to={p.link}
                className="relative w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] bg-[#383838] hover:bg-[#404040] border border-white/10 hover:border-[#00CE44]/50 rounded-2xl pt-12 pb-8 px-6 sm:px-8 flex flex-col items-center text-center transition-all duration-200 group"
              >
                {/* Floating Top-Center Green Icon Box */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl bg-[#00CE44] border border-white/30 text-black flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                  <BadgeIcon className="w-9 h-9" />
                </div>

                <h3 className="text-xl font-bold text-[#00CE44] mb-3 leading-snug">
                  {p.name}
                </h3>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-normal">
                  {p.desc}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
