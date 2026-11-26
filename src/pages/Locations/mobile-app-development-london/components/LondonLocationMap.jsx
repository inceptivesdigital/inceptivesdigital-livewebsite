export default function LondonLocationMap() {
  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=275+New+North+Road+Islington+London+N1+7AA+United+Kingdom'

  return (
    <section className="w-full bg-[#000000] text-white relative overflow-hidden">
      <div className="w-full">
        <div className="relative bg-[#000000] border-0 overflow-hidden shadow-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Column: Details */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 xl:px-20 lg:py-20 flex flex-col justify-between text-left relative z-10 bg-[#000000]">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18] mb-4">
                  Engineering Digital Products for{' '}
                  <span className="text-[#00CE44]">London&apos;s Competitive Market</span>
                </h2>

                <div className="flex items-start gap-3 text-white/90 text-base sm:text-lg mb-5">
                  <svg className="w-5 h-5 shrink-0 mt-1" viewBox="0 0 24 24" fill="#00CE44">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span>275 New North Road, Islington, London, N1 7AA, United Kingdom</span>
                </div>

                <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8 font-normal">
                  From fintech startups to established enterprises, our London team works with businesses that need software built for performance, reliability, and long-term growth.
                </p>
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
            <div className="lg:col-span-6 relative min-h-[420px] lg:min-h-[520px] overflow-hidden bg-[#181a20]">
              <iframe
                title="Inceptives Digital London Office - 275 New North Road"
                src="https://www.google.com/maps?q=51.5356,-0.0954&hl=en&z=15&output=embed"
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
