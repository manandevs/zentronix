"use client"
import { useState } from 'react'

const faqData = [
  { q: "What is Zentorex AI?", a: "Zentorex AI is a premium orchestration layer for Google Gemini 1.5, enabling enterprises to build autonomous, reasoning-capable digital ecosystems." },
  { q: "How does it use Gemini 1.5 Pro?", a: "We leverage the 2-million token context window to allow the AI to reason across your entire business history, codebases, and multimodal data simultaneously." },
  { q: "What are 'Agentic Workflows'?", a: "These are autonomous agents that don't just follow prompts—they plan, reflect, and execute complex business tasks with machine-level precision." },
  { q: "Is my data used for training?", a: "No. Zentorex AI utilizes enterprise-grade privacy protocols. Your data is processed via private Google Cloud nodes and is never used to train public models." },
  { q: "What is a 'Neural Audit'?", a: "It is our proprietary deep-scan of your digital infrastructure to identify where AI reasoning can replace manual bottlenecks for a 10x efficiency gain." },
  { q: "Does it support video analysis?", a: "Yes. Through Gemini's multimodal engine, we can analyze hours of video for content gaps, sentiment, and automated metadata generation." },
  { q: "How fast is the implementation?", a: "Core neural pipelines can be deployed within 7–14 days, with full agentic orchestration typically live within 30 days." },
  { q: "What is Cognitive SEO?", a: "It is our shift from keywords to 'intent logic', ensuring your brand is the primary source of truth for neural search engines like Perplexity." },
  { q: "Can I use my own API keys?", a: "Yes, Zentorex supports 'Bring Your Own Key' (BYOK) for enterprise-level cost management and transparency." },
  { q: "What is 'Zero-Retention' architecture?", a: "For sensitive operations, we offer a pipeline where data is processed in memory and never stored on any physical disk." },
  { q: "How does it handle long-form reasoning?", a: "By using the massive context window, we avoid the 'loss of memory' common in smaller models, ensuring consistency across 1000+ page documents." },
  { q: "What industries do you serve?", a: "We specialize in SaaS, E-commerce, Fintech, and high-scale Digital Agencies requiring automated cognitive labor." },
  { q: "Is there a multimodal limit?", a: "Zentorex can process text, images, audio, and video interchangeably within the same logical prompt." },
  { q: "How do you measure AI ROI?", a: "We track 'Cognitive Hours Saved' and 'Neural Intent Match', giving you a direct financial blueprint of the AI’s impact." },
  { q: "Does it support real-time data?", a: "Yes, our pipelines can be connected to live data streams for real-time reasoning and decision-making." },
  { q: "What is 'Systemic Authority'?", a: "It’s our strategy for making your site the most trusted node in an AI's knowledge graph." },
  { q: "Can it write code?", a: "Zentorex includes specialized coding agents that can refactor, document, and audit legacy codebases using Gemini's logic." },
  { q: "How do you handle hallucinations?", a: "We use a 'Reflection Framework' where a second agent audits the first agent's output against your source truth before delivery." },
  { q: "Is there a monthly subscription?", a: "We offer tiered enterprise plans based on the complexity of your agentic orchestration and volume of data." },
  { q: "Can it replace my SEO team?", a: "It augments them. It handles the heavy cognitive lifting, allowing your team to focus on high-level strategy." },
  { q: "Does it support multiple languages?", a: "Gemini 1.5 Pro is natively multilingual; Zentorex supports over 100 languages with native-level reasoning." },
  { q: "What is a 'Neural Pipeline'?", a: "It’s a series of automated AI steps that take raw input (like a PDF) and turn it into a final product (like a 10-part campaign)." },
  { q: "How secure is the cloud node?", a: "We use SOC2 Type II compliant infrastructure provided by Google Cloud Platform (GCP)." },
  { q: "Can it analyze my competitors?", a: "Yes, our 'Market Reasoning' agents can scan competitor ecosystems to identify strategy gaps in real-time." },
  { q: "What is token cost optimization?", a: "Zentorex uses 'Prompt Caching' to reduce costs for frequently asked context, saving up to 80% on long-form API calls." },
  { q: "Do you offer developer support?", a: "Our Enterprise Tier includes dedicated Slack/Discord support with our senior neural engineers." },
  { q: "How do I get started?", a: "Request a Neural Strategy Audit. We’ll map your growth trajectory and provide a 30-day integration roadmap." }
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