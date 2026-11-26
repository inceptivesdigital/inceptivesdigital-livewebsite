import { Calendar } from 'lucide-react'
import heroBannerImg from './assets/hero-banner-bg.webp'
import reviewClutch from './assets/review-dark-1.webp'
import reviewTrustpilot from './assets/review-dark-2.webp'
import reviewGoodfirms from './assets/review-dark-4.webp'
import reviewBark from './assets/review-dark-3.webp'

const TRUST_BADGES = [
  {
    name: 'Clutch',
    href: 'https://clutch.co/profile/inceptives-digital',
    src: reviewClutch,
    alt: 'Clutch 5.0 Rating',
  },
  {
    name: 'Trustpilot',
    href: 'https://www.trustpilot.com/review/inceptivesdigital.com',
    src: reviewTrustpilot,
    alt: 'Trustpilot 4.7 Rating',
  },
  {
    name: 'GoodFirms',
    href: 'https://www.goodfirms.co/company/inceptives-digital',
    src: reviewGoodfirms,
    alt: 'GoodFirms 5.0 Rating',
  },
  {
    name: 'Bark',
    href: 'https://www.bark.com/en/us/b/inceptives-digital/Pww4ae/',
    src: reviewBark,
    alt: 'Bark 5.0 Rating',
  },
]

export default function StaffHero() {
  return (
    <section
      className="relative min-h-[100vh] lg:h-[100vh] w-full bg-white bg-cover bg-bottom bg-no-repeat flex flex-col justify-center pt-28 sm:pt-32 lg:pt-28 pb-32 sm:pb-40 lg:pb-24 overflow-hidden"
      style={{ backgroundImage: `url(${heroBannerImg})` }}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-black tracking-tight leading-[1.15]">
            IT Staff Augmentation Services
          </h1>

          <p className="mt-4 sm:mt-5 text-[#1a1a1a] text-sm sm:text-base lg:text-[17px] leading-relaxed font-normal max-w-3xl mx-auto">
            Complete your project faster with our IT staff augmentation services. Achieve up to 3x higher output with our development team of 150+ skilled IT personnel that brings expertise in custom software development, cloud engineering, app development, game development, web development, and DevOps. Consider them as your on-demand IT team, always there to handle the complex work, fill gaps, and ensure on-time delivery every time.
          </p>

          {/* Centered Buttons: Solid Dark + Outline Schedule A Call */}
          <div className="mt-7 flex flex-wrap justify-center items-center gap-3.5 sm:gap-4">
            <a
              href="#contact"
              className="getintouch inline-flex items-center justify-center min-w-[170px] px-7 py-3.5 rounded-none bg-[#1c1c1c] hover:bg-black text-white font-semibold text-sm sm:text-base transition-colors border border-[#1c1c1c]"
            >
              get a call now!
            </a>

            <a
              href="#contact"
              className="openpop-shedule inline-flex items-center justify-center gap-2 min-w-[170px] px-7 py-3.5 rounded-none bg-white/90 hover:bg-white border border-black/80 text-black font-semibold text-sm sm:text-base transition-colors"
            >
              <Calendar className="w-4 h-4 shrink-0" />
              <span>Schedule A Call</span>
            </a>
          </div>

          {/* 4 Dark Trust Badges Row */}
          <div className="mt-8 flex items-center justify-center gap-6 sm:gap-10 lg:gap-14 flex-wrap">
            {TRUST_BADGES.map((badge) => (
              <a
                key={badge.name}
                href={badge.href}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="transition-transform duration-200 hover:scale-105 inline-flex items-center justify-center"
              >
                <img
                  src={badge.src}
                  alt={badge.alt}
                  className="h-9 sm:h-11 lg:h-12 w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
