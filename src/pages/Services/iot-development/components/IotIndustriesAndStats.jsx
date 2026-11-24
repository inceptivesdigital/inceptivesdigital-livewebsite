import { Link } from 'react-router-dom'

const INDUSTRIES = [
  { name: 'Healthcare', icon: '/assets/iot-app/heart-icon.webp', link: '/healthcare-app-development' },
  { name: 'Fitness', icon: '/assets/iot-app/fitness-icon.webp', link: '/fitness-app-development' },
  { name: 'e-Learning', icon: '/assets/iot-app/e-learn-icon.webp', link: '/education-app-development-company' },
  { name: 'Real Estate', icon: '/assets/iot-app/Real-state-icon.webp', link: '/real-estate-app-development-company' },
  { name: 'Dating', icon: '/assets/iot-app/dating-icon.webp', link: '/dating-app-development-company' },
  { name: 'Travel', icon: '/assets/iot-app/travel-icon.webp', link: '/travel-app-development-company' },
  { name: 'Fintech', icon: '/assets/iot-app/fintech-icon.webp', link: '/fintech-app-development' },
  { name: 'Food Delivery', icon: '/assets/iot-app/food-delivery-icon.webp', link: '/food-delivery-app-development' },
  { name: 'e-Commerce', icon: '/assets/iot-app/e-Commerce-icon.webp', link: '/ecommerce-app-development-company' },
]

const STATS = [
  { value: '70+', label: 'Apps Launched', icon: '/assets/mobile-app/apps-launch.svg' },
  { value: '150+', label: 'Active Developers', icon: '/assets/mobile-app/active-developer.svg' },
  { value: '3M+', label: 'App Downloads', icon: '/assets/mobile-app/app-downloads.svg' },
  { value: '5.0', label: 'Rating on Clutch', icon: '/assets/mobile-app/rating.svg' },
]

export default function IotIndustriesAndStats() {
  return (
    <>
      <section className="py-16 sm:py-24 bg-[#000000] text-white">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2] mb-4">
              Industry Focused Next-Gen{' '}
              <span className="text-[#00CE44]">IoT Development Company</span>
            </h2>
            <p className="text-white/85 text-[15px] sm:text-[16px] leading-relaxed font-normal max-w-3xl mx-auto">
              Our IoT development company bridges devices and business with real-time data into smart, resilient, and secure applications that drive business growth and boost performance.
            </p>
          </div>

          {/* 9 Icon + Heading Cards (5 on top + 4 centered on bottom) */}
          <div className="flex flex-wrap justify-center gap-5 sm:gap-6 items-stretch">
            {INDUSTRIES.map((ind) => (
              <Link
                key={ind.name}
                to={ind.link}
                className="group w-[calc(50%-10px)] sm:w-[calc(33.333%-16px)] lg:w-[calc(20%-20px)] px-6 py-8 sm:py-9 rounded-[18px] bg-[#1c1d20] hover:bg-[#222429] border border-white/[0.08] hover:border-[#00CE44]/60 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 self-stretch select-none"
              >
                <div className="w-12 h-12 p-0 bg-transparent border-0 mb-4 flex items-center justify-center shrink-0">
                  <img
                    src={ind.icon}
                    alt={ind.name}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110 select-none p-0 border-0 bg-transparent"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-base sm:text-[17px] font-bold text-white group-hover:text-[#00CE44] transition-colors duration-200 leading-snug">
                  {ind.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Column Stats Bar */}
      <section className="py-14 sm:py-16 bg-[#18191d] border-y border-white/10">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center justify-center">
                <div className="w-11 h-11 p-0 bg-transparent border-0 mb-3 flex items-center justify-center">
                  <img
                    src={s.icon}
                    alt={s.label}
                    className="w-full h-full object-contain select-none p-0 border-0 bg-transparent"
                    loading="lazy"
                  />
                </div>
                <div className="text-[19px] font-bold text-[#00CE44] leading-[1.32] mb-2">
                  {s.value}
                </div>
                <div className="text-white text-[14px] sm:text-[15px] font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
