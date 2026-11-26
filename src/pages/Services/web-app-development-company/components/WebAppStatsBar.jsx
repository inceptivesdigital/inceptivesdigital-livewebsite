function RocketFilledIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44" aria-hidden="true">
      <path d="M13.13 22.19l-1.63-3.83c1.57-.58 3.04-1.36 4.4-2.27l-2.77 6.1zM5.64 12.5l-3.83-1.63 6.1-2.77c-.91 1.36-1.69 2.83-2.27 4.4zM21.61 2.39S16.66.269 11 5.93c-2.19 2.19-3.5 4.6-4.35 6.71-.28.75-.09 1.57.46 2.13l2.13 2.12c.55.56 1.37.74 2.12.46 2.11-.85 4.52-2.16 6.71-4.35 5.67-5.67 3.54-10.61 3.54-10.61zm-7.07 7.07a2 2 0 1 1 2.83-2.83 2 2 0 0 1-2.83 2.83zM5.21 15.96l2.83 2.83c-1.56 1.56-4.24 1.41-4.24 1.41s-.15-2.68 1.41-4.24z" />
    </svg>
  )
}

function DevelopersFilledIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5zm0 12.4L4.2 10.5 2 11.6l10 5 10-5-2.2-1.1L12 14.4zm0 4.6l-7.8-3.9L2 16.2l10 5 10-5-2.2-1.1L12 19z" />
    </svg>
  )
}

function ExperienceFilledIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#00CE44" aria-hidden="true">
      <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 16H5V10h14v10zm-7-8a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm1 4.5h-2V14h1v1.5h1V16.5z" />
    </svg>
  )
}

function ClutchIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path
        d="M46.8 45.2C43.1 49.4 37.8 52 31.8 52C20.3 52 11 43.1 11 32C11 20.9 20.3 12 31.8 12C37.8 12 43.1 14.6 46.8 18.8L40.4 24.4C38.2 21.8 35.2 20.3 31.8 20.3C25.2 20.3 19.8 25.5 19.8 32C19.8 38.5 25.2 43.7 31.8 43.7C35.2 43.7 38.2 42.2 40.4 39.6L46.8 45.2Z"
        fill="#00CE44"
      />
      <circle cx="32.5" cy="32" r="5.2" fill="#00CE44" />
    </svg>
  )
}

export default function WebAppStatsBar() {
  const stats = [
    { value: '70+', label: 'Digital Products Delivered', Icon: RocketFilledIcon },
    { value: '150+', label: 'Development Professionals', Icon: DevelopersFilledIcon },
    { value: '8+', label: 'Years of Development Experience', Icon: ExperienceFilledIcon },
    { value: '4.7/5', label: 'Clutch Rating', Icon: ClutchIcon },
  ]

  return (
    <section className="bg-[#0B0B0B] border-y border-white/10 py-14 sm:py-16">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, label, Icon }) => (
            <div key={label} className="px-4 py-2 flex flex-col items-center">
              <div className="mb-3.5 flex items-center justify-center bg-transparent p-0 border-0">
                <Icon className="w-10 h-10" />
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
