export default function IosWhyChooseUs() {
  const pillars = [
    {
      title: '96% First-Submission App Store Acceptance',
      desc: "Apple's review requirements influence how we develop iOS applications. Our team checks privacy declarations and relevant App Store guidelines before submission, with a reported 96% first-submission acceptance rate.",
    },
    {
      title: 'Complete Source Code Ownership',
      desc: "Your iPhone application's source code remains accessible throughout development. Git repository access and contractual IP transfer terms give clients control over their software without depending on our team indefinitely.",
    },
    {
      title: 'SLA-Backed iPhone App Maintenance',
      desc: (
        <>
          Our iPhone app development services include post-launch support under defined SLA terms that keep{' '}
          <a
            href="https://inceptivesdigital.com/blog/mobile-app-maintenance-cost"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            iPhone app maintenance cost
          </a>{' '}
          predictable, with engineers available for production issues and compatibility updates.
        </>
      ),
    },
    {
      title: 'Apple Platform Compatibility',
      desc: 'Annual iOS updates can change how existing app features behave. Our iPhone developers review new SDK releases through Xcode and test affected functionality before recommending updates.',
    },
    {
      title: 'Native iOS Security',
      desc: (
        <>
          <a
            href="https://inceptivesdigital.com/blog/mobile-app-security-best-practices"
            className="underline text-[#00CE44] hover:text-white transition-colors"
          >
            Mobile app security best practices
          </a>{' '}
          require controls beyond Apple’s built-in device protection for sensitive application data. Our iOS engineers use Keychain for credential storage and LocalAuthentication for biometric access through Face ID or Touch ID.
        </>
      ),
    },
    {
      title: 'Dedicated iOS Development Team',
      desc: "You'll have a designated project manager throughout your iOS development engagement. Regular sprint reviews keep working iPhone builds visible, so your team can assess progress before the next development milestone.",
    },
  ]

  const stats = [
    {
      value: '70+',
      label: 'apps delivered',
      icon: '/assets/mobile-app/apps-launch.svg',
    },
    {
      value: '3M+',
      label: 'downloads',
      icon: '/assets/mobile-app/app-downloads.svg',
    },
    {
      value: '150+',
      label: 'developers',
      icon: '/assets/mobile-app/active-developer.svg',
    },
    {
      value: '4.7',
      label: 'Clutch rating',
      icon: '/assets/mobile-app/rating.svg',
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-[#141414]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Section Header: Centered (H2 = 40px, Subtitle = 16px center) */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-[1.2] mb-4">
            The Standard That Makes Inceptives Digital a{' '}
            <span className="text-[#00CE44]">Top iOS App Development Company</span>
          </h2>
          <p className="text-white/90 text-[16px] leading-relaxed font-normal text-center max-w-3xl mx-auto">
            With eight years of experience across 20+ industries, Inceptives Digital brings native Apple expertise to custom iPhone app development. Our approach combines clear project ownership with the technical standards businesses expect from a reputable iOS app development company in the US.
          </p>
        </div>

        {/* 6 Cards Grid (matching live site structure without broken dummy icon) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14 sm:mb-20">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="p-7 sm:p-8 rounded-[16px] bg-[#242424] text-left border-0 shadow-none flex flex-col justify-start transition-colors hover:bg-[#282828]"
            >
              <h3 className="text-lg sm:text-xl font-bold text-[#00CE44] mb-3 leading-snug">
                {p.title}
              </h3>
              <p className="text-white/90 text-xs sm:text-[14px] leading-relaxed font-normal">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* PROOF METRICS ROW: 70+ apps delivered | 3M+ downloads | 150+ developers | 4.7 Clutch rating */}
        <div className="p-8 sm:p-10 rounded-[20px] bg-[#1e1e1e] border border-white/10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center justify-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 mb-3.5 flex items-center justify-center">
                  <img
                    src={s.icon}
                    alt={s.label}
                    className="w-full h-full object-contain select-none"
                  />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#00CE44] tracking-tight leading-none mb-1.5">
                  {s.value}
                </div>
                <div className="text-white text-xs sm:text-sm font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
