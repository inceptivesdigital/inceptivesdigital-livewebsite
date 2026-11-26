import { Link } from 'react-router-dom'

export default function CrossPlatformFrameworks() {
  const frameworks = [
    {
      name: 'Flutter',
      link: '/flutter-app-development',
      icon: '/assets/mobile-app/tech/flutter.svg',
    },
    {
      name: 'React Native',
      link: '/react-native-app-development',
      icon: '/assets/mobile-app/tech/react-native.svg',
    },
    {
      name: 'Kotlin Multiplatform',
      link: '/kotlin-multiplatform-app-development',
      icon: '/assets/mobile-app/tech/kotlin.svg',
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#000000] text-white relative overflow-hidden border-t border-white/10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, Copy with Internal Links & CTA */}
          <div className="lg:col-span-6 text-left">
            <span className="text-[#00CE44] text-xs sm:text-sm font-bold uppercase tracking-wider block mb-3">
              PRODUCTION FRAMEWORKS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18] mb-5">
              The Frameworks Behind Every{' '}
              <span className="text-[#00CE44]">Cross-Platform App We Build</span>
            </h2>
            <p className="text-white/85 text-[16px] leading-relaxed mb-8 font-normal">
              Being an experienced cross-platform app development company, every app we build runs on a{' '}
              <Link
                to="/blog/5-cross-platform-frameworks-for-mobile-app-development"
                className="underline text-[#00CE44] hover:opacity-80 transition-colors"
>
                proven framework
              </Link>{' '}
              at production scale. Inceptives Digital works in{' '}
              <Link
                to="/flutter-app-development"
                className="underline text-[#00CE44] hover:opacity-80 transition-colors"
              >
                Flutter
              </Link>
              ,{' '}
              <Link
                to="/react-native-app-development"
                className="underline text-[#00CE44] hover:opacity-80 transition-colors"
              >
                React Native
              </Link>
              , and{' '}
              <Link
                to="/kotlin-multiplatform-app-development"
                className="underline text-[#00CE44] hover:opacity-80 transition-colors"
              >
                Kotlin Multiplatform
              </Link>
              , matching each engagement to the framework that fits the product&apos;s performance and platform demands.
            </p>
            <div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-none bg-[#00CE44] hover:bg-[#00b83d] text-black font-semibold text-sm sm:text-base transition-colors border-0"
              >
                Talk to Engineers for the Right Framework
              </a>
            </div>
          </div>

          {/* Right Column: Framework Cards with Original Logos & Names */}
          <div className="lg:col-span-6 space-y-4">
            {frameworks.map((fw) => (
              <Link
                key={fw.name}
                to={fw.link}
                className="p-5 sm:p-6 rounded-[18px] bg-[#16171c] border border-white/5 hover:border-[#00CE44]/40 flex items-center gap-5 transition-all duration-200 group block"
              >
                <img
                  src={fw.icon}
                  alt={fw.name}
                  className="w-11 h-11 sm:w-12 sm:h-12 object-contain shrink-0 p-0 m-0 border-0 bg-transparent rounded-none transition-transform group-hover:scale-105 duration-200"
                  loading="lazy"
                />
                <span className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00CE44] transition-colors">
                  {fw.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
