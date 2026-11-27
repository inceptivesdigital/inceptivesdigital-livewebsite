import React, { useState } from 'react'

const tabs = [
  {
    id: 'customer',
    label: '1. Customer App Features',
    subtitle:
      'Give shoppers a convenient way to discover products, complete purchases, and manage orders directly from their mobile devices.',
    image: '/assets/ecommerce/tabs/customer-tab.jpg',
    features: [
      {
        title: 'User Registration & Social Login',
        description:
          'Enable account creation through email, phone, or supported social authentication providers.',
      },
      {
        title: 'Advanced Product Search',
        description:
          'Help customers find relevant products with category filters, sorting options, and intelligent search functionality.',
      },
      {
        title: 'Wishlist & Shopping Cart',
        description:
          'Allow shoppers to save products, review cart contents, and continue purchases across sessions.',
      },
      {
        title: 'Secure Checkout & Payments',
        description:
          'Support card payments, digital wallets, and checkout workflows through integrated payment providers.',
      },
      {
        title: 'Real-Time Order Tracking',
        description:
          'Keep customers informed with order status updates and push notifications throughout fulfillment.',
      },
      {
        title: 'Ratings & Reviews',
        description:
          'Collect verified purchase feedback to support product evaluation and customer confidence.',
      },
    ],
  },
  {
    id: 'website',
    label: '2. eCommerce Website Features',
    subtitle:
      'Extend product discovery and purchasing to a web storefront connected with your mobile commerce infrastructure.',
    image: '/assets/ecommerce/tabs/website-tab.jpg',
    features: [
      {
        title: 'SEO-Friendly Product Pages',
        description:
          'Structure product information and metadata to support search visibility and product indexing.',
      },
      {
        title: 'Product Category Management',
        description:
          'Organize large catalogs through category hierarchies and configurable navigation.',
      },
      {
        title: 'Responsive Storefront Design',
        description:
          'Adapt browsing and checkout interfaces to desktop, tablet, and mobile screen sizes.',
      },
      {
        title: 'Dynamic Pricing & Promotions',
        description:
          'Configure product discounts, promotional campaigns, and pricing rules through centralized controls.',
      },
      {
        title: 'Guest Checkout',
        description:
          'Allow customers to complete eligible purchases without mandatory account registration.',
      },
      {
        title: 'Content Management',
        description:
          'Update storefront content, landing pages, and promotional material without routine developer intervention.',
      },
    ],
  },
  {
    id: 'admin',
    label: '3. Admin Dashboard Features',
    subtitle:
      'Give commerce operators centralized oversight of products, transactions, customer accounts, and business performance.',
    image: '/assets/ecommerce/tabs/admin-tab.jpg',
    features: [
      {
        title: 'Product & Catalog Management',
        description:
          'Create product listings, manage variants, and coordinate catalog changes across connected channels.',
      },
      {
        title: 'Inventory Management',
        description:
          'Monitor stock availability and synchronize inventory updates to reduce overselling.',
      },
      {
        title: 'Order & Fulfillment Management',
        description:
          'Manage transaction statuses, returns, refunds, and fulfillment activity through defined workflows.',
      },
      {
        title: 'Customer & Staff Management',
        description:
          'Control user accounts and configure administrative permissions according to operational responsibilities.',
      },
      {
        title: 'Sales Analytics & Reporting',
        description:
          'Track sales performance, order trends, and product-level revenue through reporting dashboards.',
      },
      {
        title: 'Role-Based Access Control',
        description:
          'Restrict sensitive operational functions according to staff roles and assigned permissions.',
      },
    ],
  },
  {
    id: 'vendor',
    label: '4. Vendor Dashboard Features',
    subtitle:
      'Support independent marketplace sellers with dedicated tools for managing listings, orders, and commercial activity.',
    image: '/assets/ecommerce/tabs/vendor-tab.jpg',
    features: [
      {
        title: 'Vendor Onboarding & Verification',
        description:
          'Manage seller registration and verification requirements before enabling marketplace access.',
      },
      {
        title: 'Product Listing Management',
        description:
          'Give vendors control over product submissions, descriptions, and catalog updates.',
      },
      {
        title: 'Stock & Pricing Control',
        description:
          'Allow sellers to maintain inventory availability and update prices within marketplace rules.',
      },
      {
        title: 'Order Fulfillment Tracking',
        description:
          'Help vendors process incoming orders and manage their fulfillment responsibilities.',
      },
      {
        title: 'Vendor Performance Reports',
        description:
          'Display sales activity, commission deductions, and seller-level performance information.',
      },
      {
        title: 'Payout & Settlement Management',
        description:
          'Provide transaction records and payout visibility through integrated marketplace payment services.',
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
            <span className="text-[#00CE44]">Custom eCommerce App Development Services</span>
          </h2>
          <p className="text-white/85 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Every commerce application needs features that match its users and operating model. Our eCommerce developers build connected customer, storefront, administrative, and vendor interfaces to support purchasing and day-to-day commerce operations.
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
                className={`shrink-0 lg:shrink whitespace-nowrap px-4 py-3.5 rounded-[10px] text-[14px] sm:text-[15px] font-semibold transition-all duration-200 cursor-pointer border-0 focus:outline-none ${
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

        {/* Left: All 6 Feature Cards (2-Col Grid) | Right: Dynamic Per-Tab Mockup Image */}
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
      </div>
    </section>
  )
}
