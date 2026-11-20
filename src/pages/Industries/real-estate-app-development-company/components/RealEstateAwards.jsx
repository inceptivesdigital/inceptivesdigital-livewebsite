import React from 'react';

const awards = [
  {
    img: '/assets/mobile-app/new-review-icon-add2.webp',
    alt: 'Clutch Top App Developers',
  },
  {
    img: '/assets/mobile-app/badge-top-mobile-app-developers-2025.png',
    alt: 'Top Mobile App Developers 2025',
  },
  {
    img: '/assets/mobile-app/new-review-icon-add6.png',
    alt: 'DesignRush Accredited Agency',
  },
  {
    img: '/assets/mobile-app/rightfirms-badge-company.png',
    alt: 'RightFirms Top App Development Company',
  },
  {
    img: '/assets/mobile-app/new-review-icon-add4.png',
    alt: 'Top Rated Development Partner',
  },
];

export default function RealEstateAwards() {
  return (
    <section className="w-full bg-[#111111] text-white py-14 md:py-20 border-t border-white/10">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="text-center max-w-[820px] mx-auto mb-10">
          <h2 className="text-[26px] sm:text-[34px] md:text-[40px] font-bold leading-tight text-white mb-3">
            Recognized by Leading Global Review Platforms
          </h2>
          <p className="text-white/75 text-[15px] sm:text-[16px] leading-relaxed font-normal">
            Award-winning mobile, web, and PropTech software engineering trusted by high-growth real estate brands worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center h-[120px] sm:h-[140px]"
            >
              <img
                src={award.img}
                alt={award.alt}
                className="max-h-[95px] sm:max-h-[110px] w-auto object-contain select-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
