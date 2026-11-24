const REASONS_2026 = [
  'Higher engagement - It is observed that gamified apps keep users engaged 3 times longer than non-gamified apps.',
  'Revenue powerhouse - Global mobile gaming alone is set to eclipse $111B in revenue in 2025, making games the highest-grossing app category.',
  'Boost customer loyalty - Companies that implement gamification strategies have seen an increase in 22% brand loyalty.',
  'A viral growth engine - Social and reward-based game mechanics stimulate user acquisition at 50% faster than traditional apps.',
  'Monetization that works - In-app purchases, ads, and premium content made up 70%+ of app store revenues in games – far outpacing any other app category.',
]

export default function GameMarketGrowth() {
  return (
    <>
      {/* Why Businesses Are Developing Games in 2026 */}
      <section className="py-16 sm:py-24 bg-[#000000] text-white">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white tracking-tight leading-[1.15] mb-8 max-w-lg">
                Why Businesses Are Developing Games in 2026?
              </h2>

              <ul className="list-disc pl-5 space-y-4 text-white/95 text-[15px] sm:text-[16px] leading-[1.6] font-normal">
                {REASONS_2026.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <img
                src="/assets/mobile-game/seo-page-sec4-chart.webp"
                alt="Market Size (in USD Billions) by Years"
                className="w-full max-w-[660px] h-auto object-contain select-none"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How Can a Mobile Game App Grow Your Business */}
      <section
        className="relative py-20 sm:py-28 lg:py-32 bg-[#23103a] text-white overflow-hidden"
        style={{
          backgroundImage: 'url("/assets/mobile-game/mobile-game-sec12-bg.webp")',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        {/* Subtle left-only gradient so text is crisp while keeping the right portal character 100% vibrant */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent pointer-events-none" />

        <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="w-full lg:w-[48%] text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white tracking-tight leading-[1.15] mb-6">
              How Can a Mobile Game App Grow Your Business?
            </h2>
            <div className="space-y-5 text-white/95 text-sm sm:text-base lg:text-[16.5px] leading-[1.68] font-normal">
              <p>
                In 2024, the global mobile gaming industry was valued at $139.38 billion and was expected to reach $256.19 billion by 2030 at a compound annual growth rate (CAGR) of 10.2%. This shows that games can be a strong tool for increasing your brand presence and engagement, while creating additional revenue opportunities.
              </p>
              <p>
                Coca-Cola&rsquo;s Freestyle app serves as an excellent example of this. Coca-Cola gamified the vending experience by allowing users to make their own custom drink mixes, explore new flavors, unlock &ldquo;secret&rdquo; flavors, and earn rewards by scanning QR codes at Freestyle machines. The outcome? 2 million downloads, increased customer engagement, and an increase in store visits and purchases.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
