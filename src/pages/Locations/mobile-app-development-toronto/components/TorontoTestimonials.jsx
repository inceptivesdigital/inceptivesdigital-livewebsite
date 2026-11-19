export default function TorontoTestimonials() {
  const reviews = [
    {
      name: 'Collis Maddox',
      role: 'Owner/Designer, MaddTech',
      quote:
        'Inceptives Digital excels at translating complex, abstract product requirements into high-performance, production-ready software. Their execution is seamless.',
    },
    {
      name: 'Kirk Flaming',
      role: 'Owner, Pulse Check Timer',
      quote:
        'From initial product strategy to deployment, Inceptives Digital demonstrated exceptional technical discipline. They delivered a highly scalable mobile product ahead of schedule without compromising architectural integrity.',
    },
    {
      name: 'Dorrin Rosenfeld',
      role: 'DC & Owner, State of the Art Chiropractic',
      quote:
        'Inceptives Digital did not just execute a brief; they aligned perfectly with our operational goals. They engineered a reliable digital ecosystem that completely modernized our workflow.',
    },
    {
      name: 'Gary Dixon',
      role: 'Founder, StakBread',
      quote:
        'We needed an engineering partner capable of architecting a highly scalable, complex social commerce platform. Inceptives Digital mapped out a precise technical strategy demonstrating deep understanding of data architecture, system performance, and user-centric design.',
    },
    {
      name: 'Ariel Rodriguez',
      role: 'Founder, Dropryde',
      quote:
        'The engineering rigor at Inceptives Digital is outstanding. They managed our complex scope of work with meticulous precision from initial system architecture to the final deployment phases.',
    },
  ]

  const trustBadges = [
    {
      name: 'Clutch',
      href: 'https://clutch.co/profile/inceptives-digital',
      src: '/assets/clutch.png',
      alt: 'Clutch Review Badge',
    },
    {
      name: 'Bark',
      href: 'https://www.bark.com/en/us/company/inceptives-digital/Pww4ae/',
      src: '/assets/bark.png',
      alt: 'Bark Review Badge',
    },
    {
      name: 'Trustpilot',
      href: 'https://www.trustpilot.com/review/inceptivesdigital.com',
      src: '/assets/trustpilot.png',
      alt: 'Trustpilot Review Badge',
    },
  ]

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{
        background: 'linear-gradient(275deg, rgba(0, 206, 68, 0.45) 0%, #000000 51%)',
      }}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading, Text, Trust Badges */}
          <div className="flex flex-col justify-start text-left max-w-xl">
            <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-[#00CE44] mb-3">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-5">
              From Product Vision to{' '}
              <span className="text-[#00CE44]">Long-Term Partnership</span>
            </h2>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10">
              Every successful product starts with alignment between the people building it and the people who need it. These stories reflect the collaboration, trust, and product decisions behind our work.
            </p>

            {/* Trust Badges Row with Banner-style Links */}
            <div className="flex items-center gap-6 sm:gap-8 flex-wrap">
              {trustBadges.map((badge) => (
                <a
                  key={badge.name}
                  href={badge.href}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="transition-transform duration-200 hover:scale-105 inline-flex items-center justify-center"
                >
                  <img
                    src={badge.src}
                    alt={badge.alt}
                    className="h-8 sm:h-9 md:h-10 w-auto max-w-[115px] sm:max-w-[130px] object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Scrollable Review Cards with Custom Green Scrollbar */}
          <div className="w-full">
            <div
              className="toronto-testimonials-scrollbar max-h-[520px] sm:max-h-[580px] lg:max-h-[600px] overflow-y-auto space-y-5 pr-3 sm:pr-4"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#00CE44 #1b1b1b',
              }}
            >
              {reviews.map((rev, index) => (
                <div
                  key={index}
                  className="bg-[#565656]/25 backdrop-blur-md rounded-[20px] p-6 sm:p-7 border-0 transition-all duration-200 hover:bg-[#565656]/35 shadow-none"
                >
                  {/* Quote Text */}
                  <p className="text-white text-sm sm:text-[15px] leading-[23px] font-normal mb-5">
                    &ldquo;{rev.quote}&rdquo;
                  </p>

                  {/* Author Row: Green Name + Muted Role */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 pt-2 border-t border-white/[0.06]">
                    <span className="font-medium text-[#00CE44] text-sm sm:text-base">
                      {rev.name}
                    </span>
                    <span className="text-white/60 text-xs sm:text-sm">
                      {rev.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Embedded CSS for WebKit Custom Scrollbar matching #00CE44 */}
      <style>{`
        .toronto-testimonials-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .toronto-testimonials-scrollbar::-webkit-scrollbar-track {
          background: #1b1b1b;
          border-radius: 20px;
        }
        .toronto-testimonials-scrollbar::-webkit-scrollbar-thumb {
          background-color: #00CE44;
          border-radius: 20px;
        }
        .toronto-testimonials-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #00e04b;
        }
      `}</style>
    </section>
  )
}
