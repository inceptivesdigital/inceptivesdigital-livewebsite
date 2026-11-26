import React from 'react';
import { Link } from 'react-router-dom';

const reasons = [
  {
    title: 'Proven Multi-Vendor Platform Experience',
    description:
      'Our experience developing multi-sided marketplaces brings practical engineering expertise to food delivery platforms with complex vendor operations.',
  },
  {
    title: 'End-to-End Mobile Product Engineering',
    description: (
      <>
        One development team handles your customer apps and{' '}
        <Link
          to="/backend-api-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          backend API development
        </Link>
        , keeping critical food delivery workflows connected throughout development.
      </>
    ),
  },
  {
    title: 'Marketplace Payment Architecture',
    description:
      'Our experience with marketplace payments supports custom checkout and vendor settlement workflows across multi-restaurant food delivery platforms.',
  },
  {
    title: 'Seamless Restaurant POS Connectivity',
    description:
      'Already using restaurant management software? Our engineers assess POS compatibility to connect new ordering apps with existing operations.',
  },
  {
    title: 'Product Strategy Before Development',
    description: (
      <>
        Our{' '}
        <Link
          to="/product-strategy-consulting"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          product strategy consulting
        </Link>{' '}
        team defines your food delivery app&apos;s initial scope around commercial priorities, preventing unnecessary development investment.
      </>
    ),
  },
  {
    title: 'Long-Term Engineering Support',
    description:
      'Expansion into new delivery markets often requires platform updates. Our engineers maintain development continuity through agreed support engagements.',
  },
];

export default function FoodDeliveryWhyChooseUs() {
  return (
    <section className="w-full bg-[#000000] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[980px] mx-auto mb-14">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-[1.18] text-white mb-4">
            Why Choose Inceptives Digital as Your{' '}
            <span className="text-[#00CE44]">Food Delivery App Development Company?</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Inceptives Digital brings experience in mobile commerce and multi-sided marketplaces to custom food delivery development. With 70+{' '}
            <Link
              to="/digital-product-development"
              className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
            >
              digital projects
            </Link>{' '}
            delivered, our engineers understand the technical demands of building connected products for businesses with complex operations.
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
