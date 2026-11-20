import FAQSection from '../../../../components/FAQSection'

const faqs = [
  {
    q: '1. What are machine learning development services?',
    a: 'The end-to-end process of designing, building, training, deploying, and maintaining ML models that automate decisions, identify patterns, and generate predictions from business data.',
  },
  {
    q: '2. How is machine learning different from traditional software development?',
    a: (
      <>
        Traditional software and{' '}
        <a href="https://inceptivesdigital.com/rpa-development-services">RPA development</a> typically rely on explicit rules, while machine learning systems learn patterns from data. The{' '}
        <a href="https://inceptivesdigital.com/ai-development">AI development</a> process involves data preparation, model training, and ongoing monitoring rather than writing deterministic logic.
      </>
    ),
  },
  {
    q: '3. How much does machine learning development cost?',
    a: (
      <>
        A focused ML model or proof of concept starts from $20K. A full production ML system with data pipelines, integration, and deployment typically ranges from $60K to $250K. The precise number is defined in the{' '}
        <a href="https://inceptivesdigital.com/discovery-sprint">Discovery Sprint</a>.
      </>
    ),
  },
  {
    q: '4. How long does it take to build a machine learning model?',
    a: (
      <>
        A focused <a href="https://inceptivesdigital.com/ai-mvp-development">AI MVP</a> or ML proof of concept typically takes 6 to 10 weeks. A full production ML system with data engineering, integration, and deployment takes 3 to 8 months, depending on data readiness and complexity.
      </>
    ),
  },
  {
    q: '5. What data do we need to start a machine learning project?',
    a: 'It depends on the use case. Supervised learning requires labelled historical data. Unsupervised learning works with unlabelled datasets. Data quality and volume are evaluated in the Discovery Sprint before any model development begins.',
  },
  {
    q: '6. Can machine learning models be integrated with existing software?',
    a: (
      <>
        Yes. We integrate ML models into existing{' '}
        <a href="https://inceptivesdigital.com/custom-software-development">custom software</a>, APIs, data warehouses, and business workflows. Integration architecture is defined in Discovery before development begins to ensure reliable performance across your full technology stack.
      </>
    ),
  },
  {
    q: '7. How do you ensure machine learning model accuracy?',
    a: 'Through rigorous feature engineering, cross-validation, evaluation against real business metrics, and testing on held-out datasets before deployment. Accuracy targets are defined in Discovery and measured throughout development.',
  },
  {
    q: '8. How do you handle model drift after deployment?',
    a: 'We monitor model performance with MLflow post-launch, detect drift before it affects business outcomes, and retrain models on updated data when performance degrades. Monitoring is built into the deployment architecture from day one.',
  },
]

export default function MachineFaqs() {
  return (
    <FAQSection
      faqs={faqs}
      heading={
        <>
          Questions About{' '}
          <span className="text-[#00CE44]">Machine Learning Development</span> Worth Asking Before You Build
        </>
      }
    />
  )
}
