"use client"
import { useState } from 'react'

const faqData = [
  { q: "What is Zentorex AI?", a: "Zentorex AI is an enterprise-grade orchestration layer for Google Gemini models, enabling organizations to build autonomous, reasoning-capable digital ecosystems." },
  { q: "How does Zentorex leverage Gemini architectures?", a: "We harness massive context windows to enable AI systems to reason across your entire enterprise history, codebases, and multimodal data simultaneously with pinpoint accuracy." },
  { q: "What are Agentic Workflows?", a: "These are autonomous AI agents that go beyond simple prompt responses—they proactively plan, reflect, and execute complex business processes with machine-level precision." },
  { q: "Is my enterprise data used for model training?", a: "No. Zentorex AI enforces strict enterprise privacy protocols. Your data is processed securely via private Google Cloud nodes and is never used to train public models." },
  { q: "What is a Neural Audit?", a: "It is our proprietary deep-scan of your digital infrastructure to identify where advanced AI reasoning can eliminate operational bottlenecks and drive exponential efficiency." },
  { q: "Does the platform support video and multimodal analysis?", a: "Yes. Through Gemini's advanced multimodal engine, we analyze hours of video, audio, text, and visual data for content insights, sentiment analysis, and automated metadata generation." },
  { q: "How fast is the enterprise implementation?", a: "Core neural pipelines can be deployed within 7–14 days, with full agentic workflow orchestration typically live within 30 days." },
  { q: "What is Cognitive Optimization?", a: "It is our strategic shift from basic keyword targeting to advanced intent logic, ensuring your brand establishes authority across modern AI and neural search engines." },
  { q: "Can we use our own API keys?", a: "Yes, Zentorex fully supports 'Bring Your Own Key' (BYOK) configurations for enterprise governance, cost management, and complete operational transparency." },
  { q: "What is Zero-Retention architecture?", a: "For sensitive enterprise operations, we offer secure processing pipelines where data is handled entirely in volatile memory and never persisted on physical disks." },
  { q: "How does the platform handle long-form reasoning?", a: "By leveraging massive context windows, we eliminate the memory degradation common in smaller models, ensuring flawless coherence across thousand-page documents." },
  { q: "Which industries do you serve?", a: "We specialize in SaaS, E-commerce, Fintech, Healthcare tech, and high-scale enterprises requiring automated cognitive labor and intelligent workflows." },
  { q: "Is there a multimodal processing limit?", a: "Zentorex processes text, images, audio, and video interchangeably within unified, high-performance logical prompt streams." },
  { q: "How do you measure AI ROI?", a: "We track 'Cognitive Hours Saved' and 'Neural Intent Match', providing leadership teams with a clear financial and operational blueprint of AI impact." },
  { q: "Does the platform support real-time data integration?", a: "Yes, our pipelines integrate seamlessly with live streaming data sources for real-time situational reasoning and automated decision-making." },
  { q: "What is Systemic Authority?", a: "It is our proven framework for establishing your digital assets as the most trusted, verifiable knowledge sources within AI models and knowledge graphs." },
  { q: "Can the AI generate and audit code?", a: "Yes, Zentorex includes specialized engineering agents capable of refactoring, documenting, and auditing legacy codebases using Gemini's advanced logical reasoning." },
  { q: "How do you prevent hallucinations?", a: "We implement a rigorous 'Reflection Framework' where secondary validation agents cross-reference primary outputs against your trusted source data before delivery." },
  { q: "What pricing models are available?", a: "We offer flexible enterprise tiers tailored to the complexity of your agentic workflows, data volumes, and custom architectural requirements." },
  { q: "Will this replace internal teams?", a: "No, Zentorex augments your human talent. It automates repetitive cognitive labor, empowering your teams to focus entirely on high-level strategy and innovation." },
  { q: "Does the platform support multilingual operations?", a: "Gemini architectures are natively multilingual; Zentorex supports over 100 languages with native-level semantic reasoning." },
  { q: "What is a Neural Pipeline?", a: "It is a deterministic sequence of automated AI tasks that ingest raw inputs—such as legal contracts or research papers—and synthesize finalized enterprise deliverables." },
  { q: "How secure is the underlying infrastructure?", a: "All operations run on SOC 2 Type II compliant, enterprise-grade infrastructure secured by Google Cloud Platform (GCP)." },
  { q: "Can the platform analyze competitor strategies?", a: "Yes, our market reasoning agents continuously scan competitive landscapes to identify strategic positioning gaps in real time." },
  { q: "How does token cost optimization work?", a: "Zentorex utilizes advanced prompt caching and context management to reduce redundant compute costs, achieving up to 80% savings on long-form API calls." },
  { q: "What developer support is provided?", a: "Our Enterprise Tier includes dedicated communication channels and direct collaboration with our senior neural architects." },
  { q: "How do we begin our transformation?", a: "Request a Neural Strategy Audit. Our experts will map your current operational trajectory and deliver a comprehensive 30-day integration roadmap." }
];

export default function Faqs() {
  return (
    <section className="py-24 bg-white font-urbanist" id="faqs">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h3 className="text-5xl font-bold tracking-tighter mb-4">
            Architecting the <span className="font-lobster text-indigo-600 font-normal">Intelligence Era</span>
          </h3>
          <p className="text-stone-500 text-xl">27 insights into Gemini-powered neural growth.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-0">
          {faqData.map((item, i) => <FAQItem key={i} question={item.q} answer={item.a} />)}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-stone-200 py-3">
      <button onClick={() => setOpen(!open)} className="w-full flex items-start justify-between text-left group px-4">
        <span className={`text-lg font-bold ${open ? "text-indigo-600" : "text-stone-900"}`}>{question}</span>
        <span className="text-2xl font-bold font-mono text-stone-400 bg-neutral-600 rounded-xs w-8 h-8 flex justify-center items-center aspect-square">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="mt-2 px-4 text-stone-600 leading-relaxed text-base">
          {answer}
        </div>
      )}
    </div>
  )
}