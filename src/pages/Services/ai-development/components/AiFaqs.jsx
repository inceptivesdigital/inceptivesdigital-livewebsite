import FAQSection from '../../../../components/FAQSection'

const faqs = [
    {
      q: 'Do you build AI features or full AI systems?',
      a: 'Both. Some products need AI as a feature that sharpens a human decision. Others need AI for the operation itself. The Discovery Sprint determines which one fits before development begins.'
    },
    {
      q: 'How much does AI development cost?',
      a: 'AI features typically range from $15K to $50K. Full AI systems range from $60K to $200K and above. The precise number is defined in the Discovery Sprint. Take the AI Project Estimator for a ballpark before that conversation.'
    },
    {
      q: 'How much does AI agent development cost?',
      a: 'Typically $30K to $150K depending on workflow complexity, number of tool integrations, and system architecture. Single-task agents sit at the lower end. Multi-agent orchestration systems sit at the higher end.'
    },
    {
      q: 'How long does an AI development project take?',
      a: 'An AI MVP takes 8 to 12 weeks. A full AI system takes 16 to 32 weeks. Both depend on data readiness, integration complexity, and scope defined in Discovery.'
    },
    {
      q: 'What is the difference between custom AI development and off-the-shelf AI tools?',
      a: 'Off-the-shelf tools are built for general use cases. Custom AI development builds around your specific data, workflows, and operational requirements. The difference shows up in production. A custom system performs precisely in your context. A general tool performs adequately in every context and exceptionally in none.'
    },
    {
      q: 'How do we know if our business is ready for AI?',
      a: 'Take the AI Readiness Assessment. It evaluates your data infrastructure, process maturity, and team readiness. Most businesses are more ready than they assume. Some are less ready than they think. Either way, you will know before you commit.'
    },
    {
      q: 'What does an AI development company actually deliver?',
      a: 'A production-grade AI system integrated into your operations or platform. Not a proof of concept. A system that runs under real load, handles real data, and performs without constant maintenance after launch.'
    },
    {
      q: 'What is the difference between an AI agent and a chatbot?',
      a: 'A chatbot handles conversation. An AI agent executes tasks. If you need AI to do something rather than say something, you need an agent.'
    },
    {
      q: 'What is the difference between RAG and fine-tuning?',
      a: "RAG grounds model answers in your company's knowledge base. Fine-tuning retrains a model on domain-specific data to adapt its core behaviour. The right choice depends on your use case and data availability. We determine which fits in Discovery."
    },
    {
      q: 'How do I hire AI developers for my project?',
      a: 'Start with the Discovery Sprint. It defines the scope and team requirements before any hiring begins. We then match the right combination of ML engineers, LLM developers, MLOps engineers, and data scientists to your specific build.'
    },
    {
      q: 'Can AI be deployed on-premise or in a private environment?',
      a: 'Yes. We support on-premise, VPC-based, and private cloud deployments for organisations with strict security or data residency requirements. LLaMA and other open-source models are suited to environments where no data leaves the client infrastructure.'
    },
    {
      q: 'Do you provide support after the AI system goes live?',
      a: 'Yes. We provide ongoing monitoring, drift detection, model retraining, and system optimization to keep the product performing under real load over time.'
    }
  ]

export default function AiFaqs() {
  return (
    <FAQSection
      faqs={faqs}
      heading={<>Frequently Asked Questions.</>}
    />
  )
}
