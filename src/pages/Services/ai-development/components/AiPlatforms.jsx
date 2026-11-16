export default function AiPlatforms() {
  const platforms = [
    {
      name: 'OpenAI',
      logo: '/assets/ai-development/openai.png',
      desc: 'GPT models for generative AI products, document processing, reasoning systems, and conversational interfaces. The most capable general-purpose LLM family available for production deployment.',
    },
    {
      name: 'Anthropic',
      logo: '/assets/ai-development/Group-61384.png',
      desc: 'Claude models for high-context comprehension, nuanced reasoning, enterprise document analysis, and safety-critical generative applications.',
    },
    {
      name: 'LangChain',
      logo: '/assets/ai-development/Group-61385.png',
      desc: 'The orchestration layer for multi-step agent workflows, RAG systems, and complex AI pipelines. What connects the model to the rest of the product architecture.',
    },
    {
      name: 'Hugging Face',
      logo: '/assets/ai-development/Group-61385-1.png',
      desc: 'Open-source model deployment for fine-tuned and domain-specific applications. The right choice when a foundation model needs to be adapted to your data before it performs precisely.',
    },
    {
      name: 'LLaMA',
      logo: '/assets/ai-development/Group-61384-2.png',
      desc: 'Open-weights foundation models suited for private cloud, on-premise, and air-gapped deployments where data privacy is paramount.',
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
            <div
              key={idx}
              className="bg-[#121212] hover:bg-[#161616] border border-white/[0.08] hover:border-[#00CE44]/30 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 group"
            >
              <div>
                <div className="h-10 flex items-center justify-start mb-6">
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="max-h-8 w-auto object-contain brightness-95 group-hover:brightness-100 transition-all"
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#00CE44] transition-colors">
                  {p.name}
                </h3>
                <p className="text-white/65 text-xs sm:text-sm leading-relaxed font-normal">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
