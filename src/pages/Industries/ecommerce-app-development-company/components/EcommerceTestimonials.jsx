import Testimonials from '../../../../components/Testimonials'

export default function EcommerceTestimonials() {
  return (
    <Testimonials
      heading={
        <>
          What Our Clients Say{' '}
          <span className="text-[#00CE44]">About Building With Us</span>
        </>
      }
      subtitle="Every successful ecommerce product starts with alignment between the people building it and the people who need it. These stories reflect the collaboration, trust, and product decisions behind our work."
    />
  )
}
