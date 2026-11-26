import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: '1. Custom Food Delivery App Development',
    description:
      'Bring your food delivery business online with a platform tailored to your operating model. Our custom food delivery app development expertise covers customer-facing applications backed by reliable order management systems.',
    icon: '/assets/healthcare/sector1.svg',
  },
  {
    title: '2. Restaurant Ordering App Development',
    description: (
      <>
        Own your restaurant&apos;s digital ordering channel without depending entirely on third-party marketplaces. We develop branded food ordering apps with POS{' '}
        <Link
          to="/system-integration-api-automation"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          system integration
        </Link>
        , supporting direct sales across individual restaurants and established chains.
      </>
    ),
    icon: '/assets/healthcare/sector2.svg',
  },
  {
    title: '3. Multi-Vendor Food Delivery Marketplace Development',
    description:
      'Build a multi-restaurant marketplace with independent vendor dashboards and centralized administration. Our engineers implement commission structures suited to your revenue model, giving platform operators greater control over restaurant partnerships.',
    icon: '/assets/healthcare/sector3.svg',
  },
  {
    title: '4. On-Demand Food Delivery App Development',
    description:
      "Real-time dispatch is central to successful on-demand delivery operations. Our developers connect incoming orders with driver availability, providing live delivery visibility across your platform's active service areas and delivery network.",
    icon: '/assets/healthcare/sector4.svg',
  },
  {
    title: '5. Cloud Kitchen App Development',
    description:
      'Managing several virtual brands from one kitchen requires a connected ordering environment. Our cloud kitchen solutions support separate brand menus within shared preparation workflows, keeping kitchen operations under centralized control.',
    icon: '/assets/healthcare/sector5.svg',
  },
  {
    title: '6. Grocery Delivery App Development',
    description:
      'Supermarkets and online grocery businesses need dependable inventory visibility across their ordering platforms. Our grocery delivery app development services include stock synchronization and substitution workflows that support accurate customer fulfillment.',
    icon: '/assets/healthcare/sector6.svg',
  },
  {
    title: '7. Meal Subscription App Development',
    description:
      'Recurring meal delivery needs more flexibility than standard checkout systems. We engineer subscription platforms with configurable meal plans and automated billing, supporting predictable ordering cycles for your food delivery business.',
    icon: '/assets/healthcare/sector1.svg',
  },
  {
    title: '8. Food Delivery Logistics App Development',
    description:
      "Efficient delivery operations depend on accurate driver allocation during busy ordering periods. Our logistics applications provide dispatch management and route planning capabilities suited to your fleet's coverage and daily delivery volume.",
    icon: '/assets/healthcare/sector2.svg',
  },
  {
    title: '9. Food Delivery App Modernization',
    description: (
      <>
        Upgrade existing food delivery software without replacing the entire platform. Our engineers identify architecture limitations and modernize critical components through{' '}
        <Link
          to="/product-rescue-scaling"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          product rescue and scaling
        </Link>
        , extending application capabilities while maintaining continuity across established ordering operations.
      </>
    ),
    icon: '/assets/healthcare/sector3.svg',
  },
];

export default function FoodDeliveryServicesGrid() {
  return (
    <section className="w-full bg-[#141414] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[980px] mx-auto mb-14">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-[1.18] text-white mb-4">
            Custom Food Delivery App Development Services{' '}
            <span className="text-[#00CE44]">for Every Business Model</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Our food delivery app development services support restaurant businesses and delivery operators with different commercial requirements. From direct ordering platforms to multi-vendor marketplaces, we engineer applications around real operational needs.
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
