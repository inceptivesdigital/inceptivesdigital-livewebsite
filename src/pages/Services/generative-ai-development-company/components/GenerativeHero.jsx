import HeroTrustBadges from '../../../../components/HeroTrustBadges'

export default function GenerativeHero() {
  return (
    <section
      className="relative w-full min-h-screen min-h-[100dvh] lg:h-screen flex items-center pt-24 sm:pt-28 lg:pt-16 pb-14 sm:pb-16 bg-[#1b1b1b] text-white overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-8 items-center">
        <div className="w-full flex flex-col items-start text-left">
          <p className="text-[#00CE44] text-sm sm:text-base font-bold mb-3">
            Generative AI Development Company
          </p>
          <h1 className="text-[36px] sm:text-[44px] md:text-[50px] xl:text-[54px] font-bold leading-[1.08] tracking-tight text-white mb-5 max-w-[640px]">
            Systems That Generate, Retrieve, and Decide With Your Data Behind Them
          </h1>
          <p className="text-white/85 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.68] max-w-[650px] mb-7">
            Content generation, knowledge retrieval, document intelligence, and{' '}
            <a
              href="https://inceptivesdigital.com/ai-automation-services"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00CE44] underline hover:text-white transition-colors"
            >
              workflow automation
            </a>{' '}
            are built into generative AI systems for businesses that need accurate, secure, and maintainable AI in production.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-3">
              <a
            href="#contact"
            className=" inline-flex items-center justify-center bg-[#00CE44] hover:bg-[#00e04b] text-black font-semibold text-[15px] md:text-[16px] px-7 py-3.5 transition-colors duration-200"
          >
            Book a Generative AI Consultation
          </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-transparent hover:bg-white/10 border border-white text-white font-medium text-sm sm:text-base transition-colors"
              >
                Schedule A Call
              </a>
            </div>
          <p className="text-white/70 text-sm mb-8">
            Bring the use case. Leave with a direction.
          </p>
          <HeroTrustBadges />
        </div>
        <div className="w-full flex items-center justify-center lg:justify-end">
          <img
            src="/assets/ai-development/generative-ai-banner.png"
            alt="Generative AI image creation app displayed on mobile devices"
            className="w-full max-w-[780px] max-h-[74vh] object-contain"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
