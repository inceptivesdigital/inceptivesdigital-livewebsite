import HeroTrustBadges from '../../../../components/HeroTrustBadges'

export default function NlpHero() {
  return (
    <section className="relative w-full min-h-screen min-h-[100dvh] xl:h-screen flex flex-col xl:flex-row items-center bg-[#1b1b1b] text-white overflow-hidden">
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="flex flex-col items-start text-left py-12 xl:py-0 xl:w-[44%]">
          <h1 className="text-[#00CE44] text-sm sm:text-base font-bold mb-3">
            NLP Development Services
          </h1>
          <h2 className="w-full text-[34px] sm:text-[42px] md:text-[48px] font-bold leading-[1.08] tracking-tight text-white mb-5 max-w-[620px]">
            Language Intelligence Engineered Around Your Specific Business Context
          </h2>
          <p className="w-full text-white/85 text-[15px] sm:text-[16px] leading-[1.65] max-w-[620px] mb-7">
            Through{' '}
            <a
              href="https://inceptivesdigital.com/digital-product-development"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00CE44] underline hover:text-white transition-colors"
            >
              digital product development
            </a>
            , text analysis, sentiment classification, entity extraction, document processing, and speech recognition can be built into products that need to understand language at scale.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[#00CE44] hover:bg-[#00e04b] text-black font-semibold text-[15px] md:text-[16px] px-7 py-3.5 transition-colors duration-200 mb-3"
          >
            Discuss Your NLP Project
          </a>
          <p className="text-white/70 text-sm mb-8">Show the problem. Get the solution.</p>
          <HeroTrustBadges />
        </div>
      </div>
      <img
        src="/assets/ai-development/nlp-banner.png"
        alt="Natural language processing experience shown across mobile apps"
        className="relative z-0 mx-auto mt-8 w-full max-w-[620px] object-contain select-none xl:absolute xl:right-[-10%] xl:bottom-0 xl:mt-0 xl:h-[90%] xl:w-auto xl:max-w-none"
        loading="eager"
      />
    </section>
  )
}
