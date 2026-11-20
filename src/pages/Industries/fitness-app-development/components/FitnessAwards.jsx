export default function FitnessAwards() {
  const awards = [
    {
      id: 'designrush',
      src: '/assets/awards-images/award-designrush.webp',
      alt: 'DesignRush Top Mobile App Development Companies award badge',
    },
    {
      id: 'top-developers',
      src: '/assets/awards-images/award-top-developers.png',
      alt: 'Top Mobile App Developers 2025 Award',
    },
    {
      id: 'clutch-austin',
      src: '/assets/awards-images/award-clutch-austin.png',
      alt: 'Top Application Management and Support Company 2025 Clutch award badge',
    },
    {
      id: 'rightfirms',
      src: '/assets/awards-images/award-rightfirms.png',
      alt: 'Top Service Provider Award Badge by RightFirms',
    },
    {
      id: 'clutch-gaming-texas',
      src: '/assets/awards-images/award-clutch-gaming.png',
      alt: 'Clutch Top Software Developers award badge',
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#181818] relative overflow-hidden border-t border-white/[0.06]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <h2 className="text-center font-bold text-3xl sm:text-4xl lg:text-[40px] text-white tracking-tight leading-tight mb-12 sm:mb-16">
          Awards And <span className="text-[#00CE44]">Recognitions</span>
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-14 lg:gap-18 xl:gap-20">
          {awards.map((award) => (
            <div
              key={award.id}
              className="h-24 sm:h-28 lg:h-32 w-auto max-w-[130px] sm:max-w-[150px] lg:max-w-[170px] flex items-center justify-center transition-transform duration-200 hover:scale-105"
            >
              <img
                src={award.src}
                alt={award.alt}
                className="max-h-full max-w-full w-auto h-auto object-contain select-none brightness-100"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
