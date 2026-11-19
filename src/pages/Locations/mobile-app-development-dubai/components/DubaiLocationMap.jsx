import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'

export default function DubaiLocationMap() {
  const hubs = [
    { name: 'DIFC (Dubai International Financial Centre)', desc: 'Fintech, WealthTech & Islamic banking hubs' },
    { name: 'Dubai Internet City & Media City', desc: 'Tech enterprise, SaaS scale-ups & digital media' },
    { name: 'Downtown Dubai & Business Bay', desc: 'Corporate headquarters, hospitality & commerce' },
    { name: 'Dubai South & DWC', desc: 'Aviation, logistics, freight & global supply chain' },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#0a0b0e] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 text-left">
            <span className="text-[#00CE44] text-xs sm:text-sm font-semibold uppercase tracking-widest block mb-3">
              Regional Coverage
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Engineering Mobile Solutions Across{' '}
              <span className="text-[#00CE44]">Dubai&apos;s Tech Hubs</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 font-normal">
              From high-growth scale-ups in DIFC to enterprise platforms operating across the GCC, Inceptives Digital provides end-to-end mobile engineering with localized product strategy and technical leadership.
            </p>

            <div className="space-y-4 mb-8">
              {hubs.map((h, i) => (
                <div key={i} className="flex items-start gap-3 bg-[#12141a] p-4 rounded-xl">
                  <MapPin className="w-5 h-5 text-[#00CE44] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-white text-sm sm:text-base">{h.name}</h3>
                    <p className="text-xs sm:text-sm text-slate-400">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm sm:text-base font-medium text-black bg-[#00CE44] hover:bg-[#00b53c] transition-all duration-200 rounded-none shadow-none uppercase tracking-wide cursor-pointer"
            >
              Connect With Our Dubai Team
            </Link>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[24px] overflow-hidden border-0 shadow-none bg-[#12141a]">
              <img
                src="/assets/locations/dubai/Rectangle-6508.jpg"
                alt="Dubai Skyline and Technology Infrastructure"
                className="w-full h-[400px] sm:h-[480px] object-cover filter brightness-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 backdrop-blur-md rounded-xl border border-white/10">
                <div className="text-sm font-bold text-white">Inceptives Digital &bull; Dubai & GCC Operations</div>
                <div className="text-xs text-slate-300">Supporting iOS, Android & Cloud Engineering across the UAE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
