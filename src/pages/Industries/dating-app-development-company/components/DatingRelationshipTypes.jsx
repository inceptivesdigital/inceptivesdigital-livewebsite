import React from 'react';

const types = [
  {
    number: '01',
    title: 'General Dating Apps',
    description:
      'Broad-audience platforms built for users seeking casual friendships or serious romantic connections. Swiping, matching, and instant messaging are built for a wide demographic reach and high user volume.',
  },
  {
    number: '02',
    title: 'Niche Dating Apps',
    description:
      'Community-specific platforms built for unique interests, demographics, and lifestyles. Custom matchmaking logic and branding aligned with the specific values and expectations of the target community.',
  },
  {
    number: '03',
    title: 'Serious Relationship Apps',
    description:
      'Platforms built for users seeking long-term relationships or marriage. In-depth profile customisation, compatibility-based matching algorithms, and advanced communication tools built for meaningful connections.',
  },
  {
    number: '04',
    title: 'Casual Dating Apps',
    description:
      'Platforms built for lighthearted, short-term connections. Instant messaging, location-based matching, and easy swipe mechanics built for fast, frictionless user interaction.',
  },
  {
    number: '05',
    title: 'Video Dating Apps',
    description:
      'Face-to-face virtual connection platforms built with high-quality video chat infrastructure. Real connections formed across distance without compromising on interaction quality.',
  },
  {
    number: '06',
    title: 'Friendship and Social Networking Apps',
    description:
      'Platforms built for platonic connections, interest-based communities, and social bonding. Built for users who want meaningful interaction without the romantic context.',
  },
  {
    number: '07',
    title: 'Speed Dating Apps',
    description:
      'Time-limited conversation platforms that bring the energy of offline speed dating to mobile. Built for fast-paced interaction and instant connection seekers.',
  },
  {
    number: '08',
    title: 'International Dating Apps',
    description:
      'Cross-cultural connection platforms with multi-language support, global discovery features, and cultural sensitivity built into the matching and communication architecture.',
  },
  {
    number: '09',
    title: 'Gamified Dating Apps',
    description:
      'Engagement-driven platforms with rewards, points, leaderboards, and badges built into the core experience. Retention mechanics that turn dating into a consistent habit rather than a one-time interaction.',
  },
];

export default function DatingRelationshipTypes() {
  return (
    <section className="w-full bg-[#141414] text-white py-16 md:py-24">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        {/* Heading */}
        <div className="text-center max-w-[980px] mx-auto mb-14">
          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-[1.18] text-white mb-4">
            Dating App Development for{' '}
            <span className="text-[#00CE44]">Every Type of Relationship</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.65] font-normal">
            Every relationship model has different user expectations, matching mechanics, and engagement patterns. We build for the specific context.
          </p>
        </div>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {types.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#222222] hover:bg-[#282828] border border-white/10 rounded-[16px] p-7 md:p-8 flex flex-col justify-start transition-colors duration-200"
            >
              <div className="mb-4">
                <span
                  className="inline-block font-bold text-[42px] md:text-[48px] leading-none select-none"
                  style={{
                    WebkitTextStroke: '1.5px #00CE44',
                    color: 'transparent',
                  }}
                >
                  {item.number}
                </span>
              </div>
              <h3 className="text-[#00CE44] text-[20px] md:text-[22px] font-bold leading-snug mb-3">
                {item.title}
              </h3>
              <p className="text-white/85 text-[15px] md:text-[16px] leading-[1.65] font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Inline CTA Banner */}
        <div
          className="w-full rounded-[20px] border border-white/10 px-6 sm:px-10 md:px-12 py-8 md:py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
          style={{
            background:
              'linear-gradient(125deg, #0b2916 0%, #05130a 55%, #000000 100%)',
          }}
        >
          <p className="text-white text-[20px] sm:text-[24px] md:text-[28px] font-bold leading-snug max-w-[820px]">
            Your concept could be the next platform people actually use. Let&apos;s find out if it is buildable.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-[15px] md:text-[16px] px-8 py-4 rounded-none transition-colors duration-200 shrink-0"
          >
            Request a Project Quote →
          </a>
        </div>
      </div>
    </section>
  );
}
