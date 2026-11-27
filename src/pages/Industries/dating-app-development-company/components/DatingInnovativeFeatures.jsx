import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const tabs = [
  {
    id: 'user',
    label: '1. User-Friendly Features',
    subtitle:
      'Core functionality that makes the dating experience simple, personalised, and worth returning to.',
    items: [
      'Quick sign-up and social logins via Facebook, Google, and Apple',
      'Advanced search and filter options by interests, location, and age',
      'Profile personalisation with photos, bios, and custom tags',
      'Instant messaging and media sharing for real-time communication',
      'Multi-language support for diverse user populations',
    ],
  },
  {
    id: 'admin',
    label: '2. Admin Panel Features',
    subtitle:
      'Operational control and platform intelligence are managed in one place.',
    items: [
      'User account and profile management with flagging and moderation controls',
      'Personalised matchmaking and recommendation management',
      'In-depth analytics for user activity, engagement trends, and platform performance',
    ],
  },
  {
    id: 'premium',
    label: '3. Premium Features',
    subtitle:
      'High-value capabilities that drive subscription revenue and user retention.',
    items: [
      'Swipe, match, and chat functionality for fast, intuitive connection',
      'Video and voice calling for deeper interaction without sharing personal contact details',
      'Safety and reporting tools, including blocking, reporting, and moderation workflows',
    ],
  },
];

export default function DatingInnovativeFeatures() {
  const [activeTab, setActiveTab] = useState('user');
  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

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
            Innovative Features for{' '}
            <span className="text-[#00CE44]">Dating App Development</span>
          </h2>
          <p className="text-white/85 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Every feature is designed around user engagement, safety, and the specific mechanics that keep dating platforms active and growing.
          </p>
        </div>

        {/* Single-Line Pill Tabs */}
        <div className="flex flex-nowrap lg:flex-wrap justify-start lg:justify-center gap-3 sm:gap-4 mb-6 overflow-x-auto lg:overflow-visible no-scrollbar px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {tabs.map((tab) => {
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
        <p className="text-center text-white/90 text-[15px] sm:text-[17px] max-w-2xl mx-auto mb-10 font-normal">
          {currentTab.subtitle}
        </p>

        {/* Feature Cards Grid */}
        <div className="flex flex-wrap justify-center gap-5 md:gap-6">
          {currentTab.items.map((item, idx) => (
            <div
              key={idx}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-[#1b1b1b]/95 border border-white/10 rounded-[16px] p-6 md:p-7 flex items-start gap-3.5 hover:border-[#00CE44]/50 transition-colors duration-200"
            >
              <CheckCircle2 className="w-5 h-5 text-[#00CE44] shrink-0 mt-1" />
              <p className="text-white/95 text-[15px] md:text-[16px] leading-[1.6] font-normal">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
