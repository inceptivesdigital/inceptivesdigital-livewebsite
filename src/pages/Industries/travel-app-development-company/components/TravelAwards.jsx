import React from 'react';

const awards = [
  {
    img: '/assets/awards-images/award-designrush.webp',
    alt: 'Clutch Top iPhone App Development Company, United States 2026',
  },
  {
    img: '/assets/awards-images/award-top-developers.png',
    alt: 'Clutch Top App Development Company, Plano 2026',
  },
  {
    img: '/assets/awards-images/award-clutch-austin.png',
    alt: 'Clutch Top User Experience Company, Plano 2026',
  },
  {
    img: '/assets/awards-images/award-rightfirms.png',
    alt: 'RightFirms Top Mobile App Development Company 2026',
  },
  {
    img: '/assets/awards-images/award-clutch-gaming.png',
    alt: 'RightFirms Artificial Intelligence 2026',
  },
];

export default function TravelAwards() {
  return (
    <section className="w-full bg-[#111111] text-white py-14 md:py-20 border-t border-white/10">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="text-center max-w-[820px] mx-auto mb-12">
          <h2 className="text-[26px] sm:text-[34px] md:text-[40px] font-bold leading-tight text-white mb-3">
            Recognition for Our <span className="text-[#00CE44]">Mobile App Development Expertise</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Inceptives Digital&apos;s industry recognition spans mobile engineering, user experience design, and AI development. These credentials reflect the technical expertise we bring to custom travel applications and booking platforms.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-14 lg:gap-18 xl:gap-20">
          {awards.map((award, idx) => (
            <div
              key={idx}
              className="h-24 sm:h-28 lg:h-32 flex items-center justify-center transition-transform duration-200 hover:scale-105"
            >
              <img
                src={award.img}
                alt={award.alt}
                className="max-h-full max-w-full w-auto h-auto object-contain select-none"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
