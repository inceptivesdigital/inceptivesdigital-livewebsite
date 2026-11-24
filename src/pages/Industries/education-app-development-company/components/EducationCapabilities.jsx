import { Link } from 'react-router-dom'

const reasons = [
  {
    title: 'Built for Your Learning Model',
    description:
      'Subscription-based learning platforms and institutional systems require different architectures. Our engineers shape each product around its learning workflows and business requirements.',
  },
  {
    title: 'Advanced EdTech Engineering Expertise',
    description:
      'Complex education platforms often require specialized functionality. Our engineers develop custom backend systems and advanced learning capabilities suited to your product.',
  },
  {
    title: 'Unified Mobile and Web Development',
    description: (
      <>
        Student apps and administrative dashboards must work together. Our mobile and{' '}
        <Link
          to="/web-app-development-company"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          web app development
        </Link>{' '}
        teams build connected platforms within a coordinated development scope.
      </>
    ),
  },
  {
    title: 'Integration With Existing Systems',
    description:
      'Protect your existing technology investment through careful integration planning. We assess compatible academic systems before recommending new development.',
  },
  {
    title: 'High-Quality Learning Experience Design',
    description:
      'Our developers build education apps with accessible navigation and screen reader support, helping institutions serve learners with different abilities.',
  },
  {
    title: 'Long-Term Product Engineering Support',
    description:
      'Education platforms evolve with changing learning requirements. Our development teams maintain technical continuity through agreed updates and future releases.',
  },
]

export default function EducationCapabilities() {
  return (
    <section className="py-16 sm:py-24 bg-[#111111] text-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18] mb-4">
            Why EdTech Businesses Choose Our{' '}
            <span className="text-[#00CE44]">Education App Development Services</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            With 8+ years of experience and 70+ digital products delivered, Inceptives Digital brings established{' '}
            <Link
              to="/digital-product-development"
              className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
            >
              digital product development
            </Link>{' '}
            expertise to education app development. Our teams align technical decisions with your learning model and commercial priorities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch auto-rows-fr">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="group bg-[#1b1c21] hover:bg-[#00CE44] rounded-[16px] p-7 sm:p-8 text-left transition-colors duration-200 h-full"
            >
              <h3 className="text-[#00CE44] group-hover:text-black text-[19px] sm:text-[21px] font-bold leading-snug mb-3 transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-white/85 group-hover:text-black/90 text-[14.5px] sm:text-[15.5px] leading-[1.68] font-normal transition-colors duration-200">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
