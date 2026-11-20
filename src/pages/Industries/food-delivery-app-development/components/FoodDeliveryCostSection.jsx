import React from 'react';

const tiers = [
  {
    title: 'Starter App',
    subtitle:
      'Ideal for startups or restaurants looking to launch a basic food delivery app.',
    cost: '$15,000 - $50,000+',
    timeline: '6–8 weeks',
    includes: [
      'User signup and profile management',
      'Restaurant listing and menu browsing',
      'Cart and order placement',
      'Basic payment integration',
      'Admin dashboard for order control',
    ],
  },
  {
    title: 'Growth App',
    subtitle:
      'Designed for expanding food delivery businesses looking to increase orders, users, and operational control.',
    cost: '$50,000 - $150,000+',
    timeline: '10–14 weeks',
    includes: [
      'Real-time order tracking and notifications',
      'Multi-restaurant management',
      'Driver assignment and delivery tracking',
      'Offers, coupons, and promo codes',
      'Advanced admin analytics and reporting',
    ],
  },
  {
    title: 'Enterprise App',
    subtitle:
      'Built for large-scale food delivery enterprises that demand high-end performance and innovation.',
    cost: '$150,000 - $300,000+',
    timeline: '16–24 weeks',
    includes: [
      'AI-based order recommendations',
      'Route optimization and smart dispatch',
      'Multi-role dashboards (admin, vendor, driver)',
      'POS, ERP, and third-party API integrations',
      'High-traffic cloud infrastructure with 99.9% uptime',
    ],
  },
];

export default function FoodDeliveryCostSection() {
  return (
    <section className="w-full bg-[#181818] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[980px] mx-auto mb-14">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-[1.18] text-white mb-4">
            Food Delivery App Development{' '}
            <span className="text-[#00CE44]">Cost Estimates For Every Type</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            A basic ordering app and a platform managing hundreds of restaurants, thousands of drivers, and real-time logistics across multiple cities are not the same investment. Here is the difference broken down.
          </p>
        </div>

        {/* 3 Equal Cost Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className="bg-[#2a2a2a] rounded-[16px] p-7 sm:p-8 flex flex-col justify-start border border-white/10"
            >
              <h3 className="text-[#00CE44] text-[22px] md:text-[24px] font-bold leading-snug mb-3">
                {tier.title}
              </h3>
              <p className="text-white/85 text-[15px] leading-[1.6] font-normal">
                {tier.subtitle}
              </p>

              <hr className="my-5 border-white/15" />

              <div className="space-y-2 text-[15px] md:text-[16px]">
                <p className="text-white font-bold">
                  Estimated Cost: <span className="font-bold">{tier.cost}</span>
                </p>
                <p className="text-white font-bold">
                  Timeline: <span className="font-bold">{tier.timeline}</span>
                </p>
              </div>

              <hr className="my-5 border-white/15" />

              <p className="text-white font-semibold text-[15px] mb-3">Includes:</p>
              <ul className="list-disc pl-5 space-y-2 text-white/90 text-[14px] md:text-[15px] leading-[1.55]">
                {tier.includes.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
