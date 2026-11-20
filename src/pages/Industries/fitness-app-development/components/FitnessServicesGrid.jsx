export default function FitnessServicesGrid() {
  const services = [
    {
      title: 'Custom Fitness App Development',
      icon: '/assets/healthcare/Al-Chatbots-And-Virtual-Assistant-Apps.svg',
      desc: 'Android, iOS, and cross-platform fitness applications built around your brand, your users, and your specific operational requirements. User dashboards, progress monitoring, and in-app analytics are built in from the start.',
    },
    {
      title: 'Wearable Integration',
      icon: '/assets/healthcare/mHealth-App-Development.svg',
      desc: 'Fitness applications that sync with Apple Watch, Fitbit, Garmin, and Samsung Gear using Google Fit and Apple HealthKit APIs. Real-time health metrics delivered without manual data entry.',
    },
    {
      title: 'Workout and Training App Development',
      icon: '/assets/healthcare/Electronic-Health-Record-Software.svg',
      desc: 'Interactive fitness training applications with video tutorials, workout libraries, progress tracking, and live coaching sessions. Built for one-to-one and group training experiences that keep users engaged beyond the first session.',
    },
    {
      title: 'Nutrition and Diet App Development',
      icon: '/assets/healthcare/Telemedicine-App-Development.svg',
      desc: 'AI-powered nutrition applications with meal planners, calorie counters, macro tracking, and personalised meal recommendations supported by verified food databases. Built for users who need intelligent dietary guidance, not just a logging tool.',
    },
    {
      title: 'AI-Powered Coaching Solutions',
      icon: '/assets/fitness/artificial-intelligence-1.png',
      desc: 'Intelligent coaching systems that process user data to deliver personalised workout recommendations, performance forecasts, and adaptive coaching. Built on TensorFlow and predictive analytics for fitness experiences that evolve with each user.',
    },
    {
      title: 'Fitness App UI/UX Design',
      icon: '/assets/fitness/UI-UX.png',
      desc: 'User-friendly, conversion-focused interfaces designed in Figma and Adobe XD. Every screen is designed to keep the user motivated, engaged, and returning to the application consistently.',
    },
    {
      title: 'Social and Gamification Features',
      icon: '/assets/healthcare/serivces6.svg',
      desc: 'Leaderboards, group challenges, rewards, and social communities are built into fitness applications that need to turn exercise into a consistent habit. Retention features are built for the long term, not just the first week.',
    },
    {
      title: 'API and Third-Party Integration',
      icon: '/assets/healthcare/Wearable-Health-Tech-Integration.svg',
      desc: 'Stripe, Firebase, Zoom, Google Maps, and GPS tracking are integrated securely into fitness applications. Payment gateways, video streaming, analytics, and location features are connected without disrupting core product performance.',
    },
    {
      title: 'Maintenance and Support',
      icon: '/assets/healthcare/serivces6.svg',
      desc: 'Post-launch bug fixes, feature enhancements, and iOS and Android compatibility updates are provided continuously. The engagement does not end at deployment.',
    },
  ]

  return (
    <section className="py-20 lg:py-24 bg-[#151515] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.2] mb-4">
            End-to-End{' '}
            <span className="text-[#00CE44]">Fitness App Development Services</span>{' '}
            We Offer
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Custom fitness applications designed for gyms, trainers, and health startups that need more than a basic tracking solution.
          </p>
        </div>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="bg-[#202020] rounded-[20px] p-7 sm:p-8 flex flex-col justify-start border border-[#2B2B2B] hover:border-[#00CE44]/60 transition-all duration-300 text-left group"
            >
              <div className="w-12 h-12 flex items-center justify-start mb-5">
                <img
                  src={srv.icon}
                  alt={srv.title}
                  className="max-h-12 max-w-12 object-contain select-none"
                  loading="lazy"
                />
              </div>

              <h3 className="text-xl sm:text-[22px] font-bold text-[#00CE44] tracking-tight leading-snug mb-3">
                {srv.title}
              </h3>

              <p className="text-white/85 text-sm sm:text-[15px] leading-relaxed font-normal">
                {srv.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
