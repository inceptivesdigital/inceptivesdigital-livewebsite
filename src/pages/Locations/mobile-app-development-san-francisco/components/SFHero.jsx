import { Link } from 'react-router-dom'

export default function SFHero() {
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
      {/* Background Hero Banner Image with Clear Visibility */}
      <div 
        className="absolute inset-0 z-0 select-none pointer-events-none opacity-90"
        style={{
          backgroundImage: `url('/assets/locations/sf-hero-banner.webp')`,
          backgroundPosition: 'right center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Subtle blend gradients to ensure 100% solid contrast behind left text */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#050608] via-[#050608]/70 md:via-[#050608]/40 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#050608] via-transparent to-transparent pointer-events-none" />

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] relative z-10">
        <div className="max-w-3xl text-left">
          {/* Main H1 Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-[50px] xl:text-[54px] font-bold text-white tracking-tight leading-[1.14] mb-6">
            Mobile App Development Company in{' '}
            <span className="text-[#00CE44]">San Francisco, CA</span>
          </h1>

          {/* Subtitle / Paragraph with internal links */}
          <p className="text-white/90 text-sm sm:text-base lg:text-[17px] leading-relaxed mb-8 font-normal">
            Building successful apps requires decisions grounded in customers and goals. Inceptives Digital is a{' '}
            <Link to="/mobile-app-development" className="underline text-[#00CE44] hover:opacity-80 transition-colors">
              mobile app development company
            </Link>{' '}
            in San Francisco serving founders, SaaS operators, and enterprise teams launching custom iOS, Android, cross-platform, and AI-enabled products. Founders around Jackson Square and established downtown businesses expect sound architecture, clear scope, and accountability before engineering begins. Our mobile app developers in San Francisco address platform constraints, product adoption, and security requirements before writing code. Technical diligence and customer procurement shape critical decisions throughout development.
          </p>

          {/* CTA Button */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors border-0 shadow-lg shadow-[#00CE44]/20"
            >
              Book a Product Strategy Call
            </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-transparent hover:bg-white/10 border border-white text-white font-medium text-sm sm:text-base transition-colors"
              >
                Schedule A Call
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
                  className="h-10 sm:h-13 w-auto object-contain select-none"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
