import React from 'react';

const benefits = [
  {
    title: 'More Control Over Direct Orders',
    description:
      'A branded ordering platform keeps customer purchases within your own digital channel, reducing reliance on third-party marketplaces.',
  },
  {
    title: 'Stronger Customer Relationships',
    description:
      'Own your customer experience through direct ordering access. Loyalty programs can support repeat purchases across your restaurant network.',
  },
  {
    title: 'Flexible Platform Revenue Models',
    description:
      "Marketplace operators can introduce restaurant commissions or subscription plans according to their platform's commercial model.",
  },
  {
    title: 'Greater Control Over Delivery Operations',
    description:
      'Dedicated dispatch tools give your business visibility into active orders, helping delivery teams coordinate fulfillment across service areas.',
  },
];

export default function FoodDeliverySmartMove() {
  return (
    <section className="w-full bg-[#000000] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[980px] mx-auto mb-14">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-[1.18] text-white mb-4">
            What a Custom Food Delivery App{' '}
            <span className="text-[#00CE44]">Brings to Your Business</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            A custom food delivery app gives restaurants greater control over their digital ordering operations. Marketplace operators can also build revenue models around their own delivery network.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
