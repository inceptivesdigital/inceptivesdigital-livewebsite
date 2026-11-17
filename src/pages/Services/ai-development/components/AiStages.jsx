export default function AiStages() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#000000] text-white overflow-hidden border-t border-white/5">
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black tracking-tight leading-tight mb-4">
            <span className="text-[#00CE44]">AI Development Services</span> for Startups, SMBs, and Growth-Stage Teams
          </h2>
          <p className="text-white/70 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto font-normal">
            The right AI investment looks different at every stage. We scope and build accordingly.
          </p>
        </div>

        {/* Two Stage Cards (Static boxes, zero hover changes, images fixed flush to the bottom) */}
        <div className="space-y-8 lg:space-y-10 max-w-6xl mx-auto">
          {/* Card 1: Startup AI Solutions */}
          <div className="bg-[#121316] border border-[#26282d] rounded-[24px] sm:rounded-[28px] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              {/* Text Left */}
              <div className="lg:col-span-6 text-left p-6 sm:p-10 lg:p-12 xl:p-14 lg:pb-12">
                <span className="text-white text-xs sm:text-sm font-bold tracking-wider block mb-3">
                  Startup AI Solutions
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#00CE44] tracking-tight leading-tight mb-5">
                  AI Development for Startups
                </h3>
                <p className="text-white/80 text-sm sm:text-[15px] leading-relaxed mb-4 font-normal">
                  Early-stage companies cannot afford to over-engineer. The AI investment needs to prove the concept, show what the system can do under real conditions, and do it without burning the runway.
                </p>
                <p className="text-white/70 text-sm sm:text-[15px] leading-relaxed font-normal">
                  We scope AI features and lightweight automation systems that validate the idea before the full build. Focused delivery. Defined scope. No architecture decisions that will need to be undone six months later.
                </p>
              </div>

              {/* Graphic Right: Fixed flush to bottom edge */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end items-end self-end px-4 sm:px-6 lg:px-0 pt-4 lg:pt-0 pb-0 overflow-hidden">
                <img
                  src="/assets/ai-development/fgg-1.png"
                  alt="AI Development for Startups"
                  className="w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[500px] h-auto object-contain object-bottom block select-none translate-y-1"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Card 2: SMB AI Solutions */}
          <div className="bg-[#121316] border border-[#26282d] rounded-[24px] sm:rounded-[28px] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              {/* Graphic Left: Fixed flush to bottom edge */}
              <div className="lg:col-span-6 flex justify-center lg:justify-start items-end self-end order-2 lg:order-1 px-4 sm:px-6 lg:px-0 pt-4 lg:pt-0 pb-0 overflow-hidden">
                <img
                  src="/assets/ai-development/dff-1.png"
                  alt="AI Development for Growing Businesses"
                  className="w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[440px] h-auto object-contain object-bottom block select-none translate-y-1"
                  loading="lazy"
                />
              </div>

              {/* Text Right: Right-aligned matching screenshot media_1794893806150_1a80a3a2.jpg */}
              <div className="lg:col-span-6 text-left lg:text-right p-6 sm:p-10 lg:p-12 xl:p-14 lg:pb-12 order-1 lg:order-2">
                <span className="text-white text-xs sm:text-sm font-bold tracking-wider block mb-3">
                  SMB AI Solutions
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#00CE44] tracking-tight leading-tight mb-5">
                  AI Development for Growing Businesses
                </h3>
                <p className="text-white/80 text-sm sm:text-[15px] leading-relaxed mb-4 font-normal">
                  An established business digitising its operations or building its first intelligent product has different requirements than a startup. The data exists. The workflows exist. The question is where AI creates the most leverage with the least disruption.
                </p>
                <p className="text-white/70 text-sm sm:text-[15px] leading-relaxed font-normal">
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
