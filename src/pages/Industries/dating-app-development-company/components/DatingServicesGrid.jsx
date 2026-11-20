import React from 'react';

const services = [
  {
    number: '01',
    title: 'Android Dating App Development',
    description:
      'Secure, high-performance Android dating applications built with Kotlin, Firebase, and REST APIs. Onboarding, real-time chat, push notifications, and matchmaking features are built for reliable performance under heavy traffic.',
  },
  {
    number: '02',
    title: 'iOS Dating App Development',
    description:
      "iOS dating applications are built to Apple's design and security standards. Smart matchmaking algorithms, secure payments, and seamless user interactions built for the specific performance requirements of the Apple ecosystem.",
  },
  {
    number: '03',
    title: 'Cross-Platform Dating App Development',
    description:
      'Single-codebase dating applications built with Flutter and React Native. Native-quality experience across Android and iOS without the cost and timeline of two separate native builds.',
  },
  {
    number: '04',
    title: 'AI-Based Matchmaking App Development',
    description:
      'Matching algorithms built on TensorFlow and Python recommendation systems that analyse user behaviour, preferences, and communication patterns to deliver personalised, adaptive matching that improves over time.',
  },
  {
    number: '05',
    title: 'Video and Voice Dating App Development',
    description:
      'Live video, voice chat, and streaming built with WebRTC, Twilio, and Agora APIs. Secure, low-latency communication that handles peak traffic without compromising reliability or user privacy.',
  },
  {
    number: '06',
    title: 'Location-Based Dating App Development',
    description:
      'GPS-powered discovery features built with Google Maps API, Core Location, and geofencing frameworks. Accurate, privacy-respecting location tracking with adjustable distance filters.',
  },
  {
    number: '07',
    title: 'Custom Dating App Development',
    description:
      'Fully custom dating platforms built around your specific business model, target audience, and competitive positioning. Every feature, design decision, and integration is built for your use case.',
  },
  {
    number: '08',
    title: 'Community-Specific Dating App Development',
    description:
      'Dating applications built for specific communities, faith-based, cultural, hobby, or lifestyle-centric. Custom matchmaking logic, analytics, and branding aligned with the values and expectations of the specific community.',
  },
];

export default function DatingServicesGrid() {
  return (
    <section className="w-full bg-[#141414] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[980px] mx-auto mb-14">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-[1.18] text-white mb-4">
            Dating App Development Services That Make{' '}
            <span className="text-[#00CE44]">Online Connections Feel Real</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Foster meaningful relations with our dating app development services that focus on smart features, smooth performances, and reliable security.
          </p>
        </div>

        {/* 4x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#222222] hover:bg-[#282828] border border-white/10 rounded-[16px] p-7 flex flex-col justify-start transition-colors duration-200"
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
              <h3 className="text-[#00CE44] text-[19px] md:text-[21px] font-bold leading-snug mb-3">
                {service.title}
              </h3>
              <p className="text-white/85 text-[14px] md:text-[15px] leading-[1.65] font-normal">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
