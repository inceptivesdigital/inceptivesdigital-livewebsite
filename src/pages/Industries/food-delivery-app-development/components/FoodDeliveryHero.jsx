import React from 'react';
import { Link } from 'react-router-dom';

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

export default function FoodDeliveryHero() {
  return (
    <section className="relative w-full min-h-screen bg-[#000000] text-white flex items-end overflow-hidden pt-28 pb-0 lg:pt-32">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end">
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left pb-10 lg:pb-20 xl:pb-24">
            <h1 className="text-[#00CE44] text-[16px] md:text-[18px] font-semibold tracking-wide mb-3">
              Food Delivery App Development Company
            </h1>

            <h2 className="text-[32px] sm:text-[42px] md:text-[48px] xl:text-[54px] font-bold leading-[1.12] text-white mb-6 tracking-tight max-w-[820px]">
              Engineer a Better Food Ordering Experience With Custom Delivery Software
            </h2>

            <p className="text-white/85 text-[15px] sm:text-[17px] md:text-[18px] leading-[1.65] max-w-[740px] mb-10 font-normal">
              Inceptives Digital develops custom food delivery platforms for businesses entering or expanding the online ordering market. Our food delivery app development services bring experienced{' '}
              <Link
                to="/mobile-app-development"
                className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
              >
                mobile app development
              </Link>{' '}
              to your ordering operations, with architecture tailored to your delivery model and existing business systems. Tell us how you plan to handle orders and deliveries, and we&apos;ll help define the right scope for your launch.
            </p>

            {/* CTA & Review Badges Row */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-[15px] md:text-[16px] px-8 py-4 rounded-none transition-colors duration-200"
              >
                Consult Our Food Delivery App Experts
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-transparent hover:bg-white/10 border border-white text-white font-medium text-[15px] md:text-[16px] transition-colors"
              >
                Schedule A Call
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

          {/* Right Bottom-Flush Food App Mockup */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end self-end">
            <img
              src="/assets/food-delivery/foodbanner.png"
              alt="Food Delivery App Development Company"
              className="w-full max-w-[540px] xl:max-w-[620px] h-auto object-contain object-bottom block select-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
