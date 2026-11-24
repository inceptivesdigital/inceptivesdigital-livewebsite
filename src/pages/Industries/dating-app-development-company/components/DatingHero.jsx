import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

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

export default function DatingHero() {
  return (
    <section className="relative w-full min-h-screen bg-[#000000] text-white flex items-center overflow-hidden pt-28 pb-16 lg:py-24">
      {/* Desktop Right-Aligned Background Cutout matching WordPress */}
      <div
        className="hidden lg:block absolute inset-y-0 right-0 w-[48%] bg-right bg-contain bg-no-repeat pointer-events-none select-none z-0"
        style={{ backgroundImage: "url('/assets/dating/dating-banner.png')" }}
        aria-hidden="true"
      />

      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Breadcrumbs */}
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-[13px] sm:text-[14px] text-white/70 mb-5"
            >
              <Link to="/" className="hover:text-[#00CE44] transition-colors underline underline-offset-4">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/40" />
              <Link to="/services" className="hover:text-[#00CE44] transition-colors underline underline-offset-4">
                Services
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/40" />
              <Link
                to="/mobile-app-development"
                className="text-[#00CE44] font-medium underline underline-offset-4"
              >
                Mobile App Development
              </Link>
            </nav>

            <h1 className="text-[#00CE44] text-[16px] md:text-[18px] font-semibold tracking-wide mb-3">
              Dating App Development Company
            </h1>

            <h2 className="text-[32px] sm:text-[42px] md:text-[48px] xl:text-[54px] font-bold leading-[1.12] text-white mb-6 tracking-tight max-w-[780px]">
              AI-Powered Matchmaking, Real-Time Communication, and Secure Dating Platforms Built for Scale
            </h2>

            <p className="text-white/85 text-[15px] sm:text-[17px] md:text-[18px] leading-[1.65] max-w-[720px] mb-10 font-normal">
              Custom dating applications for startups and established platforms. Advanced matchmaking algorithms, real-time chat, video calling, location-based discovery, and community features are built into products that perform under real user load.
            </p>

            {/* CTA & Review Badges Row */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 mb-8 lg:mb-0">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-[15px] md:text-[16px] px-8 py-4 rounded-none transition-colors duration-200"
              >
                Talk to Our Experts
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

          {/* Mobile / Tablet Image */}
          <div className="lg:hidden flex justify-center items-center">
            <img
              src="/assets/dating/dating-banner.png"
              alt="Dating App Development Company"
              className="w-full max-w-[460px] h-auto object-contain select-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
