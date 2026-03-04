"use client"
import React, { useState } from 'react'

function Faqs() {
  return (
    <section className=" transition-colors duration-300 " id="faqs" data-section-title="faqs" data-toc-section="true">
      <div className="relative transition-colors duration-300">
        <section className="pt-10 pb-30 lg:pt-24 lg:pb-40">
          <div className="grid grid-cols-12 gap-3 p-4 lg:p-6">
            <div className="col-span-full pb-10 lg:col-span-6">
              <h3 className="text-[36px] font-bold ">Frequently asked questions</h3>
            </div>
            <div className="col-span-full lg:col-span-6">
              <div className="w-full flex flex-col gap-2" role="presentation">

                <FAQItem question="What can Zentronix do for my business?">
                  <p className="[&+&]:mt-[1em] text-[20px] leading-relaxed">Zentronix specializes in two main areas: first, <em>driving highly targeted organic traffic</em>, and second, <em>converting that traffic into qualified leads.</em></p>
                  <p className="[&+&]:mt-[1em] text-[20px] leading-relaxed">Think of it like the difference between simply having a website and running a fully optimized digital sales engine. We source better keywords, produce high-converting content, and build digital authority.</p>
                  <p className="[&+&]:mt-[1em] text-[20px] leading-relaxed">Today, our specialized strategies include: </p>
                  <ul className="list-dash relative mb-[1em] list-outside pl-[1em] last-of-type:mb-0 [p+&]:mt-[1em] text-[20px] leading-relaxed">
                    <li className="pl-3"><strong>SEO Optimization:</strong> We improve your search rankings, ensuring your brand captures high-intent traffic directly from search engines.</li>
                    <li className="pl-3"><strong>Content Marketing:</strong> We craft authoritative, engaging content that answers your customers' needs and establishes industry leadership.</li>
                    <li className="pl-3"><strong>Conversion Optimization:</strong> We analyze user behavior to refine your funnels, turning casual visitors into paying customers.</li>
                  </ul>
                  <p className="[&+&]:mt-[1em] text-[20px] leading-relaxed">We continuously improve the reliability and scale of these strategies, so your business grows sustainably out-of-the-box.</p>
                </FAQItem>

                <FAQItem question="How long does it take to see SEO results?">
                  <p className="[&+&]:mt-[1em] text-[20px] leading-relaxed">While some technical improvements yield immediate boosts, comprehensive SEO is a strategic, long-term investment. Most of our clients see significant organic growth within <em>3 to 6 months.</em></p>
                  <p className="[&+&]:mt-[1em] text-[20px] leading-relaxed">During the first few months, we focus on technical foundational fixes, uncovering keyword gaps, and executing high-impact content creation designed to capture market share.</p>
                </FAQItem>

                <FAQItem question="How much do your services cost?">
                  <p className="[&+&]:mt-[1em] text-[20px] leading-relaxed">Every business has unique needs, so we don't believe in one-size-fits-all pricing. Our custom growth campaigns are designed strictly to generate a massive, positive ROI.</p>
                  <p className="[&+&]:mt-[1em] text-[20px] leading-relaxed">Our scalable solutions grow alongside your revenue. Exact pricing structures are tailored to your objectives and will be outlined clearly after your initial strategy session.</p>
                </FAQItem>

                <FAQItem question="Do you work with businesses in my industry?">
                  <p className="[&+&]:mt-[1em] text-[20px] leading-relaxed">Yes. We have a diverse portfolio and proven methodologies that adapt seamlessly to various industries, from local service businesses to massive e-commerce platforms and SaaS.</p>
                  <p className="[&+&]:mt-[1em] text-[20px] leading-relaxed">Our data-first approach allows our specialists to deeply understand any niche, meticulously analyze competitors, and uncover the most profitable digital opportunities for your specific market.</p>
                </FAQItem>

                <FAQItem question="Is your SEO approach safe and compliant?">
                  <p className="[&+&]:mt-[1em] text-[20px] leading-relaxed">Absolutely. Zentronix is uniquely engineered around strict standards for safety, privacy, and algorithm compliance. We utilize <span className="decoration-secondary underline decoration-dotted underline-offset-[10%] font-semibold">100% white-hat strategies</span>.</p>
                  <p className="[&+&]:mt-[1em] text-[20px] leading-relaxed">Unlike risky tactics that can get a site penalized, our approach relies on building authentic authority and robust technical health, meaning your site maintains stability and continues to grow through algorithm updates.</p>
                </FAQItem>

                <FAQItem question="How do I get started with Zentronix?">
                  <p className="[&+&]:mt-[1em] text-[20px] leading-relaxed">Getting started is simple. Request an overview of our <a className="underline font-semibold underline-offset-[20%]" href="/beta-program">Free Digital Audit here</a>. Our experts will analyze your current digital presence and outline a custom roadmap for exponential growth.</p>
                </FAQItem>

              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Faqs

interface FAQItemProps {
  question: string;
  children: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden border-t border-gray-300 not-first:mt-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="flex w-full cursor-pointer items-start justify-between text-left pt-6 pb-2"
        aria-expanded={isOpen}
      >
        <span className="max-w-[60ch] flex-1">
          <p className="text-[24px] font-bold ">{question}</p>
        </span>
        <span
          className={`inline-flex shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
            }`}
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-down opacity-80"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className="overflow-hidden">
          <div className="pb-8  pt-4">{children}</div>
        </div>
      </div>
    </div>
  );
};