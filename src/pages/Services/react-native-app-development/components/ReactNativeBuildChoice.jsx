export default function ReactNativeBuildChoice() {
  return (
    <section className="py-16 sm:py-24 bg-[#000000]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column Heading (40px) */}
          <div className="lg:col-span-5 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2]">
              What Makes{' '}
              <span className="text-[#00CE44]">React Native</span> the Best Build Choice?
            </h2>
          </div>

          {/* Right Column Description (16px) */}
          <div className="lg:col-span-7 text-left">
            <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal">
              The world&apos;s most used applications, from Facebook to Instagram and Shopify, are built on React Native. With native-grade performance on both iOS and Android, a single JavaScript and TypeScript codebase reduces development time and expense without compromising quality on either platform, the same efficiency most businesses are chasing when they look into{' '}
              <a
                href="https://inceptivesdigital.com/cross-platform-app-development"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00CE44] underline hover:text-white transition-colors"
              >
                cross-platform app development
              </a>{' '}
              in the first place. For businesses that need to move fast without building twice, React Native is the most commercially sound framework available, and Inceptives Digital has spent eight years engineering it to its full potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
