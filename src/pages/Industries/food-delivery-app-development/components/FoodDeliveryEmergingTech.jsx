import React from 'react';

const technologies = [
  {
    title: 'Artificial Intelligence',
    description:
      'Delivery time prediction, personalised restaurant recommendations, and dynamic promotional offers built on machine learning models that improve with every order placed and completed on the platform.',
    icon: '/assets/healthcare/health-ai-icon.svg',
  },
  {
    title: 'Blockchain',
    description:
      'Smart contracts, distributed ledger technology, and encrypted payment processing are built for food delivery platforms where transaction transparency and fraud prevention are operational requirements, not optional features.',
    icon: '/assets/mobile-app/blockchain.svg',
  },
  {
    title: 'Internet of Things',
    description:
      'GPS tracking, smart kitchen sensors, and temperature monitoring devices are connected for real-time delivery visibility and food quality assurance from preparation through doorstep delivery.',
    icon: '/assets/mobile-app/Internet-Of-Things-1.svg',
  },
  {
    title: 'Cloud Computing',
    description:
      'AWS, Azure, and Google Cloud with microservices architecture and auto-scaling infrastructure built to handle peak lunch and dinner order volumes without downtime or performance degradation.',
    icon: '/assets/mobile-app/Cloud-Integration-1.svg',
  },
  {
    title: 'Business Analytics',
    description:
      'Real-time dashboards, KPI monitoring, and predictive delivery route optimisation are built for food delivery operators making data-driven decisions about fleet management, vendor performance, and customer retention.',
    icon: '/assets/healthcare/big-data.svg',
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

export default function FoodDeliveryEmergingTech() {
  return (
    <section className="w-full bg-[#000000] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[980px] mx-auto mb-14">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-[1.18] text-white mb-4">
            Advanced Technologies Used by Our{' '}
            <span className="text-[#00CE44]">Food Delivery App Development Company</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            As a top-tier food delivery app development company, we expertly integrate advanced technologies like AI, blockchain, and IoT to enable food delivery apps to track, automate, and scale.
          </p>
        </div>

        {/* 3-Column Star-Anchored Architectural Grid */}
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
