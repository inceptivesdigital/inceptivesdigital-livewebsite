import React, { useState } from 'react';

const tabs = [
  {
    id: 'customer',
    label: 'Customer App Features',
    items: [
      {
        title: 'Food Ordering and Checkout',
        description:
          'Users can browse menus to customize their meals before completing orders in just a few taps.',
      },
      {
        title: 'Real-Time Order Tracking',
        description:
          'Users can track their food delivery from kitchen preparation to doorstep arrival.',
      },
      {
        title: 'Secure Online Payments',
        description:
          'Users can make secure payments through supported payment methods with immediate payment verification.',
      },
      {
        title: 'Ratings and Reviews',
        description:
          'Customers can evaluate food, delivery, and service quality to provide verified feedback.',
      },
      {
        title: 'Push Notifications',
        description:
          'Users receive timely alerts about order progress, special offers, and delivery updates.',
      },
      {
        title: 'Favorites and Quick Reorders',
        description:
          'Users can save preferred meals and restaurants to reorder with a single tap.',
      },
      {
        title: 'Offers and Discounts',
        description:
          'Users can redeem promo codes, coupons, and seasonal restaurant offers at checkout.',
      },
    ],
  },
  {
    id: 'driver',
    label: 'Driver App',
    items: [
      {
        title: 'Delivery Request Management',
        description:
          'Receive incoming delivery requests and manage active assignments efficiently.',
      },
      {
        title: 'Pickup and Drop-Off Details',
        description:
          'Access restaurant pickup instructions and customer drop-off details in one view.',
      },
      {
        title: 'GPS Navigation',
        description:
          'Turn-by-turn GPS navigation directions help drivers reach destinations quickly.',
      },
      {
        title: 'Live Delivery Status Updates',
        description:
          'Provide instant delivery progress updates to customers and restaurant operators.',
      },
      {
        title: 'Driver Earnings Reports',
        description:
          'Monitor daily delivery achievements, completed payouts, and performance metrics.',
      },
      {
        title: 'Delivery Order History',
        description:
          'Review completed deliveries for reference, payout reconciliation, and accountability.',
      },
      {
        title: 'Delivery Alerts and Notifications',
        description:
          'Receive instant alerts for new delivery requests, route changes, and order updates.',
      },
    ],
  },
  {
    id: 'restaurant',
    label: 'Restaurant Panel',
    items: [
      {
        title: 'Order Acceptance and Management',
        description:
          'Approve or manage incoming orders while monitoring active kitchen preparation.',
      },
      {
        title: 'Digital Menu Management',
        description:
          'Update menu items, pricing, modifiers, and item availability in real time.',
      },
      {
        title: 'Order Status Notifications',
        description:
          'Send instant notifications to drivers and customers as orders move through preparation.',
      },
      {
        title: 'Inventory Tracking',
        description:
          'Track stock levels and ingredient availability to prevent unfulfillable orders.',
      },
      {
        title: 'Sales Analytics and Reports',
        description:
          'Monitor sales performance, popular menu items, and operational efficiency.',
      },
      {
        title: 'Customer Feedback Management',
        description:
          'Track customer ratings and reviews while managing direct feedback responses.',
      },
      {
        title: 'Restaurant Promotions',
        description:
          'Create targeted discounts, seasonal promotions, and loyalty offers to drive repeat orders.',
      },
    ],
  },
  {
    id: 'admin',
    label: 'Admin Dashboard',
    items: [
      {
        title: 'Restaurant and Vendor Approvals',
        description:
          'Review new restaurant applications, verify onboarding details, and manage active vendor accounts.',
      },
      {
        title: 'Customer and Driver Management',
        description:
          'Manage customer accounts, driver profiles, verification records, and access permissions.',
      },
      {
        title: 'Commission Management',
        description:
          'Configure restaurant commission rates and marketplace fee structures across partners.',
      },
      {
        title: 'Delivery Zone Configuration',
        description:
          'Define active service areas, delivery radii, and zone-based delivery fee rules.',
      },
      {
        title: 'Order and Dispute Oversight',
        description:
          'Monitor live platform orders and resolve customer or vendor disputes from one dashboard.',
      },
      {
        title: 'Payment Settlement Monitoring',
        description:
          'Track marketplace transactions, vendor payouts, and driver settlements accurately.',
      },
      {
        title: 'Platform Analytics and Reporting',
        description:
          'Review overall order volume, revenue performance, and marketplace KPIs in real time.',
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
            Our food delivery app developers build connected interfaces for customers, delivery partners, and restaurant operators. Each platform includes functionality suited to your ordering model and delivery operations.
          </p>
        </div>

        {/* Single-Line Pill Tabs */}
        <div className="flex flex-nowrap lg:flex-wrap justify-start lg:justify-center gap-3 sm:gap-4 mb-12 overflow-x-auto lg:overflow-visible no-scrollbar px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
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
