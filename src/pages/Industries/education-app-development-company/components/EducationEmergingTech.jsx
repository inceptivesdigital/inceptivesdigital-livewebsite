import { Link } from 'react-router-dom'
import { BrainCircuit, View, Sliders, BarChart3, Trophy, Cloud } from 'lucide-react'

const capabilities = [
  {
    icon: BrainCircuit,
    title: 'AI Tutoring and Personalized Learning',
    description: (
      <>
        <Link
          to="/blog/ai-tutor-app-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          AI tutor app development
        </Link>{' '}
        provides personalized learning support based on student needs. Our developers connect it with your course content.
      </>
    ),
  },
  {
    icon: View,
    title: 'AR and VR Learning Simulations',
    description:
      'Bring complex subjects to life through interactive AR/VR simulations built around your curriculum and supported learning devices.',
  },
  {
    icon: Sliders,
    title: 'Adaptive Assessment Engineering',
    description:
      'Our assessment engines adjust question difficulty based on student performance, helping educators measure learning progress more accurately.',
  },
  {
    icon: BarChart3,
    title: 'Predictive Learning Analytics',
    description:
      'Student performance data helps identify learning gaps early. Predictive analytics give educators clearer insights for planning additional support.',
  },
  {
    icon: Trophy,
    title: 'Gamification and Microlearning',
    description:
      'Interactive challenges and short lessons encourage regular participation, with rewards and progress tracking suited to your learning platform.',
  },
  {
    icon: Cloud,
    title: 'Scalable Learning Platform Architecture',
    description: (
      <>
        Growing education platforms need reliable performance. Our engineers build cloud infrastructure and apply{' '}
        <Link
          to="/blog/mobile-app-performance-optimization"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          mobile app performance optimization
        </Link>{' '}
        so the platform supports more learners and simultaneous classes.
      </>
    ),
  },
]

export default function EducationEmergingTech() {
  return (
    <section className="py-16 sm:py-24 bg-[#000000] text-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18] mb-4">
            Advanced Engineering for{' '}
            <span className="text-[#00CE44]">Next-Generation Education Apps</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Inceptives Digital brings specialized engineering expertise to education platforms requiring intelligent learning experiences and complex technical capabilities. Our developers integrate advanced technologies based on your platform&apos;s needs and learning goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch auto-rows-fr">
          {capabilities.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="bg-[#1b1c21] border border-white/10 hover:border-[#00CE44]/60 rounded-[18px] p-7 sm:p-8 flex flex-col justify-start text-left transition-colors duration-200 h-full"
              >
                <div className="w-11 h-11 p-0 bg-transparent border-0 mb-5 flex items-center justify-start shrink-0">
                  <Icon className="w-full h-full text-[#00CE44]" strokeWidth={1.75} />
                </div>
                <h3 className="text-[#00CE44] text-[19px] sm:text-[21px] font-bold leading-snug mb-3">
                  {item.title}
                </h3>
                <p className="text-white/85 text-[14.5px] sm:text-[15.5px] leading-[1.68] font-normal">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
