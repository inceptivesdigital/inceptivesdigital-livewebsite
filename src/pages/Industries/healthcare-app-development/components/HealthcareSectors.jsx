import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function HealthcareSectors() {
  const sectors = [
    { name: 'Hospitals and Clinics', icon: '/assets/healthcare/sector1.svg' },
    { name: 'Telemedicine Providers', icon: '/assets/healthcare/sector2.svg' },
    { name: 'Healthcare and Wellness Centers', icon: '/assets/healthcare/sector3.svg' },
    { name: 'Diagnostic Laboratories', icon: '/assets/healthcare/sector4.svg' },
    { name: 'Health Insurance Companies', icon: '/assets/healthcare/sector5.svg' },
    { name: 'Pharmaceutical Firms', icon: '/assets/healthcare/sector6.svg' },
    { name: 'Mental Health Centers', icon: '/assets/healthcare/sector7.svg' },
    { name: 'Elderly Care Facilities', icon: '/assets/healthcare/sector8.svg' },
    { name: 'Home healthcare providers', icon: '/assets/healthcare/sector9.svg' },
    { name: 'Medical Research Organizations', icon: '/assets/healthcare/sector10.svg' },
  ]

  return (
    <section className="py-20 lg:py-24 bg-[#151515] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18]">
            Sectors Our <span className="text-[#00CE44]">Healthcare App Development</span> Company Builds For
          </h2>
        </div>

        {/* 5x2 Grid (10 Icon Cards) matching WordPress */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 mb-12">
          {sectors.map((sec, idx) => (
            <div
              key={idx}
              className="bg-[#202020] rounded-[20px] p-6 sm:p-7 flex flex-col items-center justify-center text-center border border-[#2B2B2B] hover:border-[#00CE44] transition-all duration-300 group min-h-[175px]"
            >
              <div className="w-14 h-14 flex items-center justify-center mb-4">
                <img
                  src={sec.icon}
                  alt={sec.name}
                  className="max-h-12 max-w-12 object-contain select-none"
                  loading="lazy"
                />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-[#00CE44] transition-colors leading-snug">
                {sec.name}
              </h3>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link
            to="/contact-us"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00CE44] text-black font-medium text-base rounded-none hover:bg-[#00e04b] transition-all duration-200 cursor-pointer shadow-none"
          >
            <span>Book a Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
