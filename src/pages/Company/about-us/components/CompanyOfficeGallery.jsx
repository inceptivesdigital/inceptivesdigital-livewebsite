export default function CompanyOfficeGallery() {
  const images = [
    {
      src: '/assets/about-us/image13.png',
      caption: 'Collaborative Problem Solving',
      tag: 'Office Culture',
      span: 'md:col-span-8 md:row-span-2',
    },
    {
      src: '/assets/about-us/about1.png',
      caption: 'Sprint Retrospectives & Planning',
      tag: 'Engineering',
      span: 'md:col-span-4 md:row-span-1',
    },
    {
      src: '/assets/about-us/about-men.png',
      caption: 'Architectural Review Sessions',
      tag: 'Design & Code',
      span: 'md:col-span-4 md:row-span-1',
    },
    {
      src: '/assets/about-us/about-img1.png',
      caption: 'Team Hackathons & Milestones',
      tag: 'Innovation',
      span: 'md:col-span-4 md:row-span-1',
    },
    {
      src: '/assets/about-us/about-img2.png',
      caption: 'Cross-Functional Strategy Hub',
      tag: 'Delivery',
      span: 'md:col-span-4 md:row-span-1',
    },
    {
      src: '/assets/about-us/about-img3.png',
      caption: 'Continuous AI Lab Experiments',
      tag: 'AI Systems',
      span: 'md:col-span-4 md:row-span-1',
    },
  ]

  return (
    <section className="py-20 sm:py-28 bg-[#050505] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <div className="text-[#00CE44] text-xs sm:text-sm font-bold uppercase tracking-widest mb-3">
            Life at Studio
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white text-center tracking-tight leading-[1.18] mb-4">
            A Peek Inside <span className="text-[#00CE44]">Inceptives Digital Office</span>
          </h2>
          <p className="text-white/70 text-sm sm:text-base text-center leading-relaxed font-normal max-w-2xl mx-auto">
            A collage of our teams collaborating, designing systems, solving business challenges, and celebrating engineering milestones together.
          </p>
        </div>

        {/* Dynamic Responsive Bento Collage */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-[240px] sm:auto-rows-[280px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative rounded-[22px] overflow-hidden border border-white/10 group cursor-pointer ${img.span} bg-[#111111]`}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-5 left-5 right-5 text-left">
                <span className="inline-block px-2.5 py-1 rounded bg-[#00CE44] text-black text-[11px] font-bold uppercase tracking-wider mb-1.5">
                  {img.tag}
                </span>
                <h4 className="text-white font-bold text-base sm:text-lg tracking-tight">
                  {img.caption}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
