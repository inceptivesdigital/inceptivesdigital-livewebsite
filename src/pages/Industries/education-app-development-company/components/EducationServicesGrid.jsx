import { Link } from 'react-router-dom'
import {
  Smartphone,
  BookOpen,
  School,
  Users,
  Video,
  ClipboardCheck,
  PlayCircle,
  Briefcase,
  BrainCircuit,
} from 'lucide-react'

const services = [
  {
    icon: Smartphone,
    title: 'Custom Education Mobile App Development',
    desc: (
      <>
        Launch native iOS, Android, or cross-platform learning apps tailored to your educational model. Our education{' '}
        <Link
          to="/mobile-app-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          mobile app development
        </Link>{' '}
        services connect engaging learner experiences with existing academic systems and curriculum requirements.
      </>
    ),
  },
  {
    icon: BookOpen,
    title: 'Learning Management System Development',
    desc: 'Take control of digital learning delivery with a custom LMS tailored to your institution. We engineer course management workflows and instructor dashboards that accommodate academic operations and growing learner populations.',
  },
  {
    icon: School,
    title: 'Student Information and School Management Systems',
    desc: 'Manage institutional operations through education software that connects enrollment records with daily academic administration. Our developers create centralized systems that give authorized staff reliable access to student information across departments.',
  },
  {
    icon: Users,
    title: 'Online Tutoring App Development',
    desc: (
      <>
        Bring independent tutors and learners onto a dedicated teaching platform. Our online tutoring app development expertise supports session scheduling and live instruction, with flexible{' '}
        <Link
          to="/blog/mobile-app-monetization-strategies"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          mobile app monetization strategies
        </Link>{' '}
        for growing tutoring businesses.
      </>
    ),
  },
  {
    icon: Video,
    title: 'Virtual Classroom App Development',
    desc: 'Extend instructor-led learning beyond physical classrooms with live education apps built for interactive participation. We integrate real-time video and classroom management workflows to support scheduled teaching across connected devices.',
  },
  {
    icon: ClipboardCheck,
    title: 'Assessment and Examination App Development',
    desc: 'Our digital assessment platforms give institutions greater control over examination delivery and grading operations. Configurable question banks support different testing formats, while structured reporting helps educators evaluate learner performance.',
  },
  {
    icon: PlayCircle,
    title: 'On-Demand eLearning App Development',
    desc: 'Give learners access to courses beyond fixed classroom schedules. Our eLearning app development services support self-paced education platforms with organized course libraries and subscription workflows tailored to your learning business.',
  },
  {
    icon: Briefcase,
    title: 'Corporate Training App Development',
    desc: 'Equip your workforce with a dedicated training platform that supports structured professional development. Our developers connect employee learning programs with certification workflows and reporting requirements established by your organization.',
  },
  {
    icon: BrainCircuit,
    title: 'AI-Powered Adaptive Learning App Development',
    desc: 'Personalized learning becomes more effective when content responds to individual progress. Our AI-powered education apps use learner performance data to adjust instructional pathways according to defined educational objectives.',
  },
]

export default function EducationServicesGrid() {
  return (
    <section className="py-16 sm:py-24 bg-[#111111] text-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18] mb-4">
            Custom{' '}
            <span className="text-[#00CE44]">Education App Development Services</span>{' '}
            for Digital Learning
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Inceptives Digital delivers education app development services for institutions and EdTech businesses with distinct learning models. Our engineering teams provide{' '}
            <Link
              to="/custom-software-development"
              className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
            >
              custom software development
            </Link>{' '}
            for platforms that support classroom instruction and digital training at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch auto-rows-fr">
          {services.map((svc) => {
            const Icon = svc.icon
            return (
              <div
                key={svc.title}
                className="group bg-[#1b1c21] hover:bg-[#00CE44] border border-white/10 rounded-[18px] p-7 sm:p-8 flex flex-col items-start text-left transition-colors duration-200 h-full"
              >
                <div className="w-11 h-11 p-0 bg-transparent border-0 mb-5 flex items-center justify-start shrink-0">
                  <Icon
                    className="w-full h-full text-[#00CE44] group-hover:text-black transition-colors duration-200"
                    strokeWidth={1.75}
                  />
                </div>
                <h3 className="text-[#00CE44] group-hover:text-black text-[19px] sm:text-[21px] font-bold leading-snug mb-3 transition-colors duration-200">
                  {svc.title}
                </h3>
                <p className="text-white/85 group-hover:text-black/90 text-[14.5px] sm:text-[15.5px] leading-[1.68] font-normal transition-colors duration-200">
                  {svc.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
