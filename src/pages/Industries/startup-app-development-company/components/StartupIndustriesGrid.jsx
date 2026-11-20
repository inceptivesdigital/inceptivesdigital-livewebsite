import React from 'react'
import { Link } from 'react-router-dom'
import { SolidIcon } from './StartupSolidIcons'

const markets = [
  { icon: 'cart', title: 'eCommerce Marketplaces', to: '/ecommerce-app-development-company' },
  { icon: 'fintech', title: 'FinTech Applications', to: '/fintech-app-development' },
  { icon: 'health', title: 'Healthcare Platforms', to: '/healthcare-app-development' },
  { icon: 'education', title: 'Education Technology', to: '/education-app-development-company' },
  { icon: 'realestate', title: 'Real Estate Platforms', to: '/real-estate-app-development-company' },
  { icon: 'logistics', title: 'Logistics Solutions', to: '#contact' },
  { icon: 'travel', title: 'Travel Experiences', to: '/travel-app-development-company' },
  { icon: 'food', title: 'Food Delivery Ecosystems', to: '/food-delivery-app-development' },
  { icon: 'users', title: 'HR Platforms', to: '#contact' },
  { icon: 'legal', title: 'Legal Technology Solutions', to: '#contact' },
]

export default function StartupIndustriesGrid() {
  return (
    <section className="w-full bg-[#111111] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="text-center max-w-[960px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] text-white mb-4">
            Startup App Development Expertise Across{' '}
            <span className="text-[#00CE44]">High-Growth Digital Markets</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Every vertical below has different regulatory requirements, user expectations, and technical complexity. We build for the specific context, not a generic startup template adapted to fit.
          </p>
        </div>

        {/* 10 Vertical Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 mb-12">
          {markets.map((m) => {
            const cardClass =
              'bg-[#1b1c21] hover:bg-[#22242a] rounded-[16px] p-6 flex flex-col items-center justify-center text-center transition-all duration-200 group'
            const inner = (
              <>
                <SolidIcon
                  name={m.icon}
                  className="w-9 h-9 text-[#00CE44] mb-4 transition-transform duration-200 group-hover:scale-110"
                />
                <span className="text-white font-semibold text-[15px] sm:text-[16px] leading-snug group-hover:text-[#00CE44] transition-colors">
                  {m.title}
                </span>
              </>
            )
            return m.to.startsWith('#') ? (
              <a key={m.title} href={m.to} className={cardClass}>
                {inner}
              </a>
            ) : (
              <Link key={m.title} to={m.to} className={cardClass}>
                {inner}
              </Link>
            )
          })}
        </div>

        {/* Bottom Inline CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-white/85 text-[16px] sm:text-[17px] leading-relaxed mb-6">
            Tell us your sector and use case. We will show you how we have solved it before.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-[15px] md:text-[16px] px-8 py-4 rounded-none transition-colors duration-200"
          >
            Find Your Industry Solution
          </a>
        </div>
      </div>
    </section>
  )
}
