import ctaNetworkImg from './assets/cta-proven-network.webp'
import why1 from './assets/why-1.webp'
import why2 from './assets/why-2.webp'
import why3 from './assets/why-3.webp'
import why4 from './assets/why-4.webp'
import why5 from './assets/why-5.webp'
import why6 from './assets/why-6.webp'

const REASONS = [
  {
    icon: why1,
    title: 'Access Elite Talent Instantly',
    desc: 'Scale your team with top 3% pre-vetted IT professionals specializing in software development, DevOps, QA, UI/UX, and emerging technologies, ready to contribute from day one.',
  },
  {
    icon: why2,
    title: 'Flexible, Scalable Engagement',
    desc: 'Choose the model that fits your needs, be it short-term, long-term, or project-based. Our flexible contracts give you the agility to scale up or down without hiring risks.',
  },
  {
    icon: why3,
    title: 'Accelerated Hiring Process',
    desc: 'Skip lengthy recruitment cycles. With our streamlined process, we can connect you with the right talent in under 7 days, keeping your projects on schedule.',
  },
  {
    icon: why4,
    title: 'Diverse Technical Expertise',
    desc: 'From cloud engineering to blockchain development, mobile apps to enterprise systems, our specialists cover a wide range of skill sets so you get the right resource for every challenge.',
  },
  {
    icon: why5,
    title: 'Cost-Optimized Solutions',
    desc: 'Avoid the overhead of permanent hires. With our staff augmentation model, you pay only for the expertise you need, maximizing ROI while controlling operational costs.',
  },
  {
    icon: why6,
    title: 'Seamless Team Integration',
    desc: 'Our professionals adapt quickly to your tools, culture, and workflows, ensuring smooth collaboration and productivity from the very start.',
  },
]

export default function StaffWhyChoose() {
  return (
    <>
      {/* Mid CTA 2: Hire from a Network of Proven Developers */}
      <section className="py-12 sm:py-16 bg-[#171717] relative overflow-hidden">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-tight mb-4">
                Hire from a Network of Proven Developers
              </h2>
              <p className="text-white/85 text-sm sm:text-base lg:text-[17px] leading-relaxed mb-7 max-w-xl">
                Tap into a network of pre-vetted experts across 50+ technologies. With proven experience, our developers deliver faster and smarter results.
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
                src={ctaNetworkImg}
                alt="Hire from a Network of Proven Developers"
                className="w-full max-w-[460px] h-auto object-contain select-none"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why is Inceptives Digital the Best Choice */}
      <section className="py-16 sm:py-24 bg-[#000000] relative overflow-hidden">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-tight">
              Why is Inceptives Digital the Best Choice For{' '}
              <span className="text-[#00CE44]">IT Staff Augmentation Services?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REASONS.map((item) => (
              <div
                key={item.title}
                className="bg-[#383838] rounded-[16px] p-7 sm:p-8 border border-white/10 hover:border-[#00CE44]/50 transition-all duration-300 flex flex-col items-start text-left"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-11 h-11 object-contain mb-4"
                  loading="lazy"
                />
                <h3 className="text-lg sm:text-xl font-bold text-[#00CE44] mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-white/90 text-sm sm:text-[15px] leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
