import React from 'react'
import {
  ShieldCheck,
  Search,
  Sparkles,
  Heart,
  Store,
  Star,
  View,
  CreditCard,
  Truck,
  MessageSquare,
  Tag,
  BarChart3,
} from 'lucide-react'

const capabilities = [
  {
    icon: ShieldCheck,
    title: 'Secure User Onboarding',
    description:
      'Email, phone, OTP, and social media authentication with token-based security. Frictionless registration that protects user data without slowing down the path to first purchase.',
  },
  {
    icon: Search,
    title: 'Advanced Product Discovery',
    description:
      'AI-powered search, smart filters, sorting, and product categorisation built for large catalogs. Users find what they are looking for before they lose patience and leave.',
  },
  {
    icon: Sparkles,
    title: 'AI-Driven Recommendations',
    description:
      'Machine learning models that analyse browsing history, cart activity, and purchase behaviour to surface personalised product suggestions. Average order value and repeat purchase frequency increase when recommendations are accurate.',
  },
  {
    icon: Heart,
    title: 'Wishlist and Save for Later',
    description:
      'Product saving and deferred purchase functionality is built for users who are not ready to buy today. Remarketing campaigns become significantly more effective when the intent signal already exists in the platform.',
  },
  {
    icon: Store,
    title: 'Multi-Vendor and Inventory Management',
    description:
      'Vendor dashboards with product listings, SKU management, stock handling, and automated commission calculations. Every vendor operates independently while the platform maintains centralised inventory visibility.',
  },
  {
    icon: Star,
    title: 'Ratings and Reviews',
    description:
      'Verified purchase review system with ratings and customer feedback. Credibility built into the product page for buyers making decisions without physical product interaction.',
  },
  {
    icon: View,
    title: 'Augmented Reality Integration',
    description:
      'Product visualisation in real environments is built for categories where seeing the product in context reduces return rates and increases purchase confidence.',
  },
  {
    icon: CreditCard,
    title: 'Multiple Payment Gateways',
    description:
      'PCI-compliant payment processing across cards, digital wallets, and alternative payment methods. Every transaction is secured without adding friction between the intent and the completed purchase.',
  },
  {
    icon: Truck,
    title: 'Real-Time Order Tracking',
    description:
      'Live order status with push notifications from placement through delivery. Customers who know where their order is contact support less and rate higher.',
  },
  {
    icon: MessageSquare,
    title: 'In-App Chat and Support',
    description:
      'Integrated chat systems and AI chatbots for immediate customer assistance during the checkout process. Support that prevents drop-off rather than resolving complaints after the fact.',
  },
  {
    icon: Tag,
    title: 'Promotions and Discount Engine',
    description:
      'Coupon codes, flash sales, bundle offers, and dynamic pricing are built for businesses driving seasonal revenue spikes and repeat purchase behaviour.',
  },
  {
    icon: BarChart3,
    title: 'Analytics and Reporting Dashboard',
    description:
      'Sales data, user behaviour, revenue patterns, and inventory turnover rates are visualised in real time. Decisions made on data rather than instinct.',
  },
]

export default function EcommerceCoreCapabilities() {
  return (
    <section className="w-full bg-[#111111] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[960px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] text-white mb-4">
            <span className="text-[#00CE44]">Core Capabilities</span> of Modern Ecommerce App Development
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            The main focus of our ecommerce app development company is to build applications that boost conversions, operational control, and long-term growth. Here are the features important for a successful ecommerce application.
          </p>
        </div>

        {/* 12 Cards in Clean 3-Column Grid (Icon Above Heading, No Image) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="group bg-[#1b1c21] hover:bg-[#00CE44] rounded-[16px] p-7 sm:p-8 flex flex-col items-start text-left transition-colors duration-200 cursor-pointer"
              >
                <Icon
                  className="w-9 h-9 text-[#00CE44] group-hover:text-black mb-5 transition-colors duration-200"
                  strokeWidth={1.8}
                />
                <h3 className="text-white group-hover:text-black text-[19px] sm:text-[21px] font-bold leading-snug mb-3 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-white/80 group-hover:text-black/90 text-[14px] sm:text-[15px] leading-[1.68] font-normal transition-colors duration-200">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
