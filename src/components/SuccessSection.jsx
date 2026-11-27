import { useState, useEffect, useRef } from 'react'

export default function SuccessSection() {
  const sectionRef = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
        }
      },
      { threshold: 0.25 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [hasAnimated])

  useEffect(() => {
    if (!hasAnimated) return

    const duration = 2000 // 2 seconds
    const frameRate = 1000 / 60 // 60 FPS
    const totalFrames = Math.round(duration / frameRate)

    let frame = 0
    const timer = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3)

      setCount1(Math.min(8, Math.round(easeOut * 8)))
      setCount2(Math.min(60, Math.round(easeOut * 60)))
      setCount3(Math.min(70, Math.round(easeOut * 70)))

      if (frame >= totalFrames) {
        clearInterval(timer)
        setCount1(8)
        setCount2(60)
        setCount3(70)
      }
    }, frameRate)

    return () => clearInterval(timer)
  }, [hasAnimated])

  return (
    <section
      id="success-numbers"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-[#0c0d10] relative overflow-hidden text-white"
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px] relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 xl:gap-20 items-center">
          
          {/* =========================================================================
              LEFT COLUMN: Stats Container with Green Border, Counters & Badges
              ========================================================================= */}
          <div className="flex flex-col gap-9 sm:gap-10">
            
            {/* Top Outer Card: Our Success In Numbers! */}
            <div className="relative border border-[#00CE44] rounded-[25px] p-5 sm:p-7 pt-8 bg-[#0c0d10]/90">
              
              {/* Card Header Badge (Centered at top border) */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0c0d10] px-4 py-0.5 border-0">
                <span className="text-[14px] sm:text-[16px] font-medium text-white tracking-wide whitespace-nowrap">
                  Our Success In Numbers!
                </span>
              </div>

              {/* Grid for Top 2 Stat Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5 mt-2">
                
                {/* Stat 1: 8+ Years */}
                <div className="bg-[#00CE44]/[0.08] rounded-[22px] sm:rounded-[25px] p-5 sm:p-6 flex flex-col items-center justify-center text-center">
                  <div className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#00CE44] tracking-tight leading-tight mb-1.5 sm:mb-2">
                    {count1}+ Years
                  </div>
                  <h4 className="text-[13px] sm:text-[14px] font-medium text-white/90 tracking-tight leading-normal">
                    Product development experience
                  </h4>
                </div>

                {/* Stat 2: 60+ Team Members */}
                <div className="bg-[#00CE44]/[0.08] rounded-[22px] sm:rounded-[25px] p-5 sm:p-6 flex flex-col items-center justify-center text-center">
                  <div className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#00CE44] tracking-tight leading-tight mb-1.5 sm:mb-2">
                    {count2}+
                  </div>
                  <h4 className="text-[13px] sm:text-[14px] font-medium text-white/90 tracking-tight leading-normal">
                    Team Members — Product, design, and engineering specialists
                  </h4>
                </div>

              </div>

              {/* Stat 3: 70+ Clients */}
              <div className="bg-[#00CE44]/[0.08] rounded-[22px] sm:rounded-[25px] p-5 sm:p-7 flex flex-col items-center justify-center text-center">
                <div className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#00CE44] tracking-tight leading-tight mb-1.5 sm:mb-2">
                  {count3}+ Clients
                </div>
                <h4 className="text-[13px] sm:text-[14px] font-medium text-white/90 tracking-tight leading-normal">
                  Supporting businesses across industries
                </h4>
              </div>

            </div>

            {/* Bottom Outer Card: Recognition From Industry Leader! */}
            <div className="relative border border-[#00CE44] rounded-[25px] p-6 sm:p-8 pt-8 bg-[#0c0d10]/90">
              
              {/* Card Header Badge (Centered at top border) */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0c0d10] px-4 py-0.5 border-0">
                <span className="text-[14px] sm:text-[16px] font-medium text-white tracking-wide whitespace-nowrap">
                  Recognition From Industry Leader!
                </span>
              </div>

              {/* 2 Badges: App of the Day & Microsoft MVP */}
              <div className="flex flex-row items-center justify-around gap-6 sm:gap-10 pt-1">
                
                {/* Badge 1: App Store Recognition */}
                <div className="flex items-center justify-center">
                  <img
                    src="/assets/success/counterbadges-1.png"
                    alt="App of the Day - App Store Recognition"
                    className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Badge 2: Microsoft MVP */}
                <div className="flex items-center justify-center">
                  <img
                    src="/assets/success/mvp-badge-1.png"
                    alt="Microsoft MVP Most Valuable Professional"
                    className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
                    loading="lazy"
                  />
                </div>

              </div>

            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: Modern Phone Mockups with Green Card Backdrop & Rotating Badge
              ========================================================================= */}
          <div className="relative flex items-center justify-center w-full">
            
            {/* Phones Mockup Image with Green Backdrop Card */}
            <div className="relative w-full max-w-[540px] lg:max-w-none flex items-center justify-center">
              <img
                src="/assets/success/success02-1.png"
                alt="Digital Products Portfolio Mockup Screens"
                className="w-full h-auto object-contain drop-shadow-2xl"
                loading="lazy"
              />

              {/* Rotating Badge: Contact Us Now / Let's Build Your App Together */}
              <a
                href="#contact"
                className="absolute right-0 top-0 group block"
                title="Contact Us Now!"
              >
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex items-center justify-center transition-transform duration-300 hover:scale-105">
                  <img
                    src="/assets/success/success-icon-1.png"
                    alt="Contact Us Now - Let's Build Your App Together"
                    className="w-full h-full object-contain animate-[spin_18s_linear_infinite]"
                  />
                </div>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
