import React from 'react'
import HeroTrustBadges from '../../../../components/HeroTrustBadges'

export default function ChatbotHero() {
  return (
    <section className="relative w-full min-h-screen min-h-[100dvh] flex items-center pt-28 sm:pt-32 lg:pt-28 pb-16 sm:pb-20 bg-[#1E1E1E] text-white overflow-hidden">
      <div className="relative z-10 w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Eyebrow + Heading + Subtitle + CTA + Trust Badges */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left">
            <span className="text-[#00CE44] text-[14px] sm:text-[15px] font-semibold tracking-normal mb-3 block">
              AI Chatbot Development Services
            </span>

            <h1 className="text-[34px] sm:text-[44px] md:text-[48px] lg:text-[52px] font-bold leading-[1.12] tracking-tight text-white mb-5 max-w-[600px]">
              Conversational Interfaces Built for the Specific Context of Your Product and Your Users
            </h1>

            <p className="text-white/85 text-[15px] sm:text-[16px] leading-[1.65] font-normal max-w-[540px] mb-7">
              <a
                href="https://inceptivesdigital.com/nlp-development-services"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/95 underline hover:text-[#00CE44] transition-colors"
              >
                Natural language processing
              </a>
              , machine learning, LLMs, and RAG architectures integrated into chatbots built for customer support, lead qualification, enterprise knowledge access, and workflow automation.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#00CE44] hover:bg-[#00e04b] text-black font-medium text-[15px] md:text-[16px] px-7 py-3.5 rounded-none transition-colors duration-200 mb-10"
            >
              Book an AI Consultation
            </a>

            {/* Trust Badges */}
            <HeroTrustBadges />
          </div>

          {/* Right Column: Standalone 3D Chatbot Illustration */}
          <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center lg:justify-end">
            <img
              src="/assets/ai-chatbot/chatbot-banner.png"
              alt="AI Chatbot Development Services"
              className="w-full max-w-[380px] sm:max-w-[460px] lg:max-w-[520px] xl:max-w-[560px] h-auto object-contain select-none"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
