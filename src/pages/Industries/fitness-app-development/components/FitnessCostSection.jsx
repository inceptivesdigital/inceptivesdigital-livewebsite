export default function FitnessCostSection() {
  const tiers = [
    {
      name: 'Starter App',
      target:
        'Ideal for startups or individual trainers looking to launch a basic fitness tracking app.',
      cost: '$25,000 – $40,000',
      timeline: '6–8 Weeks',
      features: [
        'User registration & profiles',
        'Basic workout and nutrition tracking',
        'Notifications & reminders',
        'Admin dashboard',
      ],
      summary: 'Perfect for testing your app idea before scaling.',
    },
    {
      name: 'Growth App',
      target:
        'Designed for growing fitness businesses ready to expand functionality and user reach.',
      cost: '$40,000 – $70,000',
      timeline: '10–14 Weeks',
      features: [
        'Advanced tracking & analytics',
        'Subscription management',
        'Payment integration',
        'Trainer-led workout modules',
        'Social sharing & leaderboards',
      ],
      summary: 'Ideal for fitness brands looking to boost engagement and revenue.',
    },
    {
      name: 'Enterprise App',
      target:
        'Built for large-scale fitness enterprises that demand high-end performance and innovation.',
      cost: '$80,000 – $150,000+',
      timeline: '16–24 Weeks',
      features: [
        'AI-based workout suggestions',
        'Wearable & IoT device integration',
        'Real-time chat and video sessions',
        'Multi-role admin management',
        'Advanced analytics dashboard',
      ],
      summary:
        'The complete digital fitness ecosystem built for scalability and excellence.',
    },
  ]

  return (
    <section className="py-20 lg:py-24 bg-[#181818] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.16] mb-4">
            <span className="text-[#00CE44]">Fitness App Development Costs</span> Across Every Stage of Product Maturity
          </h2>
          <p className="text-white/85 text-sm sm:text-base leading-relaxed font-normal max-w-3xl mx-auto">
            Every fitness application has different complexity, features, and integration requirements. These ranges reflect typical project scope and are defined precisely in the Discovery Sprint.
          </p>
        </div>

        {/* 3 Equal Cards Grid */}
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
