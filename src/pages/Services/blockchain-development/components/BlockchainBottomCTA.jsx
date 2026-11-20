import React from 'react'

export default function BlockchainBottomCTA() {
  return (
    <section className="relative w-full bg-[#202020] text-white overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
          {/* Left Copy (Padded Vertically) */}
          <div className="w-full lg:w-[52%] py-14 sm:py-16 lg:py-20 flex flex-col items-start text-left">
            <h2 className="text-[28px] sm:text-[38px] lg:text-[44px] font-bold leading-[1.15] text-white mb-4">
              Stay Ahead with <br className="hidden sm:block" />
              Blockchain in 2026
            </h2>
            <p className="text-white/85 text-[15px] sm:text-[17px] leading-[1.65] font-normal max-w-[560px] mb-8">
              Don’t let competitors outpace you. Adopt blockchain now and lead the future of digital transformation.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#00CE44] hover:bg-[#00e04b] text-black font-semibold text-[15px] sm:text-[16px] px-8 py-4 rounded-none transition-colors duration-200"
            >
              Get A Free Quote
            </a>
          </div>

          {/* Right Image: Full Top-to-Bottom Bleed (Zero Top/Bottom Padding) */}
          <div className="w-full lg:w-[48%] self-stretch flex items-stretch justify-center lg:justify-end">
            <img
              src="/assets/blockchain-v2/cta2.webp"
              alt="Stay Ahead with Blockchain in 2026"
              className="w-full max-w-[520px] lg:max-w-[580px] h-full max-h-[420px] object-contain object-right select-none"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
