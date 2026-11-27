import React, { useState } from 'react'

const tabs = [
  {
    id: 'user',
    label: 'User-Focused Features',
    subtitle:
      'Helping users discover, engage with, and return to your application effortlessly.',
    features: [
      {
        title: 'Secure User Onboarding',
        description:
          'Sign up quickly through email, phone, or social login with simple profile management.',
      },
      {
        title: 'Push Notifications & Alerts',
        description:
          'Receive personalised updates, reminders, and activity notifications that encourage engagement.',
      },
      {
        title: 'Real-Time Messaging',
        description:
          'Connect with other users instantly through secure in-app messaging.',
      },
      {
        title: 'Advanced Search & Filtering',
        description:
          'Find relevant content quickly using intelligent search and dynamic filters.',
      },
      {
        title: 'Ratings & Reviews',
        description:
          'Share authentic feedback to build trust and improve user confidence.',
      },
      {
        title: 'Social Login Integration',
        description:
          'Sign in seamlessly with Google, Apple, and Facebook accounts.',
      },
    ],
  },
  {
    id: 'founder',
    label: 'Founder-Focused Features',
    subtitle:
      'Giving startup founders complete visibility into product performance and business growth.',
    features: [
      {
        title: 'Business Analytics Dashboard',
        description:
          'Monitor users, revenue, retention, and conversion metrics from one place.',
      },
      {
        title: 'User Management',
        description:
          'Organise users, provide support, and manage engagement through a centralized dashboard.',
      },
      {
        title: 'Content Management System',
        description:
          'Update application content without requiring development resources.',
      },
      {
        title: 'Revenue & Payment Tracking',
        description:
          'Track subscriptions, purchases, refunds, and payouts in real time.',
      },
      {
        title: 'Customer Support Management',
        description:
          'Manage support requests through a structured ticketing system.',
      },
      {
        title: 'Campaign Management',
        description:
          'Launch discounts, referral programmes, and promotional campaigns with ease.',
      },
    ],
  },
  {
    id: 'admin',
    label: 'Admin-Focused Features',
    subtitle:
      'Providing complete operational control, platform security, and system oversight.',
    features: [
      {
        title: 'Role-Based Access Control',
        description:
          'Assign secure permissions across teams with granular access management.',
      },
      {
        title: 'System Health Monitoring',
        description:
          'Track server uptime, API performance, and application health continuously.',
      },
      {
        title: 'Audit Logs',
        description:
          'Maintain detailed activity records for security monitoring and compliance.',
      },
      {
        title: 'Automated Backup & Recovery',
        description:
          'Protect critical business data with scheduled encrypted backups.',
      },
      {
        title: 'Multi-Tenant Management',
        description:
          'Manage multiple organisations or clients from a single administration panel.',
      },
      {
        title: 'API Performance Analytics',
        description:
          'Monitor API usage, response times, and system performance metrics.',
      },
    ],
  },
  {
    id: 'advanced',
    label: 'Advanced Features',
    subtitle:
      'Powering intelligent applications that adapt, automate, and scale as your startup grows.',
    features: [
      {
        title: 'AI-Powered Recommendations',
        description:
          'Deliver personalised content, product, and connection recommendations.',
      },
      {
        title: 'Real-Time Geolocation',
        description:
          'Track users, deliveries, or field teams with live location services.',
      },
      {
        title: 'Video Calling & Streaming',
        description:
          'Support virtual consultations, meetings, coaching sessions, and live interactions.',
      },
      {
        title: 'Offline Synchronisation',
        description:
          'Allow users to continue working offline with automatic syncing once connected.',
      },
      {
        title: 'Voice Search & Commands',
        description:
          'Enable hands-free navigation and faster user interactions.',
      },
      {
        title: 'Predictive Analytics',
        description:
          'Forecast customer churn, user lifetime value, and future demand using AI.',
      },
    ],
  },
]

export default function StartupKeyFeatures() {
  const [activeTab, setActiveTab] = useState(0)
  const current = tabs[activeTab]
  const leftFeatures = current.features.slice(0, 3)
  const rightFeatures = current.features.slice(3, 6)

  return (
    <section
      className="w-full text-white py-16 md:py-24 relative overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at center, rgba(0, 206, 68, 0.28) 0%, #050a06 58%, #000000 100%)',
      }}
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="text-center max-w-[980px] mx-auto mb-10">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] text-white mb-4">
            Core Modules Built for{' '}
            <span className="text-[#00CE44]">Fast-Growing Startup Applications</span>
          </h2>
          <p className="text-white/85 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Features built for users, founders, administrators, and fast-growing startups. Every module is designed around real product growth and operational scalability, not generic application templates.
          </p>
        </div>

        {/* White Pill Tab Bar */}
        <div className="bg-white rounded-[14px] p-1.5 flex flex-nowrap lg:grid lg:grid-cols-4 gap-1.5 mb-6 max-w-[1280px] mx-auto overflow-x-auto lg:overflow-visible no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {tabs.map((tab, idx) => {
            const isActive = idx === activeTab
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`shrink-0 lg:shrink whitespace-nowrap px-4 py-3.5 rounded-[10px] text-[14px] sm:text-[15px] font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#00CE44] text-white shadow-sm'
                    : 'bg-transparent text-black hover:bg-black/5'
                }`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        <p className="text-center text-white/90 text-[15px] sm:text-[16px] font-normal mb-10 max-w-2xl mx-auto">
          {current.subtitle}
        </p>

        {/* Mobile & Tablet (< lg): Clean 2-Column Aligned Card Grid (No Image) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:hidden mb-12">
          {current.features.map((feat) => (
            <div
              key={feat.title}
              className="bg-white text-black rounded-[18px] p-6 text-left shadow-lg flex flex-col justify-start h-full"
            >
              <h3 className="text-[18px] sm:text-[19px] font-bold text-black mb-2">
                {feat.title}
              </h3>
              <p className="text-black/75 text-[14px] sm:text-[15px] leading-[1.6] font-normal">
                {feat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop (lg+): 3 Left — Center Mockup — 3 Right */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-4 space-y-5">
            {leftFeatures.map((feat) => (
              <div
                key={feat.title}
                className="bg-white text-black rounded-[18px] p-6 text-left shadow-lg"
              >
                <h3 className="text-[18px] sm:text-[19px] font-bold text-black mb-2">
                  {feat.title}
                </h3>
                <p className="text-black/75 text-[14px] sm:text-[15px] leading-[1.6] font-normal">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-4 flex justify-center items-center">
            <img
              src="/assets/case-studies/stakbread-mockup.png"
              alt={current.label}
              className="w-full max-w-[380px] h-auto object-contain drop-shadow-[0_24px_50px_rgba(0,0,0,0.65)]"
              loading="lazy"
            />
          </div>

          <div className="lg:col-span-4 space-y-5">
            {rightFeatures.map((feat) => (
              <div
                key={feat.title}
                className="bg-white text-black rounded-[18px] p-6 text-left shadow-lg"
              >
                <h3 className="text-[18px] sm:text-[19px] font-bold text-black mb-2">
                  {feat.title}
                </h3>
                <p className="text-black/75 text-[14px] sm:text-[15px] leading-[1.6] font-normal">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-[15px] md:text-[16px] px-8 py-4 rounded-none transition-colors duration-200"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
