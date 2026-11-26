export default function NYLocationMap() {
  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=1178+Broadway+3rd+Floor+New+York+NY+10001'

  return (
    <section className="py-20 lg:py-28 bg-[#000000] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <div className="relative rounded-[28px] bg-[#121317] border-0 overflow-hidden shadow-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Column: Details */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-between text-left relative z-10 bg-[#121317]/95">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18] mb-4">
                  Sophisticated Digital Products.{' '}
                  <span className="text-[#00CE44]">Engineered in Manhattan</span>
                </h2>

                <div className="flex items-start gap-3 text-white/90 text-base sm:text-lg mb-5">
                  <svg className="w-5 h-5 shrink-0 mt-1" viewBox="0 0 24 24" fill="#00CE44">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span>1178 Broadway, 3rd Floor, New York, NY 10001, United States</span>
                </div>

                <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  The Broadway address places Inceptives Digital in Manhattan’s NoMad area, close to businesses across technology, retail, finance, and professional services. Mobile app developers in New York can support local product discussions while delivery teams handle the technical work under an agreed project plan.
                </p>

                <div className="flex flex-wrap items-center gap-3 mb-7">
                  {['8+ Years', '70+ Apps', '4.9 ★ Clutch'].map((badge) => (
                    <span
                      key={badge}
                      className="px-4 py-2 rounded-lg bg-[#181a20] border border-white/10 text-xs sm:text-sm font-semibold text-[#00CE44]"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Get Directions Button */}
              <div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors border-0 no-underline cursor-pointer"
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Live Google Map */}
            <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-full overflow-hidden bg-[#181a20] rounded-b-[28px] lg:rounded-b-none lg:rounded-r-[28px]">
              <iframe
                title="Inceptives Digital New York Office - 1178 Broadway"
                src="https://maps.google.com/maps?q=40.745404,-73.988827+(Inceptives+Digital+New+York)&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: 'invert(90%) hue-rotate(180deg) contrast(95%)',
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[380px] lg:min-h-full select-none"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#121317] via-transparent to-transparent hidden lg:block pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
