import React from 'react';

const clients = [
  {
    name: 'MaddTech',
    src: '/assets/locations/new-york/mobile-brand1.png',
  },
  {
    name: 'DPS Airem',
    src: '/assets/mobile-app/mobile-brand2.png',
  },
  {
    name: 'Family Entertainment Group',
    src: '/assets/mobile-app/mobile-brand3.png',
  },
  {
    name: 'Pulse Check Timer',
    src: '/assets/mobile-app/mobile-brand4.png',
  },
  {
    name: 'State of the Art Chiropractic',
    src: '/assets/mobile-app/seo-page-sec2-icon5.png',
  },
];

export default function DatingClientLogos() {
  return (
    <section className="w-full bg-[#202020] text-white py-12 sm:py-16 overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Brands That Have Chosen Our{' '}
            <span className="text-[#00CE44]">Dating App Development Services</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 items-center">
          {clients.map((client) => (
            <div
              key={client.name}
              className="h-24 sm:h-28 bg-white rounded-[18px] p-4 flex items-center justify-center transition-transform duration-300 hover:scale-[1.03]"
            >
              <img
                src={client.src}
                alt={client.name}
                className="max-h-14 sm:max-h-16 w-auto max-w-[85%] object-contain select-none"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
