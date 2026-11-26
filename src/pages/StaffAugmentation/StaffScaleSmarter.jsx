import scaleImg from './assets/sec2-scale-smarter.webp'
import statApps from './assets/stat-apps-launched.webp'
import statDevs from './assets/stat-active-devs.webp'
import statDownloads from './assets/stat-app-downloads.webp'
import statClutch from './assets/stat-clutch-rating.webp'

const STATS = [
  { icon: statApps, value: '70+', label: 'Apps Launched' },
  { icon: statDevs, value: '150+', label: 'Active Developers' },
  { icon: statDownloads, value: '3M+', label: 'App Downloads' },
  { icon: statClutch, value: '5.0', label: 'Rating On Clutch' },
]

export default function StaffScaleSmarter() {
  return (
    <>
      {/* Section 2: Scale Smarter (Clean Image Right, Text Left) */}
      <section className="py-16 sm:py-24 bg-[#1d1d1d] relative overflow-hidden">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-14">
            <div className="lg:col-span-6 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18]">
                Scale Smarter With Our Staff Augmentation Services
              </h2>

              <p className="mt-5 text-white/85 text-sm sm:text-base lg:text-[17px] font-normal leading-relaxed">
                Are you looking to extend your team with top IT talent? Inceptives Digital has 8+ years of experience in providing IT solutions and consultancy services. Our staff augmentation services have connected multiple businesses with the top IT professionals with the right expertise, rapidly and cost-effectively. Whether you want to connect with developers, designers, and other tech professionals. In that case, we are here to help you with a proven track record of helping businesses hire the right experts.
              </p>
            </div>

            <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
              <img
                src={scaleImg}
                alt="Scale Smarter With Our Staff Augmentation Services"
                className="w-full max-w-[580px] h-auto object-contain select-none"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: 4-Column Borderless Stats Strip */}
      <section className="py-12 sm:py-16 bg-[#181818] relative overflow-hidden">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center"
              >
                <img
                  src={stat.icon}
                  alt={stat.label}
                  className="w-11 h-11 sm:w-12 sm:h-12 object-contain mb-3.5"
                  loading="lazy"
                />
                <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#00CE44] tracking-tight leading-none mb-2">
                  {stat.value}
                </h3>
                <p className="text-white text-sm sm:text-base font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
