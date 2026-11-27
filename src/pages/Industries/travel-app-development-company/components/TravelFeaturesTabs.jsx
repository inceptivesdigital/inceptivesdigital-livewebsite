import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const featureTabs = [
  {
    id: 'booking',
    label: '1. Travel Booking Panel',
    subtitle:
      'Develop a booking experience that connects travelers with live supplier inventory while keeping reservation workflows aligned with your business requirements.',
    items: [
      {
        title: 'Flight and Hotel Search',
        description:
          'Compatible travel APIs bring flight and hotel inventory into one booking experience.',
      },
      {
        title: 'Live Prices and Availability',
        description:
          'Keep booking options current through supplier feeds that reflect available rates.',
      },
      {
        title: 'Booking Changes and Cancellations',
        description:
          'Travelers can modify eligible bookings through workflows aligned with supplier reservation policies.',
      },
      {
        title: 'Multi-Currency Payments',
        description:
          'Multi-currency payment integrations support transactions across your target travel markets.',
      },
      {
        title: 'Digital Tickets and Travel Documents',
        description:
          'Confirmed bookings provide access to digital tickets through supported supplier connections.',
      },
      {
        title: 'Booking Status Updates',
        description:
          'Supplier responses update reservation statuses across customer interfaces and booking records.',
      },
    ],
  },
  {
    id: 'planning',
    label: '2. Trip Planning Panel',
    subtitle:
      'Extend your travel platform beyond reservations with planning features that give customers greater flexibility throughout their trips.',
    items: [
      {
        title: 'Custom Trip Planner',
        description:
          'Flexible itinerary tools accommodate schedule changes without requiring travelers to rebuild plans.',
      },
      {
        title: 'Multi-Destination Route Planning',
        description:
          'Integrate mapping services that support route planning across complex travel itineraries.',
      },
      {
        title: 'Offline Trip Access',
        description:
          'Downloaded trip details remain accessible when travelers lose internet connectivity.',
      },
      {
        title: 'Flight Delay Alerts',
        description:
          'Real-time flight data powers timely alerts about delays and schedule changes.',
      },
      {
        title: 'Local Activities and Attractions',
        description:
          'Offer relevant local experiences through destination-aware recommendations and supported activity inventory.',
      },
      {
        title: 'Group Trip Planning',
        description:
          'Shared planning tools keep group travel arrangements accessible to participating travelers.',
      },
    ],
  },
  {
    id: 'assistance',
    label: '3. Traveler Assistance Panel',
    subtitle:
      'Add specialized travel support capabilities that help your business serve customers after booking, including during international trips.',
    items: [
      {
        title: 'Travel Safety Alerts',
        description:
          'Connected information services deliver destination-specific advisories through your travel platform.',
      },
      {
        title: 'Nearby Emergency Services',
        description:
          'Location-aware search helps travelers find available emergency assistance in unfamiliar destinations.',
      },
      {
        title: 'Travel Insurance Support',
        description:
          'Supported insurance APIs connect policy information with claim submission workflows.',
      },
      {
        title: 'AI Travel Assistant',
        description:
          'Give travelers contextual assistance through AI models connected to relevant trip information.',
      },
      {
        title: 'Language Translation',
        description: (
          <>
            Integrated translation services, built on multilingual{' '}
            <Link
              to="/nlp-development-services"
              className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
            >
              NLP development
            </Link>
            , support communication across different travel languages.
          </>
        ),
      },
      {
        title: 'Live Location Sharing',
        description:
          'Authorized location sharing keeps selected travel companions informed during active trips.',
      },
    ],
  },
  {
    id: 'admin',
    label: '4. Travel Admin Panel',
    subtitle:
      'Bring booking administration into one management environment, with controls suited to your supplier network.',
    items: [
      {
        title: 'Travel Supplier Management',
        description:
          'Centralized inventory tools give operators visibility across connected travel suppliers.',
      },
      {
        title: 'Booking Record Verification',
        description:
          'Identify booking discrepancies through comparisons between platform records and supplier confirmations.',
      },
      {
        title: 'Commission Management',
        description:
          'Configurable commission rules accommodate supplier agreements across your travel marketplace.',
      },
      {
        title: 'Refund and Cancellation Management',
        description:
          'Refund workflows account for eligible cancellations under applicable supplier booking conditions.',
      },
      {
        title: 'Supplier Connection Monitoring',
        description:
          'Integration monitoring flags failed supplier connections that require operational attention.',
      },
      {
        title: 'Travel Sales Reports',
        description:
          'Review booking revenue and transaction performance through dedicated travel reporting dashboards.',
      },
      {
        title: 'Corporate Travel Approvals',
        description:
          'Company-specific approval rules govern reservations across managed corporate travel accounts.',
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
            Making Every Trip Smoother with{' '}
            <span className="text-[#00CE44]">Custom Travel App Features</span>
          </h2>
          <p className="text-white/85 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Our travel app development services cover customer-facing booking features and the systems behind commercial travel operations. Each panel supports a distinct part of your travel platform.
          </p>
        </div>

        {/* Single-Line Pill Tabs */}
        <div className="flex flex-nowrap lg:flex-wrap justify-start lg:justify-center gap-3 sm:gap-4 mb-6 overflow-x-auto lg:overflow-visible no-scrollbar px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {featureTabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`shrink-0 px-7 py-3.5 rounded-full text-[15px] md:text-[16px] font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
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
