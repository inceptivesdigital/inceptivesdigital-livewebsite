import React from 'react'

const tiers = [
  {
    name: '1. Starter Ecommerce App',
    description:
      "It's great for enterprises with Linux-based systems that want to take advantage of Magento's extensive functionality.",
    cost: '$20,000 – $60,000+',
    timeline: '6–10 weeks',
    includes: [
      'User registration and account management',
      'Product catalog with categories and filters',
      'Shopping cart and secure checkout',
      'Payment gateway integration',
      'Basic order management dashboard',
    ],
  },
  {
    name: '2. Growth Ecommerce App',
    description:
      'Created to support business growth through advanced features, automation capabilities, and performance enhancement tools',
    cost: '$60,000 – $160,000+',
    timeline: '10–16 weeks',
    includes: [
      'Basic order management dashboard',
      'Advanced search with smart filters',
      'Real-time order tracking and notifications',
      'Multi-vendor or multi-store management',
      'Promotions, discounts, and loyalty programs',
      'Analytics dashboard with sales and user insights',
    ],
  },
  {
    name: '3. Enterprise Ecommerce App',
    description:
      'Designed to serve large businesses and busy online marketplaces that require sophisticated system connections and automated processes, as well as enterprise-level system capabilities.',
    cost: '$160,000 – $350,000+',
    timeline: '16–24+ weeks',
    includes: [
      'AI-powered product recommendations',
      'ERP, CRM, and third-party API integrations',
      'Multi-role admin and vendor dashboards',
      'Advanced security and fraud detection systems',
      'Cloud-based infrastructure with high availability and disaster recovery',
    ],
  },
]

export default function EcommerceCostTiers() {
  return (
    <section
      className="w-full text-white py-16 md:py-24 relative overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at top, rgba(0, 206, 68, 0.2) 0%, #050a06 55%, #000000 100%)',
      }}
    >
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[960px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] text-white mb-4">
            <span className="text-[#00CE44]">Flexible Ecommerce Development Cost</span> for Every Business Stage
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Underscoping an ecommerce platform saves money in week one and costs twice as much in month six. These ranges exist to set accurate expectations before development begins.
          </p>
        </div>

        {/* 3 Tier Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="bg-[#1b1c21]/95 border border-[#00CE44]/35 rounded-[22px] p-7 sm:p-9 flex flex-col justify-between text-left"
            >
              <div>
                <h3 className="text-[#00CE44] text-[24px] sm:text-[26px] font-bold leading-snug mb-3 pb-4 border-b border-white/10">
                  {tier.name}
                </h3>

                <p className="text-white/85 text-[14px] sm:text-[15px] leading-[1.65] font-normal mb-6">
                  {tier.description}
                </p>

                <ul className="space-y-2.5 mb-6 text-[15px] text-white">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44] mt-2 shrink-0" />
                    <span>
                      <strong className="font-bold">Estimated Cost:</strong>{' '}
                      <span className="text-white/90">{tier.cost}</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44] mt-2 shrink-0" />
                    <span>
                      <strong className="font-bold">Timeline:</strong>{' '}
                      <span className="text-white/90">{tier.timeline}</span>
                    </span>
                  </li>
                </ul>

                <div className="pt-4 border-t border-white/10">
                  <h4 className="text-white font-bold text-[15px] mb-3">
                    Includes:
                  </h4>
                  <ul className="space-y-2.5 text-white/85 text-[14px] sm:text-[15px]">
                    {tier.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44] mt-2 shrink-0" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-[15px] px-6 py-3.5 rounded-none transition-colors duration-200"
                >
                  Request Custom Estimate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
