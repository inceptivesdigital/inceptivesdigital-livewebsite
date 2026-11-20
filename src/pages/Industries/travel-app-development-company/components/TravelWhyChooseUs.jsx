import React from 'react';

const reasons = [
  {
    title: 'End-to-End Travel Experiences',
    description:
      'Booking, planning, navigation, on-trip assistance, and post-trip engagement are built into a single product. Travellers who find everything they need within one platform stay longer, book more, and return more consistently.',
  },
  {
    title: 'Travel-Specific API Integrations',
    description:
      'Amadeus, Skyscanner, Expedia, and real-time travel data providers are integrated with the depth that comes from having done it before. Connections that handle live inventory, dynamic pricing, and booking confirmation without latency or reliability issues.',
  },
  {
    title: 'AI-Powered Personalisation',
    description:
      'Recommendation systems, dynamic pricing engines, and itinerary personalisation are built on models trained for travel-specific user behaviour. Intelligence that improves with every interaction rather than applying generic personalisation logic to a travel context.',
  },
  {
    title: 'Offline-First Architecture',
    description:
      'Critical travel information accessible without connectivity. Maps, itineraries, boarding passes, and emergency contacts are available when internet access is unavailable, which is precisely when travellers need them most.',
  },
  {
    title: 'Security and Compliance',
    description:
      'GDPR and PCI DSS compliance were built into the payment and data architecture from day one. Every transaction and user data point is handled to the standard that international travel platforms require.',
  },
  {
    title: 'Continuous Support and Optimisation',
    description:
      'Performance monitoring, feature updates, and platform optimisation are provided continuously after launch. Travel platforms that stay competitive require ongoing development, not a one-time build and handoff.',
  },
];

export default function TravelWhyChooseUs() {
  return (
    <section className="w-full bg-[#000000] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[980px] mx-auto mb-14">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-[1.18] text-white mb-4">
            Why Businesses Choose Our{' '}
            <span className="text-[#00CE44]">Travel App Development Company</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Travel applications built around booking reliability, traveller engagement, and long-term platform growth.
          </p>
        </div>

        {/* 3x2 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => (
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
