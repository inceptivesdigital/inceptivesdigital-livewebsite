import Testimonials from '../../../../components/Testimonials'

export default function AiAppTestimonials() {
  return (
    <Testimonials
      heading={
        <>
          What Clients Say About{' '}
          <span className="text-[#00CE44]">Building AI That Works</span>
        </>
      }
      subtitle="Hear from clients who trusted us to turn ambitious AI concepts into reliable products through clear direction, accountable delivery, and measurable value."
    />
  )
}
