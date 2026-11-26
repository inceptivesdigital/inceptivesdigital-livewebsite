import React from 'react';
import { Link } from 'react-router-dom';

const technologies = [
  {
    title: 'Artificial Intelligence',
    description: (
      <>
        Utilize{' '}
        <Link
          to="/ai-app-development-services"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          AI app development services
        </Link>{' '}
        for your food delivery operations with demand forecasting and intelligent dispatch models that respond to actual ordering patterns.
      </>
    ),
    icon: '/assets/healthcare/health-ai-icon.svg',
  },
  {
    title: 'Generative AI',
    description:
      'Integrate AI-powered menu assistants and customer support tools using restaurant data, helping your platform handle product inquiries with greater accuracy.',
    icon: '/assets/mobile-app/blockchain.svg',
  },
  {
    title: 'IoT Integration',
    description:
      'Cold-chain delivery businesses can monitor temperature-sensitive shipments through connected sensors, with alerts for conditions that require immediate attention.',
    icon: '/assets/mobile-app/Internet-Of-Things-1.svg',
  },
  {
    title: 'Intelligent Route Optimization',
    description:
      'Reduce unnecessary delivery mileage through routing systems that account for traffic conditions and changing delivery priorities across your network.',
    icon: '/assets/mobile-app/Cloud-Integration-1.svg',
  },
  {
    title: 'Data Science',
    description: (
      <>
        Use historical orders and{' '}
        <Link
          to="/machine-learning-development-services"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          machine learning development
        </Link>{' '}
        to forecast demand by location and time, giving restaurant operators stronger insight into expected activity.
      </>
    ),
    icon: '/assets/healthcare/big-data.svg',
  },
  {
    title: 'Business Analytics',
    description:
      'Track order volumes, delivery performance, and restaurant revenue through custom dashboards that give operators clear visibility into business performance.',
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
            Engineering Smarter Food Delivery App Development Solutions{' '}
            <span className="text-[#00CE44]">With Emerging Technologies</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            As a top-tier food delivery app development company, we expertly integrate advanced technologies like AI, blockchain, and IoT to enable food delivery apps to scale.
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
