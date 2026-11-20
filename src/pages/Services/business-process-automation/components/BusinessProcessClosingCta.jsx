export default function BusinessProcessClosingCta() {
  return (
    <section className="relative isolate overflow-hidden bg-[#111214] text-white">
      <img
        src="/assets/ai-development/nlp-cta-art.png"
        alt=""
        aria-hidden="true"
        className="absolute right-0 top-0 z-0 h-full w-full object-cover object-right opacity-90 lg:w-[58%]"
        loading="lazy"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#111214] via-[#111214]/80 to-transparent" />
      <div className="relative z-20 mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 md:px-16 lg:px-20">
        <div className="max-w-[760px]">
          <h2 className="mb-5 text-[30px] font-bold leading-tight tracking-tight sm:text-[40px] lg:text-[48px]">
            Processes Don&apos;t Improve. They Get Redefined.
          </h2>
          <p className="mb-6 text-[15px] leading-relaxed text-white/85 sm:text-base">
            We map operational workflows and convert them into automated execution systems that run without manual intervention.
          </p>
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center bg-[#00CE44] px-7 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-[#00e04b] sm:text-base"
          >
            Build System <span className="ml-2" aria-hidden="true">→</span>
          </a>
          <p className="mt-3 text-sm text-white/70">Structure first. Execution next.</p>
        </div>
      </div>
    </section>
  )
}
