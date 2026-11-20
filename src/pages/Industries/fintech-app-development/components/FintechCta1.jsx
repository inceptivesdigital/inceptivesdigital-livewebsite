import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function FintechCta1() {
  return (
    <section className="py-16 lg:py-20 bg-[#000000] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-[1.18] mb-7">
              Take your place in the future of finance with our{' '}
              <span className="text-[#00CE44]">expert fintech app developers.</span>
            </h2>
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00CE44] text-black font-medium text-base rounded-none hover:bg-[#00e04b] transition-all duration-200 cursor-pointer shadow-none"
            >
              <span>Discuss Your Idea With Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <img
              src="/assets/fintech/fintech-cta.png"
              alt="Fintech Mobile Application Solutions"
              className="w-full max-w-[480px] h-auto object-contain select-none"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
