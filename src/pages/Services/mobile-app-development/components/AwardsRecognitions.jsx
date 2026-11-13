export default function AwardsRecognitions() {
  const awards = [
    {
      id: 'designrush',
      src: '/assets/mobile-app/new-review-icon-add2.webp',
      alt: 'DesignRush Top Mobile App Development Companies award badge',
    },
    {
      id: 'top-developers',
      src: '/assets/mobile-app/badge-top-mobile-app-developers-2025.png',
      alt: 'Top Mobile App Developers 2025 Award',
    },
    {
      id: 'clutch-austin',
      src: '/assets/mobile-app/new-review-icon-add6.png',
      alt: 'Top Application Management and Support Company in Austin 2025 Clutch award badge',
    },
    {
      id: 'rightfirms',
      src: '/assets/mobile-app/rightfirms-badge-company.png',
      alt: 'Top Service Provider Award Badge by RightFirms',
    },
    {
      id: 'clutch-gaming-texas',
      src: '/assets/mobile-app/new-review-icon-add4.png',
      alt: 'Clutch Top Software Developers in Gaming, Texas award badge',
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#1d1d1d] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-[40px] text-white text-center tracking-tight leading-tight mb-4">
            Awards &amp; Recognition for Our Mobile App Development Expertise
          </h2>
          <p className="text-white/90 text-[16px] text-center leading-relaxed font-normal">
            Inceptives Digital has earned recognition across iOS, Android, and cross-platform engineering categories. These awards are a true reflection of our presence among mobile development providers evaluated by Clutch and other top platforms.
          </p>
        </div>

        {/* All 5 Awards at Equal Uniform Size, No Boxes, No Borders */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-14 lg:gap-18 xl:gap-20">
          {awards.map((award) => (
            <div
              key={award.id}
              className="h-24 sm:h-28 lg:h-32 w-auto max-w-[130px] sm:max-w-[150px] lg:max-w-[170px] flex items-center justify-center"
            >
              <img
                src={award.src}
                alt={award.alt}
                className="max-h-full max-w-full w-auto h-auto object-contain select-none"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
