import React from 'react'
import { Link } from 'react-router-dom'
import { Smartphone, MonitorSmartphone, ArrowRight, CheckCircle2 } from 'lucide-react'

const options = [
  {
    icon: Smartphone,
    title: 'Mobile-Only eCommerce Application',
    description:
      'Reach customers on iOS and Android with mobile shopping apps built around your operations.',
    bullets: [
      <>
        <Link
          to="/blog/native-vs-hybrid-vs-cross-platform-app-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          Native or cross-platform
        </Link>{' '}
        mobile apps
      </>,
      'Mobile-first shopping experience',
      'Secure checkout and payment gateways',
      'Push notifications and order tracking',
      'Inventory and commerce API integrations',
      'App Store and Google Play deployment',
    ],
    cta: 'Build Your Mobile App',
  },
  {
    icon: MonitorSmartphone,
    title: 'Mobile + Web eCommerce Development',
    description:
      'Connect your mobile app and web storefront through shared commerce infrastructure.',
    bullets: [
      <>
        iOS, Android, and{' '}
        <Link
          to="/web-app-development-company"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          web applications
        </Link>
      </>,
      'Unified product catalogs and pricing',
      'Consistent cross-platform UI/UX',
      'Centralized inventory management',
      'Backend and payment integrations',
      <>
        <Link
          to="/web-app-development-company"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          Web app
        </Link>{' '}
        deployment and app publishing
      </>,
      'Ongoing platform maintenance',
    ],
    cta: 'Build a Connected eCommerce Platform',
  },
]

export default function EcommerceSetupOptions() {
  return (
    <section className="w-full bg-[#111111] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[960px] mx-auto mb-12 md:mb-16">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.18] text-white mb-4">
            Choose the Right{' '}
            <span className="text-[#00CE44]">eCommerce Application</span>{' '}
            for Your Business
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Whether you&apos;re launching a mobile shopping app or connecting it with an existing storefront, the architecture should match how your customers buy and the business operates.
          </p>
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
                  <h3 className="text-[22px] sm:text-[26px] font-bold text-white leading-snug mb-3">
                    {opt.title}
                  </h3>
                  <p className="text-white/80 text-[15px] sm:text-[16px] leading-[1.7] font-normal mb-6">
                    {opt.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {opt.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/85 text-[14.5px] sm:text-[15.5px] leading-snug">
                        <CheckCircle2 className="w-5 h-5 text-[#00CE44] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
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
