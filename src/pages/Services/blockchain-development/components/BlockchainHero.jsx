import { Link } from 'react-router-dom'
import { Calendar } from 'lucide-react'

export default function BlockchainHero() {
  const reviewBadges = [
    {
      name: 'Clutch',
      src: '/assets/clutch.png',
      url: 'https://clutch.co/profile/inceptives-digital',
      alt: 'Clutch Review Badge',
    },
    {
      name: 'GoodFirms',
      src: '/assets/blockchain/goodfirms-badge.png',
      url: 'https://www.goodfirms.co/company/inceptives-digital',
      alt: 'GoodFirms Review Badge',
    },
    {
      name: 'Bark',
      src: '/assets/bark.png',
      url: 'https://www.bark.com/en/us/b/inceptives-digital/Pww4ae/',
      alt: 'Bark Review Badge',
    },
    {
      name: 'Trustpilot',
      src: '/assets/trustpilot.png',
      url: 'https://www.trustpilot.com/review/inceptivesdigital.com',
      alt: 'Trustpilot Review Badge',
    },
  ]

  const clientLogos = [
    {
      name: 'Associated Press',
      src: '/assets/marquee/ap.png',
      className: 'max-h-[38px] sm:max-h-[44px] lg:max-h-[50px]',
    },
    {
      name: 'Trustpilot',
      src: '/assets/marquee/trustpilot.png',
      className: 'max-h-[38px] sm:max-h-[44px] lg:max-h-[50px]',
    },
    {
      name: 'Google',
      src: '/assets/marquee/google.png',
      className: 'max-h-[40px] sm:max-h-[46px] lg:max-h-[52px]',
    },
    {
      name: 'The New York Times',
      src: '/assets/marquee/nyt.png',
      className: 'max-h-[34px] sm:max-h-[38px] lg:max-h-[44px]',
    },
    {
      name: 'The Globe and Mail',
      src: '/assets/marquee/globeandmail.png',
      className: 'max-h-[32px] sm:max-h-[36px] lg:max-h-[42px]',
    },
    {
      name: 'USA Today',
      src: '/assets/marquee/usatoday.png',
      className: 'max-h-[40px] sm:max-h-[46px] lg:max-h-[52px]',
    },
  ]

  const logoSet = [...clientLogos, ...clientLogos]

  return (
    <>
      <section className="relative pt-32 sm:pt-36 lg:pt-44 pb-16 sm:pb-24 lg:pb-28 overflow-hidden bg-[#000000]">
        {/* Hero Background Image */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <img
            src="/assets/blockchain/blockchainbanner.webp"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black" />
        </div>

        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.15] mb-6">
              Blockchain App{' '}
              <span className="text-[#00CE44]">Development Services</span>
            </h1>

            <p className="text-white/90 text-[15px] sm:text-[16px] lg:text-[17px] leading-relaxed font-normal max-w-3xl mx-auto mb-8">
              As a blockchain app development company and experienced{' '}
              <Link
                to="/mobile-app-development"
                className="underline font-normal text-[#00CE44] hover:text-white transition-colors"
              >
                mobile app development company
              </Link>
              , we build digital products where trust, ownership, and transactions cannot rely on centralized systems alone. Our blockchain app development services span smart contracts, DeFi platforms, DApps, NFT platforms, decentralized applications, and enterprise blockchain development ecosystems designed around real business models, secure infrastructure, and long-term adoption.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-sm sm:text-base transition-colors border-0"
              >
                Get A Call Now!
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-none bg-transparent hover:bg-white/10 text-white font-medium text-sm sm:text-base transition-colors border border-white/30"
              >
                <Calendar className="w-4 h-4 text-[#00CE44]" />
                <span>Let&apos;s Schedule a Call</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Review Badges Strip */}
      <section className="py-8 sm:py-10 bg-[#18191d] border-y border-white/10">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 items-center justify-items-center">
            {reviewBadges.map((b) => (
              <a
                key={b.name}
                href={b.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity"
              >
                <img
                  src={b.src}
                  alt={b.alt}
                  className="h-10 sm:h-12 w-auto object-contain select-none"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Client Logos Marquee */}
      <section className="py-10 bg-[#151515] border-b border-white/[0.08] relative overflow-hidden">
        <div className="relative w-full overflow-hidden flex items-center">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 lg:w-36 bg-gradient-to-r from-[#151515] via-[#151515]/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 lg:w-36 bg-gradient-to-l from-[#151515] via-[#151515]/90 to-transparent z-10 pointer-events-none" />

          <div className="marquee-track flex items-center">
            <div className="flex items-center gap-6 sm:gap-8 lg:gap-10 shrink-0 pr-6 sm:pr-8 lg:pr-10">
              {logoSet.map((logo, idx) => (
                <div
                  key={`logo-1-${idx}`}
                  className="w-[180px] sm:w-[220px] md:w-[250px] lg:w-[270px] h-[65px] sm:h-[75px] shrink-0 flex items-center justify-center p-3"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className={`w-auto max-w-[88%] object-contain select-none pointer-events-none ${logo.className}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6 sm:gap-8 lg:gap-10 shrink-0 pr-6 sm:pr-8 lg:pr-10" aria-hidden="true">
              {logoSet.map((logo, idx) => (
                <div
                  key={`logo-2-${idx}`}
                  className="w-[180px] sm:w-[220px] md:w-[250px] lg:w-[270px] h-[65px] sm:h-[75px] shrink-0 flex items-center justify-center p-3"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className={`w-auto max-w-[88%] object-contain select-none pointer-events-none ${logo.className}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
