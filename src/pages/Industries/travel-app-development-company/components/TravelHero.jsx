import React from 'react';

const reviewBadges = [
  {
    name: 'Clutch',
    src: '/assets/locations/toronto/clutch.png',
    alt: 'Clutch 5.0 Rating',
    href: 'https://clutch.co/profile/inceptives-digital',
  },
  {
    name: 'Bark',
    src: '/assets/locations/toronto/bark.png',
    alt: 'Bark 5.0 Rating',
    href: 'https://www.bark.com/en/us/company/inceptives-digital/Pww4ae/',
  },
  {
    name: 'Trustpilot',
    src: '/assets/locations/toronto/trustpilot.png',
    alt: 'Trustpilot 4.7 Rating',
    href: 'https://www.trustpilot.com/review/inceptivesdigital.com',
  },
];

export default function TravelHero() {
  return (
    <section className="relative w-full min-h-screen bg-[#000000] text-white flex items-center overflow-hidden pt-28 pb-16 lg:py-24">
      {/* Desktop Right-Aligned Large Travel Scene matching WordPress (55% width) */}
      <div
        className="hidden lg:block absolute inset-y-0 right-0 w-[54%] xl:w-[56%] bg-right bg-contain bg-no-repeat pointer-events-none select-none z-0"
        style={{ backgroundImage: "url('/assets/travel/travel-banner.png')" }}
        aria-hidden="true"
      />

      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h1 className="text-[#00CE44] text-[16px] md:text-[18px] font-semibold tracking-wide mb-3">
              Travel App Development Company
            </h1>

            <h2 className="text-[32px] sm:text-[42px] md:text-[48px] xl:text-[54px] font-bold leading-[1.12] text-white mb-6 tracking-tight max-w-[720px]">
              Booking Platforms, AI Itineraries, and Immersive Experiences Built Around Modern Traveler Expectations
            </h2>

            <p className="text-white/85 text-[15px] sm:text-[17px] md:text-[18px] leading-[1.65] max-w-[660px] mb-10 font-normal">
              Custom travel applications for startups and established travel businesses. Flight booking, hotel reservations, itinerary management, AR navigation, and AI-powered personalisation built to GDPR and PCI DSS compliance standards from the architecture stage.
            </p>

            {/* CTA & Review Badges Row */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-[15px] md:text-[16px] px-8 py-4 rounded-none transition-colors duration-200"
              >
                Talk to Our Travel App Experts
              </a>

              <div className="flex items-center gap-5 sm:gap-7 flex-wrap">
                {reviewBadges.map((badge) => (
                  <a
                    key={badge.name}
                    href={badge.href}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="transition-transform duration-200 hover:scale-105"
                  >
                    <img
                      src={badge.src}
                      alt={badge.alt}
                      className="h-10 sm:h-12 w-auto object-contain select-none"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile / Tablet Illustration */}
          <div className="lg:hidden flex justify-center items-center">
            <img
              src="/assets/travel/travel-banner.png"
              alt="Travel App Development Company"
              className="w-full max-w-[600px] h-auto object-contain select-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
