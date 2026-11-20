import React from 'react'
import HeroTrustBadges from '../../../../components/HeroTrustBadges'

export default function ChatbotHero() {
  return (
    <section
      className="relative w-full min-h-[100dvh] lg:min-h-[760px] flex items-center pt-28 sm:pt-32 lg:pt-28 pb-16 sm:pb-20 bg-[#0a0b0d] text-white overflow-hidden"
      style={{
        backgroundImage: 'url("/assets/ai-chatbot/chatbot-banner.png")',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* Subtle dark-left overlay for crisp text readability */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(0,0,0,0.84) 0%, rgba(0,0,0,0.6) 52%, rgba(0,0,0,0.12) 100%)',
        }}
      />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="w-full lg:w-[58%] xl:w-[54%] flex flex-col items-start text-left">
          <h1 className="text-[36px] sm:text-[46px] md:text-[52px] lg:text-[56px] font-bold leading-[1.1] tracking-tight text-white mb-4">
            AI Chatbot Development <span className="text-[#00CE44]">Services</span>
          </h1>

          <h2 className="text-[19px] sm:text-[22px] md:text-[24px] font-semibold leading-[1.35] text-white/95 mb-5 max-w-[660px]">
            Conversational Interfaces Built for the Specific Context of Your Product and Your Users
          </h2>

          <p className="text-white/85 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.68] font-normal max-w-[650px] mb-8">
            <a
              href="https://inceptivesdigital.com/nlp-development-services"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00CE44] underline hover:text-white transition-colors"
            >
              Natural language processing
            </a>
            , machine learning, LLMs, and RAG architectures integrated into chatbots built for customer support, lead qualification, enterprise knowledge access, and workflow automation.
          </p>

          <a
            href="#contact"
            className="mb-9 inline-flex items-center justify-center bg-[#00CE44] hover:bg-[#00e04b] text-black font-medium text-[15px] md:text-[16px] px-8 py-4 rounded-none transition-colors duration-200 mb-3"
          >
            Book a Consultation
          </a>


          {/* Trust Badges */}
          <HeroTrustBadges />
        </div>
      </div>
    </section>
  )
}
