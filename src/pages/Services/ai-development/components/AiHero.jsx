export default function AiHero() {
  const scrollToContact = () => {
    const el =
      document.getElementById('contact') ||
      document.getElementById('consultation-cta') ||
      document.getElementById('contact-form')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  // Local assets from public/assets
  const heroBg = '/assets/ai-development/ai-banner-dev.png'
  const clutchBadge = '/assets/clutch.png'
  const barkBadge = '/assets/bark.png'
  const trustpilotBadge = '/assets/trustpilot.png'

  return (
    <section
      className="relative w-full min-h-screen min-h-[100dvh] lg:h-screen flex items-center justify-center pt-24 sm:pt-28 lg:pt-24 pb-12 sm:pb-14 lg:pb-10 bg-[#1E1E1E] overflow-hidden"
      style={{
        backgroundImage: `url("${heroBg}")`,
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] flex items-center my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full">
          {/* Left Column: Category + Title + Subtitle + CTA + Review Badges */}
          <div className="lg:col-span-7 xl:col-span-7 text-left max-w-2xl">
            {/* Category Tag */}
            <span className="text-[#00CE44] text-[13.5px] sm:text-[15px] font-semibold leading-[1.35] tracking-[1px] block mb-3 sm:mb-4">
              AI Development Services
            </span>

            {/* H1 Title */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] font-black text-white tracking-tight leading-[1.12] mb-4 sm:mb-6">
              <span className="text-[#00CE44]">AI Development Company</span> That Embeds Intelligence Into Your Operations
            </h1>

            {/* Subheading */}
            <p className="text-white/85 text-xs sm:text-base lg:text-[16px] xl:text-[17px] leading-relaxed mb-6 sm:mb-8 font-normal max-w-xl">
              Chatbots, agents, generative AI, automation workflows, and complete AI systems, built for businesses that want AI to run their operations, not assist them.
            </p>

            {/* CTA Button */}
            <div className="mb-8 sm:mb-10 lg:mb-12">
              <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center px-7 sm:px-8 py-3 sm:py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00ba3e] text-black font-semibold text-xs sm:text-sm md:text-base tracking-tight transition-all duration-150 active:scale-95 cursor-pointer shadow-lg shadow-[#00CE44]/20 border-0"
              >
                Book an AI Consultation
              </button>
              <button
                type="button"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-transparent hover:bg-white/10 border border-white text-white font-medium text-sm sm:text-base transition-colors cursor-pointer"
              >
                Schedule A Call
              </button>
            </div>
            </div>

            {/* Review Badges */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 pt-4 sm:pt-6">
              <a
                href="https://clutch.co/profile/inceptives-digital"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-block transition-opacity hover:opacity-80"
              >
                <img
                  src={clutchBadge}
                  alt="Clutch 5.0 Rating"
                  className="h-8 sm:h-10 lg:h-12 w-auto object-contain select-none"
                />
              </a>
              <a
                href="https://www.bark.com/en/us/b/inceptives-digital/Pww4ae/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-block transition-opacity hover:opacity-80"
              >
                <img
                  src={barkBadge}
                  alt="Bark 5.0 Rating"
                  className="h-8 sm:h-10 lg:h-12 w-auto object-contain select-none"
                />
              </a>
              <a
                href="https://www.trustpilot.com/review/inceptivesdigital.com"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-block transition-opacity hover:opacity-80"
              >
                <img
                  src={trustpilotBadge}
                  alt="Trustpilot 4.7 Rating"
                  className="h-8 sm:h-10 lg:h-12 w-auto object-contain select-none"
                />
              </a>
            </div>
          </div>

          {/* Right Column: Empty column reserved for background phone artwork from ai-banner-dev.png */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-5 pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
