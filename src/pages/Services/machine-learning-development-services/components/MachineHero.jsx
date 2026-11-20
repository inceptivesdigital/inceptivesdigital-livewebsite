import HeroTrustBadges from '../../../../components/HeroTrustBadges'

export default function MachineHero() {
  return (
    <section className="relative w-full min-h-screen min-h-[100dvh] xl:h-screen flex flex-col xl:flex-row items-center bg-[#1b1b1b] text-white overflow-hidden">
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="flex flex-col items-start text-left py-12 xl:py-0 xl:w-[48%]">
          <p className="text-[#00CE44] text-sm sm:text-base font-bold mb-3">
            Machine Learning Development Services
          </p>
          <h1 className="w-full text-[36px] sm:text-[44px] md:text-[50px] font-bold leading-[1.08] tracking-tight text-white mb-5 max-w-[600px]">
            Custom ML Models That Power Real Business Decisions
          </h1>
          <p className="w-full text-white/85 text-[15px] sm:text-[16px] leading-[1.65] max-w-[600px] mb-7">
            Predictive models, classification engines, recommendation systems, and anomaly detection support{' '}
            <a
              href="https://inceptivesdigital.com/business-process-automation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00CE44] underline hover:text-white transition-colors"
            >
              business process automation
            </a>{' '}
            for companies that need machine learning to do real work, not demonstrate potential.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[#00CE44] hover:bg-[#00e04b] text-black font-semibold text-[15px] md:text-[16px] px-7 py-3.5 transition-colors duration-200 mb-3"
          >
            Book a Machine Learning Consultation
          </a>
          <p className="text-white/70 text-sm mb-8">
            30 minutes. Focused insight. ML is designed to deliver.
          </p>
          <HeroTrustBadges />
        </div>
      </div>
      <img
        src="/assets/ai-development/machine-banner.png"
        alt="Machine learning engineer working with an industrial robot"
        className="relative z-0 mx-auto mt-8 w-full max-w-[560px] object-contain select-none xl:absolute xl:right-[-6%] xl:bottom-0 xl:mt-0 xl:h-[95%] xl:w-auto xl:max-w-none 2xl:right-[-10%] 2xl:bottom-[-5%] 2xl:h-[105%]"
        loading="eager"
      />
    </section>
  )
}
