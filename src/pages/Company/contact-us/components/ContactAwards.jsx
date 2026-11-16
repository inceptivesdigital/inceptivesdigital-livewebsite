const awards = [
  { src: '/assets/awards-images/award-designrush.webp', alt: 'DesignRush Top Mobile App Development Companies award badge' },
  { src: '/assets/awards-images/award-top-developers.png', alt: 'Top Mobile App Developers 2025 Award' },
  { src: '/assets/awards-images/award-clutch-austin.png', alt: 'Top Application Management and Support Company in Austin 2025 Clutch award badge' },
  { src: '/assets/awards-images/award-rightfirms.png', alt: 'Top Service Provider Award Badge by RightFirms' },
  { src: '/assets/awards-images/award-clutch-gaming.png', alt: 'Clutch Top Software Developers in Gaming, Texas award badge' },
]

export default function ContactAwards() {
  return (
    <section className="py-16 sm:py-20 bg-[#181818] border-t border-white/[0.06]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <h2 className="text-center font-bold text-3xl sm:text-4xl lg:text-[40px] text-white tracking-tight leading-tight mb-12 sm:mb-16">
          Industry Awards and Achievements Backing Our Expertise
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
          {awards.map((a) => (
            <img
              key={a.src}
              src={a.src}
              alt={a.alt}
              className="h-24 sm:h-28 lg:h-32 w-auto object-contain select-none"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
