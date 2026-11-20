import React from 'react'

export default function StartupFinalCta() {
  return (
    <section className="w-full bg-[#000000] text-white py-20 md:py-28">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 text-center flex flex-col items-center">
        <p className="text-white/90 text-[18px] sm:text-[22px] font-semibold tracking-tight mb-3">
          Ready to Launch Your Startup App?
        </p>

        <h2 className="text-[36px] sm:text-[48px] md:text-[58px] lg:text-[64px] font-bold leading-[1.1] tracking-tight text-white mb-9">
          Let&apos;s Build It Together!
        </h2>

        <a
          href="#contact"
          className="inline-flex items-center justify-center bg-[#00CE44] hover:bg-[#00e04b] text-black font-medium text-[15px] sm:text-[16px] px-10 py-4 rounded-none transition-colors duration-200"
        >
          Schedule a Free Consultation
        </a>
      </div>
    </section>
  )
}
