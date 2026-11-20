import React from 'react';

const tiers = [
  {
    title: 'Foundation App',
    subtitle:
      'For real estate businesses launching a focused platform for property search, lead generation, or property management.',
    cost: '$25,000 to $60,000',
    timeline: '8 to 14 weeks',
    includes: [
      'Property listings and search',
      'Agent and user profiles',
      'Appointment scheduling',
      'Lead capture and management',
      'Admin dashboard',
    ],
    footer:
      'A focused real estate product built to validate the concept before investing in a larger platform.',
  },
  {
    title: 'Advanced Real Estate Platform',
    subtitle:
      'For agencies, brokerages, and property businesses managing transactions, sales operations, and marketplace functionality.',
    cost: '$60,000 to $140,000',
    timeline: '14 to 24 weeks',
    includes: [
      'Property management workflows',
      'CRM and sales automation',
      'Interactive maps and advanced search',
      'Digital contracts and e-signatures',
      'Marketplace and communication features',
    ],
    footer:
      'Where property operations, transaction management, and customer engagement come together in one production-ready platform.',
  },
  {
    title: 'Enterprise Real Estate Platform',
    subtitle:
      'For real estate enterprises building data-driven platforms with advanced analytics, automation, and connected infrastructure.',
    cost: '$140,000 to $250,000+',
    timeline: '20 to 32 weeks',
    includes: [
      'AI-powered valuation and analytics',
      'AR/VR property experiences',
      'Smart building and IoT integrations',
      'Predictive market intelligence',
      'Enterprise system integrations',
    ],
    footer:
      'Built for real estate organizations where automation, data intelligence, and operational scale are the baseline requirements.',
  },
];

export default function RealEstateCostSection() {
  return (
    <section className="w-full bg-[#181818] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[980px] mx-auto mb-14">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-[1.18] text-white mb-4">
            Real Estate App Development Cost Estimates
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Every real estate platform has different integration requirements, user workflows, and feature complexity. These ranges reflect typical project scope and are defined precisely in the Discovery Sprint.
          </p>
        </div>

        {/* 3 Equal Cost Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className="bg-[#2a2a2a] rounded-[16px] p-7 sm:p-8 flex flex-col justify-between border border-white/10"
            >
              <div>
                <h3 className="text-[#00CE44] text-[22px] md:text-[24px] font-bold leading-snug mb-3">
                  {tier.title}
                </h3>
                <p className="text-white/85 text-[15px] leading-[1.6] font-normal">
                  {tier.subtitle}
                </p>

                <hr className="my-5 border-white/15" />

                <div className="space-y-2 text-[15px] md:text-[16px]">
                  <p className="text-white font-bold">
                    Estimated Cost: <span className="font-bold">{tier.cost}</span>
                  </p>
                  <p className="text-white font-bold">
                    Timeline: <span className="font-bold">{tier.timeline}</span>
                  </p>
                </div>

                <hr className="my-5 border-white/15" />

                <p className="text-white font-semibold text-[15px] mb-3">
                  Includes:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-white/90 text-[14px] md:text-[15px] leading-[1.55]">
                  {tier.includes.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <hr className="my-5 border-white/15" />
                <p className="text-white/80 text-[14px] md:text-[15px] leading-[1.6] font-normal">
                  {tier.footer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
