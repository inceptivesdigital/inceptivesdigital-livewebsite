import BookingCTA from '../components/BookingCTA'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function ContactUs() {
  return (
    <div className="pt-32 sm:pt-40 pb-20">
      <section className="px-4 sm:px-8 mb-12">
        <div className="w-full mx-auto xl:max-w-[1440px] 2xl:max-w-[1600px] text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111419] border border-white/10 text-[#fff] text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00CE44]" />
            Direct Communication
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Contact Our Solutions <br />
            <span className="text-[#fff]">Architecture Team</span>
          </h1>
          <p className="mt-6 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-[#fff]">
            Have a project in mind or need an architectural evaluation? Schedule a technical consultation or send our senior team a direct message below.
          </p>
        </div>
      </section>

      {/* Booking and Contact Form Component */}
      <BookingCTA />
    </div>
  )
}
