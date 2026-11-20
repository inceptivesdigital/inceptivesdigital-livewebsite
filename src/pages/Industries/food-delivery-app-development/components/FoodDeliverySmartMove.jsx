import React from 'react';

const benefits = [
  {
    title: 'Cut Third-Party Commission Costs',
    description:
      'Third-party delivery platforms charge 15 to 30 percent commission on every order. A branded platform eliminates that dependency and returns margin directly to the business on every transaction.',
  },
  {
    title: 'Own the Customer Relationship',
    description:
      'Third-party platforms own your customer data, reorder behaviour, and loyalty. A branded app returns all three, first-party data, direct communication, and retention control without intermediary dependency.',
  },
  {
    title: 'Unlock Multiple Revenue Streams',
    description:
      'Subscription plans, in-app promotions, premium restaurant placement, and loyalty programmes all become available when the platform is owned rather than rented. Revenue diversification that compounds as the user base grows.',
  },
  {
    title: 'Increase Repeat Order Rate',
    description:
      'Personalised recommendations, one-tap reordering, and loyalty rewards drive repeat purchases. Apps with personalised ordering experiences consistently outperform generic platforms on repeat order frequency and average order value.',
  },
  {
    title: 'Reduce Customer Acquisition Cost',
    description:
      'Push notifications, in-app promotions, and referral programmes built into a branded platform cost a fraction of paid acquisition on third-party marketplaces. Users acquired directly stay longer and spend more.',
  },
  {
    title: 'Scale Without Commission Scaling With You',
    description:
      'Every order on a third-party platform costs more as volume grows. Every order on an owned platform costs less per transaction as infrastructure costs amortise across a higher volume.',
  },
];

export default function FoodDeliverySmartMove() {
  return (
    <section className="w-full bg-[#000000] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[980px] mx-auto mb-14">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-[1.18] text-white mb-4">
            Why Food Delivery App Development Is{' '}
            <span className="text-[#00CE44]">a Smart Business Move</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            The U.S. online food delivery sector is currently experiencing fast growth, which creates excellent business opportunities for companies willing to invest in food delivery app development.
          </p>
        </div>

        {/* 3x2 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#2b2b2b] rounded-[14px] p-7 sm:p-8 flex flex-col justify-start"
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
