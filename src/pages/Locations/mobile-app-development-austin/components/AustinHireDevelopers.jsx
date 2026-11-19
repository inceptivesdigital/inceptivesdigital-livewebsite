import { Check } from 'lucide-react'

export default function AustinHireDevelopers() {
  const roles = [
    { title: 'iOS App Developers', skills: 'Swift, SwiftUI, UIKit' },
    { title: 'Android App Developers', skills: 'Kotlin, Java, Jetpack Compose' },
    { title: 'Cross-Platform Developers', skills: 'Flutter, React Native' },
    { title: 'Backend Developers', skills: 'Node.js, Python, .NET' },
    { title: 'UI/UX Designers', skills: 'Figma, Mobile Interface Design' },
    { title: 'QA Engineers', skills: 'Manual & Automated Mobile Testing' },
    { title: 'Technical Leads', skills: 'Architecture Reviews & Engineering Oversight' },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#050608] text-white relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading, Subtext, Roles List */}
          <div className="lg:col-span-7 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18] mb-6">
              Hire Mobile App Developers in{' '}
              <span className="text-[#00CE44]">Austin</span> for Your Next Project
            </h2>

            <p className="text-white/80 text-base sm:text-lg leading-relaxed font-normal mb-8">
              Need experienced mobile app developers in Austin for a new application or an existing product? Inceptives Digital gives startups and enterprises access to mobile engineering specialists with experience across application development and connected systems. Find the technical expertise your project requires, whether you're developing platform-specific functionality or addressing complex engineering challenges.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {roles.map((r) => (
                <div
                  key={r.title}
                  className="rounded-[16px] bg-[#12141a] border border-white/10 p-4.5 flex items-start gap-3 transition-colors hover:border-[#00CE44]/40"
                >
                  {/* Clean Tick Icon: Zero bg, zero border, zero padding */}
                  <div className="shrink-0 mt-1 flex items-center justify-center text-[#00CE44]">
                    <Check className="w-5 h-5 text-[#00CE44]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm sm:text-base">
                      {r.title}
                    </h4>
                    <p className="text-white/60 text-xs sm:text-sm mt-0.5">
                      {r.skills}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors"
            >
              Hire Austin Developers
            </a>
          </div>

          {/* Right Column: Engineering Team Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-md w-full">
              <div className="bg-[#12141a] border border-white/10 rounded-3xl p-4 overflow-hidden">
                <img
                  src="/assets/locations/austin/image14.png"
                  alt="Austin Mobile App Development Team"
                  className="w-full h-auto rounded-2xl object-cover select-none"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
