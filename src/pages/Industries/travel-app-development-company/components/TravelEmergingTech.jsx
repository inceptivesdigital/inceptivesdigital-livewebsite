import React from 'react';

const technologies = [
  {
    title: 'AI Personalisation Engine',
    description:
      'Machine learning models that customise flight options, hotel recommendations, and itinerary updates for each traveller. Algorithms that optimise with every search, booking, and completed trip to increase engagement and long-term retention.',
    icon: '/assets/healthcare/health-ai-icon.svg',
  },
  {
    title: 'IoT-Enabled Travel Connectivity',
    description:
      'Wearables, luggage trackers, and location-aware travel devices are connected through IoT integrations. Real-time notifications, movement tracking, and cross-device syncing are built into a single connected travel ecosystem.',
    icon: '/assets/mobile-app/Internet-Of-Things-1.svg',
  },
  {
    title: 'AR and VR Interactive Experiences',
    description:
      '3D destination previews, AR navigation overlays, and virtual hotel tours built for travel platforms where users need to visualise a destination before committing to a booking. Conversion driven by experience rather than static images.',
    icon: '/assets/react-native/Augmented-Virtual-Reality-2.svg',
  },
  {
    title: 'Predictive Analytics and Traveller Insights',
    description:
      'Booking pattern forecasting, personalised recommendations, and behavioural analytics built for travel platforms that need to understand user intent before users express it. Marketing made smarter. User lifetime value increased.',
    icon: '/assets/healthcare/big-data.svg',
  },
  {
    title: 'Blockchain-Powered Payment Security',
    description:
      'Encrypted transactions and immutable booking records are built into payment flows for flights, subscriptions, and insurance add-ons. User trust is built into every transaction without friction at the checkout stage.',
    icon: '/assets/mobile-app/blockchain.svg',
  },
  {
    title: 'Gamified Travel Engagement',
    description:
      'In-app badges, challenges, reward points, and activity trackers built for travel platforms that need to turn occasional bookers into loyal, returning users. Engagement mechanics that make the app worth opening between trips.',
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
            The High-Tech Core of Our{' '}
            <span className="text-[#00CE44]">Travel App Development Company</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Advanced technologies selected to improve booking, personalization, security, and traveler engagement.
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
