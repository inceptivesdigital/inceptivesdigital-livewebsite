import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function NotFound({ onMountChange }) {
  useEffect(() => {
    document.title = 'Page not found - Inceptives Digital'
    window.scrollTo(0, 0)
    if (onMountChange) onMountChange(true)
    return () => {
      if (onMountChange) onMountChange(false)
    }
  }, [onMountChange])

  return (
    <section
      className="relative w-full min-h-screen min-h-[100dvh] flex items-center justify-center bg-[#151515] px-6 py-28 overflow-hidden"
      style={{
        backgroundImage: 'url("/assets/not-found/404-bg.png")',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="relative z-10 w-full max-w-[1680px] mx-auto flex flex-col items-center justify-center text-center gap-6 sm:gap-8 lg:gap-10">
        <div
          role="heading"
          aria-level={1}
          className="text-[#00CE44] font-bold leading-none tracking-tight text-[40px] sm:text-[50px] md:text-[70px] lg:text-[80px] 2xl:text-[100px]"
        >
          404
        </div>

        <div
          role="heading"
          aria-level={2}
          className="text-white font-bold leading-tight tracking-tight text-[25px] sm:text-[40px] md:text-[55px] lg:text-[60px] 2xl:text-[80px]"
        >
          Page Not Found
        </div>

        <Link
          to="/"
          className="inline-flex items-center justify-center bg-[#00CE44] text-[#202020] border border-[#00CE44] hover:bg-white hover:text-[#00CE44] rounded-none px-[35px] py-[12px] text-sm sm:text-base font-medium transition-colors duration-200 w-full sm:w-auto text-center"
        >
          Back To Home
        </Link>
      </div>
    </section>
  )
}
