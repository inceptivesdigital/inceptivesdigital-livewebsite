import React from 'react';
import { Link } from 'react-router-dom';

const tiers = [
  {
    title: '1. Restaurant Ordering MVP',
    subtitle: (
      <>
        Launch a branded restaurant ordering app through{' '}
        <Link
          to="/mvp-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          MVP development
        </Link>{' '}
        with essential checkout and order management functionality.
      </>
    ),
    cost: '$15,000 - $50,000+',
    timeline: '6–8 weeks',
    includes: [
      'Customer registration',
      'Restaurant menu management',
      'Cart and checkout',
      'Payment gateway integration',
      'Basic order dashboard',
    ],
  },
  {
    title: '2. Multi-Restaurant Delivery Platform',
    subtitle:
      'Expand restaurant partnerships with integrated delivery management and real-time order tracking capabilities.',
    cost: '$50,000 - $150,000+',
    timeline: '10–14 weeks',
    includes: [
      'Multi-restaurant management',
      'Live delivery tracking',
      'Driver dispatch',
      'Promotions and offers',
      'Operational reporting',
    ],
  },
  {
    title: '3. Enterprise Food Delivery Marketplace',
    subtitle:
      'For established delivery operators investing in multi-vendor marketplaces with custom dispatch requirements and enterprise system integrations.',
    cost: '$150,000 - $300,000+',
    timeline: '16–24+ weeks',
    includes: [
      'Multi-vendor architecture',
      'Custom dispatch systems',
      'Commission management',
      'POS and ERP integrations',
      'High-volume cloud infrastructure',
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
            <span className="text-[#00CE44]">Cost by Business Model</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Food delivery{' '}
            <Link
              to="/blog/mobile-app-development-cost"
              className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
            >
              mobile app development cost
            </Link>{' '}
            varies with the ordering model, platform complexity, and integration requirements. Inceptives Digital provides scope-based estimates for restaurant startups and established delivery operators planning their next investment.
          </p>
        </div>

        {/* 3 Equal Cost Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-12">
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

        {/* Centered CTA Footer */}
        <div className="text-center max-w-[780px] mx-auto">
          <h3 className="text-[20px] sm:text-[24px] font-bold text-white mb-3">
            Get a Development Quote for Your Food Delivery App
          </h3>
          <p className="text-white/85 text-[15px] sm:text-[17px] leading-[1.65] mb-6 font-normal">
            Know what your platform will cost before committing. Request a quote covering your specific development requirements.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-[15px] md:text-[16px] px-8 py-4 rounded-none transition-colors duration-200"
          >
            Request My Food Delivery App Quote
          </a>
        </div>
      </div>
    </section>
  );
}
