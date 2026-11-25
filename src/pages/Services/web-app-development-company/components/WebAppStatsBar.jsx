import { Rocket, Code2, CalendarClock, Award } from 'lucide-react'

export default function WebAppStatsBar() {
  const stats = [
    { value: '70+', label: 'Digital Products Delivered', Icon: Rocket },
    { value: '150+', label: 'Development Professionals', Icon: Code2 },
    { value: '8+', label: 'Years of Development Experience', Icon: CalendarClock },
    { value: '4.7/5', label: 'Clutch Rating', Icon: Award },
  ]

  return (
    <section className="bg-[#0B0B0B] border-y border-white/10 py-14 sm:py-16">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, label, Icon }) => (
            <div key={label} className="px-4 py-2 flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-[#00CE44]/10 text-[#00CE44] flex items-center justify-center mb-3.5">
                <Icon className="w-6 h-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-[#00CE44] leading-tight mb-1.5">
                {value}
              </div>
              <div className="text-white text-[14px] sm:text-[15px] font-medium">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
