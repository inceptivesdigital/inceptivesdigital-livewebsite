import { Link } from 'react-router-dom'

export default function PostLaunchHero() {
  const trustBadges = [
    {
      name: 'Clutch',
      url: 'https://clutch.co/profile/inceptives-digital',
      src: '/assets/clutch.png',
      alt: 'Clutch Review Badge',
    },
    {
      name: 'Bark',
      url: 'https://www.bark.com/en/us/b/inceptives-digital/Pww4ae/',
      src: '/assets/bark.png',
      alt: 'Bark Review Badge',
    },
    {
      name: 'Trustpilot',
      url: 'https://www.trustpilot.com/review/inceptivesdigital.com',
      src: '/assets/trustpilot.png',
      alt: 'Trustpilot Review Badge',
    },
  ]

  return (
    <section className="relative min-h-[640px] lg:min-h-[85vh] flex items-center pt-28 sm:pt-36 lg:pt-36 pb-16 lg:pb-20 bg-black overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start text-left pb-4 lg:pb-0">
            <h1 className="text-[#00CE44] text-sm sm:text-base lg:text-[17px] font-bold block mb-3">
              Post-Launch Analytics &amp; Iteration Services
            </h1>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-white tracking-tight leading-[1.18] mb-5 max-w-2xl">
              Bringing Your Product to Market with Analytics &amp; Insights
            </h2>

            <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl font-normal">
              Most digital products go live with strong builds and weak post-launch plans. The product works. The code is clean. However, without a structured analytics and iteration process, behavioral signals pile up unread, and conversion problems quietly compound. Inceptives Digital operates as a{' '}
              <Link
                to="/mobile-app-development"
                className="underline font-normal text-[#00CE44] hover:text-white transition-colors"
              >
                mobile app development company
              </Link>{' '}
              that treats everything after launch as a discipline in its own right, one built on real usage data, defined iteration cycles, and measurable outcomes at every stage.
            </p>

            {/* Rectangular Button (Sharp Corners, Zero Shadow) */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors border-0"
              >
                Run a Post-Launch Audit on My Product
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              {trustBadges.map((badge) => (
                <a
                  key={badge.name}
                  href={badge.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="opacity-90 hover:opacity-100 transition-opacity"
                >
                  <img
                    src={badge.src}
                    alt={badge.alt}
                    className="h-9 sm:h-11 w-auto object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Banner Image */}
          <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end items-center">
            <div className="w-full max-w-[500px] sm:max-w-[560px] lg:max-w-[620px] xl:max-w-[680px]">
              <img
                src="/assets/post-launch-analytics/product-analytics.png"
                alt="Post-Launch Analytics & Iteration Services"
                className="w-full h-auto object-contain block select-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
