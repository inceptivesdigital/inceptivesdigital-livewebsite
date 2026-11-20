export default function MachineClosingCta() {
  return (
    <section className="relative w-full bg-[#111214] text-white overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(ellipse_at_80%_50%,rgba(0,206,68,0.2),transparent_65%)] pointer-events-none" />
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 relative z-10">
        <div className="max-w-4xl">
          <h2 className="text-[30px] sm:text-[38px] lg:text-[44px] font-bold tracking-tight leading-[1.15] mb-5">
            Transform Your Data Into Production-Ready Machine Learning
          </h2>
          <p className="text-white/85 text-[16px] sm:text-[18px] leading-relaxed mb-8">
            Define the right models, features, integrations, and monitoring pipelines before development to ensure ML delivers measurable operational results.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#00CE44] hover:bg-[#00e04b] text-black font-medium transition-colors"
          >
            Schedule Your ML Strategy Session →
          </a>
          <p className="text-white/70 text-sm mt-4">Short session. Big impact</p>
        </div>
      </div>
    </section>
  )
}
