import React from 'react'

export default function AiAppClosingCta() {
  return (
    <section
      className="relative w-full text-white overflow-hidden pt-14 sm:pt-20 lg:pt-0 pb-0"
      style={{
        background:
          'radial-gradient(circle at 85% 50%, rgba(0, 206, 68, 0.16) 0%, transparent 55%), linear-gradient(135deg, #0b3519 0%, #0d3c1e 50%, #072310 100%)',
      }}
    >
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-radial-gradient(circle at 80% 100%, transparent 0, transparent 18px, rgba(0, 206, 68, 0.18) 19px, transparent 20px)',
        }}
      />

      <div className="w-full mx-auto px-6 sm:px-10 md:px-16 lg:px-20 max-w-[1600px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left Content */}
          <div className="lg:col-span-7 lg:py-16 pb-6 lg:pb-16 text-left">
            <h2 className="text-[26px] sm:text-[34px] lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-4 max-w-2xl">
              &ldquo;A Decision Made Today Decides How Your App Performs Tomorrow&rdquo;
            </h2>

            <p className="text-white/90 text-[15px] sm:text-[17px] leading-relaxed font-normal mb-8 max-w-2xl">
              Thirty minutes of the right questions saves months of expensive answers later.
            </p>

            <div className="flex flex-col items-start gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-[#00CE44] hover:bg-[#00e04b] text-black font-medium text-[15px] sm:text-[16px] transition-colors border-0"
              >
                Discuss Your AI App Idea
              </a>
              <span className="text-white/75 text-[13px] sm:text-[14px] font-normal">
                30 minutes. Your idea. Your direction.
              </span>
            </div>
          </div>

          {/* Right WordPress Visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-end self-end pt-4 lg:pt-6 pb-0">
            <img
              src="/assets/ai-app-services/cta-last-aiap.png"
              alt="Discuss Your AI App Idea"
              className="w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[480px] h-auto object-contain object-bottom block select-none"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
