import React from 'react';

const awards = [
  {
    img: '/assets/awards-images/award-designrush.webp',
    alt: 'DesignRush Top Mobile App Development Companies award badge',
  },
  {
    img: '/assets/awards-images/award-top-developers.png',
    alt: 'Top Mobile App Developers 2025 Award',
  },
  {
    img: '/assets/awards-images/award-clutch-austin.png',
    alt: 'Top Application Management and Support Company 2025 Clutch award badge',
  },
  {
    img: '/assets/awards-images/award-rightfirms.png',
    alt: 'Top Service Provider Award Badge by RightFirms',
  },
  {
    img: '/assets/awards-images/award-clutch-gaming.png',
    alt: 'Clutch Top Software Developers award badge',
  },
];

export default function DatingAwards() {
  return (
    <section className="w-full bg-[#111111] text-white py-14 md:py-20 border-t border-white/10">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="text-center max-w-[820px] mx-auto mb-12">
          <h2 className="text-[26px] sm:text-[34px] md:text-[40px] font-bold leading-tight text-white mb-3">
            Awards And <span className="text-[#00CE44]">Recognitions</span>
          </h2>
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
