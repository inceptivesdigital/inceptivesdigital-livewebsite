import React from 'react';
import { Link } from 'react-router-dom';

const reasons = [
  {
    title: 'End-to-End Travel Experiences',
    description:
      'Our engineers develop connected travel platforms that bring booking workflows and trip management into one consistent customer experience.',
  },
  {
    title: 'Travel-Specific API Integrations',
    description:
      'Connect your platform with compatible travel inventory providers. Our engineers handle API integration requirements around availability and reservation workflows.',
  },
  {
    title: 'AI-Powered Personalization',
    description: (
      <>
        Our{' '}
        <Link
          to="/ai-app-development-services"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          AI app development services
        </Link>{' '}
        support travel recommendations tailored to customer preferences, using relevant booking information and available destination data.
      </>
    ),
  },
  {
    title: 'Offline-First Architecture',
    description:
      'Reliable travel apps should work beyond internet coverage. We engineer offline access to essential trip information across supported devices.',
  },
  {
    title: 'Security and Compliance',
    description: (
      <>
        Protect sensitive traveler information through secure payment integrations and{' '}
        <Link
          to="/blog/mobile-app-security-best-practices"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          mobile app security best practices
        </Link>{' '}
        suited to your platform&apos;s compliance requirements.
      </>
    ),
  },
  {
    title: 'Continuous Support and Optimization',
    description:
      'Your travel platform can evolve without changing development partners. Our engineers support product improvements through agreed post-launch engagements.',
  },
];

export default function TravelWhyChooseUs() {
  return (
    <section className="w-full bg-[#000000] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[980px] mx-auto mb-14">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-[1.18] text-white mb-4">
            Why Businesses Choose Our{' '}
            <span className="text-[#00CE44]">Travel App Development Company</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Inceptives Digital brings 8+ years of product engineering experience to custom travel app development. Our team combines mobile development expertise with the technical planning needed for booking platforms and travel businesses operating across different markets.
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
