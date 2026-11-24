import React from 'react'
import { Database, Webhook, Users, MapPin, Building2, FileSignature } from 'lucide-react'

const integrations = [
  {
    icon: Database,
    num: '01',
    title: 'MLS and IDX Listing Feeds',
    description:
      "Our developers integrate authorized MLS/IDX feeds and configure listing synchronization according to the provider's access permissions and data refresh requirements.",
  },
  {
    icon: Webhook,
    num: '02',
    title: 'RESO Web API Integration',
    description:
      "We implement compatible RESO Web API connections with property field mapping that accommodates the participating MLS's data structure.",
  },
  {
    icon: Users,
    num: '03',
    title: 'Real Estate CRM Connectivity',
    description:
      'Connect compatible platforms such as Salesforce or Follow Up Boss to synchronize customer records and route new inquiries into existing brokerage pipelines.',
  },
  {
    icon: MapPin,
    num: '04',
    title: 'Maps and Location Services',
    description:
      'Google Maps and Mapbox integrations support geographically relevant property discovery through interactive mapping and location-aware queries.',
  },
  {
    icon: Building2,
    num: '05',
    title: 'Property Management Integrations',
    description:
      'Extend existing property management systems into mobile applications through supported APIs, maintaining access to relevant leasing records and operational updates.',
  },
  {
    icon: FileSignature,
    num: '06',
    title: 'Digital Documents and E-Signatures',
    description:
      'Our developers integrate compatible e-signature platforms to support agreement reviews and authorized signing workflows within real estate applications.',
  },
]

export default function RealEstateMlsIntegrations() {
  return (
    <section className="w-full bg-[#0b0c0f] text-white py-16 md:py-24 border-y border-white/10">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Sticky Column (Stays pinned while right cards scroll) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 text-left">
            <span className="text-[#00CE44] text-xs sm:text-sm font-semibold uppercase tracking-widest block mb-3">
              System Integrations
            </span>
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.16] text-white mb-5">
              We Connect Your Real Estate App With{' '}
              <span className="text-[#00CE44]">MLS, IDX and Existing Systems</span>
            </h2>
            <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.68] font-normal max-w-xl">
              Our real estate app developers handle integration requirements across authorized listing networks and established business platforms. We account for existing data structures before connecting your application to external systems.
            </p>
          </div>

          {/* Right Sticky Stacking Vertical Scroll Cards Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 pb-10">
            {integrations.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="sticky bg-[#1b1c21] border border-white/[0.08] hover:border-[#00CE44]/50 rounded-[18px] p-7 sm:p-8 transition-colors duration-200 shadow-[0_-12px_32px_rgba(0,0,0,0.65)] flex flex-col sm:flex-row items-start gap-5 text-left"
                  style={{
                    top: `${108 + idx * 24}px`,
                    zIndex: idx + 1,
                  }}
                >
                  <div className="w-12 h-12 p-0 bg-transparent border-0 flex items-center justify-start shrink-0">
                    <Icon className="w-full h-full text-[#00CE44]" strokeWidth={1.75} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <h3 className="text-[20px] sm:text-[22px] font-bold text-[#00CE44] leading-snug">
                        {item.title}
                      </h3>
                      <span className="text-[#00CE44]/60 font-bold text-sm tracking-wider">
                        {item.num}
                      </span>
                    </div>
                    <p className="text-white/85 text-[15px] leading-[1.68] font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
