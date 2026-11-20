export default function FitnessWhyChooseUs() {
  const differentiators = [
    {
      title: 'Fitness Domain Expertise',
      desc: 'Developers and product strategists with real experience building for gyms, personal trainers, and health startups. Training workflows and user motivation patterns guide every architecture decision.',
    },
    {
      title: 'Retention-First Architecture',
      desc: 'Gamification, streaks, challenges, social feeds, and intelligent push notifications are engineered into the core experience from day one to turn workouts into lasting daily habits.',
    },
    {
      title: 'Seamless Wearable & IoT Sync',
      desc: 'Direct integrations with Apple Watch, Fitbit, Garmin, Strava, Google Fit, Apple HealthKit, and connected gym hardware for uninterrupted real-time biometric tracking.',
    },
    {
      title: 'AI-Powered Personalisation',
      desc: 'Adaptive workout engines, computer-vision posture analysis, and smart nutrition coaching powered by TensorFlow, PyTorch, and OpenAI models tailored to each user.',
    },
    {
      title: 'High-Concurrency Cloud Scale',
      desc: 'Built on AWS, Azure, and Google Cloud to stream live classes, sync millions of sensor readings, and handle peak morning and evening workout traffic without lag.',
    },
    {
      title: 'Privacy & Data Security',
      desc: 'End-to-end encryption, secure payment pipelines, and HIPAA/GDPR-ready personal health data protection built into every mobile and web touchpoint.',
    },
  ]

  return (
    <section className="py-20 lg:py-24 bg-[#000000] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.16] mb-4">
            What Sets Our{' '}
            <span className="text-[#00CE44]">Fitness App Development</span> Apart
          </h2>
          <p className="text-white/85 text-sm sm:text-base leading-relaxed font-normal">
            Fitness applications fail when studios treat retention as an afterthought and build generic tracking tools. We build differently.
          </p>
        </div>

        {/* 3x2 Dark Grey Rounded Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {differentiators.map((diff, idx) => (
            <div
              key={idx}
              className="bg-[#2b2b2b] rounded-[14px] p-7 sm:p-8 flex flex-col justify-start border border-white/10 hover:border-[#00CE44]/60 transition-colors duration-200 text-left"
            >
              <h3 className="text-xl sm:text-[22px] font-bold text-[#00CE44] tracking-tight mb-3">
                {diff.title}
              </h3>
              <p className="text-white/90 text-sm sm:text-[15px] leading-relaxed font-normal">
                {diff.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
