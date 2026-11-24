import React from 'react'
import { Link } from 'react-router-dom'

const platforms = [
  {
    name: 'Shopify',
    logo: '/assets/ecommerce/platforms/shopify.svg',
    description:
      'Extend Shopify storefronts into mobile shopping apps through supported commerce APIs, preserving product data and existing order operations.',
  },
  {
    name: 'WooCommerce',
    logo: '/assets/ecommerce/platforms/woocommerce.svg',
    description:
      'Connect WordPress-based stores with custom mobile interfaces while maintaining catalog synchronization and compatible checkout workflows.',
  },
  {
    name: 'Adobe Commerce (Magento)',
    logo: '/assets/ecommerce/platforms/magento.svg',
    description:
      'Support complex product catalogs, customer-specific pricing, and multi-store operations through enterprise commerce integrations.',
  },
  {
    name: 'BigCommerce',
    logo: '/assets/ecommerce/platforms/bigcommerce.svg',
    description:
      'Build mobile storefronts connected to BigCommerce product catalogs and commerce services through available platform APIs.',
  },
  {
    name: 'Salesforce Commerce Cloud',
    logo: '/assets/ecommerce/platforms/salesforce.svg',
    description:
      'Integrate custom commerce experiences with existing Salesforce commerce infrastructure and enterprise customer workflows.',
  },
  {
    name: 'Shopware',
    logo: '/assets/ecommerce/platforms/shopware.svg',
    description:
      "Develop connected shopping applications around Shopware's API-driven commerce capabilities and customizable product management systems.",
  },
]

export default function EcommercePlatforms() {
  return (
    <section className="w-full bg-[#000000] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[960px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] text-white mb-4">
            <span className="text-[#00CE44]">Popular eCommerce Platforms</span> We Integrate With Mobile Applications
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            We integrate custom eCommerce mobile applications with established commerce platforms, extending your existing storefront capabilities to iOS and Android. Our developers handle{' '}
            <Link
              to="/backend-api-development"
              className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
            >
              backend API
            </Link>{' '}
            connectivity and data synchronization around your current business infrastructure.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="bg-[#1b1c21] border border-white/10 rounded-[18px] p-7 sm:p-8 flex flex-col items-start text-left transition-colors duration-200 hover:border-[#00CE44]/50"
            >
              <div className="h-12 w-full max-w-[200px] p-0 bg-transparent border-0 mb-5 flex items-center justify-start shrink-0">
                <img
                  src={platform.logo}
                  alt={`${platform.name} Logo`}
                  className="h-11 w-auto max-w-full object-contain object-left select-none p-0 border-0 bg-transparent"
                  loading="lazy"
                />
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
