"use client";

import { ScrollReveal } from "./scroll-reveal";

export function CognitiveGrowthBlock() {
  return (
    <ScrollReveal
      className="service-card isolate col-span-2 grid grid-cols-6 gap-6 pb-30 md:gap-4 md:px-8 md:pb-40 font-urbanist"
      delay={0.16}
    >
      <div className="relative col-span-6 grid aspect-3/4 flex-none grid-cols-2 gap-2 overflow-hidden bg-yellow-500 md:aspect-3/4 md:rounded-2xl lg:aspect-video pointer-events-none shadow-xl before:pointer-events-none before:absolute before:inset-0 before:z-1 before:bg-black/10 before:content-['']">
        <div className="pointer-events-none relative z-10 col-span-2 flex flex-col items-center justify-center gap-2 p-4 text-white">
          <h2 className="text-center text-balance text-[36px] font-bold drop-shadow-md">
            Self-Evolving Cognitive Growth
          </h2>
        </div>
      </div>

      <div className="col-span-full grid grid-cols-6 gap-4">
        <div className="col-span-6 flex flex-col justify-between rounded-2xl border border-gray-200 bg-gray-50 p-6 max-md:mx-4 max-md:mt-4 max-md:aspect-video md:min-h-48 lg:col-span-2 shadow-sm">
          <p className="flex-1 pb-12 font-bold text-[24px] md:pb-0">
            Continuous Neural Optimization
          </p>
          <p className="text-[20px] font-medium leading-relaxed md:max-w-[80%] lg:max-w-full">
            AI models evolve daily, and so do our systems. We continuously
            monitor, adapt, and fine-tune your autonomous agents to ensure
            long-term, compounding intelligence and market-leading digital
            visibility.
          </p>
        </div>

        <div className="col-span-6 no-scrollbar flex snap-x snap-mandatory gap-4 max-md:overflow-x-auto md:grid md:grid-cols-4 md:gap-4 lg:col-span-4">
          <div className="relative w-[calc(100%-var(--spacing)*4)] shrink-0 snap-start max-md:first-of-type:pl-4 md:col-span-2 md:w-full max-md:last-of-type:pr-4">
            <div className="group relative isolate aspect-video flex-none grid-cols-2 gap-6 overflow-hidden rounded-2xl bg-red-600 shadow-md grid w-full">
              <div className="pointer-events-none relative z-10 col-span-2 flex flex-col justify-between gap-2 p-4 text-white bg-black/10">
                <div className="flex items-start justify-between">
                  <div className="flex flex-wrap gap-2 xl:items-center">
                    <span className="inline-block w-fit rounded-md border border-white/30 bg-white/10 px-2 py-1 text-[16px] font-semibold text-white backdrop-blur-sm">
                      Generative
                    </span>
                    <span className="inline-block w-fit rounded-md border border-white/30 bg-white/10 px-2 py-1 text-[16px] font-semibold text-white backdrop-blur-sm">
                      Synthesis
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <p className="font-bold text-[20px] text-white drop-shadow-sm">
                    Dynamic Content Synthesis
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-[calc(100%-var(--spacing)*4)] shrink-0 snap-start max-md:first-of-type:pl-4 md:col-span-2 md:w-full max-md:last-of-type:pr-4">
            <div className="group relative isolate aspect-video flex-none grid-cols-2 gap-6 overflow-hidden rounded-2xl bg-pink-600 shadow-md grid w-full">
              <div className="pointer-events-none relative z-10 col-span-2 flex flex-col justify-between gap-2 p-4 text-white bg-black/10">
                <div className="flex items-start justify-between">
                  <div className="flex flex-wrap gap-2 xl:items-center">
                    <span className="inline-block w-fit rounded-md border border-white/30 bg-white/10 px-2 py-1 text-[16px] font-semibold text-white backdrop-blur-sm">
                      Predictive
                    </span>
                    <span className="inline-block w-fit rounded-md border border-white/30 bg-white/10 px-2 py-1 text-[16px] font-semibold text-white backdrop-blur-sm">
                      Alignment
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <p className="font-bold text-[20px] text-white drop-shadow-sm">
                    Predictive Value Optimization
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
