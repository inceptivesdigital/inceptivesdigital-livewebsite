import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function EducationCta1() {
  return (
    <section className="py-16 lg:py-20 bg-[#000000] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-[1.18] mb-4">
              Ready to Innovate in{' '}
              <span className="text-[#00CE44]">EdTech?</span>
            </h2>
            <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
              From custom LMS platforms to AI-powered learning apps, our developers can help define the right approach for your education product.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00CE44] text-black font-medium text-base rounded-none hover:bg-[#00e04b] transition-all duration-200 cursor-pointer shadow-none"
            >
              <span>Let&apos;s Schedule a Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <img
              src="/assets/education/edu-cta.png"
              alt="EdTech Mobile Learning Solution"
              className="w-full max-w-[480px] h-auto object-contain select-none"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
