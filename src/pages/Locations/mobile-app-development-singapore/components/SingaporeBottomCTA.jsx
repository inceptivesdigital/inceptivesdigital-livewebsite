import { Link } from 'react-router-dom'

export default function SingaporeBottomCTA() {
  return (
    <section className="py-20 lg:py-28 bg-[#0c0d10] text-white relative overflow-hidden border-t border-white/5">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px] text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#00CE44] text-xs sm:text-sm font-semibold uppercase tracking-widest block mb-4">
            Take The Next Step
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.15] mb-6">
            Have a Mobile Product Idea?{' '}
            <span className="text-[#00CE44]">Let’s Define the Right Path Forward</span>
          </h2>

          <p className="text-white/85 text-base sm:text-lg lg:text-[19px] leading-relaxed mb-10 font-normal">
            Discuss your goals, technical requirements, and roadmap with a team experienced in building digital products across industries.
          </p>

          <Link
            to="/contact-us"
            className="inline-flex items-center justify-center px-10 py-4 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-base transition-colors border-0"
          >
            Book a Strategy Consultation
          </Link>
        </div>
      </div>
    </section>
  )
}
