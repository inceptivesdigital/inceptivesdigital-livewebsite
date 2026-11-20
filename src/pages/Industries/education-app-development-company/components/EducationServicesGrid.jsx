export default function EducationServicesGrid() {
  const services = [
    {
      title: 'AI-Powered Adaptive Learning Apps',
      desc: 'Educational applications that automatically adjust content, monitor student progress, and modify difficulty levels based on individual learner behaviour. Built for platforms where personalised instruction is the core product requirement.',
    },
    {
      title: 'Immersive AR and VR Learning Solutions',
      desc: 'Virtual labs, interactive classrooms, and reality-indistinguishable learning environments are built for subjects where experiential learning outperforms passive content consumption.',
    },
    {
      title: 'Microlearning and Gamified Apps',
      desc: 'Short-form learning modules with gamified challenges, badges, and progress rewards built for learners who need consistent engagement without long-form content fatigue.',
    },
    {
      title: 'Custom LMS and Student Management Systems',
      desc: 'Secure, scalable LMS platforms with role-based access, attendance tracking, analytics, and seamless integration with existing institutional systems.',
    },
    {
      title: 'On-Demand Learning and eLearning Portals',
      desc: 'On-demand platforms with streaming content, offline access, AI-powered recommendations, and collaborative learning tools built for institutions scaling digital education.',
    },
    {
      title: 'Corporate and Professional Training Apps',
      desc: 'Employee training applications with skill-based modules, assessments, performance dashboards, and learning progress tracking are built for organizations measuring training ROI.',
    },
    {
      title: 'Assistive and Inclusive Learning Apps',
      desc: 'Education applications with voice assistance, adaptive interfaces, and AI-powered accessibility features are built for learners with different abilities and learning requirements.',
    },
    {
      title: 'Cognitive Tutoring and Smart Assessment Tools',
      desc: 'AI tutors and intelligent assessment systems that identify learning gaps, deliver personalised feedback, and recommend targeted improvement paths based on individual performance data.',
    },
  ]

  return (
    <section className="py-20 lg:py-24 bg-[#000000] text-white relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.16] mb-4">
            Smart{' '}
            <span className="text-[#00CE44]">Educational App Development Services</span>{' '}
            for Adaptive and Immersive Learning
          </h2>
          <p className="text-white/85 text-sm sm:text-base leading-relaxed font-normal max-w-3xl mx-auto">
            Custom education applications designed for schools, EdTech companies, and corporate training organizations that need more than a basic content delivery platform.
          </p>
        </div>

        {/* 4x2 Balanced Dark Grey Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="bg-[#2b2b2b] rounded-[14px] p-7 flex flex-col justify-start border border-white/10 hover:border-[#00CE44]/60 transition-colors duration-200 text-left"
            >
              <h3 className="text-xl font-bold text-[#00CE44] tracking-tight mb-3 leading-snug">
                {srv.title}
              </h3>
              <p className="text-white/90 text-sm leading-relaxed font-normal">
                {srv.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
