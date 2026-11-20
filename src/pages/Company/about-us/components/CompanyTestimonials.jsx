import Testimonials from '../../../../components/Testimonials'

export default function CompanyTestimonials() {
  return (
    <Testimonials
      heading={<>How Do We Deliver Our Promise?{' '} <span className="text-[#00CE44]">See What Our Clients Have To Say</span></>}
      subtitle={<>Client-written testimonials on one side, client video testimonials on the other side.</>}
    />
  )
}
