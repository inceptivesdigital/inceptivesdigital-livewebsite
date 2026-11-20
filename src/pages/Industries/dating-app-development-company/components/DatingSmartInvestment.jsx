import React from 'react';

const investments = [
  {
    title: 'A Market With Consistent Growth',
    description:
      'Online dating has moved from niche to mainstream across every demographic. The user base is large, engaged, and recurring.',
    icon: '/assets/healthcare/Al-Chatbots-And-Virtual-Assistant-Apps.svg',
  },
  {
    title: 'Revenue Models That Compound',
    description:
      'Subscriptions, premium features, virtual gifts, and boosted visibility create multiple monetisation layers that compound as the user base grows.',
    icon: '/assets/healthcare/mHealth-App-Development.svg',
  },
  {
    title: 'AI as the Differentiator',
    description:
      'The platforms gaining ground are the ones with the most accurate matching. AI-driven matchmaking and personalised recommendations separate platforms users return to from ones they abandon.',
    icon: '/assets/healthcare/Electronic-Health-Record-Software.svg',
  },
  {
    title: 'The Right Architecture From the Start',
    description:
      'Real-time communication, location-based discovery, safety systems, and payment infrastructure need to be designed correctly before development begins. Getting this right determines whether the platform scales or requires a rebuild.',
    icon: '/assets/healthcare/Telemedicine-App-Development.svg',
  },
];

export default function DatingSmartInvestment() {
  return (
    <section className="w-full bg-[#000000] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[980px] mx-auto mb-14">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-[1.18] text-white mb-4">
            Why Dating App Development is{' '}
            <span className="text-[#00CE44]">A Smart Investment Idea?</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            The online dating market is one of the most consistently growing segments in consumer technology. Well-built platforms generate recurring revenue and compounding user bases.
          </p>
        </div>

        {/* 2-Column Layout: 2x2 Cards + Phone Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {investments.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#1e1e1e] hover:bg-[#252525] border border-white/10 rounded-[16px] p-7 flex flex-col justify-start transition-colors duration-200"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 object-contain select-none mb-5"
                />
                <h3 className="text-[#00CE44] text-[19px] md:text-[21px] font-bold leading-snug mb-3">
                  {item.title}
                </h3>
                <p className="text-white/85 text-[14px] md:text-[15px] leading-[1.65] font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5 flex justify-center items-center">
            <img
              src="/assets/dating/advance.png"
              alt="Smart Dating App Architecture"
              className="w-full max-w-[330px] sm:max-w-[360px] h-auto object-contain select-none"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
