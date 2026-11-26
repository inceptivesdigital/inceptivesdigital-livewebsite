import role1 from './assets/role-1-mobile.webp'
import role2 from './assets/role-2-software.webp'
import role3 from './assets/role-3-game.webp'
import role4 from './assets/role-4-uxui.webp'
import role5 from './assets/role-5-web.webp'
import role6 from './assets/role-6-qa.webp'
import role7 from './assets/role-7-devops.webp'
import role8 from './assets/role-8-security.webp'
import role9 from './assets/role-9-pm.webp'

const ROLES = [
  {
    icon: role1,
    title: 'Mobile App Development',
    desc: 'Senior iOS, Android, Flutter, and React Native engineers ready to ship high-retention mobile products.',
  },
  {
    icon: role2,
    title: 'Software Development',
    desc: 'Full-stack and backend architects building scalable APIs, enterprise platforms, and custom systems.',
  },
  {
    icon: role3,
    title: 'Game Development',
    desc: 'Unity and cross-platform game engineers experienced in real-time 2D/3D gameplay and optimization.',
  },
  {
    icon: role4,
    title: 'User Experience (UX/UI)',
    desc: 'Product designers crafting intuitive user flows, wireframes, design systems, and high-converting interfaces.',
  },
  {
    icon: role5,
    title: 'Website Development',
    desc: 'Frontend and web application specialists delivering fast, responsive, SEO-ready web experiences.',
  },
  {
    icon: role6,
    title: 'QA & Testing Automation',
    desc: 'Manual and automated QA engineers ensuring zero-regression releases across web, mobile, and APIs.',
  },
  {
    icon: role7,
    title: 'DevOps',
    desc: 'Cloud, CI/CD, containerization, and infrastructure automation leads keeping deployments reliable.',
  },
  {
    icon: role8,
    title: 'Continuous Security',
    desc: 'Security engineers embedding vulnerability testing, access controls, and compliance into every sprint.',
  },
  {
    icon: role9,
    title: 'Product Management',
    desc: 'Technical product managers and scrum masters aligning roadmaps, sprints, and delivery outcomes.',
  },
]

export default function StaffRolesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-[#0d0e11] relative overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Top Centered Heading (Homepage IndustriesSection Style) */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white text-center tracking-tight leading-tight">
            Hire Expert Developers With Our{' '}
            <span className="text-[#00CE44]">IT Staff Augmentation Services</span>
          </h2>
        </div>

        {/* 9-Cards 3-Column Homepage Grid with 1px Dividers & Green Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch gap-px bg-[#26282d] border border-[#26282d] rounded-none overflow-hidden shadow-2xl auto-rows-fr">
          {ROLES.map((role) => (
            <div
              key={role.title}
              className="group p-6 sm:p-8 flex flex-col justify-start bg-[#18191d] hover:bg-[#00CE44] transition-all duration-300 h-full select-none text-left"
            >
              <div className="w-10 h-10 mb-6 flex items-center justify-start shrink-0">
                <img
                  src={role.icon}
                  alt={role.title}
                  className="w-9 h-9 object-contain transition-all duration-300 group-hover:brightness-0"
                  loading="lazy"
                />
              </div>

              <h3 className="text-[20px] sm:text-[22px] font-bold text-white group-hover:text-black transition-colors duration-300 leading-tight mb-3">
                {role.title}
              </h3>

              <p className="text-[15px] sm:text-[16px] text-slate-300 group-hover:text-black transition-colors duration-300 leading-relaxed font-normal">
                {role.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
