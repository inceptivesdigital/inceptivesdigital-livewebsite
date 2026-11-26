import React from 'react';

const pillars = [
  {
    title: 'Real-Time Order Processing',
    description:
      'Keep order statuses synchronized across customer apps and restaurant dashboards, even during high-volume ordering periods.',
    icon: '/assets/mobile-app/Cloud-Integration-1.svg',
  },
  {
    title: 'Automated Delivery Dispatch',
    description:
      'Custom dispatch logic assigns delivery requests based on driver availability, service zones, and order requirements.',
    icon: '/assets/healthcare/mHealth-App-Development.svg',
  },
  {
    title: 'Restaurant POS Integration',
    description:
      'Connect compatible POS systems with food ordering apps to synchronize incoming orders with restaurant operations.',
    icon: '/assets/healthcare/big-data.svg',
  },
  {
    title: 'Multi-Vendor Marketplace Architecture',
    description:
      'Manage independent restaurant accounts through centralized vendor permissions and commission controls within one marketplace.',
    icon: '/assets/mobile-app/Real-Time-sync.svg',
  },
  {
    title: 'Peak-Hour Performance Optimization',
    description:
      'Load testing identifies system limits under expected traffic, helping maintain reliable checkout and order processing during peak hours.',
    icon: '/assets/healthcare/Telemedicine-App-Development.svg',
  },
  {
    title: 'Delivery Performance Analytics',
    description:
      'Track fulfillment times and delivery performance through dashboards that give operators clear visibility into daily operations.',
    icon: '/assets/healthcare/big-data.svg',
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
            Food delivery businesses depend on systems that keep orders moving during busy service periods. Our engineering capabilities address the operational demands of restaurant ordering platforms and multi-vendor delivery networks.
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
