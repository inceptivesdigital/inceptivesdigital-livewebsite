import { Link } from 'react-router-dom'

export default function ReactNativeBuildChoice() {
  return (
    <section className="py-16 sm:py-24 bg-[#000000]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Why Businesses Choose React Native for Mobile App Development */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-5 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-white tracking-tight leading-[1.2]">
              Why Businesses Choose <span className="text-[#00CE44]">React Native</span> for Mobile App Development
            </h2>
          </div>

          <div className="lg:col-span-7 text-left">
            <p className="text-white/90 text-[15px] sm:text-[16px] leading-relaxed font-normal">
              React Native offers a practical development advantage for businesses targeting both{' '}
              <Link
                to="/ios-app-development"
                className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
              >
                iOS
              </Link>{' '}
              and{' '}
              <Link
                to="/android-app-development"
                className="underline underline-offset-4 text-inherit hover:opacity-80 transition-colors"
              >
                Android
              </Link>{' '}
              without maintaining separate codebases. Our React Native engineers bring native integration expertise into a shared architecture that accommodates platform-specific product requirements. This approach helps businesses reduce development overhead while maintaining the flexibility to expand their products.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
