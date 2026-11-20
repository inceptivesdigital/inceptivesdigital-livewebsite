import React from 'react';

const pillars = [
  {
    title: 'Reusable Component Architecture',
    description:
      'Pre-built, battle-tested modules for common food delivery functionality — order management, payment processing, driver tracking — reduce development time without reducing code quality or future flexibility.',
    icon: '/assets/mobile-app/Cloud-Integration-1.svg',
  },
  {
    title: 'Skilled In-House Engineering Team',
    description:
      'Every stage of development handled internally. No external vendor dependencies, no handoff delays, and no gaps in accountability between design, development, and deployment.',
    icon: '/assets/healthcare/mHealth-App-Development.svg',
  },
  {
    title: 'Scalable System Design',
    description:
      'Architecture built to handle business growth, peak order volumes, and new feature additions without requiring costly system redesigns at every growth stage.',
    icon: '/assets/healthcare/big-data.svg',
  },
  {
    title: 'Cross-Platform Development',
    description:
      'Single-codebase applications built with Flutter or React Native deliver consistent performance across iOS and Android without the cost and timeline of two separate native builds.',
    icon: '/assets/mobile-app/Real-Time-sync.svg',
  },
  {
    title: 'Transparent Development Process',
    description:
      'Clear milestone-based delivery with defined scope, documented decisions, and regular progress updates throughout the engagement. No hidden complexity. No surprise costs at deployment.',
    icon: '/assets/healthcare/Telemedicine-App-Development.svg',
  },
];

export default function FoodDeliveryEfficiency() {
  return (
    <section className="w-full bg-[#000000] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[980px] mx-auto mb-14">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-[1.18] text-white mb-4">
            How Our Food Delivery App Development Company Builds for{' '}
            <span className="text-[#00CE44]">Efficiency Without Cutting Corners</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            The technical and process decisions that allow us to build food delivery platforms faster, maintain them more easily, and scale them without disrupting what is already working.
          </p>
        </div>

        {/* Centered 3 + 2 Cards Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-[#1f1f1f] hover:bg-[#262626] border border-white/10 rounded-[16px] p-7 md:p-8 flex flex-col justify-start transition-colors duration-200"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-12 h-12 object-contain select-none mb-5"
                loading="lazy"
              />
              <h3 className="text-[#00CE44] text-[20px] md:text-[22px] font-bold leading-snug mb-3">
                {item.title}
              </h3>
              <p className="text-white/85 text-[15px] md:text-[16px] leading-[1.65] font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
