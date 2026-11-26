import React from 'react'

const services = [
  {
    number: '01',
    title: 'Custom Real Estate Mobile App Development',
    description:
      'Our real estate mobile app development services extend property operations to iOS and Android. From brokerage-specific interfaces to tenant applications, we engineer mobile products that work with your existing business infrastructure.',
  },
  {
    number: '02',
    title: 'Property Search & Listing App Development',
    description:
      'Give property seekers a faster route from discovery to inquiry. Our listing applications combine authorized MLS/IDX data with location-aware search, keeping availability accurate as brokers update properties across connected systems.',
  },
  {
    number: '03',
    title: 'Real Estate Marketplace App Development',
    description:
      'A marketplace must support independent listing owners without losing operational control. We engineer property platforms with seller onboarding and moderated listings, while accommodating your subscription or commission-based revenue model.',
  },
  {
    number: '04',
    title: 'Property Management & Tenant App Development',
    description:
      'For property managers handling growing portfolios, scattered tenant requests create expensive administrative work. Our real estate software development services connect lease records with maintenance operations through a shared management environment.',
  },
  {
    number: '05',
    title: 'Real Estate CRM & Agent App Development',
    description:
      'Keep every property inquiry connected to the agent responsible for closing it. We build CRM-linked applications that carry lead history into viewing schedules, giving brokerage teams visibility across active sales opportunities.',
  },
  {
    number: '06',
    title: 'AI-Powered Real Estate App Development',
    description:
      'Bring intelligent property matching into products where search relevance affects user engagement. Our AI-powered real estate apps also support valuation workflows, using suitable market datasets and models evaluated against business requirements.',
  },
  {
    number: '07',
    title: 'Real Estate Investment App Development',
    description:
      'Investment platforms need to make property performance visible before an acquisition decision. We develop applications that calculate rental yields and track portfolio returns, with data integrations suited to your investment strategy.',
  },
  {
    number: '08',
    title: 'Virtual Tour & 3D Real Estate App Development',
    description:
      'Make remote property evaluation part of the actual sales journey. We integrate interactive tours into listing applications, giving buyers a closer look at layouts before committing time to an in-person viewing.',
  },
  {
    number: '09',
    title: 'Real Estate Developer & Buyer Portal Development',
    description:
      'Give property developers a single place to manage unit availability and buyer reservations. Our portals connect sales teams with current project inventory, keeping customer-facing updates aligned with actual project status.',
  },
]

export default function RealEstateServicesGrid() {
  return (
    <section className="w-full bg-[#141414] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Section Header */}
        <div className="text-center max-w-[980px] mx-auto mb-14">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-[1.18] text-white mb-4">
            Custom{' '}
            <span className="text-[#00CE44]">Real Estate App Development Services</span>{' '}
            Across the Property Lifecycle
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Inceptives Digital, operating as an experienced real estate development company, develops real estate applications for distinct property business models. Our engineering expertise covers customer-facing mobile products and operational platforms, with technical decisions shaped by your requirements.
          </p>
        </div>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch auto-rows-fr">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#222222] hover:bg-[#282828] border border-white/10 rounded-[16px] p-7 md:p-8 flex flex-col justify-start text-left transition-colors duration-200 h-full"
            >
              <div className="mb-4">
                <span
                  className="inline-block font-bold text-[42px] md:text-[48px] leading-none select-none"
                  style={{
                    WebkitTextStroke: '1.5px #00CE44',
                    color: 'transparent',
                  }}
                >
                  {service.number}
                </span>
              </div>
              <h3 className="text-[#00CE44] text-[20px] md:text-[22px] font-bold leading-snug mb-3">
                {service.title}
              </h3>
              <p className="text-white/85 text-[15px] md:text-[16px] leading-[1.65] font-normal">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
