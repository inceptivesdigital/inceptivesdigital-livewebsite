import Testimonials from '../../../../components/Testimonials'
import { Link } from 'react-router-dom'

export default function IosTestimonials() {
  return (
    <Testimonials
      heading={<>What Clients Say About Inceptives Digital’s iOS App Development Services</>}
      subtitle={<>Hiring an iOS application development company comes down to the experience behind its promises. Read{' '} <Link to="/testimonial" className="underline text-[#00CE44] hover:opacity-80 transition-colors"> client testimonials </Link>{' '} on what working with Inceptives Digital has actually been like, beyond the initial proposal.</>}
    />
  )
}
