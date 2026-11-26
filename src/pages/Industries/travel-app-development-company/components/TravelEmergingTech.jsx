import React from 'react';
import { Link } from 'react-router-dom';

const technologies = [
  {
    title: 'AI-Powered Travel Recommendations',
    description:
      'Personalize hotel suggestions through AI models that use traveler preferences and available inventory to improve search relevance.',
    icon: '/assets/healthcare/health-ai-icon.svg',
  },
  {
    title: 'AR and VR Travel Experiences',
    description: (
      <>
        Let travelers explore destinations before booking through immersive hotel previews and interactive AR experiences built through{' '}
        <Link
          to="/ar-app-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          AR app development
        </Link>{' '}
        for compatible devices.
      </>
    ),
    icon: '/assets/react-native/Augmented-Virtual-Reality-2.svg',
  },
  {
    title: 'Predictive Travel Analytics',
    description:
      'Anticipate booking demand using historical reservation data. Forecasting models support capacity planning across travel businesses with changing demand.',
    icon: '/assets/healthcare/big-data.svg',
  },
  {
    title: 'Smart Travel Assistance',
    description: (
      <>
        Introduce AI-powered travel assistants, built with{' '}
        <Link
          to="/generative-ai-development-company"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          generative AI development
        </Link>
        , that answer itinerary questions using connected booking information, with access controls suited to your platform.
      </>
    ),
    icon: '/assets/mobile-app/blockchain.svg',
  },
  {
    title: 'Connected Travel Technologies',
    description:
      'Extend your travel app to compatible luggage trackers or wearable devices through IoT integrations suited to your service offering.',
    icon: '/assets/mobile-app/Internet-Of-Things-1.svg',
  },
  {
    title: 'Offline Travel Experience Engineering',
    description:
      'Keep essential trip information accessible when connectivity drops. Our engineers develop local data storage with synchronization for supported travel workflows.',
    icon: '/assets/mobile-app/Cloud-Integration-1.svg',
  },
];

function FourPointStar({ className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-5 h-5 pointer-events-none select-none z-20 ${className}`}
    >
      <path
        d="M12 0C12 8.2 15.8 12 24 12C15.8 12 12 15.8 12 24C12 15.8 8.2 12 0 12C8.2 12 12 8.2 12 0Z"
        fill="#BDBDBD"
      />
    </svg>
  );
}

export default function TravelEmergingTech() {
  return (
    <section className="w-full bg-[#000000] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[980px] mx-auto mb-14">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-[1.18] text-white mb-4">
            Redefining Travel App Development Solutions with{' '}
            <span className="text-[#00CE44]">Future-Forward Technologies</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Give your travel platform a competitive edge with emerging technologies. Our developers bring the expertise to support smarter booking experiences and changing traveler expectations.
          </p>
        </div>

        {/* 3x2 Star-Anchored Architectural Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {technologies.map((item, idx) => {
            const isRow1 = idx < 3;
            const col = idx % 3;

            return (
              <div
                key={idx}
                className={`relative p-7 sm:p-9 md:p-10 flex flex-col justify-start border-white/25 ${
                  isRow1 ? 'border-b' : idx < technologies.length - 1 ? 'border-b lg:border-b-0' : ''
                } ${col < 2 ? 'lg:border-r' : ''}`}
              >
                {idx === 0 && (
                  <FourPointStar className="hidden lg:block absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
                )}

                {isRow1 && (
                  <FourPointStar className="hidden lg:block absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
                )}

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
            );
          })}
        </div>
      </div>
    </section>
  );
}
