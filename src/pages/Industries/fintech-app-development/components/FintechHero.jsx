import { Link } from 'react-router-dom'

export default function FintechHero() {
  const reviewBadges = [
    {
      name: 'Clutch',
      src: '/assets/locations/toronto/clutch.png',
      alt: 'Clutch 5.0 Rating',
      href: 'https://clutch.co/profile/inceptives-digital',
    },
    {
      name: 'Bark',
      src: '/assets/locations/toronto/bark.png',
      alt: 'Bark 5.0 Rating',
      href: 'https://www.bark.com/en/us/company/inceptives-digital/Pww4ae/',
    },
    {
      name: 'Trustpilot',
      src: '/assets/locations/toronto/trustpilot.png',
      alt: 'Trustpilot 4.7 Rating',
      href: 'https://www.trustpilot.com/review/inceptivesdigital.com',
    },
  ]

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-[#000000] text-white pt-28 pb-16 lg:pt-32 lg:pb-20 bg-cover bg-right-bottom bg-no-repeat"
      style={{
        backgroundImage: `url('/assets/fintech/banner-fintech.png')`,
      }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/15 pointer-events-none"
        aria-hidden="true"
      />

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px] relative z-10">
        <div className="max-w-3xl text-left">
          <h1 className="text-base sm:text-lg lg:text-[20px] font-bold text-[#00CE44] tracking-normal mb-3">
            Fintech App Development Services
          </h1>

          <h2 className="text-3xl sm:text-4xl lg:text-[48px] xl:text-[52px] font-extrabold text-white tracking-tight leading-[1.14] mb-5 max-w-[740px]">
            Building High-Performance Fintech Apps for a Connected World
          </h2>

          <p className="text-white/85 text-sm sm:text-base lg:text-[16px] leading-relaxed font-normal mb-8 max-w-xl">
            Custom fintech applications for startups, banks, and financial enterprises. Mobile banking, digital wallets, lending platforms, investment tools, and payment automation are built to PCI DSS, GDPR, PSD2, and KYC compliance standards from the architecture stage.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#00CE44] text-black font-medium text-sm sm:text-base rounded-none hover:bg-[#00e04b] transition-all duration-200 cursor-pointer shadow-none"
            >
              Talk to Our Experts
            </Link>

            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent border border-[#00CE44] text-[#00CE44] font-medium text-sm sm:text-base rounded-none hover:bg-[#00CE44] hover:text-black transition-all duration-200 cursor-pointer shadow-none"
            >
              Schedule A Call
            </Link>
          </div>

          <div className="flex items-center gap-5 sm:gap-7 flex-wrap">
            {reviewBadges.map((badge) => (
              <a
                key={badge.name}
                href={badge.href}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="transition-transform duration-200 hover:scale-105"
              >
                <img
                  src={badge.src}
                  alt={badge.alt}
                  className="h-10 sm:h-13 w-auto object-contain select-none"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
