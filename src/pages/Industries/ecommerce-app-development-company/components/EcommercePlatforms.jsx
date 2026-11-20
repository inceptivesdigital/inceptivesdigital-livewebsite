import React from 'react'

const platforms = [
  {
    name: 'Shopify',
    badgeText: 'shopify',
    badgeColor: '#95BF47',
    description:
      'Scalable, modifiable digital stores with user-centric interfaces and a flexible theme system. Seamless integrations and secure payment options built for businesses that need rapid, reliable ecommerce deployment without sacrificing customisation.',
  },
  {
    name: 'WooCommerce',
    badgeText: 'WooCommerce',
    badgeColor: '#96588A',
    description:
      'WordPress-based ecommerce stores with extensive plugin ecosystems, responsive design support, and mobile app compatibility. Built for businesses that need flexible, feature-rich commerce functionality within an existing WordPress infrastructure.',
  },
  {
    name: 'Adobe Commerce (Magento)',
    badgeText: 'Adobe Commerce',
    badgeColor: '#FA0F00',
    description:
      'Enterprise-grade online stores with advanced customisation, complex product catalog management, and multi-store operations. Built for businesses with sophisticated commerce requirements that outgrow standard platform capabilities.',
  },
  {
    name: 'BigCommerce',
    badgeText: 'BIGCOMMERCE',
    badgeColor: '#121118',
    description:
      'Flexible online stores with built-in SEO optimisation, multi-channel selling, and efficient system integrations. Built for businesses expanding customer reach across multiple devices and sales channels without platform limitations.',
  },
  {
    name: 'Salesforce Commerce Cloud',
    badgeText: 'salesforce commerce cloud',
    badgeColor: '#00A1E0',
    description:
      'AI-powered personalised shopping experiences with advanced customisation and enterprise-grade scalability. Built for businesses that need intelligent commerce capabilities integrated with existing Salesforce infrastructure.',
  },
  {
    name: 'Shopware',
    badgeText: 'shopware',
    badgeColor: '#189EFF',
    description:
      'Customisable and expandable ecommerce solutions with flexible system design and sophisticated personalisation capabilities. Built for businesses that need engaging, tailored shopping experiences beyond what standard platforms offer.',
  },
]

export default function EcommercePlatforms() {
  return (
    <section className="w-full bg-[#111111] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[960px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] text-white mb-4">
            <span className="text-[#00CE44]">Popular Platforms We Use</span> in Our Ecommerce App Development Services
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Our ecommerce app development services leverage robust platforms to provide customized features that align with your business requirements and objectives.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="bg-[#1b1c21] border border-white/10 rounded-[18px] p-7 sm:p-8 flex flex-col items-start text-left transition-colors duration-200 hover:border-[#00CE44]/50"
            >
              <div className="inline-flex items-center justify-center bg-white rounded-xl px-4 py-2.5 mb-6 min-h-[48px]">
                <span
                  className="text-[17px] sm:text-[19px] font-extrabold tracking-tight"
                  style={{ color: platform.badgeColor }}
                >
                  {platform.badgeText}
                </span>
              </div>

              <h3 className="text-[#00CE44] text-[19px] sm:text-[21px] font-bold leading-snug mb-3">
                {platform.name}
              </h3>

              <p className="text-white/80 text-[14px] sm:text-[15px] leading-[1.68] font-normal">
                {platform.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
