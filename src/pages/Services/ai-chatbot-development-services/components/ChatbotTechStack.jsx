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
      { name: 'Rasa', img: '/assets/react-native/nlp-model.jpg' },
      { name: 'Dialogflow', img: '/assets/fitness/tech/google_ml.png' },
      { name: 'GPT-4o', img: '/assets/fitness/tech/openai.png' },
      { name: 'Claude', img: '/assets/mobile-app/openai.png' },
      { name: 'Gemini', img: '/assets/fitness/tech/google_ml.png' },
      { name: 'LLaMA 3', img: '/assets/react-native/hugging-face.jpg' },
    ],
  },
  {
    name: 'Vector & Retrieval Systems',
    items: [
      { name: 'Pinecone', img: '/assets/mobile-app/langchain.jpg' },
      { name: 'Weaviate', img: '/assets/react-native/nlp-model.jpg' },
      { name: 'FAISS', img: '/assets/fitness/tech/pytorch.png' },
      { name: 'ChromaDB', img: '/assets/healthcare/tech/mongoDB.jpg' },
      { name: 'Elasticsearch', img: '/assets/healthcare/tech/postgreSQL.jpg' },
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

export default function ChatbotTechStack() {
  return (
    <StandardTechStack
      heading={
        <>
          The Technology Behind Our{' '}
          <span className="text-[#00CE44]">AI Chatbot Development Services</span>
        </>
      }
      subtitle={
        <>
          Every tool below is selected for the specific requirements of the build, not assumptions about{' '}
          <a
            href="https://inceptivesdigital.com/blog/will-ai-really-replace-app-developers"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00CE44] underline hover:text-white transition-colors"
          >
            AI replacing app developers
          </a>
          . Not listed because we know the name. Listed because we have used it in production.
        </>
      }
      categories={categories}
    />
  )
}
