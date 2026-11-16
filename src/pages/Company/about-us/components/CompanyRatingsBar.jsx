export default function CompanyRatingsBar() {
  const reviews = [
    {
      platform: 'Clutch',
      badge: (
        <img
          src="/assets/clutch.png"
          alt="Clutch Rating Badge"
          className="max-h-11 sm:max-h-12 w-auto object-contain select-none opacity-90 group-hover:opacity-100 transition-opacity"
          loading="lazy"
        />
      ),
      sub: 'Verified Client Reviews',
      url: 'https://clutch.co/profile/inceptives-digital',
    },
    {
      platform: 'Bark',
      badge: (
        <img
          src="/assets/bark.png"
          alt="Bark Rating Badge"
          className="max-h-11 sm:max-h-12 w-auto object-contain select-none opacity-90 group-hover:opacity-100 transition-opacity"
          loading="lazy"
        />
      ),
      sub: 'Top Rated Professional',
      url: 'https://www.bark.com/en/us/company/inceptives-digital/Pww4ae/',
    },
    {
      platform: 'Trustpilot',
      badge: (
        <img
          src="/assets/trustpilot.png"
          alt="Trustpilot Rating Badge"
          className="max-h-11 sm:max-h-12 w-auto object-contain select-none opacity-90 group-hover:opacity-100 transition-opacity"
          loading="lazy"
        />
      ),
      sub: 'Excellent Trust Score',
      url: 'https://www.trustpilot.com/review/inceptivesdigital.com',
    },
    {
      platform: 'Google Reviews',
      badge: (
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 mb-1">
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"/>
              <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
            </svg>
            <span className="text-white font-bold text-lg sm:text-[19px] tracking-tight font-sans">
              Google
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-[#FF9900]">
            <span className="tracking-widest text-[11px]">★★★★★</span>
            <span className="text-white font-bold text-[11px]">5.0 Rating</span>
          </div>
        </div>
      ),
      sub: 'Client Satisfaction',
      url: 'https://www.google.com/search?q=inceptives+digital',
    },
  ]

  const badges = [
    { label: 'Clutch 4.8 / 83+ reviews', icon: '★' },
    { label: 'Inc. 5000 / 2024', icon: '✦' },
    { label: 'GoodFirms Leader', icon: '✦' },
    { label: 'Deloitte Fast 50', icon: '✦' },
  ]

  return (
    <section className="py-12 sm:py-16 bg-[#0c0c0c] border-t border-b border-white/10 relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Top 4 Original Review Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center justify-items-center text-center pb-10 border-b border-white/10">
          {reviews.map((rev, i) => (
            <div key={i} className="flex flex-col items-center justify-center w-full max-w-[220px]">
              <a
                href={rev.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 hover:scale-105"
                title={`${rev.platform} Reviews`}
              >
                {/* Original Brand Image Badge */}
                <div className="h-12 sm:h-14 flex items-center justify-center mb-2">
                  {rev.badge}
                </div>
                <div className="text-white/60 text-xs font-normal">
                  {rev.sub}
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Verification Badges */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-white/70 text-xs sm:text-sm font-semibold tracking-wide">
          {badges.map((b, i) => (
            <div key={i} className="flex items-center gap-2 hover:text-[#00CE44] transition-colors">
              <span className="text-[#00CE44]">{b.icon}</span>
              <span>{b.label}</span>
              {i < badges.length - 1 && (
                <span className="hidden sm:inline-block ml-6 text-white/20">|</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
