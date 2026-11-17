import { Link } from 'react-router-dom'

export default function AiDifference() {
  const points = [
    {
      icon: '/assets/ai-development/ai-product.png',
      title: 'The Difference Between AI That Helps and AI That Operates',
      desc: 'A smarter search bar, a summarization tool, or a chatbot that handles support tickets all assist humans. AI that operates takes over entire workflows, leaving humans only the exceptions. One amplifies effort; the other replaces repetitive work.',
    },
    {
      icon: '/assets/ai-development/ai-model.png',
      title: 'Two Problems. Two Architectures. One Studio That Builds Both.',
      desc: 'Some products need AI as a feature. Others need AI as the foundation. Our custom AI development services cover both — we determine which approach fits before development begins.',
    },
    {
      icon: '/assets/ai-development/code-optimisation-1.png',
      title: 'The Decisions That Matter Happen Before Development Starts',
      desc: 'AI features can be added later. AI systems cannot. Architecture, data models, exception handling, and integrations must be defined from day one.',
    },
    {
      icon: '/assets/ai-development/product.png',
      title: 'We Built a Payroll Automation Platform',
      desc: 'Payroll Automation Platform: Live in production, automating end-to-end payroll while the finance team handles only exceptions. This is how we deliver AI that runs operations, not just supports them.',
      highlight: true,
      link: '/work/payroll-platform/',
      linkText: 'See the full case study →',
    },
  ]

  return (
    <section className="relative py-20 lg:py-28 bg-[#0a0a0a] text-white overflow-hidden border-t border-white/5">
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-[#00CE44] text-xs sm:text-sm font-bold tracking-widest uppercase block mb-3">
            Architectural Philosophy
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black tracking-tight leading-tight mb-4">
            Why Most AI Projects Deliver <span className="text-[#00CE44]">Features Instead of Results</span>
          </h2>
          <p className="text-white/70 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto">
            Most AI integrations are features layered onto existing products. We build full AI systems where intelligence runs the operation itself.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className={`p-8 sm:p-10 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                pt.highlight
                  ? 'bg-[#121814] border-[#00CE44]/40 hover:border-[#00CE44] shadow-[0_10px_40px_rgba(0,206,68,0.08)]'
                  : 'bg-[#121212] border-white/[0.08] hover:border-white/20'
              }`}
            >
              <div>
                {/* Full fill icon with zero bg, zero border, zero padding */}
                <div className="w-[48px] h-[48px] mb-6 flex items-center justify-start shrink-0">
                  <img
                    src={pt.icon}
                    alt={pt.title}
                    className="w-full h-full object-contain select-none"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-4">
                  {pt.title}
                </h3>

                <p className="text-white/75 text-sm sm:text-base leading-relaxed font-normal">
                  {pt.desc}
                </p>
              </div>

              {pt.link && (
                <div className="pt-6 mt-6 border-t border-white/10">
                  <Link
                    to={pt.link}
                    className="inline-flex items-center gap-2 text-[#00CE44] hover:text-white font-semibold text-sm transition-colors cursor-pointer"
                  >
                    <span>{pt.linkText}</span>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
