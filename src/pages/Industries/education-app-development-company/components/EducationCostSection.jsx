export default function EducationCostSection() {
  const tiers = [
    {
      name: 'Foundation App',
      target:
        'For startups, educators, and institutions launching a focused digital learning application.',
      cost: '$10,000 – $40,000',
      timeline: '8 – 14 Weeks',
      features: [
        'User registration and profiles',
        'Course and lesson management',
        'Quizzes and assessments',
        'Progress tracking',
        'Admin dashboard',
      ],
      summary:
        'A focused learning product built to validate the idea before investing in a larger platform.',
    },
    {
      name: 'Advanced Learning App',
      target:
        'For education businesses delivering interactive learning experiences across multiple user roles.',
      cost: '$40,000 – $120,000',
      timeline: '14 – 24 Weeks',
      features: [
        'Live classes and video learning',
        'Assignments and certifications',
        'Student, instructor, and admin portals',
        'Subscription and payment integration',
        'LMS and third-party integrations',
      ],
      summary:
        'Where engaging learning experiences, scalable infrastructure, and growing user communities come together in one production-ready platform.',
    },
    {
      name: 'Enterprise Learning Platform',
      target:
        'For universities, enterprises, and EdTech companies operating at enterprise scale.',
      cost: '$120,000 – $250,000+',
      timeline: '20 – 32 Weeks',
      features: [
        'AI-powered personalized learning',
        'AR/VR learning experiences',
        'Corporate training modules',
        'Advanced analytics',
        'Enterprise system integrations',
      ],
      summary:
        'Built for education organizations where learning at scale, enterprise integrations, and advanced technologies are the baseline requirements.',
    },
  ]

  return (
    <section className="py-20 lg:py-24 bg-[#181818] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.16] mb-4">
            <span className="text-[#00CE44]">Education App Development</span> Cost Estimates
          </h2>
          <p className="text-white/85 text-sm sm:text-base leading-relaxed font-normal max-w-3xl mx-auto">
            Every education application has different learning models, feature requirements, and platform complexity. These ranges reflect typical project scope and are defined precisely in the Discovery Sprint.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className="bg-[#2a2a2a] rounded-[16px] p-7 sm:p-9 border border-white/10 flex flex-col justify-between text-left shadow-none"
            >
              <div>
                <h3 className="text-2xl sm:text-[26px] font-extrabold text-white tracking-tight mb-2">
                  {tier.name}
                </h3>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                  {tier.target}
                </p>

                <hr className="my-5 border-white/15" />

                <div className="text-xs text-white/75 mb-1">Estimated Cost:</div>
                <div className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                  {tier.cost}
                </div>

                <hr className="my-5 border-white/15" />

                <div className="text-xs text-white/75 mb-1">Timeline:</div>
                <div className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                  {tier.timeline}
                </div>

                <hr className="my-5 border-white/15" />

                <ul className="list-disc pl-5 space-y-2.5 text-sm text-white/90 leading-relaxed">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx}>{feat}</li>
                  ))}
                </ul>
              </div>

              <p className="mt-7 text-xs sm:text-sm text-white/80 leading-relaxed">
                {tier.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
