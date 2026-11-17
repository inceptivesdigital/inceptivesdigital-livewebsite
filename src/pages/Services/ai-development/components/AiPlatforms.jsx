import { Link } from 'react-router-dom'

export default function AiPlatforms() {
  const platforms = [
    {
      name: 'OpenAI',
      logo: '/assets/ai-development/openai.png',
      desc: 'GPT models for generative AI products, document processing, reasoning systems, and conversational interfaces. The most capable general-purpose LLM family available for production deployment.',
      link: '/technologies/openai/',
    },
    {
      name: 'Anthropic',
      logo: '/assets/ai-development/Group-61384.png',
      desc: 'Claude for reasoning-heavy applications and safety-critical AI contexts. Built for products where accuracy, nuance, and responsible output are non-negotiable requirements.',
      link: '/technologies/anthropic/',
    },
    {
      name: 'LangChain',
      logo: '/assets/ai-development/Group-61385.png',
      desc: 'The orchestration layer for multi-step agent workflows, RAG systems, and complex AI pipelines. What connects the model to the rest of the product architecture?',
      link: '/technologies/langchain/',
    },
    {
      name: 'HuggingFace',
      logo: '/assets/ai-development/Group-61385-1.png',
      desc: 'Open-source model deployment for fine-tuned and domain-specific applications. The right choice when a foundation model needs to be adapted to your data before it performs precisely.',
      link: '/technologies/huggingface/',
    },
    {
      name: 'LLaMA',
      logo: '/assets/ai-development/Group-61384-2.png',
      desc: 'Open-source LLM deployment for clients who require on-premises or private AI infrastructure. Full capability without external data transmission.',
      link: '/technologies/llama/',
    },
  ]

  return (
    <section className="relative py-20 lg:py-28 bg-black text-white overflow-hidden border-t border-white/5">
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            <span className="text-[#00CE44]">AI Development Services</span> Powered by Industry-Leading AI Platforms
          </h2>
          <p className="text-white/70 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto">
            Model selection is a technical decision made in Discovery, based on the specific requirements of your product. Not a preference we apply universally.
          </p>
        </div>

        {/* 5 Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {platforms.map((p, idx) => (
            <Link
              key={idx}
              to={p.link}
              className="bg-[#121212] hover:bg-[#161616] border border-white/[0.08] hover:border-[#00CE44]/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 group text-left block"
            >
              <div>
                <div className="h-10 flex items-center justify-start mb-6">
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="max-h-8 w-auto object-contain brightness-95 group-hover:brightness-100 transition-all select-none"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#00CE44] transition-colors">
                  {p.name}
                </h3>
                <p className="text-white/65 text-xs sm:text-sm leading-relaxed font-normal">
                  {p.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
