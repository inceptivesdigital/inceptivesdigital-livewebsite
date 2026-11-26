import HeroTrustBadges from '../../../../components/HeroTrustBadges'
import { Link } from 'react-router-dom'

export default function AutomationHero() {
  return (
    <section className="relative isolate flex min-h-screen min-h-[100dvh] items-center overflow-hidden bg-black pb-12 text-white">
      <img
        src="/assets/ai-development/ai-automationbanner-scaled.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[58%_center]"
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/90 to-black/10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/50 via-transparent to-black/15" />
      <div className="mx-auto w-full max-w-[1440px] px-6 py-8 sm:px-10 sm:py-10 md:px-16 lg:px-20">
        <div className="max-w-[660px]">
          <p className="mb-3 text-[#00CE44] text-[13.5px] sm:text-[15px] font-semibold leading-[1.35] tracking-[1px]">
            AI Automation Services
          </p>
          <h1 className="mb-5 text-[36px] font-bold leading-[1.08] tracking-tight sm:text-[44px] lg:text-[54px]">
            AI Automation Services That Replace Manual Processes With Intelligent Systems
          </h1>
          <p className="mb-7 max-w-[620px] text-[15px] leading-relaxed text-white/85 sm:text-base">
            <Link
              to="/business-process-automation"
              className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
              Business process automation
            </Link>
            , workflow intelligence, and decision automation are built for businesses that need operational processes to run themselves, not just run faster.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-3">
              <a
            href="#contact"
            className=" inline-flex min-h-12 items-center justify-center bg-[#00CE44] px-7 py-3.5 text-center text-sm font-semibold text-black transition-colors hover:bg-[#00e04b] sm:text-base"
          >
            Discuss Your Automation Project
          </a>
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center px-7 py-3.5 rounded-none bg-transparent hover:bg-white/10 border border-white text-white font-medium text-sm sm:text-base transition-colors"
              >
                Schedule A Call
              </a>
            </div>
          <p className="mb-8 text-sm text-white/75">Show us the process. We will automate it.</p>
          <HeroTrustBadges className="gap-5 sm:gap-8" />
        </div>
      </div>
    </section>
  )
}
