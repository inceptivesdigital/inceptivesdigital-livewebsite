import React from 'react'
import { Link } from 'react-router-dom'
import { Building2, Rocket, Store, KeyRound, HardHat, TrendingUp, CheckCircle2 } from 'lucide-react'

const segments = [
  {
    icon: Building2,
    title: '1. Real Estate Agencies and Brokerages',
    bullets: [
      'Property listing apps',
      'Real estate CRM apps',
      'Agent scheduling apps',
      'Lead management systems',
      'Client communication apps',
    ],
  },
  {
    icon: Rocket,
    title: '2. PropTech Startups',
    bullets: [
      <>
        Custom real estate{' '}
        <Link
          to="/mvp-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          MVP apps
        </Link>
      </>,
      'AI-powered real estate apps',
      'Property search apps',
      'Subscription-based apps',
    ],
  },
  {
    icon: Store,
    title: '3. Property Marketplace Operators',
    bullets: [
      'Multi-vendor marketplace apps',
      'MLS-connected listing apps',
      'Seller onboarding portals',
      'Commission management systems',
    ],
  },
  {
    icon: KeyRound,
    title: '4. Rental and Property Management Companies',
    bullets: [
      'Tenant management apps',
      'Lease management apps',
      'Rent payment apps',
      'Maintenance tracking apps',
      'Property portfolio dashboards',
    ],
  },
  {
    icon: HardHat,
    title: '5. Real Estate Developers',
    bullets: [
      'Unit inventory apps',
      'Buyer reservation apps',
      'Construction progress apps',
      'Payment tracking apps',
      'Property handover apps',
    ],
  },
  {
    icon: TrendingUp,
    title: '6. Real Estate Investors',
    bullets: [
      'Real estate investment apps',
      'Portfolio tracking apps',
      'Property valuation apps',
      'Rental yield calculators',
    ],
  },
]

export default function RealEstateSegments() {
  return (
    <section className="w-full bg-[#000000] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[980px] mx-auto mb-14">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-[1.18] text-white mb-4">
            Real Estate Businesses{' '}
            <span className="text-[#00CE44]">We Develop Applications For</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Every real estate business operates differently. Whether you&apos;re a brokerage, PropTech startup, or established real estate operator in the US, Inceptives Digital brings the expertise of a real estate mobile app development company to your specific business requirements.
          </p>
        </div>

        {/* 6 Business Segment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch auto-rows-fr">
          {segments.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="bg-[#1b1c21] hover:border-[#00CE44]/60 border border-white/10 rounded-[18px] p-7 sm:p-8 flex flex-col justify-start text-left transition-colors duration-200 h-full"
              >
                <div className="w-11 h-11 p-0 bg-transparent border-0 mb-5 flex items-center justify-start shrink-0">
                  <Icon className="w-full h-full text-[#00CE44]" strokeWidth={1.75} />
                </div>
                <h3 className="text-[19px] sm:text-[21px] font-bold text-[#00CE44] leading-snug mb-4">
                  {item.title}
                </h3>
                <ul className="space-y-2.5 text-white/85 text-[14.5px] sm:text-[15.5px]">
                  {item.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#00CE44] shrink-0 mt-1" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
