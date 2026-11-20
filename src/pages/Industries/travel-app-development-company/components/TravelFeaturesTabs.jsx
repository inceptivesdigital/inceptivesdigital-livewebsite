import React, { useState } from 'react';

const featureTabs = [
  {
    id: 'booking',
    label: 'Flight & Hotel Booking Apps',
    subtitle:
      'Core transaction capabilities that make finding, comparing, and booking travel seamless for users anywhere in the world.',
    items: [
      {
        title: 'Search and Filter Functionality',
        description:
          'Advanced search algorithms and dynamic filtering let users sort available options by destination, dates, guests, price range, and property type through real-time API connections.',
      },
      {
        title: 'Booking and Payment Integration',
        description:
          'PCI DSS-compliant payment gateways with multi-currency support, digital wallets, and automatic invoice generation. Users book flights and hotels directly through the app without leaving to complete the transaction.',
      },
      {
        title: 'Itinerary Management',
        description:
          'A unified dashboard that updates all travel information in real time. Flight times, hotel bookings, boarding passes, and reservations are organised and accessible in one place.',
      },
      {
        title: 'Push Notifications',
        description:
          'Flight status updates, delays, hotel check-ins, price drops, and reminders delivered through event-driven triggers. Users stay informed without being overwhelmed.',
      },
      {
        title: 'Customer Support Access',
        description:
          'AI-powered chat assistance, ticketing systems, and click-to-call features are built in for travellers who need quick support. Every interaction is logged for service improvement.',
      },
      {
        title: 'Review and Rating System',
        description:
          'A verified review system that lets travellers rate flights, hotels, and experiences. Feedback feeds directly into recommendation algorithms to improve personalisation over time.',
      },
    ],
  },
  {
    id: 'planning',
    label: 'Planning, Navigation, & Destination Apps',
    subtitle:
      'Tools that help travellers plan, navigate on the ground, and discover what each destination has to offer.',
    items: [
      {
        title: 'Custom Travel Itinerary Creation',
        description:
          'Drag-and-drop interfaces with smart recommendations and real-time device syncing. Changes made on one device reflect instantly across all platforms.',
      },
      {
        title: 'Route and Navigation Assistance',
        description:
          'GPS navigation, offline maps, geofencing, and live routing combine for precise directions, whether users are walking, driving, or using public transport.',
      },
      {
        title: 'Destination Recommendations',
        description:
          'Machine learning models that deliver personalised suggestions for sightseeing, dining, events, and local activities based on behaviour, location, and preferences.',
      },
      {
        title: 'Real-Time Location Sharing',
        description:
          'Encrypted location sharing via live feeds and messages. Built for group travel safety and keeping travel companions connected throughout the journey.',
      },
      {
        title: 'Offline Access',
        description:
          'Maps, itineraries, tickets, and emergency contacts are stored locally so users retain access to critical information without an internet connection.',
      },
      {
        title: 'Weather and Local Event Updates',
        description:
          'Weather APIs, event listings, and localised alerts are integrated so travellers can plan and adjust in real time.',
      },
    ],
  },
  {
    id: 'assistance',
    label: 'Assistance Apps',
    subtitle:
      'Safety, support, and communication tools that keep travellers informed and connected wherever they are.',
    items: [
      {
        title: 'Emergency Services Integration',
        description:
          "Instant connection to local emergency numbers, embassies, hospitals, and police stations dynamically mapped to the user's current location.",
      },
      {
        title: 'Local Concierge Assistance',
        description:
          'AI-driven suggestions and live support for booking taxis, restaurants, and activities. A digital concierge available at every stage of the trip.',
      },
      {
        title: 'Health and Safety Alerts',
        description:
          "Real-time notifications for travel risks, health advisories, and safety concerns specific to the user's current location.",
      },
      {
        title: 'Language Translation Services',
        description:
          'NLP-powered text and speech translation built in for menus, conversations, and signs. Communication without language barriers in any destination.',
      },
      {
        title: 'Travel Insurance Assistance',
        description:
          'In-app insurance policy management, instant quotes, claims submission, and progress tracking through secure API integrations.',
      },
      {
        title: 'Lost and Found Support',
        description:
          'An intelligent tracking system for reporting lost items, uploading details, and connecting with local authorities or support groups for recovery assistance.',
      },
    ],
  },
];

export default function TravelFeaturesTabs() {
  const [activeTab, setActiveTab] = useState('booking');
  const currentTab = featureTabs.find((t) => t.id === activeTab) || featureTabs[0];

  return (
    <section
      className="relative w-full text-white py-16 md:py-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/healthcare/health-banner.webp')",
        backgroundColor: '#000000',
      }}
    >
      <div className="absolute inset-0 bg-black/50 pointer-events-none" aria-hidden="true" />

      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-[960px] mx-auto mb-12">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-[1.18] text-white mb-4">
            Travel App Development Features{' '}
            <span className="text-[#00CE44]">for Better Booking and Planning</span>
          </h2>
          <p className="text-white/85 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            These travel mobile app development features ensure that your travel application operates flawlessly, has a faster loading time, and provides a more intelligent and connected experience for every traveler.
          </p>
        </div>

        {/* Single-Line Pill Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6">
          {featureTabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-7 py-3.5 rounded-full text-[15px] md:text-[16px] font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#00CE44] text-black shadow-lg'
                    : 'bg-[#262626] text-white hover:bg-[#333333] border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Active Tab Subtitle */}
        <p className="text-center text-white/90 text-[15px] sm:text-[17px] max-w-3xl mx-auto mb-10 font-normal">
          {currentTab.subtitle}
        </p>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentTab.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#1b1b1b]/95 border border-white/10 rounded-[16px] p-6 md:p-7 flex flex-col justify-start hover:border-[#00CE44]/50 transition-colors duration-200"
            >
              <h3 className="text-[#00CE44] text-[19px] md:text-[21px] font-bold leading-snug mb-3">
                {item.title}
              </h3>
              <p className="text-white/85 text-[14px] md:text-[15px] leading-[1.65] font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
