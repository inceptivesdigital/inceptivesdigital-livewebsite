import { ArrowRight, TrendingUp, Users } from 'lucide-react'

export default function AustinMarketOpportunities() {
  return (
    <section className="py-20 lg:py-28 bg-[#07080a] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Mobile App Screen Showcase */}
          <div className="lg:col-span-5 flex justify-center items-center order-2 lg:order-1">
            <div className="relative max-w-md w-full flex justify-center items-center">
              {/* Subtle green ambient backlight */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#00CE44]/15 rounded-full blur-[100px] pointer-events-none" />
              
              <img
                src="/assets/locations/austin/austin-market-mobiles.png"
                alt="Austin Mobile App Showcase"
                className="relative z-10 w-full max-w-[380px] sm:max-w-[420px] lg:max-w-full h-auto object-contain select-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Heading, Paragraphs & Stats */}
          <div className="lg:col-span-7 text-left order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18] mb-6">
              Austin's Expanding Economy Opens{' '}
              <span className="text-[#00CE44]">New Opportunities</span> for Mobile App Development
            </h2>

            <p className="text-white/80 text-base sm:text-lg leading-relaxed font-normal mb-6">
              Austin's growing population and expanding technology workforce create opportunities for businesses planning their next digital product. An earlier City of Austin forecast projects the metropolitan population could approach 2.94 million by 2030, expanding the potential customer base for local services, consumer platforms, and digital businesses.
            </p>

            <p className="text-white/80 text-base sm:text-lg leading-relaxed font-normal mb-8">
              Technology investment also extends beyond Austin's city limits. Texas workforce projections anticipate 29% growth in software developer employment between 2024 and 2034. For businesses preparing to compete in this evolving market, Inceptives Digital provides custom mobile app development services in Austin, helping startups and SMBs with product discovery and development around genuine customer needs.
            </p>

            {/* Micro Data Badges: Clean rounded cards without harsh border */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-[#12141a] rounded-[20px] p-6 text-left border-0 transition-all duration-300 hover:bg-[#181a22]">
                <div className="flex items-center gap-2 text-[#00CE44] mb-2 font-bold text-2xl">
                  <Users className="w-6 h-6" />
                  <span>2.94M</span>
                </div>
                <p className="text-xs sm:text-sm text-white/70">
                  Projected Austin Metro Population by 2030
                </p>
              </div>

              <div className="bg-[#12141a] rounded-[20px] p-6 text-left border-0 transition-all duration-300 hover:bg-[#181a22]">
                <div className="flex items-center gap-2 text-[#00CE44] mb-2 font-bold text-2xl">
                  <TrendingUp className="w-6 h-6" />
                  <span>+29%</span>
                </div>
                <p className="text-xs sm:text-sm text-white/70">
                  Projected Software Engineering Growth in Texas
                </p>
              </div>
            </div> */}

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors"
            >
              Explore Your App Opportunity
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
