import React from 'react'

function RevenueIcon({ name, className }) {
  const props = {
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    className,
    'aria-hidden': 'true',
  }

  switch (name) {
    case 'b2c':
      return (
        <svg {...props}>
          <path d="M7 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM2 3h3.2l2.2 10.4A2 2 0 0 0 9.4 15h8.4a2 2 0 0 0 1.9-1.4L22 6H6.4L5.8 3.2A1 1 0 0 0 4.8 2H2v1z" />
        </svg>
      )
    case 'b2b':
      return (
        <svg {...props}>
          <path d="M3 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5h4a2 2 0 0 1 2 2v9h-7v-4h-4v4H3zm4-14v2h2V7H7zm4 0v2h2V7h-2zm-4 4v2h2v-2H7zm4 0v2h2v-2h-2zm6 3v2h2v-2h-2zm0 3v2h2v-2h-2z" />
        </svg>
      )
    case 'd2c':
      return (
        <svg {...props}>
          <path d="M12 2L3 6.8v10.4L12 22l9-4.8V6.8L12 2zm0 2.3 6.4 3.4-2.4 1.3-6.4-3.4L12 4.3zM5 8.6l6 3.2v7.6l-6-3.2V8.6zm14 7.6-6 3.2v-7.6l6-3.2v7.6z" />
        </svg>
      )
    case 'marketplace':
      return (
        <svg {...props}>
          <path d="M4 3h16l2 6H2l2-6zm-1 8h18v10H3V11zm5 3v5h4v-5H8zm6 0v3h3v-3h-3z" />
        </svg>
      )
    case 'subscription':
      return (
        <svg {...props}>
          <path d="M12 2a10 10 0 1 0 9.5 13h-2.8a7.4 7.4 0 1 1-1.3-7.6L14 10h8V2l-2.8 2.8A9.9 9.9 0 0 0 12 2z" />
        </svg>
      )
    case 'omnichannel':
      return (
        <svg {...props}>
          <path d="M12 2L2 7l10 5 10-5-10-5zm0 12.5L4.3 10.7 2 12l10 5 10-5-2.3-1.3L12 14.5zm0 4L4.3 14.7 2 16l10 5 10-5-2.3-1.3L12 18.5z" />
        </svg>
      )
    default:
      return null
  }
}

const models = [
  {
    icon: 'b2c',
    title: 'B2C — Business to Consumer',
    description:
      'Consumer-facing applications with fast checkouts, personalised recommendations, loyalty programmes, and high-volume transaction management. Built for businesses selling directly to end consumers at scale.',
  },
  {
    icon: 'b2b',
    title: 'B2B — Business to Business',
    description:
      'Bulk ordering, contractual pricing, role-based access control, and multi-tier approval workflows. Built for wholesalers, distributors, and enterprise buyers where procurement complexity is the operational norm.',
  },
  {
    icon: 'd2c',
    title: 'D2C — Direct to Consumer',
    description:
      'Subscription models, targeted promotions, and integrated fulfilment systems built for brands selling directly to consumers without retail intermediaries. Built for businesses that want to own the customer relationship and the margin that comes with it.',
  },
  {
    icon: 'marketplace',
    title: 'Multi-Vendor Marketplace',
    description:
      'Vendor onboarding, commission engines, centralised order management, and secure payment distribution are built into a single platform. Built for businesses creating ecosystems where multiple sellers operate independently under one roof.',
  },
  {
    icon: 'subscription',
    title: 'Subscription-Based eCommerce',
    description:
      'Recurring billing, automated renewal systems, usage-based pricing, and subscription lifecycle management. Built for businesses that need predictable revenue streams and automated customer retention without manual intervention.',
  },
  {
    icon: 'omnichannel',
    title: 'Omnichannel Retail',
    description:
      'Unified inventory, pricing, and customer records are maintained across mobile applications, web platforms, and physical retail locations. Built for retailers that need consistent operations and reporting regardless of where the transaction happens.',
  },
]

export default function EcommerceRevenueModels() {
  return (
    <section className="w-full bg-[#111111] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[960px] mx-auto mb-12 md:mb-16">
          <span className="text-[#00CE44] text-xs sm:text-sm font-semibold uppercase tracking-widest block mb-3">
            Business Models
          </span>
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] text-white mb-4">
            Revenue Models Powered by Our{' '}
            <span className="text-[#00CE44]">Ecommerce App Development Company</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            The commerce model you choose determines the architecture beneath it. Every revenue structure below requires different technical decisions to be made before development begins.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model) => (
            <div
              key={model.title}
              className="group bg-[#1b1c21] hover:bg-[#00CE44] rounded-[16px] p-7 sm:p-8 flex flex-col items-start text-left transition-colors duration-200 cursor-pointer"
            >
              <RevenueIcon
                name={model.icon}
                className="w-10 h-10 text-[#00CE44] group-hover:text-black mb-5 transition-colors duration-200"
              />
              <h3 className="text-white group-hover:text-black text-[19px] sm:text-[21px] font-bold leading-snug mb-3 transition-colors duration-200">
                {model.title}
              </h3>
              <p className="text-white/80 group-hover:text-black/90 text-[14px] sm:text-[15px] leading-[1.68] font-normal transition-colors duration-200">
                {model.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
