import HeroTrustBadges from '../../../../components/HeroTrustBadges'
import { Link } from 'react-router-dom'

export default function RpaHero() {
  return (
    <section className="relative isolate flex min-h-screen min-h-[100dvh] items-center overflow-hidden bg-[#05070c] pb-12 text-white">
      <img
        src="/assets/ai-development/rpa-banner.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
        fetchPriority="high"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#05070c] via-[#05070c]/85 to-[#05070c]/15" />
      <div className="relative z-20 mx-auto w-full max-w-[1100px] px-6 py-8 sm:px-10 sm:py-10">
        <div className="max-w-[740px]">
          <h1 className="mb-1 text-sm font-bold tracking-wide text-[#00CE44] sm:text-base">
            RPA Development Services
          </h1>
          <h2 className="mb-5 max-w-[740px] text-[36px] font-bold leading-[1.08] tracking-tight sm:text-[44px] lg:text-[48px]">
            <span className="lg:block">Robotic Process Automation</span>{' '}
            <span className="lg:block">Built for Real Operational</span>{' '}
            <span className="lg:block">Systems</span>
          </h2>
          <p className="mb-6 max-w-[590px] text-[15px] leading-relaxed text-white/90 sm:text-base">
            Robotic process automation supports{' '}
            <Link
              to="/business-process-automation"
              className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
              business process automation
            </Link>{' '}
            by executing structured workflows, connecting enterprise systems, and removing repetitive operational work across departments and tools.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-3">
              <a
            href="#contact"
            className=" inline-flex min-h-12 items-center justify-center bg-[#00CE44] px-7 py-3.5 text-center text-sm font-semibold text-black transition-colors hover:bg-[#00e04b] sm:text-base"
          >
            Explore RPA Solutions <span className="ml-2" aria-hidden="true">→</span>
          </a>
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center px-7 py-3.5 rounded-none bg-transparent hover:bg-white/10 border border-white text-white font-medium text-sm sm:text-base transition-colors"
              >
                Schedule A Call
              </a>
            </div>
          <p className="mb-8 text-sm text-white/80">Show the process. We automate execution.</p>
          <HeroTrustBadges className="gap-5 sm:gap-8" />
        </div>
      </div>
    </section>
  )
}
