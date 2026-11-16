import { useState } from 'react'

export default function AiHero() {
  const scrollToContact = () => {
    const el = document.getElementById('consultation-cta') || document.getElementById('contact-form')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[600px] lg:min-h-[680px] flex items-center pt-32 sm:pt-40 pb-16 lg:pb-24 bg-black overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00CE44]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Heading + Copy + CTA + Trust Badges */}
          <div className="lg:col-span-7 text-left">
            <span className="text-[#00CE44] text-xs sm:text-sm font-bold tracking-widest uppercase block mb-4">
              AI Development Services
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-black text-white tracking-tight leading-[1.12] mb-6">
              <span className="text-[#00CE44]">AI Development Company</span> That Embeds Intelligence Into Your Operations
            </h1>

            <p className="text-white/85 text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-xl mb-8 font-normal">
              Chatbots, agents, generative AI, automation workflows, and complete AI systems, built for businesses that want AI to run their operations, not assist them.
            </p>

            <div className="mb-10">
              <button
                type="button"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00ba3e] text-black font-semibold text-sm sm:text-base tracking-tight transition-all duration-150 active:scale-95 cursor-pointer shadow-lg shadow-[#00CE44]/20"
              >
                Book an AI Consultation
              </button>
            </div>

            {/* Review Badges */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-4 border-t border-white/10">
              <img src="/assets/clutch.png" alt="Clutch 5.0 Rating" className="h-10 sm:h-12 w-auto object-contain select-none" />
              <img src="/assets/bark.png" alt="Bark 5.0 Rating" className="h-10 sm:h-12 w-auto object-contain select-none" />
              <img src="/assets/trustpilot.png" alt="Trustpilot 4.7 Rating" className="h-10 sm:h-12 w-auto object-contain select-none" />
            </div>
          </div>

          {/* Right Column: Hand holding iPhone with green circular backdrop */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative flex items-center justify-center">
              {/* Overlapping green circles as seen in media_1794862969795_cbb13455.jpg */}
              <div className="absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full bg-[#00CE44] -top-6 -left-6 z-0" />
              <div className="absolute w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] rounded-full bg-[#00CE44] -bottom-8 -right-4 z-0 opacity-90" />

              <img
                src="/assets/ai-development/17promax-newupdate.png"
                alt="AI Development Platform Demo"
                className="relative z-10 w-[280px] sm:w-[360px] lg:w-[420px] h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)] select-none"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
