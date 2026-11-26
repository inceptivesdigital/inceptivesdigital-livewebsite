import React from 'react'
import HeroTrustBadges from '../../../../components/HeroTrustBadges'

export default function StartupHero() {
  return (
    <section className="relative w-full bg-[#000000] text-white overflow-hidden pt-28 pb-14 lg:pt-36 lg:pb-0">
      {/* Subtle Ambient Glow */}
      <div
        className="pointer-events-none absolute -top-24 right-0 w-[620px] h-[620px] rounded-full opacity-20 blur-[140px]"
        style={{
          background:
            'radial-gradient(circle, rgba(0, 206, 68, 0.55) 0%, rgba(0, 0, 0, 0) 70%)',
        }}
      />

      {/* Right Large Hero Visual (Desktop) */}
      <div className="hidden lg:flex items-end justify-end pointer-events-none absolute inset-y-0 right-0 w-[50%] xl:w-[52%] pr-4 xl:pr-10 pt-20">
        <img
          src="/assets/cross-platform/crossnew-banner.png"
          alt="Startup App Development Company Showcase"
          className="w-full max-w-[740px] max-h-[640px] object-contain object-bottom drop-shadow-[0_24px_60px_rgba(0,206,68,0.18)]"
          loading="eager"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="w-full lg:w-[54%] xl:w-[52%] flex flex-col items-start text-left lg:pb-24">
          <h1 className="text-[#00CE44] text-[13.5px] sm:text-[15px] font-semibold leading-[1.35] tracking-[1px] block mb-3">
            Startup App Development Company
          </h1>

          <h2 className="text-[19px] sm:text-[22px] md:text-[24px] font-semibold leading-[1.35] text-white/95 mb-5 max-w-[660px]">
            From Validated Idea to Market-Ready Digital Product Without the Rebuild Tax
          </h2>

          <p className="text-white/80 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.68] font-normal max-w-[650px] mb-8">
            Custom mobile and web applications for founders, product leads, and growth-stage businesses. MVPs, SaaS platforms, ecommerce applications, and full-stack web products built with architecture that scales without a complete rebuild at every growth stage.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-9">
              <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-[15px] md:text-[16px] px-8 py-4 rounded-none transition-colors duration-200"
          >
            Schedule a Free Consultation
          </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-transparent hover:bg-white/10 border border-white text-white font-medium text-[15px] md:text-[16px] transition-colors"
              >
                Schedule A Call
              </a>
            </div>

          {/* Trust Badges */}
          <HeroTrustBadges />

          {/* Mobile / Tablet Visual */}
          <div className="w-full flex justify-center mt-10 lg:hidden">
            <img
              src="/assets/cross-platform/crossnew-banner.png"
              alt="Startup App Development Company Showcase"
              className="w-full max-w-[520px] h-auto object-contain"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
