import Testimonials from '../../../../components/Testimonials'

export default function KmpTestimonials() {
  return (
    <Testimonials
      heading={
        <>
          Hear From the{' '}
          <span className="text-[#00CE44]">Businesses We&apos;ve Built Products For</span>
        </>
      }
      subtitle={
        <>
          Every successful product starts with alignment between the people building it and the people who need it. These stories reflect the collaboration, trust, and product decisions behind our work.
        </>
      }
    />
  )
}
