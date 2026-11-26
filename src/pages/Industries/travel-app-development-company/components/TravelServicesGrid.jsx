import React from 'react';

const services = [
  {
    title: 'Android Travel App Development',
    description:
      'High-performance Android travel applications built with Kotlin, Jetpack libraries, and secure APIs. Real-time flight data, hotel booking engines, GPS tracking, offline access, and AR navigation are integrated for a complete Android travel experience.',
    icon: '/assets/healthcare/sector1.svg',
  },
  {
    title: 'iOS Travel App Development',
    description:
      'Performance-driven iOS travel applications built with Swift, SwiftUI, and Core Location. Dynamic itineraries, live fare updates, biometric login, push alerts, and personalised travel recommendations built to Apple design and security standards.',
    icon: '/assets/healthcare/sector2.svg',
  },
  {
    title: 'Cross-Platform Travel App Development',
    description:
      'Single-codebase travel applications for Android and iOS built with Flutter and React Native. Cloud syncing, global maps, booking workflows, and native-quality performance across both platforms without two separate development budgets.',
    icon: '/assets/healthcare/sector3.svg',
  },
  {
    title: 'AR Travel App Development',
    description:
      'Augmented reality travel experiences built with ARCore and ARKit. AR navigation, 3D landmark overlays, virtual hotel tours, and geolocation-based content that help travellers discover and navigate destinations on the ground.',
    icon: '/assets/healthcare/sector4.svg',
  },
  {
    title: 'VR Travel App Development',
    description:
      'Virtual travel experiences built with Unity and Unreal Engine. 360-degree hotel tours, virtual destination previews, cultural immersions, and VR-assisted trip planning for users who need to see before they book.',
    icon: '/assets/healthcare/sector5.svg',
  },
  {
    title: 'AI Travel App Development',
    description:
      'Intelligent travel platforms built with ML, predictive models, NLP, and data analytics. AI-powered itineraries, dynamic pricing engines, conversational chatbots, forecasting tools, and recommendation systems that personalise every stage of the trip.',
    icon: '/assets/healthcare/sector6.svg',
  },
];

export default function TravelServicesGrid() {
  return (
    <section className="w-full bg-[#141414] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[980px] mx-auto mb-14">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-[1.18] text-white mb-4">
            Custom Travel App Development Services{' '}
            <span className="text-[#00CE44]">for Every Travel Use Case</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Custom travel applications designed for startups and established travel businesses across every platform and travel use case.
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
