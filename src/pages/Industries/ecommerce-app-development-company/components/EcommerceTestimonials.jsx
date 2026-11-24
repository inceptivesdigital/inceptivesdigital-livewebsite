import { Link } from 'react-router-dom'
import Testimonials from '../../../../components/Testimonials'

export default function EcommerceTestimonials() {
  return (
    <Testimonials
      heading={
        <>
          What Other Clients{' '}
          <span className="text-[#00CE44]">Have to Say</span>
        </>
      }
      subtitle={
        <>
          Read{' '}
          <Link
            to="/testimonial"
            className="underline underline-offset-4 text-inherit hover:opacity-80 transition-opacity"
          >
            client testimonials
          </Link>{' '}
          from across different industries describing their experience working with Inceptives Digital, from technical collaboration to project delivery.
        </>
      }
    />
  )
}
