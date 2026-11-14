export default function BlockchainAwards() {
  const awards = [
    {
      id: 'designrush',
      src: '/assets/mobile-app/new-review-icon-add2.webp',
      alt: 'DesignRush Top App Development Companies award badge',
    },
    {
      id: 'top-developers',
      src: '/assets/mobile-app/badge-top-mobile-app-developers-2025.png',
      alt: 'Top App Developers Award',
    },
    {
      id: 'clutch-austin',
      src: '/assets/mobile-app/new-review-icon-add6.png',
      alt: 'Top Application Management and Support Company in Austin Clutch award badge',
    },
    {
      id: 'rightfirms',
      src: '/assets/mobile-app/rightfirms-badge-company.png',
      alt: 'Top Service Provider Award Badge by RightFirms',
    },
    {
      id: 'clutch-gaming-texas',
      src: '/assets/mobile-app/new-review-icon-add4.png',
      alt: 'Clutch Top Software Developers in Texas award badge',
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#1d1d1d] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12 sm:mb-16">
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-[40px] text-white tracking-tight leading-tight">
            <span className="text-[#00CE44]">Awards</span> And Recognitions
          </h2>

          <div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-sm sm:text-base transition-colors border-0"
            >
              Get a Call Now
            </a>
          </div>
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
