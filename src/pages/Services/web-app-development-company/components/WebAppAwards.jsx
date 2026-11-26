const BADGES = [
  {
    title: 'Top App Development Company — Clutch, Plano 2026',
    image: '/assets/awards-images/award-clutch-austin.png',
  },
  {
    title: 'Top iPhone App Development Company — Clutch, United States 2026',
    image: '/assets/awards-images/award-clutch-gaming.png',
  },
  {
    title: 'Top Design Company — Clutch, Dallas 2026',
    image: '/assets/awards-images/award-rightfirms.png',
  },
  {
    title: 'Top User Experience Company — Clutch, Plano 2026',
    image: '/assets/awards-images/award-top-developers.png',
  },
]

export default function WebAppAwards() {
  return (
    <section className="py-16 sm:py-24 bg-[#0d0e11] text-white border-y border-white/10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading + 4 Clean Visual Badges */}
          <div className="lg:col-span-6 text-left">
            <span className="inline-block bg-transparent border-0 p-0 text-[#00CE44] text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
              Awards &amp; Recognition
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-8">
              Recognized as a{' '}
              <span className="text-[#00CE44]">Web App Development Company</span> That Delivers
            </h2>

            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              {BADGES.map((badge) => (
                <img
                  key={badge.title}
                  src={badge.image}
                  alt={badge.title}
                  className="h-20 sm:h-24 w-auto object-contain bg-transparent border-0 p-0 select-none"
                  loading="lazy"
                />
              ))}
            </div>
          </div>

          {/* Right Column: Recognition Copy */}
          <div className="lg:col-span-6 space-y-5 text-left text-white/85 text-[15px] sm:text-[16px] leading-[1.75]">
            <p>
              Clutch reviews come from actual clients, which is why the recognition means something. Inceptives Digital was named a Top App Development Company in Plano for 2026, following the same title in Fort Worth the year before. On the national stage, Clutch also ranked the team among the Top iPhone App Development Companies in the United States. Design and user experience got the same treatment: a Top Design Company win in Dallas and a Top User Experience Company title in Plano, both for 2026.
            </p>
            <p>
              RightFirms gave the team five-star ratings in Artificial Intelligence and Mobile App Development, and SoftwareWorld&apos;s client-based scoring landed Inceptives on its Top Rated and Highly Recommended lists for 2026. None of this changes how the team builds; it&apos;s still architecture first, design second, guessing never, but it does mean clients aren&apos;t just taking our word for it when they hear custom web app development company. The reviews back it up.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
