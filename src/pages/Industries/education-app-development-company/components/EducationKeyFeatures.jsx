import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

const tabs = [
  {
    id: 'student',
    label: '1. Student App',
    subtitle:
      'Deliver engaging learning experiences through custom student apps tailored to your educational model.',
    features: [
      'Personalized Learning Dashboard',
      'AI-Powered Learning Paths',
      'Gamification and Rewards',
      'Interactive Quizzes',
      'Offline Learning Access',
      'Multilingual Support',
      'Progress Tracking',
      'Push Notifications',
    ],
  },
  {
    id: 'teacher',
    label: '2. Teacher App',
    subtitle:
      'Equip educators with dedicated tools for managing courses, delivering instruction, and evaluating student performance.',
    features: [
      'Course Creation',
      'Virtual Classrooms',
      'Assignment Management',
      'Automated Grading',
      'Student Performance Analytics',
      'Interactive Learning Content',
      'Student Communication',
    ],
  },
  {
    id: 'admin',
    label: '3. Admin Panel',
    subtitle:
      'Maintain control over institutional learning operations through centralized administration and reporting capabilities.',
    features: [
      'Student Enrollment Management',
      'Role-Based Access Control',
      'Course Administration',
      'Learning Analytics Dashboard',
      'Content Moderation',
      'Subscription and Payment Management',
      'Academic Reporting',
      'Attendance Management',
      'Multi-Institution Management',
    ],
  },
  {
    id: 'corporate',
    label: '4. Corporate Training',
    subtitle:
      'Support enterprise learning programs with dedicated functionality for workforce training and professional development.',
    features: [
      'Employee Learning Profiles',
      'Skill-Based Learning Paths',
      'Microlearning Modules',
      'Compliance Training Tracking',
      'Certification Management',
      'Workforce Skills Analytics',
      'HR System Integration',
      'Training Progress Dashboards',
    ],
  },
]

export default function EducationKeyFeatures() {
  const [activeTab, setActiveTab] = useState('student')
  const current = tabs.find((t) => t.id === activeTab) || tabs[0]

  return (
    <section
      className="py-16 sm:py-24 bg-[#111111] text-white relative overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at center, rgba(0, 206, 68, 0.22) 0%, #0a0c0a 60%, #000000 100%)',
      }}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px] relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18] mb-4">
            Core Features of Our{' '}
            <span className="text-[#00CE44]">Education App Development Solutions</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Our education app developers engineer role-specific features for EdTech platforms and educational institutions. Each interface supports the learning workflows and operational requirements of its intended users.
          </p>
        </div>

        {/* 4 Pill Tabs */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3.5 rounded-full text-[14px] sm:text-[15px] font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#00CE44] text-black shadow-lg'
                    : 'bg-[#262626] text-white hover:bg-[#333333] border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        <p className="text-center text-white/85 text-[15px] sm:text-[16px] max-w-2xl mx-auto mb-10">
          {current.subtitle}
        </p>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {current.features.map((feat) => (
            <div
              key={feat}
              className="bg-[#1b1c21]/95 border border-white/10 hover:border-[#00CE44]/60 rounded-[16px] p-6 flex items-center gap-3.5 text-left transition-colors duration-200"
            >
              <CheckCircle2 className="w-5 h-5 text-[#00CE44] shrink-0" />
              <h3 className="text-white text-[16px] sm:text-[17px] font-semibold leading-snug">
                {feat}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
