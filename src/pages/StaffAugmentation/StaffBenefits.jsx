import benefit1 from './assets/benefit-1.webp'
import benefit2 from './assets/benefit-2.webp'
import benefit3 from './assets/benefit-3.webp'
import benefit4 from './assets/benefit-4.webp'
import benefit5 from './assets/benefit-5.webp'

const BENEFITS = [
  {
    icon: benefit1,
    title: 'Access to Specialized Talent',
    desc: 'Staff augmentation gives you the freedom to choose from the pool of proven IT professionals, be it cloud computing, AI, cybersecurity, or software development. Augmentation makes sure the project is in expert hands, reduces errors, and shortens delivery time as well.',
  },
  {
    icon: benefit2,
    title: 'Cost Efficiency',
    desc: 'For short-term projects, hiring permanent staff can be costly. By augmenting your team, you can adjust its size to match project requirements while saving on recruitment, training, and overhead costs.',
  },
  {
    icon: benefit3,
    title: 'Flexibility and Scalability',
    desc: 'Businesses need to be flexible to scale their team up or down according to the project without the hassle of a permanent employment contract. Staff augmentation is the way to stay flexible and responsive to project demands.',
  },
  {
    icon: benefit4,
    title: 'Faster Project Delivery',
    desc: 'The progress of your project is accelerated with immediate accessibility to a skilled IT professional. The augmented team fits in with your existing team smoothly while ensuring close collaboration and faster delivery time.',
  },
  {
    icon: benefit5,
    title: 'Focus on Core Business Goals',
    desc: 'In line with all your project demands, company culture, and ambitious marks of growth, we ensure that every professional coming from Inceptives Digital is well-experienced. We make sure that your business maintains its competitive edge and optimization of operations.',
  },
]

export default function StaffBenefits() {
  return (
    <section className="py-16 sm:py-24 bg-[#000000] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-tight">
            The Business Benefits of IT Staff Augmentation Services
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {BENEFITS.map((item) => (
            <div
              key={item.title}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-[#383838] rounded-[16px] p-7 sm:p-8 border border-white/10 hover:border-[#00CE44]/50 transition-all duration-300 flex flex-col items-start text-left"
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
  )
}
