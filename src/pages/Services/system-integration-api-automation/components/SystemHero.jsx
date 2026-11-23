import HeroTrustBadges from '../../../../components/HeroTrustBadges'

export default function SystemHero() {
  return (
    <section className="relative isolate flex min-h-[680px] items-center overflow-hidden bg-black text-white sm:min-h-[720px]">
      <img
        src="/assets/ai-development/system-banner-scaled.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[58%_center]"
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/80 to-black/10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/50 via-transparent to-black/15" />
      <div className="mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-10 md:px-16 lg:px-20">
        <div className="max-w-[660px]">
          <h1 className="mb-5 text-[36px] font-bold leading-[1.08] tracking-tight sm:text-[44px] lg:text-[54px]">
            System Integration &amp; <span className="text-[#00CE44]">API Automation Services</span>
          </h1>
          <p className="mb-7 max-w-[620px] text-[15px] leading-relaxed text-white/85 sm:text-base">
            System integration and API automation services that connect applications, databases, and workflows so data moves automatically between tools without manual transfer or duplication.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-3">
              <a
            href="#contact"
            className=" inline-flex min-h-12 items-center justify-center bg-[#00CE44] px-7 py-3.5 text-center text-sm font-semibold text-black transition-colors hover:bg-[#00e04b] sm:text-base"
          >
            Connect Your Systems <span className="ml-2" aria-hidden="true">→</span>
          </a>
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center px-7 py-3.5 rounded-none bg-transparent hover:bg-white/10 border border-white text-white font-medium text-sm sm:text-base transition-colors"
              >
                Schedule A Call
              </a>
            </div>
          <p className="mb-8 text-sm text-white/75">Connect once. Sync forever.</p>
          <HeroTrustBadges className="gap-5 sm:gap-8" />
        </div>
      </div>
    </section>
  )
}
