import { MapPin } from 'lucide-react'

export default function SFLocationMap() {
  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=490+Post+St+Ste+500+San+Francisco+CA+94102'

  return (
    <section className="w-full bg-[#000000] text-white relative overflow-hidden">
      <div className="w-full">
        <div className="relative bg-[#000000] border-0 overflow-hidden shadow-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Column: Details */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 xl:px-20 lg:py-20 flex flex-col justify-between text-left relative z-10 bg-[#000000]">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.18] mb-4">
                  Where San Francisco&apos;s Most Demanding{' '}
                  <span className="text-[#00CE44]">Digital Products</span> Are Built
                </h2>

                <div className="flex items-start gap-3 text-white/90 text-base sm:text-lg mb-5">
                  <MapPin className="w-5 h-5 text-[#00CE44] shrink-0 mt-1" />
                  <span>490 Post St, Ste 500, San Francisco, CA 94102, United States</span>
                </div>

                <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8 font-normal">
                  Our Union Square location is the birthplace of products used by millions. This is where innovation meets unparalleled engineering for companies pushing boundaries.
                </p>
              </div>

              {/* Get Directions Button */}
              <div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors border-0 no-underline shadow-md cursor-pointer"
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Live Google Map (Zoomed Out, Dark Themed) */}
            <div className="lg:col-span-6 relative min-h-[420px] lg:min-h-[520px] overflow-hidden bg-[#181a20]">
              <iframe
                title="Inceptives Digital San Francisco Office - 490 Post St Union Square"
                src="https://www.google.com/maps?q=490+Post+St,+San+Francisco,+CA+94102&hl=en&z=14&output=embed"
                style={{
                  border: 0,
                  filter: 'invert(90%) hue-rotate(180deg) contrast(95%)',
                }}
                allowFullScreen=""
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full select-none"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-transparent to-transparent hidden lg:block pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
