import React, { useState } from 'react'

const tabs = [
  {
    id: 'customer',
    label: '1. Customer App Features',
    subtitle:
      'Give buyers and renters a direct way to explore listings and connect with agents through a convenient mobile experience.',
    items: [
      {
        title: 'Login and Registration',
        description:
          'Sign up securely using email, phone number, Google, or Apple ID.',
      },
      {
        title: 'User Profile Management',
        description:
          'Manage personal information, search preferences, and favorite properties.',
      },
      {
        title: 'Filter and Sort Properties',
        description:
          'Find properties by location, price range, size, or property type.',
      },
      {
        title: 'List View and Map View',
        description:
          'Browse property listings in a list or explore available locations on an interactive map.',
      },
      {
        title: 'Saved Searches and Favorites',
        description:
          'Save preferred searches and property listings for quick access later.',
      },
      {
        title: 'Property Comparison',
        description:
          'Compare selected properties based on pricing, amenities, and listing details.',
      },
      {
        title: 'Push Notifications',
        description:
          'Receive alerts for new listings, price changes, or upcoming property visits.',
      },
      {
        title: 'In-App Booking and Scheduling',
        description:
          'Schedule property viewings with agents through available appointment slots.',
      },
      {
        title: 'Agent Messaging',
        description:
          'Contact agents directly to ask questions or discuss available properties.',
      },
    ],
  },
  {
    id: 'agent',
    label: '2. Agent App Features',
    subtitle:
      'Give real estate agents direct access to their leads, property listings, and scheduled appointments.',
    items: [
      {
        title: 'Agent Dashboard',
        description:
          'View active listings, assigned leads, and upcoming appointments in one place.',
      },
      {
        title: 'Lead Management',
        description:
          'Capture property inquiries, assign follow-ups, and monitor lead status.',
      },
      {
        title: 'Property Listing Management',
        description:
          'Add or update property details, images, pricing, and availability.',
      },
      {
        title: 'Client Communication',
        description:
          'Contact prospective buyers through in-app messaging or integrated communication tools.',
      },
      {
        title: 'Task and Appointment Scheduling',
        description:
          'Manage property showings, follow-up tasks, and meeting reminders.',
      },
      {
        title: 'CRM Integration',
        description:
          'Access customer records and inquiry histories from connected CRM platforms.',
      },
      {
        title: 'Performance Analytics',
        description:
          'Track lead activity, viewing appointments, and sales pipeline performance.',
      },
    ],
  },
  {
    id: 'admin',
    label: '3. Admin Panel Features',
    subtitle:
      'Manage platform activity and maintain control over users, listings, and business operations.',
    items: [
      {
        title: 'User and Agent Management',
        description:
          'Create accounts, manage agent profiles, and assign access permissions.',
      },
      {
        title: 'Property Listing Management',
        description:
          'Review submitted listings, approve changes, and manage published property information.',
      },
      {
        title: 'Lead and Inquiry Management',
        description:
          'Monitor incoming inquiries and track lead assignments across agents.',
      },
      {
        title: 'MLS Data Synchronization',
        description:
          'Monitor authorized MLS listing updates and identify synchronization issues.',
      },
      {
        title: 'Analytics and Reporting',
        description:
          'Review platform activity, listing performance, and lead conversion reports.',
      },
      {
        title: 'Role-Based Access Control',
        description:
          'Assign permissions to administrators, brokerage managers, and other authorized staff.',
      },
      {
        title: 'Transaction Management',
        description:
          'Review transaction records and related documents where the application supports property transactions.',
      },
    ],
  },
  {
    id: 'specialized',
    label: '4. Specialized Real Estate Features',
    subtitle:
      'Add functionality for rental management, investment platforms, or property development projects based on business requirements.',
    items: [
      {
        title: 'Tenant and Lease Management',
        description:
          'Manage tenant records, lease agreements, and renewal information.',
      },
      {
        title: 'Rent Payment Management',
        description:
          'Collect rent through supported payment gateways and maintain payment histories.',
      },
      {
        title: 'Maintenance Request Tracking',
        description:
          'Allow tenants to submit maintenance requests and track their status.',
      },
      {
        title: 'Investment Portfolio Management',
        description:
          'Monitor property investments, asset values, and portfolio performance.',
      },
      {
        title: 'Property Valuation and Rental Yield',
        description:
          'Calculate estimated property values and rental returns using available financial data.',
      },
      {
        title: 'Unit Inventory Management',
        description:
          'Track available, reserved, and sold units across development projects.',
      },
      {
        title: 'Buyer Reservation Management',
        description:
          'Manage unit reservations and track buyer interest across active developments.',
      },
    ],
  },
]

export default function RealEstateKeyFeatures() {
  const [activeTab, setActiveTab] = useState('customer')
  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0]

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
        <div className="text-center max-w-[960px] mx-auto mb-10">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-[1.18] text-white mb-4">
            Real Estate App Features Across{' '}
            <span className="text-[#00CE44]">Every User Interface</span>
          </h2>
          <p className="text-white/85 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Our real estate app developers create user-specific interfaces that support property discovery and day-to-day business operations. Each application includes functionality appropriate to its users and commercial requirements.
          </p>
        </div>

        {/* Pill Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3.5 rounded-full text-[14px] md:text-[15px] font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#00CE44] text-black shadow-lg'
                    : 'bg-[#262626] text-white hover:bg-[#333333] border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Active Tab Subtitle */}
        <p className="text-center text-white/85 text-[15px] sm:text-[16px] max-w-2xl mx-auto mb-10">
          {currentTab.subtitle}
        </p>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 items-stretch auto-rows-fr">
          {currentTab.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#1b1b1b]/95 border border-white/10 rounded-[16px] p-6 md:p-7 flex flex-col justify-start text-left hover:border-[#00CE44]/50 transition-colors duration-200 h-full"
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
  )
}
