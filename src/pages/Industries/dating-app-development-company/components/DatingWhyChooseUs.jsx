import React from 'react';

const reasons = [
  {
    title: 'Domain-Specific Architecture',
    description:
      'Every dating application we build is designed around the specific mechanics of connection, matchmaking logic, real-time communication infrastructure, safety systems, and monetisation architecture built in from day one. Not added as features after the core product is built.',
    icon: '/assets/healthcare/health-ai-icon.svg',
  },
  {
    title: 'AI-Driven Matchmaking',
    description:
      'Recommendation systems and behavioural matching algorithms built on TensorFlow and Python that improve with every user interaction. Matching accuracy is the primary retention driver on any dating platform. We build it from the architecture stage.',
    icon: '/assets/mobile-app/Internet-Of-Things-1.svg',
  },
  {
    title: 'Real-Time Communication Infrastructure',
    description:
      'WebRTC, Twilio, and Agora APIs integrated for low-latency video, voice, and chat experiences that hold up under peak traffic. Real-time communication built for reliability, not just functionality.',
    icon: '/assets/mobile-app/blockchain.svg',
  },
  {
    title: 'Safety and Moderation Systems',
    description:
      'Reporting, blocking, content moderation, and secure authentication are built into every dating platform. User safety is not a post-launch addition. It is an architectural requirement.',
    icon: '/assets/react-native/Augmented-Virtual-Reality-2.svg',
  },
  {
    title: 'Scalable from Day One',
    description:
      'Cloud infrastructure, database architecture, and backend systems are designed to handle user growth without requiring a rebuild at every growth stage. The platform that launches is built to scale, not to be replaced.',
    icon: '/assets/healthcare/big-data.svg',
  },
  {
    title: 'End-to-End Development',
    description:
      'Strategy, design, development, testing, deployment, and post-launch support delivered as a single engagement. No handoffs to external teams. No gaps in accountability between stages.',
    icon: '/assets/mobile-app/Cloud-Integration-1.svg',
  },
];

export default function DatingWhyChooseUs() {
  return (
    <section className="w-full bg-[#000000] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[980px] mx-auto mb-14">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-[1.18] text-white mb-4">
            Why Opt For Inceptive Digital’s{' '}
            <span className="text-[#00CE44]">Dating App Development Services?</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Dating platforms fail when studios build generic social apps and call them matchmaking products. We build differently.
          </p>
        </div>

        {/* 3x2 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#2b2b2b] rounded-[14px] p-7 sm:p-8 flex flex-col justify-start"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-12 h-12 object-contain select-none mb-5"
                loading="lazy"
              />
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
