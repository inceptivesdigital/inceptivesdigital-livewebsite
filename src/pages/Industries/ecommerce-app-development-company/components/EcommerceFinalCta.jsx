import React from 'react'

const kpiPills = [
  { value: '50%', label: 'Increase in Customer Acquisition' },
  { value: '70%', label: 'Growth in User Engagement' },
  { value: '40%', label: 'Reduction in Cart Abandonment' },
  { value: '35%', label: 'Boost in Sales' },
]

export default function EcommerceFinalCta() {
  return (
    <section className="w-full bg-[#111111] text-white py-16 md:py-24 overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Copy */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-[1.16] text-white mb-5">
              Hire{' '}
              <span className="text-[#00CE44]">eCommerce App Developers</span>{' '}
              for Your Next Commerce Project
            </h2>
            <p className="text-white/80 text-[15px] sm:text-[17px] leading-[1.68] font-normal max-w-[600px] mb-8">
              Bring your shopping app or marketplace requirements to Inceptives Digital and discuss the engineering team needed to deliver your product.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#00CE44] hover:bg-[#00b83d] text-black font-medium text-[15px] md:text-[16px] px-8 py-4 rounded-none transition-colors duration-200"
            >
              Hire Our eCommerce Developers
            </a>
          </div>

          {/* Right Mockup + KPI Pills */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            <div className="sm:col-span-7 flex justify-center">
              <img
                src="/assets/ecommerce/ecommerces-section.png"
                alt="Hire eCommerce App Developers for Your Next Commerce Project"
                className="w-full max-w-[340px] h-auto object-contain drop-shadow-[0_24px_50px_rgba(0,206,68,0.18)]"
                loading="lazy"
              />
            </div>

            <div className="sm:col-span-5 flex flex-col gap-3.5">
              {kpiPills.map((pill) => (
                <div
                  key={pill.label}
                  className="bg-[#23252b] border border-white/10 rounded-full px-5 py-3.5 text-left"
                >
                  <span className="text-[#00CE44] font-bold text-[15px] mr-1.5">
                    {pill.value}
                  </span>
                  <span className="text-white/90 text-[13px] sm:text-[14px] font-medium">
                    {pill.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
