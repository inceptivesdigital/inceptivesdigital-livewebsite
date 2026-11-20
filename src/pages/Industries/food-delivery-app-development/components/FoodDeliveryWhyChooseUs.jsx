import React from 'react';

const reasons = [
  {
    title: 'End-to-End Platform Ownership',
    description:
      'Every component of the food delivery ecosystem, customer app, driver app, restaurant panel, admin dashboard, payment infrastructure, and analytics, is built and delivered as a single integrated product. No third-party module gaps. No accountability handoffs between vendors.',
  },
  {
    title: 'Food Delivery Domain Knowledge',
    description:
      'Quick-service restaurants, multi-branch cloud kitchens, grocery delivery, and speciality food businesses each operate differently. Domain knowledge is applied before architecture decisions are made, not learned during your project.',
  },
  {
    title: 'AI Built for Food Delivery Behaviour',
    description:
      'Recommendation systems, dynamic pricing engines, and demand forecasting models built specifically for food ordering behaviour. Not generic personalisation logic applied to a food delivery context.',
  },
  {
    title: 'Real-Time Infrastructure That Holds Under Pressure',
    description:
      'Order processing, GPS tracking, driver dispatch, and payment confirmation are happening simultaneously across thousands of concurrent users. Infrastructure built for that specific operational reality from the architecture stage.',
  },
  {
    title: 'Post-Launch Growth Partnership',
    description:
      'Performance monitoring, feature updates, route optimisation improvements, and platform scaling are provided continuously after launch. The platform that launches is the starting point, not the finished state.',
  },
];

export default function FoodDeliveryWhyChooseUs() {
  return (
    <section className="w-full bg-[#000000] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[980px] mx-auto mb-14">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-[1.18] text-white mb-4">
            Why Choose Inceptives Digital’s{' '}
            <span className="text-[#00CE44]">Food Delivery App Development Services</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            A food delivery platform that cannot handle the Friday night dinner rush is not a platform. It is a liability. Here is what we build instead.
          </p>
        </div>

        {/* Centered 3 + 2 Cards Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-[#2b2b2b] rounded-[14px] p-7 sm:p-8 flex flex-col justify-start"
            >
              <h3 className="text-[#00CE44] text-[20px] md:text-[22px] font-bold leading-snug mb-3.5">
                {item.title}
              </h3>
              <p className="text-white text-[15px] md:text-[16px] leading-[1.65] font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
