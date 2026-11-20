import React, { useState } from 'react';

const tabs = [
  {
    id: 'customer',
    label: 'Customer App Features',
    items: [
      {
        title: 'Easy Food Ordering',
        description:
          'Users can browse menus to create their meals before they complete their orders with two quick taps.',
      },
      {
        title: 'Real-Time Order Tracking',
        description:
          'Users can track their food delivery from the kitchen to their home.',
      },
      {
        title: 'Secure Online Payments',
        description:
          'Users can make secure payments through various payment methods, which provide immediate payment verification.',
      },
      {
        title: 'Ratings & Reviews',
        description:
          'Customers can evaluate food, delivery, and service quality to provide their feedback.',
      },
      {
        title: 'Push Notifications',
        description:
          'Users receive immediate notifications about order progress, special offers, and delivery information.',
      },
      {
        title: 'Favourites & Reorders',
        description:
          'Users can store their preferred meals, which they can reorder with a single tap.',
      },
      {
        title: 'Offers & Discounts',
        description:
          'Users can obtain special deals through coupons and seasonal offers.',
      },
    ],
  },
  {
    id: 'driver',
    label: 'Driver App Features',
    items: [
      {
        title: 'Driver Assignment',
        description:
          'Automatically receives incoming orders while generating optimal route recommendations for the assigned drivers.',
      },
      {
        title: 'Navigation & Route Optimization',
        description:
          'GPS provides turn-by-turn navigation directions, which help drivers reach their destinations more efficiently.',
      },
      {
        title: 'Real-Time Delivery Updates',
        description:
          'Provides instant delivery progress updates to customers through real-time delivery progress notifications.',
      },
      {
        title: 'Earnings & Reports',
        description:
          'Enables users to monitor their daily delivery achievements and corresponding earnings, together with their performance metrics.',
      },
      {
        title: 'Order History',
        description:
          'Order history to view their previous deliveries, which serves both as a reference point and a means of establishing accountability.',
      },
      {
        title: 'Delivery Alerts & Notifications',
        description:
          'Provides users with delivery alerts that inform them about new orders and delivery delays, together with order cancellations.',
      },
    ],
  },
  {
    id: 'restaurant',
    label: 'Restaurant Panel Features',
    items: [
      {
        title: 'Order Management',
        description:
          'Enables the restaurant to approve or deny orders while monitoring all orders through its kitchen operations.',
      },
      {
        title: 'Menu Management',
        description:
          'Provides the restaurant with the ability to update menu items through their editing and removal functions, while they also maintain control over pricing and item availability.',
      },
      {
        title: 'Real-Time Notifications',
        description:
          'Provides instant notifications to both drivers and customers when their orders reach completion.',
      },
      {
        title: 'Inventory Tracking',
        description:
          'Enables restaurants to track their stock levels while they handle their ingredient management tasks.',
      },
      {
        title: 'Analytics & Reports',
        description:
          'Enables businesses to monitor their sales performance and track popular products while assessing their operational efficiency.',
      },
      {
        title: 'Customer Feedback Management',
        description:
          'Enables users to track customer ratings and reviews while they handle feedback responses.',
      },
      {
        title: 'Offers & Promotions',
        description:
          'Enables businesses to create various discounts, seasonal promotions, and customer loyalty programs, which help increase their sales revenue.',
      },
    ],
  },
];

export default function FoodDeliveryKeyFeatures() {
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
      <div className="absolute inset-0 bg-black/50 pointer-events-none" aria-hidden="true" />

      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-[960px] mx-auto mb-12">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-[1.18] text-white mb-4">
            Key Features of Our{' '}
            <span className="text-[#00CE44]">Food Delivery App Development Services</span>
          </h2>
          <p className="text-white/85 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Every feature below exists because food delivery users, drivers, and restaurant partners each have different operational needs that a single generic interface cannot serve.
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
        <div className="flex flex-wrap justify-center gap-5 md:gap-6">
          {currentTab.items.map((item, idx) => (
            <div
              key={idx}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-[#1b1b1b]/95 border border-white/10 rounded-[16px] p-6 md:p-7 flex flex-col justify-start hover:border-[#00CE44]/50 transition-colors duration-200"
            >
              <h3 className="text-[#00CE44] text-[19px] md:text-[21px] font-bold leading-snug mb-2.5">
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
