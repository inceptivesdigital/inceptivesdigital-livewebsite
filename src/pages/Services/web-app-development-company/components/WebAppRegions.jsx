import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'

const LOCATIONS = [
  { name: 'London, UK', region: 'UNITED KINGDOM', to: '/mobile-app-development-company-london-uk' },
  { name: 'Toronto, Canada', region: 'CANADA', to: '/mobile-app-development-company-in-toronto-canada' },
  { name: 'Austin, TX', region: 'HQ · TEXAS', to: '/mobile-app-development-austin', isHq: true },
  { name: 'San Francisco, CA', region: 'CALIFORNIA', to: '/mobile-app-development-san-francisco' },
  { name: 'New York, NY', region: 'NEW YORK', to: '/mobile-app-development-new-york' },
  { name: 'Dubai, UAE', region: 'UNITED ARAB EMIRATES', to: '/mobile-app-development-company-dubai-uae' },
  { name: 'Singapore', region: 'SINGAPORE', to: '/mobile-app-development-company-singapore' },
]

export default function WebAppRegions() {
  return (
    <section className="py-16 sm:py-24 bg-[#000000] text-white border-b border-white/10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="max-w-3xl text-left mb-10 sm:mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#00CE44]" />
            <span className="text-[#00CE44] text-xs font-bold uppercase tracking-widest">
              Web App Development Company
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-4">
            Web App Development Company Based in{' '}
            <span className="text-[#00CE44]">7 Tech Regions</span>
          </h2>
          <p className="text-white/80 text-[15px] sm:text-[16px] leading-relaxed">
            Headquartered in Austin, building for anywhere. Inceptives Digital works across time zones with startups and enterprises alike, keeping communication direct and milestones clear no matter where the team on the other end is sitting.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
          {LOCATIONS.map((loc) => (
            <Link
              key={loc.name}
              to={loc.to}
              className={`group rounded-2xl p-5 flex flex-col items-center justify-center text-center transition-all duration-300 border ${
                loc.isHq
                  ? 'bg-[#142018] border-[#00CE44] hover:bg-[#192c1f]'
                  : 'bg-[#141519] border-white/10 hover:border-[#00CE44]/70 hover:bg-[#1a1c22]'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                  loc.isHq
                    ? 'bg-[#00CE44] text-black'
                    : 'bg-white/5 text-[#00CE44] group-hover:bg-[#00CE44] group-hover:text-black'
                }`}
              >
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-sm font-bold text-white group-hover:text-[#00CE44] transition-colors mb-1">
                {loc.name}
              </div>
              <div
                className={`text-[10px] font-semibold tracking-wider uppercase ${
                  loc.isHq ? 'text-[#00CE44]' : 'text-white/55'
                }`}
              >
                {loc.region}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
