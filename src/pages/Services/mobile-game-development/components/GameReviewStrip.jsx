const REVIEW_BADGES = [
  {
    name: 'Clutch 5.0 Rating',
    href: 'https://clutch.co/profile/inceptives-digital',
    img: '/assets/blockchain-v2/review1.webp',
  },
  {
    name: 'GoodFirms 5.0 Rating',
    href: 'https://www.goodfirms.co/company/inceptives-digital/',
    img: '/assets/blockchain-v2/review4.webp',
  },
  {
    name: 'Bark 5.0 Rating',
    href: 'https://www.bark.com/en/us/b/inceptives-digital/Pww4ae/',
    img: '/assets/blockchain-v2/review2.webp',
  },
  {
    name: 'Trustpilot 4.7 Rating',
    href: 'https://www.trustpilot.com/review/inceptivesdigital.com',
    img: '/assets/blockchain-v2/review3.webp',
  },
]

export default function GameReviewStrip() {
  return (
    <section className="w-full bg-[#1a1a1c] py-10 sm:py-12 border-b border-white/[0.06]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-evenly gap-8 sm:gap-12 lg:gap-16">
          {REVIEW_BADGES.map((badge) => (
            <a
              key={badge.name}
              href={badge.href}
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label={badge.name}
              className="inline-flex items-center justify-center transition-transform duration-200 hover:scale-105"
            >
              <img
                src={badge.img}
                alt={badge.name}
                className="h-11 sm:h-14 lg:h-16 w-auto object-contain select-none"
                loading="eager"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
