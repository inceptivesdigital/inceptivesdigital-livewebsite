import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function FitnessCta3() {
  return (
    <section
      className="py-20 lg:py-24 bg-[#000000] text-white relative overflow-hidden bg-cover bg-right-bottom bg-no-repeat"
      style={{
        backgroundImage: `url('/assets/fitness/cata-fitness02.png')`,
      }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/20 pointer-events-none"
        aria-hidden="true"
      />

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px] relative z-10">
        <div className="max-w-2xl text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-[1.18] mb-4">
            Stop Estimating. Start With a Scope That Produces a{' '}
            <span className="text-[#00CE44]">Real Number.</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-8 font-normal">
            Get a scoped estimate based on your specific fitness product before committing to a full build.
          </p>
          <Link
            to="/contact-us"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00CE44] text-black font-medium text-base rounded-none hover:bg-[#00e04b] transition-all duration-200 cursor-pointer shadow-none"
          >
            <span>Book a Discovery Sprint</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
