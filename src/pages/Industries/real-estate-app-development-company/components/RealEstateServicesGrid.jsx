import React from 'react';

const services = [
  {
    number: '01',
    title: 'Property Management Software Development',
    description:
      'Cloud-based property management platforms that automate leasing, rent collection, maintenance requests, tenant communication, reporting, and compliance. Every workflow is managed through a single dashboard without manual back-and-forth between systems.',
  },
  {
    number: '02',
    title: 'Real Estate CRM and Sales Automation',
    description:
      'CRM platforms that capture leads, automate follow-up communication, manage sales pipelines, and track transactions in real time. Built for sales teams that need a single operational view of every deal in progress.',
  },
  {
    number: '03',
    title: 'Listing Platforms and Real Estate Marketplace Development',
    description:
      'Comprehensive listing platforms and digital marketplaces with advanced search, map integration, property comparison tools, automated listing management, and real-time updates. Built for platforms where search experience determines user retention.',
  },
  {
    number: '04',
    title: 'AI-Powered Analytics and Property Valuation Systems',
    description:
      'Machine learning models that forecast price trends, value properties, predict rental returns, and deliver market insights without manual analysis. Built for investors and agents making data-driven decisions at scale.',
  },
  {
    number: '05',
    title: 'Transaction Management and Digital Workflow Automation',
    description:
      'Secure platforms for contracts, e-signatures, digital document workflows, payment tracking, verification, and compliance. Blockchain integration available for transactions requiring immutable audit trails.',
  },
  {
    number: '06',
    title: 'Virtual Tours, 3D, AR and VR Real Estate Apps',
    description:
      '360-degree walkthroughs, 3D renders, and AR/VR overlays built for property platforms where remote viewing drives purchase decisions. Built for buyers who need to see before they visit.',
  },
  {
    number: '07',
    title: 'Smart Building and IoT Integration Platforms',
    description:
      'Applications that connect IoT devices and sensors via secure APIs for energy monitoring, access control, security alerts, and centralised building management. Built for property owners managing multiple assets from a single interface.',
  },
  {
    number: '08',
    title: 'Custom Real Estate Mobile App Development',
    description:
      'Mobile applications built for your specific business model, tenant service apps, property search tools, agent collaboration platforms, and investor dashboards. Each one is efficient, secure, and scalable.',
  },
  {
    number: '09',
    title: 'Marketing and Lead Generation Systems',
    description:
      'Marketing automation tools with lead scoring, campaign management, analytics, and performance tracking built for real estate businesses that need more qualified leads from every marketing channel.',
  },
];

export default function RealEstateServicesGrid() {
  return (
    <section className="w-full bg-[#141414] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Section Header */}
        <div className="text-center max-w-[980px] mx-auto mb-14">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-[1.18] text-white mb-4">
            Real Estate App Development Services Designed for Modern Property Businesses
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Our real estate app development services enable you to manage properties, clients, transactions, and marketing all within a single integrated ecosystem.
          </p>
        </div>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#222222] hover:bg-[#282828] border border-white/10 rounded-[16px] p-7 md:p-8 flex flex-col justify-between transition-colors duration-200"
            >
              <div>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
