import React from 'react'
import HeroTrustBadges from '../../../../components/HeroTrustBadges'
import { Link } from 'react-router-dom'

export default function AiAppHero() {
  return (
    <section
      className="relative w-full min-h-[100dvh] lg:min-h-[760px] flex items-center pt-28 sm:pt-32 lg:pt-28 pb-16 sm:pb-20 bg-[#0a0b0d] text-white overflow-hidden"
      style={{
        backgroundImage: 'url("/assets/ai-development/ai-banner-dev.png")',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* Subtle dark-left overlay for crisp text readability on all viewports */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.58) 52%, rgba(0,0,0,0.12) 100%)',
        }}
      />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="w-full lg:w-[58%] xl:w-[54%] flex flex-col items-start text-left">
          <h1 className="text-[#00CE44] text-[13.5px] sm:text-[15px] font-semibold leading-[1.35] tracking-[1px] block mb-3">
            AI App Development Services
          </h1>

          <h2 className="text-[19px] sm:text-[22px] md:text-[24px] font-semibold leading-[1.35] text-white/95 mb-5 max-w-[660px]">
            Mobile Applications With AI Engineered Into the Foundation
          </h2>

          <p className="text-white/85 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.68] font-normal max-w-[650px] mb-8">
            Machine learning, generative AI,{' '}
            <Link
              to="/ai-agent-development"
              className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
              AI agents
            </Link>
            ,{' '}
            <Link
              to="/nlp-development-services"
              className="text-[#00CE44] underline hover:opacity-80 transition-colors"
>
              NLP
            </Link>
            , and computer vision integrated into web and mobile applications built for businesses that cannot afford to ship something that breaks under real load.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-3">
              <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[#00CE44] hover:bg-[#00e04b] text-black font-medium text-[15px] md:text-[16px] px-8 py-4 rounded-none transition-colors duration-200"
          >
            Book an AI App Consultation
          </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-transparent hover:bg-white/10 border border-white text-white font-medium text-[15px] md:text-[16px] transition-colors"
              >
                Schedule A Call
              </a>
            </div>

          <p className="text-white/75 text-[13px] sm:text-[14px] font-normal mb-9">
            30 minutes. Bring your idea. Leave with a direction.
          </p>

          {/* Trust Badges */}
          <HeroTrustBadges />
        </div>
      </div>
    </section>
  )
}
