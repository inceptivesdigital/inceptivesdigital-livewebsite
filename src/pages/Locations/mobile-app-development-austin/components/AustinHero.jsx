import { Link } from 'react-router-dom'

export default function AustinHero() {
  const trustBadges = [
    {
      name: 'Clutch',
      url: 'https://clutch.co/profile/inceptives-digital',
      src: '/assets/clutch.png',
      alt: 'Clutch 5.0 Rating',
    },
    {
      name: 'Bark',
      url: 'https://www.bark.com/en/us/b/inceptives-digital/Pww4ae/',
      src: '/assets/bark.png',
      alt: 'Bark 5.0 Rating',
    },
    {
      name: 'Trustpilot',
      url: 'https://www.trustpilot.com/review/inceptivesdigital.com',
      src: '/assets/trustpilot.png',
      alt: 'Trustpilot 4.7 Rating',
    },
  ]

  return (
    <section className="relative min-h-screen flex items-center pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 bg-[#050608] overflow-hidden">
      {/* Austin City Skyline Banner Background (User Provided Daylight Skyline) */}
      <div 
        className="absolute inset-0 z-0 select-none pointer-events-none"
        style={{
          backgroundImage: `url('/assets/locations/austin/austin-skyline-daylight.jpg')`,
          backgroundPosition: 'right center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Clean gradient blends to ensure 100% contrast behind text on left while showing city on right */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#050608] via-[#050608]/85 md:via-[#050608]/55 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#050608] via-transparent to-transparent pointer-events-none" />

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] relative z-10">
        <div className="max-w-xl lg:max-w-[600px] xl:max-w-2xl text-left">
          {/* Main H1 Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-[48px] xl:text-[52px] font-bold text-white tracking-tight leading-[1.14] mb-3">
            Mobile App Development Company in{' '}
            <span className="text-[#00CE44]">Austin, TX</span>
          </h1>

          {/* H2 Subheading */}
          <h2 className="text-lg sm:text-xl lg:text-[22px] font-semibold text-white/95 mb-5 leading-snug">
            Engineering Mobile Apps for the Companies Shaping Austin's Economy
          </h2>

          {/* Subtitle / Paragraph */}
          <p className="text-white/80 text-sm sm:text-base lg:text-[16px] leading-relaxed mb-8 font-normal">
            A Texas-headquartered{' '}
            <Link to="/mobile-app-development" className="underline text-[#00CE44] hover:text-white transition-colors">
              mobile app development company
            </Link>{' '}
            building iOS, Android, and cross-platform applications for Austin startups and scale-ups. Platform selection, compliance architecture, and system design are confirmed before development begins. The decisions separate a product built to last from one that needs rebuilding at the worst possible moment.
          </p>

          {/* CTA Button */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors border-0"
            >
              Talk to Our Austin Team
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-2">
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
      </div>
    </section>
  )
}
