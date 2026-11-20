import React, { useState } from 'react'

const tabs = [
  {
    id: 'customer',
    label: 'Customer-Focused Features',
    subtitle:
      'Helping shoppers browse, purchase, and manage orders with complete convenience.',
    image: '/assets/ecommerce/tabs/customer-tab.jpg',
    features: [
      {
        title: 'User Registration & Social Login',
        description:
          'Sign up quickly using email, phone, or popular social accounts.',
      },
      {
        title: 'Advanced Product Search',
        description:
          'Find products faster with filters, sorting, and intelligent search options.',
      },
      {
        title: 'Wishlist & Shopping Cart',
        description:
          'Save favourite products and manage purchases before checkout.',
      },
      {
        title: 'Secure Checkout',
        description:
          'Complete purchases safely through multiple trusted payment gateways.',
      },
      {
        title: 'Real-Time Order Tracking',
        description:
          'Track every order from confirmation to doorstep delivery.',
      },
      {
        title: 'Ratings & Reviews',
        description:
          'Share product feedback to help other shoppers make informed decisions.',
      },
    ],
  },
  {
    id: 'website',
    label: 'Website Features',
    subtitle:
      'Creating fast, discoverable, and conversion-focused ecommerce experiences.',
    image: '/assets/ecommerce/tabs/website-tab.jpg',
    features: [
      {
        title: 'SEO-Optimized Product Pages',
        description:
          'Improve search visibility with structured, search-friendly product listings.',
      },
      {
        title: 'Category Management',
        description:
          'Organize products through clear categories and subcategories.',
      },
      {
        title: 'Responsive User Interface',
        description:
          'Deliver a consistent shopping experience across every screen size.',
      },
      {
        title: 'Dynamic Pricing & Discounts',
        description:
          'Apply promotional offers and pricing rules automatically.',
      },
      {
        title: 'Guest Checkout',
        description:
          'Allow customers to complete purchases without creating an account.',
      },
      {
        title: 'Content Management System',
        description:
          'Manage products, pages, blogs, and promotional content with ease.',
      },
    ],
  },
  {
    id: 'admin',
    label: 'Admin-Focused Features',
    subtitle:
      'Giving administrators complete control over products, users, and business operations.',
    image: '/assets/ecommerce/tabs/admin-tab.jpg',
    features: [
      {
        title: 'Product & Catalog Management',
        description:
          'Create, organize, and update product listings from one dashboard.',
      },
      {
        title: 'Inventory Management',
        description:
          'Monitor stock levels and prevent overselling through real-time updates.',
      },
      {
        title: 'Order Management',
        description:
          'Track and manage every order throughout the fulfillment process.',
      },
      {
        title: 'User & Vendor Management',
        description:
          'Control customer, vendor, and staff accounts with ease.',
      },
      {
        title: 'Sales Analytics & Reporting',
        description:
          'Monitor revenue, customer behaviour, and overall business performance.',
      },
      {
        title: 'Role-Based Access Control',
        description:
          'Assign secure permissions for different teams and administrative roles.',
      },
    ],
  },
  {
    id: 'vendor',
    label: 'Vendor-Focused Features',
    subtitle:
      'Helping marketplace vendors manage products, sales, and business performance independently.',
    image: '/assets/ecommerce/tabs/vendor-tab.jpg',
    features: [
      {
        title: 'Vendor Onboarding & Verification',
        description:
          'Simplify registration with secure onboarding and KYC verification.',
      },
      {
        title: 'Product Listing Management',
        description:
          'Add, update, and manage products individually or in bulk.',
      },
      {
        title: 'Stock & Pricing Control',
        description:
          'Keep inventory and pricing accurate across every product.',
      },
      {
        title: 'Order Fulfillment Tracking',
        description:
          'Manage incoming orders from processing through successful delivery.',
      },
      {
        title: 'Revenue & Performance Reports',
        description:
          'Track sales, commissions, and overall store performance.',
      },
      {
        title: 'Payout & Settlement Management',
        description:
          'Review payout history and monitor payment settlements transparently.',
      },
    ],
  },
]

export default function EcommerceKeyFeatures() {
  const [activeTab, setActiveTab] = useState(0)
  const current = tabs[activeTab]

  return (
    <section
      className="w-full text-white py-16 md:py-24 relative overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at center, rgba(0, 206, 68, 0.28) 0%, #050a06 58%, #000000 100%)',
      }}
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[980px] mx-auto mb-10">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] text-white mb-4">
            Key Features of Our{' '}
            <span className="text-[#00CE44]">Custom Ecommerce App Development Services</span>
          </h2>
          <p className="text-white/85 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Our ecommerce app development services provide a suite of panels, an app, and a website with defined features to handle transactions, traffic, inventory, and marketplace workflows.
          </p>
        </div>

        {/* White Pill Tab Bar */}
        <div className="bg-white rounded-[14px] p-1.5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1.5 mb-6 max-w-[1280px] mx-auto">
          {tabs.map((tab, idx) => {
            const isActive = idx === activeTab
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-3.5 rounded-[10px] text-[14px] sm:text-[15px] font-semibold transition-all duration-200 cursor-pointer border-0 focus:outline-none ${
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

        {/* Active Tab Subtitle */}
        <p className="text-center text-white/90 text-[15px] sm:text-[16px] font-normal mb-10 max-w-2xl mx-auto">
          {current.subtitle}
        </p>

        {/* Left: All 6 Feature Cards (2-Col Grid) | Right: Dynamic Per-Tab AI Mockup Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-12">
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
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

          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
            <img
              key={current.id}
              src={current.image}
              alt={current.label}
              className="w-full max-w-[460px] xl:max-w-[520px] h-auto rounded-[22px] object-contain shadow-[0_24px_60px_rgba(0,0,0,0.65)]"
              loading="lazy"
            />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-[15px] md:text-[16px] px-8 py-4 rounded-none transition-colors duration-200"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
