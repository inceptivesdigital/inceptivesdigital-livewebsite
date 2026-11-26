import { Link } from 'react-router-dom'
import HeroTrustBadges from '../../../../components/HeroTrustBadges'

export default function AiMvpHero() {
  return (
    <section className="relative w-full min-h-screen min-h-[100dvh] pb-10 xl:pb-10 flex flex-col xl:flex-row items-center bg-[#1b1b1b] text-white overflow-hidden">
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="flex flex-col items-start text-left py-6 sm:py-8 xl:py-8 xl:w-[48%]">
          <h1 className="text-[#00CE44] text-sm sm:text-base font-bold mb-3">
            AI MVP Development Services
          </h1>
          <h2 className="w-full text-[34px] sm:text-[42px] md:text-[40px] font-bold leading-[1.08] tracking-tight text-white mb-5 max-w-[620px]">
            Validate, Verify, and De-Risk Your AI Investment
          </h2>
          <p className="w-full text-white/85 text-[15px] sm:text-[16px] leading-[1.65] max-w-[620px] mb-7">
            Rapid AI MVP development helps startups and growing businesses validate the direction before committing to full-scale{' '}
            <Link to="/ai-development" className="text-[#00CE44] underline hover:opacity-80 transition-colors">
              AI development
            </Link>
            . Scope defined, risks identified, proof delivered.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-3">
              <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[#00CE44] hover:bg-[#00e04b] text-black font-semibold text-[15px] md:text-[16px] px-7 py-3.5 transition-colors duration-200"
          >
            Discuss Your Idea
          </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-transparent hover:bg-white/10 border border-white text-white font-medium text-sm sm:text-base transition-colors"
              >
                Schedule A Call
              </a>
            </div>
          <p className="text-white/70 text-sm mb-8">Bring the idea. Know if it&apos;s feasible.</p>
          <HeroTrustBadges />
        </div>
      </div>
      <img
        src="/assets/ai-development/mvp-banner.png"
        alt="AI analytics dashboard prototype displayed on a desktop monitor"
        className="relative z-0 mx-auto mt-4 w-full max-w-[620px] object-contain select-none xl:absolute xl:right-[-6%] xl:bottom-0 xl:mt-0 xl:h-[78%] xl:w-auto xl:max-w-none"
        loading="eager"
      />
    </section>
  )
}
