export default function AiStages() {
  return (
    <section className="relative py-20 lg:py-28 bg-black text-white overflow-hidden border-t border-white/5">
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            <span className="text-[#00CE44]">AI Development Services</span> for Startups, SMBs, and Growth-Stage Teams
          </h2>
          <p className="text-white/70 text-sm sm:text-base lg:text-lg">
            The right AI investment looks different at every stage. We scope and build accordingly.
          </p>
        </div>

        {/* Two Stage Cards */}
        <div className="space-y-10 max-w-6xl mx-auto">
          {/* Card 1: Startup AI Solutions */}
          <div className="bg-[#121212] border border-white/[0.08] hover:border-[#00CE44]/30 rounded-3xl p-8 sm:p-12 lg:p-14 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Text Left */}
              <div className="lg:col-span-6 text-left">
                <span className="text-white/60 text-xs sm:text-sm font-semibold tracking-wider uppercase block mb-3">
                  Startup AI Solutions
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#00CE44] tracking-tight mb-6">
                  AI Development for Startups
                </h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-4">
                  Early-stage companies cannot afford to over-engineer. The AI investment needs to prove the concept, show what the system can do under real conditions, and do it without burning the runway.
                </p>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  We scope AI features and lightweight automation systems that validate the idea before the full build. Focused delivery. Defined scope. No architecture decisions that will need to be undone six months later.
                </p>
              </div>

              {/* Graphic Right */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <img
                  src="/assets/ai-development/fgg-1.png"
                  alt="AI Development for Startups"
                  className="w-full max-w-[460px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] select-none"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Card 2: SMB AI Solutions */}
          <div className="bg-[#121212] border border-white/[0.08] hover:border-[#00CE44]/30 rounded-3xl p-8 sm:p-12 lg:p-14 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Graphic Left */}
              <div className="lg:col-span-6 flex justify-center lg:justify-start order-2 lg:order-1">
                <img
                  src="/assets/ai-development/dff-1.png"
                  alt="AI Development for Growing Businesses"
                  className="w-full max-w-[460px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] select-none"
                  loading="lazy"
                />
              </div>

              {/* Text Right */}
              <div className="lg:col-span-6 text-left order-1 lg:order-2">
                <span className="text-white/60 text-xs sm:text-sm font-semibold tracking-wider uppercase block mb-3">
                  SMB AI Solutions
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#00CE44] tracking-tight mb-6">
                  AI Development for Growing Businesses
                </h3>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-4">
                  An established business digitising its operations or building its first intelligent product has different requirements than a startup. The data exists. The workflows exist. The question is where AI creates the most leverage with the least disruption.
                </p>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  We build practical automation systems, customer-facing AI, and operational intelligence at SMB scale. Built to integrate with what you already run on, not replace it wholesale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
