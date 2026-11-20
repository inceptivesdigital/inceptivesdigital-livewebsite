import Testimonials from '../../../../components/Testimonials'

export default function ChatbotTestimonials() {
  return (
    <Testimonials
      heading={
        <>
          What Changed When the{' '}
          <span className="text-[#00CE44]">Chatbot Went Live</span>
        </>
      }
      subtitle="Clients reflect on response speed, operational efficiency, user experience, and the practical impact their chatbot created after deployment."
    />
  )
}
