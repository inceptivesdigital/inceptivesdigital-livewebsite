import React from 'react';

const tiers = [
  {
    title: 'Basic Dating App',
    subtitle: 'Ideal for simple dating platforms with core features.',
    bullets: [
      'Includes basic profile creation, swiping, and messaging.',
      'Minimal backend and design requirements.',
    ],
    duration: '3-6 months',
    investment: '$10,000 - $30,000',
  },
  {
    title: 'Intermediate Dating App',
    subtitle:
      'Perfect for apps with advanced matching features and profile customization.',
    bullets: [
      'Includes real-time chat, basic location-based matching, and integration with social media.',
      'Moderate backend and design work.',
    ],
    duration: '6-9 months',
    investment: '$30,000 - $50,000',
  },
  {
    title: 'Advanced Dating App',
    subtitle:
      'Tailored for apps with sophisticated AI matchmaking, video calls, and real-time updates.',
    bullets: [
      'Includes complex features like geolocation, AI-powered suggestions, and in-app purchases.',
      'Robust backend and custom UI/UX design.',
    ],
    duration: '9-12+ months',
    investment: '$50,000 - $100,000+',
  },
];

export default function DatingCostSection() {
  return (
    <section className="w-full bg-[#181818] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[980px] mx-auto mb-14">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-[1.18] text-white mb-4">
            Dating App Development{' '}
            <span className="text-[#00CE44]">Cost Estimates</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Every dating platform has different complexity, features, and integration requirements. These ranges reflect typical project scope and are defined precisely in the Discovery Sprint.
          </p>
        </div>

        {/* 3 Equal Cost Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mb-12">
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

                <ul className="list-disc pl-5 space-y-2.5 text-white/90 text-[14px] md:text-[15px] leading-[1.6]">
                  {tier.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>

              <div>
                <hr className="my-5 border-white/15" />
                <div className="space-y-2 text-[15px] md:text-[16px]">
                  <p className="text-white font-bold">
                    Development Duration:{' '}
                    <span className="text-[#00CE44]">{tier.duration}</span>
                  </p>
                  <p className="text-white font-bold">
                    Investment Range:{' '}
                    <span className="text-[#00CE44]">{tier.investment}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Centered CTA Button */}
        <div className="flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-[15px] md:text-[16px] px-8 py-4 rounded-none transition-colors duration-200"
          >
            Request a Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
}
