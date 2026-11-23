import HeroTrustBadges from '../../../../components/HeroTrustBadges'

export default function BusinessProcessHero() {
  return (
    <section className="relative isolate flex min-h-screen min-h-[100dvh] items-center overflow-hidden bg-[#101010] pt-24 text-white">
      <img
        src="/assets/ai-development/business-process-banner.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute right-0 bottom-0 -z-10 h-[72%] w-full object-contain object-right opacity-45 md:top-1/2 md:bottom-auto md:h-[94%] lg:h-[98%] md:w-[58%] lg:w-[56%] md:-translate-y-1/2 md:opacity-100"
        fetchPriority="high"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#101010] via-[#101010]/90 to-transparent md:via-[#101010]/60" />
      <div className="mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-10 md:px-16 lg:px-20">
        <div className="max-w-[620px]">
          <p className="mb-2 text-sm font-bold text-[#00CE44] sm:text-base">
            Business Process Automation Services
          </p>
          <h1 className="mb-5 text-[36px] font-bold leading-[1.08] tracking-tight sm:text-[44px] lg:text-[54px]">
            <span className="text-[#00CE44]">Operational Processes,</span> Executed Without Manual Effort
          </h1>
          <p className="mb-6 max-w-[590px] text-[15px] leading-relaxed text-white/85 sm:text-base">
            Business process automation services remove manual execution from structured workflows and use system integration and API automation to connect how operations run across teams and tools.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-3">
              <a
            href="#contact"
            className=" inline-flex min-h-12 items-center justify-center bg-[#00CE44] px-7 py-3.5 text-center text-sm font-semibold text-black transition-colors hover:bg-[#00e04b] sm:text-base"
          >
            Map Your Process <span className="ml-2" aria-hidden="true">→</span>
          </a>
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center px-7 py-3.5 rounded-none bg-transparent hover:bg-white/10 border border-white text-white font-medium text-sm sm:text-base transition-colors"
              >
                Schedule A Call
              </a>
            </div>
          <p className="mb-8 text-sm text-white/75">Define once. Automate precisely.</p>
          <HeroTrustBadges className="gap-5 sm:gap-8" />
        </div>
      </div>
    </section>
  )
}
