import React from 'react'
import { Smartphone, MonitorSmartphone, ArrowRight } from 'lucide-react'

const options = [
  {
    icon: Smartphone,
    title: 'Mobile Commerce Application',
    description:
      'A dedicated mobile ecommerce application for businesses targeting the growing base of mobile-first shoppers. Robust backend architecture, secure payment processing, and CRM integrations built for efficient performance under peak traffic. Built for businesses that need real operational capability, not just a product display.',
    cta: 'Start Your Mobile App',
  },
  {
    icon: MonitorSmartphone,
    title: 'Mobile and Web Commerce Infrastructure',
    description:
      'A centrally connected commerce ecosystem for businesses that need both an installable mobile application and a browser-based storefront. Shared inventory, unified pricing, and centralised order management across both platforms. Mobile retains customers. Web expands its reach through search visibility.',
    cta: 'Build a Connected Commerce Platform',
  },
]

export default function EcommerceSetupOptions() {
  return (
    <section className="w-full bg-[#111111] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[960px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] text-white">
            Pick the eCommerce App Development Setup{' '}
            <span className="text-[#00CE44]">That Matches Your Growth Plan</span>
          </h2>
        </div>

        {/* 2-Column Setup Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {options.map((opt) => {
            const Icon = opt.icon
            return (
              <div
                key={opt.title}
                className="bg-[#1b1c21] border-t-4 border-t-[#00CE44] border-x border-b border-white/10 rounded-[18px] p-8 sm:p-10 lg:p-12 flex flex-col justify-between text-left transition-colors duration-200 hover:border-white/20"
              >
                <div>
                  <Icon
                    className="w-12 h-12 text-[#00CE44] mb-6"
                    strokeWidth={1.7}
                  />
                  <h3 className="text-[22px] sm:text-[26px] font-bold text-white leading-snug mb-4">
                    {opt.title}
                  </h3>
                  <p className="text-white/80 text-[15px] sm:text-[16px] leading-[1.7] font-normal mb-8">
                    {opt.description}
                  </p>
                </div>

                <div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2.5 bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-[15px] px-7 py-3.5 rounded-none transition-colors duration-200"
                  >
                    <span>{opt.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
