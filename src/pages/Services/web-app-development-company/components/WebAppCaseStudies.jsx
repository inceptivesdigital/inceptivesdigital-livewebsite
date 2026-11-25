import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const PROJECTS = [
  {
    num: '01',
    name: 'DPS Airem',
    category: 'Workforce Management Web Platform',
    desc: 'DPS Airem replaced paper-heavy security operations with a connected workforce management platform. Its web dashboard gives administrators oversight of field attendance and payroll records, supporting more than 1,000 personnel across multiple locations.',
    results: [
      { value: '90%', label: 'Less manual paperwork' },
      { value: '1,000+', label: 'Field personnel monitored' },
    ],
    image: '/assets/case-studies/dps-mockup.png',
    link: '/portfolio/dps-airem',
  },
  {
    num: '02',
    name: 'State of the Art Chiropractic',
    category: 'Healthcare Web Portal Development',
    desc: 'A React.js physician portal brought patient appointments and clinical administration into one connected healthcare system. Doctors gained better visibility into patient records, while the clinic reduced time spent managing bookings and expanded virtual consultations.',
    results: [
      { value: '60%', label: 'Less appointment administration' },
      { value: '40%', label: 'More online consultations' },
    ],
    image: '/assets/case-studies/chiropractic-mockup.png',
    link: '/portfolio/state-of-the-art-chiropractic',
  },
  {
    num: '03',
    name: 'WordSmith Pro',
    category: 'AI Product Administration Dashboard',
    desc: "WordSmith Pro's React.js dashboard gives its team centralized control over enterprise accounts and subscription activity. API usage monitoring also helps administrators manage the operating demands of its AI-powered writing platform.",
    results: [
      { value: '3', label: 'Revenue models supported' },
      { value: 'Live', label: 'Production platform' },
    ],
    image: '/assets/case-studies/wordsmith-mockup.png',
    link: '/portfolio/wordsmith-pro',
  },
  {
    num: '04',
    name: 'Halwar Connect',
    category: 'Marketplace Web Administration',
    desc: 'Halwar Connect runs its two-sided service marketplace through a React.js administration platform. The dashboard brings provider oversight and transaction records into one workspace, with Stripe Connect supporting payments between customers and service providers.',
    results: [
      { value: '2', label: 'Marketplace user groups' },
      { value: 'Live', label: 'Production marketplace' },
    ],
    image: '/assets/portfolio/halwar-connect/halwar-lap.png',
    link: '/portfolio/halwar-connect',
  },
]

export default function WebAppCaseStudies() {
  return (
    <section className="py-20 lg:py-28 bg-[#000000] text-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.18] mb-4">
              Explore Our Portfolio as a Top{' '}
              <span className="text-[#00CE44]">Web App Development Company</span>
            </h2>
            <p className="text-white/85 text-[15px] sm:text-[16px] leading-relaxed mb-3">
              Shipped across industries, scales, and product categories. Each project page covers the brief, the constraints, and what was built. Many of these builds started with lessons learned from{' '}
              <Link
                to="/blog/common-reasons-digital-products-fail"
                className="text-inherit underline underline-offset-4 hover:opacity-80 transition-opacity"
              >
                why digital products fail
              </Link>{' '}
              when architecture is treated as an afterthought.
            </p>
            <p className="text-white/80 text-[14.5px] sm:text-[15.5px] leading-relaxed">
              From workforce management systems to AI-powered products, our portfolio shows how custom web application development supports complex business operations. Explore the platforms we&apos;ve delivered and the results behind each project.
            </p>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors shrink-0 whitespace-nowrap self-start lg:self-end"
          >
            View All Case Studies
          </Link>
        </div>

        {/* 4 Web Portfolio Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.name}
              className="rounded-[20px] bg-[#141519] border border-white/10 overflow-hidden flex flex-col justify-between"
            >
              {/* Preview Visual */}
              <div className="bg-[#1b1d23] p-6 sm:p-8 flex items-center justify-center h-[240px] sm:h-[270px] border-b border-white/10">
                <img
                  src={project.image}
                  alt={project.name}
                  className="max-h-full w-auto object-contain select-none"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-7 sm:p-8 flex flex-col flex-1 justify-between text-left">
                <div>
                  <span className="text-[#00CE44] text-xs font-bold uppercase tracking-wider block mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    {project.name}
                  </h3>
                  <p className="text-white/85 text-sm sm:text-[15px] leading-relaxed mb-6">
                    {project.desc}
                  </p>
                </div>

                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-white/60 mb-3">
                    The Results
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {project.results.map((res) => (
                      <div
                        key={res.label}
                        className="rounded-xl bg-[#1d1f25] border border-white/10 p-4"
                      >
                        <div className="text-xl sm:text-2xl font-bold text-[#00CE44] mb-1">
                          {res.value}
                        </div>
                        <div className="text-white/80 text-xs sm:text-[13px] leading-snug">
                          {res.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={project.link}
                    className="inline-flex items-center gap-2 text-[#00CE44] hover:text-white font-semibold text-sm sm:text-[15px] transition-colors"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
