import Testimonials from '../../../../components/Testimonials'

export default function LondonTestimonials() {
  return (
    <Testimonials
      heading={<>Our Clients Tell the Story{' '} <span className="text-[#00CE44]">Better Than We Ever Could</span></>}
      subtitle={<>Every successful product starts with alignment between the people building it and the people who need it. These stories reflect the collaboration, trust, and product decisions behind our work.</>}
    />
  )
}
