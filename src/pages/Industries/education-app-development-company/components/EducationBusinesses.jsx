import { Rocket, School, GraduationCap, MonitorPlay, Briefcase, Award, CheckCircle2 } from 'lucide-react'

const businesses = [
  {
    icon: Rocket,
    title: 'EdTech Startups',
    bullets: [
      'Education app MVPs',
      'AI-powered learning apps',
      'Subscription-based learning platforms',
      'Gamified learning apps',
    ],
  },
  {
    icon: School,
    title: 'Schools and K–12 Institutions',
    bullets: [
      'Student learning apps',
      'Parent communication apps',
      'Attendance management systems',
      'School administration apps',
      'Homework tracking apps',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Universities and Colleges',
    bullets: [
      'Student portals',
      'Campus learning apps',
      'Academic assessment systems',
      'Course enrollment apps',
    ],
  },
  {
    icon: MonitorPlay,
    title: 'Online Education Providers',
    bullets: [
      'On-demand course apps',
      'Virtual classroom apps',
      'Online tutoring platforms',
    ],
  },
  {
    icon: Briefcase,
    title: 'Corporate Training Providers',
    bullets: [
      'Employee training apps',
      'Compliance training platforms',
      'Skills assessment apps',
      'Learning analytics dashboards',
    ],
  },
  {
    icon: Award,
    title: 'Professional Certification Organizations',
    bullets: [
      'Exam preparation apps',
      'Online examination systems',
      'Digital certification platforms',
      'Credential verification systems',
      'Continuing education tracking apps',
    ],
  },
]

export default function EducationBusinesses() {
  return (
    <section className="py-16 sm:py-24 bg-[#000000] text-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18] mb-4">
            Education Businesses{' '}
            <span className="text-[#00CE44]">We Build Learning Apps For</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Inceptives Digital works with EdTech startups, academic institutions, and enterprise learning providers across the US. Our education app developers adapt each platform to its learning model and operational requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch auto-rows-fr">
          {businesses.map((biz) => {
            const Icon = biz.icon
            return (
              <div
                key={biz.title}
                className="bg-[#1b1c21] border border-white/10 hover:border-[#00CE44]/60 rounded-[18px] p-7 sm:p-8 flex flex-col justify-start text-left transition-colors duration-200 h-full"
              >
                <div className="w-11 h-11 p-0 bg-transparent border-0 mb-5 flex items-center justify-start shrink-0">
                  <Icon className="w-full h-full text-[#00CE44]" strokeWidth={1.75} />
                </div>
                <h3 className="text-[#00CE44] text-[19px] sm:text-[21px] font-bold leading-snug mb-4">
                  {biz.title}
                </h3>
                <ul className="space-y-2.5 text-white/85 text-[14.5px] sm:text-[15.5px]">
                  {biz.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#00CE44] shrink-0 mt-1" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
