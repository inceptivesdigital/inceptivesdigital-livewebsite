import React from 'react';

const tiers = [
  {
    title: '1. Foundation App',
    subtitle:
      'For startups and travel businesses launching a focused booking or itinerary platform.',
    cost: '$20,000 – $35,000',
    timeline: '6–8 weeks',
    includes: [
      'User registration & profiles',
      'Flight & hotel search',
      'Basic itinerary management',
      'Push notifications & alerts',
      'Admin dashboard',
    ],
  },
  {
    title: '2. Advanced Travel Platform',
    subtitle:
      'For travel companies managing bookings, traveler engagement, and multi-service experiences.',
    cost: '$35,000 – $70,000',
    timeline: '10–14 weeks',
    includes: [
      'Booking & payment integration',
      'Destination recommendations & filters',
      'Travel analytics & reporting',
      'Social sharing & reviews',
      'Multi-role admin management',
    ],
  },
  {
    title: '3. Enterprise App',
    subtitle:
      'For travel enterprises building intelligent platforms with AI, automation, and large-scale integrations.',
    cost: '$80,000 – $160,000+',
    timeline: '16–24 weeks',
    includes: [
      'AI-powered itinerary personalization',
      'IoT & wearable device integration',
      'Real-time chat and support',
      'Multi-platform booking & management',
      'Advanced analytics & reporting',
    ],
  },
];

export default function TravelCostSection() {
  return (
    <section className="w-full bg-[#181818] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[980px] mx-auto mb-14">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-[1.18] text-white mb-4">
            Travel App Development{' '}
            <span className="text-[#00CE44]">Cost Estimates</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Every travel platform has different integration requirements, user workflows, and feature complexity. These ranges reflect typical project scope and are defined precisely in the discovery sprint.
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
          <p className="text-white/85 text-[15px] sm:text-[17px] leading-[1.65] mb-6 font-normal">
            The right tier depends on your audience size, feature requirements, and integration complexity. The Discovery Sprint defines exactly where yours sits.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-[15px] md:text-[16px] px-8 py-4 rounded-none transition-colors duration-200"
          >
            Get Your Travel App Started
          </a>
        </div>
      </div>
    </section>
  );
}
