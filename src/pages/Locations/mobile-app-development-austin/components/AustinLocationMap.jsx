import { MapPin } from 'lucide-react'

export default function AustinLocationMap() {
  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=5900+Balcones+Drive+STE+100+Austin+Texas+78731'

  return (
    <section className="w-full bg-[#121317] text-white relative overflow-hidden">
      <div className="w-full">
        <div className="relative bg-[#121317] border-0 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Column: Details */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 xl:px-20 lg:py-20 flex flex-col justify-between text-left relative z-10 bg-[#121317]/95">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.18] mb-4">
                  Building Austin’s Most Resilient{' '}
                  <span className="text-[#00CE44]">Digital Products</span>
                </h2>

                <div className="flex items-start gap-3 text-white/90 text-base sm:text-lg mb-5">
                  <MapPin className="w-5 h-5 text-[#00CE44] shrink-0 mt-1" />
                  <span>5900 Balcones Drive STE 100, Austin, Texas 78731 United States</span>
                </div>

                <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8 font-normal">
                  Inceptives Digital serves Austin businesses from its location at 5900 Balcones Drive, supporting startups and established companies with custom mobile app development.
                </p>
              </div>

              {/* Get Directions Button */}
              <div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors border-0 no-underline cursor-pointer"
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Live Google Map */}
            <div className="lg:col-span-6 relative min-h-[400px] lg:min-h-[500px] overflow-hidden bg-[#181a20]">
              <iframe
                title="Inceptives Digital Austin Office - 5900 Balcones Drive"
                src="https://maps.google.com/maps?q=5900+Balcones+Drive+STE+100,+Austin,+Texas+78731&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: 'invert(90%) hue-rotate(180deg) contrast(95%)',
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[400px] lg:min-h-[500px] select-none"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#121317] via-transparent to-transparent hidden lg:block pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
