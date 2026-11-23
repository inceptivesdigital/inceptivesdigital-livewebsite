import HeroTrustBadges from '../../../../components/HeroTrustBadges'

export default function AgentHero() {
  return (
    <section
      className="relative w-full min-h-[100dvh] lg:min-h-[760px] flex items-center pt-28 sm:pt-32 lg:pt-28 pb-16 sm:pb-20 bg-[#0a0b0d] text-white overflow-hidden"
      style={{
        backgroundImage: 'url("/assets/ai-development/ai-banner-dev.png")',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(0,0,0,0.84) 0%, rgba(0,0,0,0.6) 52%, rgba(0,0,0,0.12) 100%)',
        }}
      />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="w-full lg:w-[58%] xl:w-[54%] flex flex-col items-start text-left">
          <h1 className="text-[36px] sm:text-[46px] md:text-[52px] lg:text-[56px] font-bold leading-[1.1] tracking-tight text-white mb-4">
            AI Agent Development <span className="text-[#00CE44]">Company</span>
          </h1>

          <h2 className="text-[19px] sm:text-[22px] md:text-[24px] font-semibold leading-[1.35] text-white/95 mb-5 max-w-[660px]">
            Autonomous Agents Designed and Built Around Your Workflows
          </h2>

          <p className="text-white/85 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.68] font-normal max-w-[650px] mb-8">
            Multi-step workflow automation, enterprise system integration, and intelligent decision-making built into autonomous agents for businesses that need AI to do the work.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-3">
              <a
            href="#contact"
            className=" inline-flex items-center justify-center bg-[#00CE44] hover:bg-[#00e04b] text-black font-medium text-[15px] md:text-[16px] px-8 py-4 transition-colors duration-200"
          >
            Book a Consultation
          </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-transparent hover:bg-white/10 border border-white text-white font-medium text-[15px] md:text-[16px] transition-colors"
              >
                Schedule A Call
              </a>
            </div>
          <p className="text-white/70 text-sm mb-8">Your process. Our agents. Let&apos;s talk.</p>
          <HeroTrustBadges />
        </div>
      </div>
    </section>
  )
}
