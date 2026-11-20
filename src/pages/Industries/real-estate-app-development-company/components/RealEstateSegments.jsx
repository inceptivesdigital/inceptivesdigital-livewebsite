import React from 'react';

const segments = [
  {
    title: 'Real Estate Agencies',
    icon: '/assets/healthcare/sector1.svg',
  },
  {
    title: 'Proptech Startups',
    icon: '/assets/healthcare/sector2.svg',
  },
  {
    title: 'Property Marketplaces',
    icon: '/assets/healthcare/sector3.svg',
  },
  {
    title: 'Brokerage Firms',
    icon: '/assets/healthcare/sector4.svg',
  },
  {
    title: 'Rental And Leasing Platforms',
    icon: '/assets/healthcare/sector5.svg',
  },
  {
    title: 'Property Management Companies',
    icon: '/assets/healthcare/sector6.svg',
  },
  {
    title: 'Construction And Developer Groups',
    icon: '/assets/healthcare/sector7.svg',
  },
];

export default function RealEstateSegments() {
  return (
    <section className="w-full bg-[#000000] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[980px] mx-auto mb-14">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-[1.18] text-white mb-4">
            Real Estate App Development Company for Every Market Segment
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Every real estate business operates differently. We build for the specific workflows, user types, and compliance requirements of your segment.
          </p>
        </div>

        {/* Supported Segments Grid */}
        <div className="flex flex-wrap justify-center gap-5 md:gap-6">
          {segments.map((item, idx) => (
            <div
              key={idx}
              className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] bg-[#1f1f1f] hover:bg-[#272727] border border-white/10 rounded-[14px] p-6 flex items-center gap-4 transition-colors duration-200"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-12 h-12 object-contain select-none shrink-0"
              />
              <h3 className="text-[16px] md:text-[17px] font-semibold text-white leading-snug">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
