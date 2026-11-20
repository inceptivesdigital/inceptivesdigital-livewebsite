import React from 'react'
import {
  Globe,
  Store,
  Briefcase,
  ShoppingBag,
  Smartphone,
  Users,
  Sparkles,
  Code2,
  Wrench,
} from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'eCommerce Website Development',
    description:
      'Responsive, high-performance web stores with PCI-compliant payment gateways, organised product catalogs, and optimised checkout flows. Built for businesses that need a secure, scalable storefront that performs under high-volume traffic.',
  },
  {
    icon: Store,
    title: 'eCommerce Marketplace Development',
    description:
      'Multi-vendor marketplace platforms with live inventory management, vendor dashboards, and advanced order tracking. Built for businesses connecting buyers and sellers across multiple product categories at scale.',
  },
  {
    icon: Briefcase,
    title: 'B2B eCommerce Development',
    description:
      'Custom B2B platforms with role-based access control, tiered pricing engines, and bulk order processing. Built for wholesalers, distributors, and enterprise buyers who need complex procurement workflows without manual coordination.',
  },
  {
    icon: ShoppingBag,
    title: 'Retail eCommerce Development',
    description:
      'High-volume retail applications with live inventory management, dynamic pricing, personalised promotions, and omnichannel integrations. Built for retail businesses managing large product catalogs and high transaction volumes simultaneously.',
  },
  {
    icon: Smartphone,
    title: 'Cross-Platform eCommerce App Development',
    description:
      'Single-codebase ecommerce applications that deliver native-quality performance across iOS and Android. API-driven integrations and consistent user experience across devices without two separate development budgets.',
  },
  {
    icon: Users,
    title: 'Multi-Vendor eCommerce App Development',
    description:
      'Marketplace applications with unique vendor dashboards, centralised order processing, commission calculation, and live inventory synchronisation. Built for platforms where multiple vendors operate independently within a single commerce ecosystem.',
  },
  {
    icon: Sparkles,
    title: 'eCommerce Fashion App Development',
    description:
      'Fashion retail applications with multimedia product catalogs, sophisticated search, recommendation engines, size and variant management, and AR-based virtual try-on. Built for fashion businesses where product discovery and visual experience drive purchase decisions.',
  },
  {
    icon: Code2,
    title: 'Custom eCommerce App Development',
    description:
      'Modular ecommerce architecture with secure checkout workflows, real-time inventory synchronisation, payment gateway integrations, CRM connectivity, and analytics tools. Built around your specific business model, not a generic commerce template.',
  },
  {
    icon: Wrench,
    title: 'eCommerce App Maintenance and Support',
    description:
      'Ongoing version updates, security improvements, performance monitoring, and bug resolution. Built for ecommerce businesses that need their platform to remain reliable, secure, and competitive after launch.',
  },
]

export default function EcommerceServicesGrid() {
  return (
    <section className="w-full bg-[#000000] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[960px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] text-white mb-4">
            Reliable Ecommerce Development Services for{' '}
            <span className="text-[#00CE44]">High-Performing Online Stores</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Custom ecommerce applications designed for retail businesses, marketplaces, and enterprise commerce operations across every platform and business model.
          </p>
        </div>

        {/* 3x3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group bg-[#1b1c21] hover:bg-[#00CE44] rounded-[16px] p-7 sm:p-8 flex flex-col items-start text-left transition-colors duration-200 cursor-pointer"
              >
                <Icon
                  className="w-9 h-9 text-[#00CE44] group-hover:text-black mb-5 transition-colors duration-200"
                  strokeWidth={1.8}
                />
                <h3 className="text-[#00CE44] group-hover:text-black text-[19px] sm:text-[21px] font-bold leading-snug mb-3 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-white/80 group-hover:text-black/90 text-[14px] sm:text-[15px] leading-[1.68] font-normal transition-colors duration-200">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
