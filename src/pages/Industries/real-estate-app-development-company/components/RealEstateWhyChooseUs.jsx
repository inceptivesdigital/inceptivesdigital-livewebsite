import React from 'react';

const reasons = [
  {
    title: 'Deep Real Estate Domain Knowledge',
    description:
      'Residential, commercial, rental, and investment market workflows are understood before architecture decisions are made. Applications built around genuine operational processes rather than generic software templates adapted for property use cases.',
  },
  {
    title: 'Design That Drives Transaction Completion',
    description:
      'Clean layouts, intuitive navigation, and fast interactions built around the moments that matter — listing search, property comparison, agent contact, and deal completion. Every screen is designed to move users toward a transaction rather than away from it.',
  },
  {
    title: 'Agile Development With Full Visibility',
    description:
      'Rapid iterations, feedback-driven adjustments, and continuous alignment with your business requirements throughout development. You always know what is being built, why it is being built that way, and when it will be ready.',
  },
  {
    title: 'Scalable Architecture From Day One',
    description:
      'Cloud-native, secure, and performance-optimised systems built to handle growing listing volumes, expanding user bases, and new integrations without stability issues or architectural rebuilds.',
  },
  {
    title: 'End-to-End Engagement',
    description:
      'Strategy, design, development, testing, deployment, and post-launch support delivered as a single engagement. No handoffs to external teams. No gaps in accountability between stages.',
  },
  {
    title: 'Long-Term Partnership',
    description:
      'Post-launch feature updates, performance optimisation, and market-driven enhancements are provided continuously. The platform that launches is the starting point, not the finished state.',
  },
];

export default function RealEstateWhyChooseUs() {
  return (
    <section className="w-full bg-[#000000] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[980px] mx-auto mb-14">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-[1.18] text-white mb-4">
            What Our Real Estate App Development Company Brings to Every Engagement
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Real estate software built by studios without domain knowledge creates platforms that look right but operate incorrectly. Here is what we bring that makes the difference.
          </p>
        </div>

        {/* 3x2 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#2b2b2b] rounded-[14px] p-7 sm:p-8 flex flex-col justify-start"
            >
              <h3 className="text-[#00CE44] text-[20px] md:text-[22px] font-bold leading-snug mb-3.5">
                {item.title}
              </h3>
              <p className="text-white text-[15px] md:text-[16px] leading-[1.65] font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
