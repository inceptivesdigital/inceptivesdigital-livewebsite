import techAndroid from './assets/tech-android.webp'
import techApple from './assets/tech-apple.webp'
import techNode from './assets/tech-node.webp'
import techAzure from './assets/tech-azure.webp'
import techCpp from './assets/tech-cpp.webp'
import techFirebase from './assets/tech-firebase.webp'
import techJava from './assets/tech-java.webp'
import techHtml5 from './assets/tech-html5.webp'
import techSwift from './assets/tech-swift.webp'
import techUnity from './assets/tech-unity.webp'
import techGolang from './assets/tech-golang.webp'
import techDotnet from './assets/tech-dotnet.webp'

import ctaScaleImg from './assets/cta-scale-team.webp'

import emergingAi from './assets/emerging-1-ai.webp'
import emergingNlp from './assets/emerging-2-nlp.webp'
import emergingDs from './assets/emerging-3-datascience.webp'
import emergingEdge from './assets/emerging-4-edge.webp'
import emergingIot from './assets/emerging-5-iot.webp'
import emergingCv from './assets/emerging-6-cv.webp'

const PROGRAMMING_TECHS = [
  { icon: techAndroid, name: 'Android' },
  { icon: techApple, name: 'Apple' },
  { icon: techNode, name: 'Node Js' },
  { icon: techAzure, name: 'Azure' },
  { icon: techCpp, name: 'C++' },
  { icon: techFirebase, name: 'Firebase' },
  { icon: techJava, name: 'JAVA' },
  { icon: techHtml5, name: 'HTML 5' },
  { icon: techSwift, name: 'Swift' },
  { icon: techUnity, name: 'Unity' },
  { icon: techGolang, name: 'Golang' },
  { icon: techDotnet, name: '.Net' },
]

const EMERGING_TECHS = [
  { icon: emergingAi, title: 'Artificial Intelligence (AI)' },
  { icon: emergingNlp, title: 'Natural Language Processing (NLP)' },
  { icon: emergingDs, title: 'Data Science' },
  { icon: emergingEdge, title: 'Edge Computing' },
  { icon: emergingIot, title: 'Internet of Things (IoT)' },
  { icon: emergingCv, title: 'Computer Vision' },
]

export default function StaffTechSections() {
  return (
    <>
      {/* 1. Hire Certified Developers in Leading Programming Technologies */}
      <section className="py-16 sm:py-24 bg-[#1d1d1d] relative overflow-hidden">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-tight">
              Hire Certified Developers in Leading Programming Technologies
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
            {PROGRAMMING_TECHS.map((tech) => (
              <div
                key={tech.name}
                className="bg-[#383838] rounded-[18px] p-5 sm:p-6 border border-white/10 hover:border-[#00CE44] transition-all duration-200 flex flex-col items-center justify-center text-center min-h-[140px]"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-11 h-11 sm:w-12 sm:h-12 object-contain mb-3"
                  loading="lazy"
                />
                <span className="text-white text-sm font-semibold">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Mid CTA Banner: Ready to Scale Your Team with Expert Developers? */}
      <section className="py-12 sm:py-16 bg-[#171717] relative overflow-hidden">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-tight mb-4">
                Ready to Scale Your Team with Expert Developers?
              </h2>
              <p className="text-white/85 text-sm sm:text-base lg:text-[17px] leading-relaxed mb-7 max-w-xl">
                At Inceptives Digital, we’ve helped 70+ companies hire top IT talent, delivering projects 30% faster with 150+ skilled developers ready to join your team.
              </p>
              <a
                href="#contact"
                className="getintouch inline-flex items-center justify-center px-8 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors"
              >
                Get A Free Quote
              </a>
            </div>
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <img
                src={ctaScaleImg}
                alt="Ready to Scale Your Team with Expert Developers"
                className="w-full max-w-[460px] h-auto object-contain select-none"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Hire Top IT Professionals in Emerging Technologies */}
      <section className="py-16 sm:py-24 bg-[#000000] relative overflow-hidden">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-tight">
              Hire Top IT Professionals in Emerging Technologies
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto">
            {EMERGING_TECHS.map((item) => (
              <div
                key={item.title}
                className="bg-[#383838] rounded-[18px] p-6 border border-[#00CE44]/60 hover:border-[#00CE44] transition-colors flex items-center gap-4 text-left"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-11 h-11 object-contain shrink-0"
                  loading="lazy"
                />
                <span className="text-white text-sm sm:text-base font-semibold leading-snug">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
