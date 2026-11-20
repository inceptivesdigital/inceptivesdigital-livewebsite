export default function SystemClosingCta() {
  return (
    <section className="relative isolate overflow-hidden bg-[#111214] text-white">
      <img
        src="/assets/ai-development/nlp-cta-art.png"
        alt=""
        aria-hidden="true"
        className="absolute right-0 top-0 -z-20 h-full w-full object-cover object-right opacity-45 lg:w-[58%]"
        loading="lazy"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#111214] via-[#111214]/95 to-[#111214]/35" />
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 md:px-16 lg:px-20">
        <div className="max-w-[760px]">
          <h2 className="mb-5 text-[30px] font-bold leading-tight tracking-tight sm:text-[40px] lg:text-[48px]">
            Systems Work Better When They Are Connected
          </h2>
          <p className="mb-6 text-[15px] leading-relaxed text-white/85 sm:text-base">
            API automation is designed to unify disconnected tools into a single operational data flow.
          </p>
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center bg-[#00CE44] px-7 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-[#00e04b] sm:text-base"
          >
            Unify Systems <span className="ml-2" aria-hidden="true">→</span>
          </a>
          <p className="mt-3 text-sm text-white/70">Systems linked. Data synced.</p>
        </div>
      </div>
    </section>
  )
}
