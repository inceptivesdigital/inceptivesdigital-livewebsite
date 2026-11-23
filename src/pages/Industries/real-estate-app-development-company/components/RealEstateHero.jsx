import HeroTrustBadges from '../../../../components/HeroTrustBadges'
import React from 'react';

export default function RealEstateHero() {
  return (
    <section className="relative w-full min-h-screen bg-[#000000] text-white flex items-center overflow-hidden pt-28 pb-16 lg:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h1 className="text-[#00CE44] text-[16px] md:text-[18px] font-semibold tracking-wide mb-3">
              Real Estate App Development Company
            </h1>

            <h2 className="text-[32px] sm:text-[42px] md:text-[48px] xl:text-[54px] font-bold leading-[1.12] text-white mb-6 tracking-tight max-w-[820px]">
              Property Management, Listing Platforms, and AI Analytics Built for Real Estate Scale
            </h2>

            <p className="text-white/85 text-[15px] sm:text-[17px] md:text-[18px] leading-[1.65] max-w-[740px] mb-10 font-normal">
              Custom real estate applications for agencies, proptech startups, and property marketplaces. Property management systems, listing platforms, virtual tours, CRM integrations, and AI-powered analytics built to MLS and GDPR compliance standards from the architecture stage.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-[15px] md:text-[16px] px-8 py-4 rounded-none transition-colors duration-200"
              >
                Get a Free Quote
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-transparent hover:bg-white/10 border border-white text-white font-medium text-[15px] md:text-[16px] transition-colors"
              >
                Schedule A Call
              </a>
            </div>

            {/* CTA & Review Badges Row */}
            <HeroTrustBadges className="pt-4" />
          </div>

          {/* Right Illustration Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
            <img
              src="/assets/real-estate/realbanner.png"
              alt="Real Estate App Development Company"
              className="w-full max-w-[460px] xl:max-w-[520px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
