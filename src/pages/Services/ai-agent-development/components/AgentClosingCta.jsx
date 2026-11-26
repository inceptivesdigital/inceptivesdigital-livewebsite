export default function AgentClosingCta() {
  return (
    <section
      className="relative w-full text-white overflow-hidden py-16 sm:py-20"
      style={{
        background:
          'radial-gradient(circle at 50% 50%, rgba(0, 206, 68, 0.18) 0%, transparent 55%), linear-gradient(135deg, #0b3519 0%, #0d3c1e 50%, #072310 100%)',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-[30px] sm:text-[38px] lg:text-[44px] font-bold tracking-tight leading-[1.15] mb-5">
            Build AI Agents That Work While You Focus on Strategy
          </h2>
          <p className="text-white/85 text-[16px] sm:text-[18px] leading-relaxed mb-8">
            Thirty minutes of the right conversation ensures your AI agents are designed to run operations, not just assist humans.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#00CE44] hover:bg-[#00e04b] text-black font-medium transition-colors"
          >
            Discuss Your AI Agent Project →
          </a>
          <p className="text-white/70 text-sm mt-4">Half an hour. Focused insight. No fluff.</p>
        </div>
      </div>
    </section>
  )
}
