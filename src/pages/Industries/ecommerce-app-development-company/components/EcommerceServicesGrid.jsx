import React from 'react'
import { Link } from 'react-router-dom'
import {
  Code2,
  Smartphone,
  TabletSmartphone,
  Layers,
  Store,
  Briefcase,
  ShoppingCart,
  ShoppingBag,
  Wrench,
} from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Custom eCommerce App Development',
    description:
      'Build custom shopping applications around your catalog structure, checkout rules, and customer journeys. Our custom eCommerce app developers engineer scalable backend services, secure payment integrations, and smooth inventory workflows that accommodate your business operations.',
  },
  {
    icon: Smartphone,
    title: 'iOS eCommerce App Development',
    description: (
      <>
        For brands targeting Apple customers, our native{' '}
        <Link
          to="/ios-app-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          iOS app development
        </Link>{' '}
        expertise supports polished shopping journeys and deep platform integration. Swift and SwiftUI power responsive storefronts with Apple Pay, secure authentication, and personalized discovery.
      </>
    ),
  },
  {
    icon: TabletSmartphone,
    title: 'Android eCommerce App Development',
    description: (
      <>
        Android shoppers expect reliable experiences across phones, tablets, and varied screen sizes. Using Kotlin and Jetpack Compose, our{' '}
        <Link
          to="/android-app-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          Android app development
        </Link>{' '}
        engineers build commerce apps with Google Pay, optimized browsing, and real-time order notifications.
      </>
    ),
  },
  {
    icon: Layers,
    title: 'Cross-Platform eCommerce App Development',
    description: (
      <>
        Our eCommerce expertise in{' '}
        <Link
          to="/cross-platform-app-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          cross-platform app development
        </Link>{' '}
        helps businesses launch on iOS and Android with shared Flutter or React Native codebases. We engineer responsive shopping interfaces, secure checkout integrations, and consistent app performance.
      </>
    ),
  },
  {
    icon: Store,
    title: 'eCommerce Marketplace App Development',
    description:
      'Managing multiple sellers requires reliable transaction controls and independent vendor operations. We engineer multi-vendor marketplace applications with seller onboarding, commission management, automated payout workflows, and centralized order administration.',
  },
  {
    icon: Briefcase,
    title: 'B2B eCommerce Application Development',
    description: (
      <>
        Supporting wholesalers and distributors with B2B eCommerce applications featuring contract pricing, bulk ordering, account permissions, and approval workflows. ERP{' '}
        <Link
          to="/system-integration-api-automation"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          system integration
        </Link>{' '}
        helps purchasing teams manage procurement without duplicating inventory or customer records.
      </>
    ),
  },
  {
    icon: ShoppingCart,
    title: 'Shopify and Headless Commerce App Development',
    description:
      'Protect your existing commerce investment while extending it to mobile. We connect custom storefronts to Shopify and compatible headless platforms through APIs that synchronize products, customer accounts, checkout sessions, and orders.',
  },
  {
    icon: ShoppingBag,
    title: 'Retail eCommerce App Development',
    description:
      'Retailers managing digital and physical sales need accurate information across channels. Our retail app developers integrate POS systems, inventory availability, loyalty programs, promotions, and fulfillment workflows to support connected shopping experiences.',
  },
  {
    icon: Wrench,
    title: 'eCommerce App Maintenance and Modernization',
    description: (
      <>
        Keep existing shopping applications compatible with platform updates and changing commerce requirements. Our{' '}
        <Link
          to="/blog/mobile-app-maintenance-cost"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          mobile app maintenance
        </Link>{' '}
        team handles performance improvements, dependency upgrades, security fixes, and feature enhancements to maintain application reliability.
      </>
    ),
  },
]

export default function EcommerceServicesGrid() {
  return (
    <section className="w-full bg-[#000000] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[960px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] text-white mb-4">
            All-Inclusive Custom{' '}
            <span className="text-[#00CE44]">eCommerce App Development Services</span>{' '}
            We Offer
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Inceptives Digital provides eCommerce app development services for businesses with distinct sales models and operational requirements. Whether you need a standalone shopping app or a mobile storefront connected to an existing commerce platform, our engineering teams design the application architecture around your catalog complexity, transaction volumes, and integration needs.
          </p>
        </div>

        {/* 3x3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group bg-[#1b1c21] hover:bg-[#00CE44] rounded-[16px] p-7 sm:p-8 flex flex-col items-start text-left transition-colors duration-200"
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
