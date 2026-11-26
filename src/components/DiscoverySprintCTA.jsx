import { Link } from 'react-router-dom'

export default function DiscoverySprintCTA() {
  return (
    <section className="relative overflow-hidden bg-[#121317] bg-[image:url('/assets/homecta.png')] bg-cover bg-no-repeat bg-right lg:bg-center py-20 sm:py-24 lg:py-28">
      {/* Subtle overlay on small screens to guarantee text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#121317] via-[#121317]/95 to-transparent pointer-events-none md:hidden" />

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] relative z-10">
        <div className="max-w-2xl text-left">
          
          {/* Span Tag: Discovery sprint */}
          <span className="text-[#00CE44] text-[18px] sm:text-[20px] font-bold italic tracking-wide block mb-3">
            Discovery sprint
          </span>

          {/* Heading H2 */}
          <h2 className="text-2xl sm:text-[30px] font-bold text-white tracking-tight leading-tight mb-5">
            Before Development Comes Product Clarity
          </h2>

          {/* Paragraph P: 18px font-size */}
          <p className="text-[16px] sm:text-[18px] text-slate-300 leading-relaxed font-normal mb-8 max-w-xl">
            A focused 2-week engagement that produces a validated product roadmap, technical architecture, UX wireframes, and a phased cost estimate. For founders and businesses who want certainty before commitment.
          </p>

          {/* Button: 18px font-size, 500 font-weight, sharp corners */}
          <div>
            <Link
              to="/discovery-sprint"
              style={{ fontWeight: 500 }}
              className="inline-flex items-center justify-center px-7 sm:px-8 py-3.5 sm:py-4 rounded-none bg-[#00CE44] hover:bg-[#00e04b] text-black font-medium text-[18px] tracking-tight transition-all duration-150 active:scale-95 shadow-none cursor-pointer border-0"
            >
              Start My Product Roadmap
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
