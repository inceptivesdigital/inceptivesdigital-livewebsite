import { ArrowRight, ClipboardCheck, Calculator, Compass } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AiTools() {
  const tools = [
    {
      icon: ClipboardCheck,
      title: 'AI Readiness Assessment',
      desc: 'A diagnostic that tells you whether your business processes, data infrastructure, and team are ready for AI investment.',
      link: '/ai-development/ai-readiness/',
      cta: 'Start Assessment →',
    },
    {
      icon: Calculator,
      title: 'AI Project Estimator',
      desc: 'Scope and effort estimator for common AI development projects. Ballpark cost before a formal Discovery Sprint.',
      link: '/ai-development/ai-estimator/',
      cta: 'Estimate Scope →',
    },
    {
      icon: Compass,
      title: 'AI Roadmap Tool',
      desc: 'A structured planning tool for businesses beginning the AI adoption journey, identifying architecture priorities.',
      link: '/ai-development/ai-roadmap/',
      cta: 'Build Roadmap →',
    },
  ]

  return (
    <section id="free-ai-tools" className="relative py-20 lg:py-28 bg-[#0a0a0a] text-white overflow-hidden border-t border-white/5">
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-[#00CE44] text-xs sm:text-sm font-bold tracking-widest uppercase block mb-3">
            Self-Service Diagnostics
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            Free <span className="text-[#00CE44]">AI Evaluation Tools</span> for Teams
          </h2>
          <p className="text-white/70 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto">
            Not ready to book a call yet? Use our interactive tools to benchmark your readiness, calculate ballpark project effort, and map your AI roadmap.
          </p>
        </div>

        {/* 3 Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tools.map((t, idx) => {
            const Icon = t.icon
            return (
              <div
                key={idx}
                className="bg-[#121212] hover:bg-[#161616] border border-white/[0.08] hover:border-[#00CE44]/40 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 group text-left"
              >
                <div>
                  {/* Full fill icon with zero bg, zero border, zero padding */}
                  <div className="w-10 h-10 mb-6 flex items-center justify-start text-[#00CE44] shrink-0">
                    <Icon className="w-full h-full object-contain" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00CE44] transition-colors">
                    {t.title}
                  </h3>

                  <p className="text-white/70 text-sm leading-relaxed mb-8 font-normal">
                    {t.desc}
                  </p>
                </div>

                <div className="">
                  <Link
                    to={t.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#00CE44] group-hover:text-white transition-colors cursor-pointer"
                  >
                    <span>{t.cta}</span>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
