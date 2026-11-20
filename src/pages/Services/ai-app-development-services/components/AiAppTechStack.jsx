import StandardTechStack from '../../../../components/StandardTechStack'

const categories = [
  {
    name: 'Frameworks and Models',
    items: [
      { name: 'PyTorch', img: '/assets/fitness/tech/pytorch.png' },
      { name: 'TensorFlow', img: '/assets/healthcare/tech/tensorFlow.jpg' },
      { name: 'HuggingFace Transformers', img: '/assets/react-native/hugging-face.jpg' },
      { name: 'LangChain', img: '/assets/mobile-app/langchain.jpg' },
      { name: 'LlamaIndex', img: '/assets/react-native/nlp-model.jpg' },
      { name: 'GPT-4o', img: '/assets/fitness/tech/openai.png' },
      { name: 'Claude', img: '/assets/mobile-app/openai.png' },
      { name: 'Gemini', img: '/assets/fitness/tech/google_ml.png' },
      { name: 'LLaMA 3', img: '/assets/react-native/hugging-face.jpg' },
    ],
  },
  {
    name: 'Frontend',
    items: [
      { name: 'Flutter', img: '/assets/healthcare/tech/flutter.jpg' },
      { name: 'React Native', img: '/assets/healthcare/tech/react-native.jpg' },
      { name: 'Swift', img: '/assets/fitness/tech/Swift.png' },
      { name: 'Kotlin', img: '/assets/fitness/tech/Kotlin.webp' },
      { name: 'React', img: '/assets/mobile-app/react.png' },
      { name: 'Next.js', img: '/assets/backend-api/next-js.jpg' },
    ],
  },
  {
    name: 'Backend & API',
    items: [
      { name: 'Node.js', img: '/assets/healthcare/tech/node.jpg' },
      { name: 'FastAPI', img: '/assets/react-native/fastapi.jpg' },
      { name: 'Python', img: '/assets/healthcare/tech/python.jpg' },
      { name: 'Flask', img: '/assets/dating/tech/flask.svg' },
      { name: 'REST APIs', img: '/assets/mobile-app/rest-api.jpg' },
      { name: 'GraphQL', img: '/assets/mobile-app/graphQL.jpg' },
    ],
  },
  {
    name: 'Cloud & MLOps',
    items: [
      { name: 'AWS SageMaker', img: '/assets/healthcare/tech/aws.jpg' },
      { name: 'Google Vertex AI', img: '/assets/healthcare/tech/goole-cloud-platform.jpg' },
      { name: 'Azure ML', img: '/assets/healthcare/tech/microsoft-azure.jpg' },
      { name: 'Docker', img: '/assets/healthcare/tech/docker.jpg' },
      { name: 'Kubernetes', img: '/assets/healthcare/tech/kubernetes.jpg' },
      { name: 'MLflow', img: '/assets/education/tech/scikit-learn.jpg' },
    ],
  },
]

export default function AiAppTechStack() {
  return (
    <StandardTechStack
      heading={
        <>
          The Technology Stack Behind Our{' '}
          <span className="text-[#00CE44]">AI App Development Services</span>
        </>
      }
      subtitle="Every tool below is selected for the specific requirements of the build. Not listed because we know the name. Listed because we have used it in production."
      categories={categories}
    />
  )
}
