import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function ThankYou() {
  useEffect(() => {
    document.title = 'Thank You - Inceptives Digital'
    window.scrollTo(0, 0)
  }, [])

  return (
    <section
      className="thank-you-section relative w-full min-h-screen min-h-[100dvh] flex items-center justify-center bg-[#111111] px-[30px] md:px-6 overflow-hidden"
      style={{
        backgroundImage: 'url("/assets/bg-thanks.png")',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <style>{`
        @keyframes thankYouLeaves {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }
        .thank-animation-heading {
          animation: thankYouLeaves 3s infinite;
          text-shadow: 22px 0px 72px #00CE44;
        }
        .thank-home-btn {
          background-color: #00CE44;
          color: #111111;
          border-radius: 50px;
          transition: box-shadow 0.25s ease, transform 0.25s ease;
        }
        .thank-home-btn:hover,
        .thank-home-btn:focus {
          box-shadow: 0px 0px 20px 0px #00CE44;
        }
      `}</style>

      <div className="relative z-10 w-full md:w-[70%] max-w-[1100px] mx-auto flex flex-col items-center justify-center text-center py-24">
        <h1 className="thank-animation-heading text-[#00CE44] font-semibold text-[30px] leading-[40px] md:text-[60px] md:leading-[65px] tracking-tight">
          Thank You! 🎉
        </h1>

        <p className="mt-3 text-white font-normal text-[14px] leading-[22px] md:text-[18px] md:leading-[26px] max-w-[780px]">
          We&rsquo;ve received your submission successfully. Our team will review your details and get back to you soon.
        </p>

        <p className="mt-3 text-white font-normal text-[14px] leading-[22px] md:text-[18px] md:leading-[26px]">
          Meanwhile, feel free to explore more on our website 🚀
        </p>

        <div className="mt-[25px] flex justify-center">
          <Link
            to="/"
            className="thank-home-btn inline-flex items-center justify-center font-semibold text-[14px] md:text-[20px] leading-[22px] px-[20px] py-[10px] md:px-[30px] md:py-[15px]"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  )
}
