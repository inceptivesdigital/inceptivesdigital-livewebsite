import React, { useState } from 'react';

const tabs = [
  {
    id: 'customer',
    label: 'Customer App Features',
    items: [
      {
        title: 'Login and Registration',
        description:
          'Secure onboarding via email, mobile, or social logins (Google, Apple ID).',
      },
      {
        title: 'User Profile Management',
        description:
          'Save preferences, search history, and favorite properties to personalize your experience.',
      },
      {
        title: 'AI-Powered Chatbot Assistance',
        description:
          'Instant support for property searches, bookings, and app navigation.',
      },
      {
        title: 'Filter and Sort Properties',
        description:
          'Refine listings with filters like price, bedrooms, location, and property type.',
      },
      {
        title: 'List View & Map View',
        description:
          'Explore properties via a list or an interactive map with detailed info and pricing.',
      },
      {
        title: 'Push Notifications',
        description:
          'Receive alerts for new listings, price changes, status updates, or scheduled viewings.',
      },
      {
        title: 'Recently Viewed Properties',
        description:
          'Quickly revisit previously explored properties without repeating searches.',
      },
      {
        title: 'In-App Booking & Scheduling',
        description:
          'Schedule property visits or request callbacks directly through the app.',
      },
    ],
  },
  {
    id: 'agent',
    label: 'Agent App Features',
    items: [
      {
        title: 'Agent Dashboard',
        description:
          'Track leads, appointments, and property listings in one place.',
      },
      {
        title: 'Lead Management',
        description:
          'Capture, assign, and follow up on leads efficiently with automated workflows.',
      },
      {
        title: 'Property Listing Management',
        description:
          'Add, edit, and update listings with photos, videos, pricing, and details.',
      },
      {
        title: 'Client Communication Tools',
        description:
          'Chat, call, or email clients directly from the app for faster responses.',
      },
      {
        title: 'Task & Appointment Scheduling',
        description:
          'Manage daily tasks, property showings, and meeting reminders efficiently.',
      },
      {
        title: 'Performance Analytics',
        description:
          'View leads, conversions, and sales reports to measure individual and team performance.',
      },
      {
        title: 'Push Notifications & Alerts',
        description:
          'Stay updated on client inquiries, scheduled visits, and follow-up reminders.',
      },
    ],
  },
  {
    id: 'admin',
    label: 'Admin Panel Features',
    items: [
      {
        title: 'User & Agent Management',
        description:
          'Administer users, agents, and roles with full access control.',
      },
      {
        title: 'Property Management',
        description:
          'Approve or reject listings, monitor updates, and maintain quality control.',
      },
      {
        title: 'Analytics & Reporting',
        description:
          'Gain insights into user activity, property trends, and revenue reports.',
      },
      {
        title: 'Lead & Inquiry Management',
        description:
          'Track all inquiries, assign leads to agents, and monitor follow-ups.',
      },
      {
        title: 'Content & Marketing Management',
        description:
          'Manage promotional banners, announcements, and marketing campaigns.',
      },
      {
        title: 'Transaction Oversight',
        description:
          'Monitor bookings, payments, and transaction history securely in one place.',
      },
    ],
  },
];

export default function RealEstateKeyFeatures() {
  const [activeTab, setActiveTab] = useState('customer');
  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section
      className="relative w-full text-white py-16 md:py-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/healthcare/health-banner.webp')",
        backgroundColor: '#000000',
      }}
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-[960px] mx-auto mb-12">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-[1.18] text-white mb-4">
            Key Features of Our Real Estate App Development Services
          </h2>
          <p className="text-white/85 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Every feature is designed around the specific needs of buyers, agents, and administrators operating within a real estate platform.
          </p>
        </div>

        {/* Single-Line Pill Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
          {tabs.map((tab) => {
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

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {currentTab.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#1b1b1b]/95 border border-white/10 rounded-[16px] p-6 md:p-7 flex flex-col justify-start hover:border-[#00CE44]/50 transition-colors duration-200"
            >
              <h3 className="text-[#00CE44] text-[18px] md:text-[20px] font-bold leading-snug mb-2.5">
                {item.title}
              </h3>
              <p className="text-white/85 text-[14px] md:text-[15px] leading-[1.6] font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
