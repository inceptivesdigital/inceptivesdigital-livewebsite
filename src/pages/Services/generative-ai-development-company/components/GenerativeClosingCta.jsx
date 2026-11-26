export default function GenerativeClosingCta() {
  return (
    <section
      className="relative w-full text-white overflow-hidden py-16 sm:py-20"
      style={{
        backgroundImage: 'url("/assets/ai-development/generative-ai-cta-bg.png")',
        backgroundPosition: 'left center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-12 lg:px-14 relative z-10">
        <div className="max-w-[920px]">
          <h2 className="text-[30px] sm:text-[38px] lg:text-[40px] font-bold tracking-tight leading-[1.15] mb-5">
            Turn Generative AI Into Reliable Operational Systems
          </h2>
          <p className="text-white/85 text-[16px] sm:text-[18px] leading-relaxed mb-8">
            Plan models, data flows, integrations, and controls upfront to ensure your AI works reliably at scale.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#00CE44] hover:bg-[#00e04b] text-black font-medium transition-colors"
          >
            Start a Technical Review →
          </a>
          <p className="text-white/70 text-sm mt-4">
            30 minutes. Strategic insight. AI engineered for impact.
          </p>
        </div>
      </div>
    </section>
  )
}
