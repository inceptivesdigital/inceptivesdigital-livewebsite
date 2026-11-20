import React from 'react'

const badges = [
  {
    name: 'Clutch',
    href: 'https://clutch.co/profile/inceptives-digital',
    src: '/assets/clutch.png',
    alt: 'Clutch 5.0 Rating',
  },
  {
    name: 'Bark',
    href: 'https://www.bark.com/en/us/company/inceptives-digital/Pww4ae/',
    src: '/assets/bark.png',
    alt: 'Bark 5.0 Rating',
  },
  {
    name: 'Trustpilot',
    href: 'https://www.trustpilot.com/review/inceptivesdigital.com',
    src: '/assets/trustpilot.png',
    alt: 'Trustpilot 4.7 Rating',
  },
]

export default function HeroTrustBadges({ className = '' }) {
  return (
    <div className={`flex flex-wrap items-center gap-7 sm:gap-10 ${className}`}>
      {badges.map((badge) => (
        <a
          key={badge.name}
          href={badge.href}
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label={badge.alt}
          className="inline-flex items-center justify-center transition-transform duration-200 hover:scale-105"
        >
          <img
            src={badge.src}
            alt={badge.alt}
            className="h-9 sm:h-10 md:h-11 w-auto object-contain select-none"
            loading="eager"
          />
        </a>
      ))}
    </div>
  )
}
