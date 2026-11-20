import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function FintechCta3() {
  return (
    <section
      className="py-24 lg:py-32 bg-[#000000] text-white relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/assets/fintech/cta-banner.png')`,
      }}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px] relative z-10">
        <div className="max-w-2xl text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-[1.18] mb-7">
            Get the precise cost for your specific{' '}
            <span className="text-[#00CE44]">fintech application</span> before committing to a build.
          </h2>
          <Link
            to="/contact-us"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00CE44] text-black font-medium text-base rounded-none hover:bg-[#00e04b] transition-all duration-200 cursor-pointer shadow-none"
          >
            <span>Estimate My Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
