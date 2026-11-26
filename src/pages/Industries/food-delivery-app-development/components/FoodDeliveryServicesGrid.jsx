import React from 'react';

const services = [
  {
    title: 'On-Demand Food Delivery App Development',
    description:
      'Robust on-demand food delivery platforms with real-time ordering, live tracking, and secure payments. Built for startups and established businesses handling high order volumes without operational bottlenecks.',
    icon: '/assets/healthcare/sector1.svg',
  },
  {
    title: 'Milk Delivery App Development',
    description:
      'Scheduled delivery management with temperature monitoring, route optimisation, and automated delivery workflows. Built for businesses where consistency, quality assurance, and cost-efficient logistics determine customer retention.',
    icon: '/assets/healthcare/sector2.svg',
  },
  {
    title: 'Restaurant Food Delivery App Development',
    description:
      'Custom delivery platforms for single restaurants and multi-branch chains. Menu management, POS integrations, and smooth checkout flows built around the specific operational requirements of restaurant delivery.',
    icon: '/assets/healthcare/sector3.svg',
  },
  {
    title: 'Meat Delivery App Development',
    description:
      'Cold-chain monitoring, delivery slot management, and regulatory compliance are built into meat delivery applications. Quality and freshness are maintained from dispatch to doorstep without manual quality checks at every stage.',
    icon: '/assets/healthcare/sector4.svg',
  },
  {
    title: 'Pet Food Delivery App Development',
    description:
      'Smart reordering, custom delivery intervals, and reliable order fulfilment built for pet food delivery businesses. Live delivery visibility and logistics reliability built to maintain customer trust and long-term retention.',
    icon: '/assets/healthcare/sector5.svg',
  },
  {
    title: 'Niche Food Delivery App Development',
    description:
      'Custom delivery platforms for specialised markets, vegan, keto, locally sourced, and diet-specific food businesses. User experience and features built around the specific expectations of niche food audiences.',
    icon: '/assets/healthcare/sector6.svg',
  },
];

export default function FoodDeliveryServicesGrid() {
  return (
    <section className="w-full bg-[#141414] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[980px] mx-auto mb-14">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-[1.18] text-white mb-4">
            Food Delivery App Development Services{' '}
            <span className="text-[#00CE44]">Built for Every Delivery Model</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Custom food delivery applications designed for startups, restaurant chains, and speciality food businesses across every delivery vertical.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#222222] hover:bg-[#282828] border border-white/10 rounded-[16px] p-7 md:p-8 flex flex-col justify-start transition-colors duration-200"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-12 h-12 object-contain select-none mb-5"
                loading="lazy"
              />
              <h3 className="text-[#00CE44] text-[20px] md:text-[22px] font-bold leading-snug mb-3">
                {service.title}
              </h3>
              <p className="text-white/85 text-[15px] md:text-[16px] leading-[1.65] font-normal">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
