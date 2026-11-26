import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: '1. Custom Travel Mobile App Development',
    description: (
      <>
        Our travel{' '}
        <Link
          to="/mobile-app-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          mobile app development services
        </Link>{' '}
        cover native iOS and Android applications alongside Flutter and React Native solutions. Get a mobile product engineered around your booking workflows and platform requirements.
      </>
    ),
    icon: '/assets/healthcare/sector1.svg',
  },
  {
    title: '2. Flight Booking App Development',
    description: (
      <>
        Bring flight search and reservations into your own booking platform. Our flight booking app developers handle{' '}
        <Link
          to="/system-integration-api-automation"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          system integration
        </Link>{' '}
        with supported airline inventory APIs to manage fare availability and booking workflows across your travel business.
      </>
    ),
    icon: '/assets/healthcare/sector2.svg',
  },
  {
    title: '3. Hotel Booking App Development',
    description:
      "Direct hotel bookings require accurate room availability and dependable reservation management. We develop custom hotel booking apps with inventory synchronization suited to your property's existing systems and distribution requirements.",
    icon: '/assets/healthcare/sector3.svg',
  },
  {
    title: '4. Online Travel Marketplace Development',
    description:
      'Launch an online travel marketplace where multiple suppliers operate through one booking platform. Our engineers develop vendor management systems with configurable commission structures suited to your OTA business model.',
    icon: '/assets/healthcare/sector4.svg',
  },
  {
    title: '5. Travel Itinerary Planning App Development',
    description:
      'Personalized trip planning gives travel businesses another way to serve their customers. Our itinerary app development expertise covers connected travel schedules and destination recommendations within a dedicated mobile experience.',
    icon: '/assets/healthcare/sector5.svg',
  },
  {
    title: '6. Tour Booking App Development',
    description:
      'Tour operators can manage direct reservations through custom tour booking apps. Our developers connect activity availability with booking schedules, giving your business greater control over its online sales channel.',
    icon: '/assets/healthcare/sector6.svg',
  },
  {
    title: '7. Travel Management App Development',
    description: (
      <>
        Corporate travel management software needs to accommodate company booking policies, with{' '}
        <Link
          to="/business-process-automation"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          business process automation
        </Link>{' '}
        handling approval requirements. Our developers engineer centralized travel platforms that connect employee reservations with the oversight your organization requires.
      </>
    ),
    icon: '/assets/healthcare/sector1.svg',
  },
  {
    title: '8. AI-Powered Travel App Development',
    description:
      'Our AI travel app development expertise supports personalized itineraries and intelligent recommendations using relevant travel data. Integrate AI capabilities into your platform according to its booking model and customer requirements.',
    icon: '/assets/healthcare/sector2.svg',
  },
  {
    title: '9. Travel App Modernization Services',
    description: (
      <>
        Outdated travel software can limit new integrations and slow platform improvements. Our engineers apply{' '}
        <Link
          to="/product-rescue-scaling"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          product rescue and scaling
        </Link>{' '}
        to modernize existing travel apps through targeted architecture upgrades while maintaining continuity across established reservation workflows.
      </>
    ),
    icon: '/assets/healthcare/sector3.svg',
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
            Inceptives Digital provides travel app development services for travel agencies, hospitality businesses, and travel technology companies. Our developers engineer custom booking platforms and mobile travel products around your business requirements.
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
