import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    name: 'WordSmith Pro',
    subtitle: 'AI-Powered Writing Assistant',
    description:
      'Real-time AI writing feedback helps users improve grammar and writing skills. The platform also tracks writing progress and supports subscription-based access.',
    technology: 'React Native, React.js, OpenAI APIs, LanguageTool, OCR',
    outcome:
      'Cross-platform app launched with AI writing analysis, progress tracking, and three monetization models.',
    link: '/portfolio/wordsmith-pro',
    logo: '/assets/case-studies/wordsmith-logo.png',
    mockup: '/assets/case-studies/wordsmith-mockup.png',
  },
  {
    name: 'Zoom Read',
    subtitle: 'Digital Reading Platform',
    description:
      'Built for focused reading, Zoom Read gives users personalized reading controls and access to documents across multiple formats.',
    technology: (
      <>
        <Link
          to="/flutter-app-development"
          className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
        >
          Flutter
        </Link>
        , iOS, Android
      </>
    ),
    outcome:
      'Cross-platform reading app with PDF, DOCX, and EPUB support, plus reading progress tracking.',
    link: '/portfolio/zoom-read',
    logo: null,
    mockup: '/assets/portfolio/zoom-read/zoom-banner.png',
  },
]

export default function EducationCaseStudies() {
  return (
    <section className="py-16 sm:py-24 bg-[#111111] text-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1600px]">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18] mb-4">
            Products We’ve Delivered as an{' '}
            <span className="text-[#00CE44]">Education App Development Company</span>
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed font-normal">
            Explore how Inceptives Digital applies mobile engineering and{' '}
            <Link
              to="/ai-development"
              className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
            >
              AI development
            </Link>{' '}
            to build learning-focused products with practical user experiences.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((proj) => (
            <div
              key={proj.name}
              className="bg-[#1b1c21] border border-white/10 rounded-[24px] p-8 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
            >
              <div className="lg:col-span-7 text-left flex flex-col items-start">
                {proj.logo && (
                  <div className="mb-5">
                    <img
                      src={proj.logo}
                      alt={`${proj.name} Logo`}
                      className="max-h-12 sm:max-h-14 w-auto object-contain select-none"
                      loading="lazy"
                    />
                  </div>
                )}
                <span className="text-[#00CE44] text-xs sm:text-sm font-semibold uppercase tracking-widest mb-1.5">
                  {proj.name}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-3">
                  {proj.subtitle}
                </h3>
                <p className="text-white/85 text-[15px] sm:text-[16px] leading-relaxed mb-5 max-w-2xl">
                  {proj.description}
                </p>

                <div className="space-y-2.5 text-[14.5px] sm:text-[15.5px] text-white/90 mb-7">
                  <p>
                    <strong className="text-[#00CE44] font-semibold">Technology:</strong>{' '}
                    {proj.technology}
                  </p>
                  <p>
                    <strong className="text-[#00CE44] font-semibold">Outcome:</strong>{' '}
                    {proj.outcome}
                  </p>
                </div>

                <Link
                  to={proj.link}
                  className="inline-flex items-center gap-2.5 bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-[15px] px-7 py-3.5 rounded-none transition-colors duration-200"
                >
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <img
                  src={proj.mockup}
                  alt={proj.name}
                  className="w-full max-w-[440px] h-auto object-contain select-none drop-shadow-[0_20px_50px_rgba(0,206,68,0.14)]"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
