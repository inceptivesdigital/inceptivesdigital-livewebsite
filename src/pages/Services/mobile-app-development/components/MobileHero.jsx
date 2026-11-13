import { Link } from 'react-router-dom'

export default function MobileHero() {
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
    <section className="pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 bg-[#000000] overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start text-left">
            <h1 className="text-[#00CE44] text-sm sm:text-base lg:text-[17px] font-bold block mb-3">
              Custom Mobile App Development Services
            </h1>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-white tracking-tight leading-[1.18] mb-5 max-w-2xl">
              Empowering Businesses in the US with Custom Mobile App Engineering
            </h2>

            <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl font-normal">
              Inceptives Digital brings 8+ years of experience to custom mobile app development services across the USA. Our developers combine AI-backed engineering with native iOS, Android, and cross-platform expertise to handle complex business requirements. With modular architecture and API-first integrations, we build mobile products that support real operations and future expansion without costly rework.
            </p>

            {/* Rectangular Buttons (Sharp Corners, Zero Shadow) */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-sm sm:text-base transition-colors border-0"
              >
                Discuss Your App
              </a>

              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-transparent hover:bg-white/5 border border-white text-white font-medium text-sm sm:text-base transition-colors"
              >
                Explore Our Work
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-9">
              {trustBadges.map((badge) => (
                <a
                  key={badge.name}
                  href={badge.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-block"
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

          {/* Right Column: 3-Screen Mobile App Preview */}
          <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[520px] lg:max-w-[580px]">
              <img
                src="/assets/mobile-app/mobile-app_compressed.webp"
                alt="Custom Mobile App Development Preview"
                className="w-full h-auto object-contain"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
