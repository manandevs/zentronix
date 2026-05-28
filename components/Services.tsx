import Image from 'next/image'
import React from 'react'

function Services() {
  return (
    <section className="transition-colors duration-300 bg-white" id="services">
      <div className="relative transition-colors duration-300">
        <section className="relative pb-30 transition-colors duration-300 lg:pb-12">

          <div className="flex flex-col items-center gap-4 pt-40 md:pt-60 lg:pt-0">
            <div className="flex w-full flex-col items-center justify-start gap-4 pb-24 lg:min-h-[120svh] lg:flex-row lg:justify-center lg:gap-0 font-urbanist">
              <h2 className="sr-only">Autonomous Intelligence, Exponential Growth</h2>

              <div
                className="sticky top-[30vh] self-start max-lg:mx-auto lg:top-0"
                style={{ marginTop: "0vh", paddingTop: "30vh", paddingBottom: "0px" }}
              >
                <span
                  className="block max-w-[19ch] text-center font-bold text-8xl leading-none md:text-11xl lg:mx-[0.1em] lg:text-11xl xl:text-12xl 2xl:text-14xl tracking-tight"
                  aria-hidden="true"
                >
                  Agentic
                </span>
              </div>

              <div
                className="sticky top-[30vh] self-start max-lg:mx-auto lg:top-0"
                style={{ marginTop: "20vh", paddingTop: "30vh", paddingBottom: "0px" }}
              >
                <span
                  className="block max-w-[19ch] text-center font-bold text-8xl leading-none md:text-11xl lg:mx-[0.1em] lg:text-11xl xl:text-12xl 2xl:text-14xl tracking-tight"
                  aria-hidden="true"
                >
                  Systemic
                </span>
              </div>

              <div
                className="sticky top-[30vh] self-start max-lg:mx-auto lg:top-0"
                style={{ marginTop: "40vh", paddingTop: "30vh", paddingBottom: "0px" }}
              >
                <span
                  className="block max-w-[19ch] text-center font-bold text-8xl leading-none md:text-11xl lg:mx-[0.1em] lg:text-11xl xl:text-12xl 2xl:text-14xl tracking-tight"
                  aria-hidden="true"
                >
                  Evolution
                </span>
              </div>
            </div>

            {/* Subheading */}
            <div className="px-6 py-8 pb-32 max-w-4xl mx-auto">
              <p className="text-center text-[20px] font-medium leading-relaxed font-urbanist">
                Driven by Google’s Gemini 1.5 Pro architecture and our proprietary{" "}
                <span className="decoration-black cursor-help underline decoration-dotted underline-offset-[10%] font-semibold">
                  Neural Logic Framework
                </span>
                , Zentorex AI doesn’t just process data—we{" "}
                <strong>reason, synthesize, and scale your operational intelligence at machine speed</strong>.
                From long-context analysis to autonomous agent orchestration, we redefine the architecture
                of modern enterprise growth.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mx-auto">
            {/* Feature Block 1 */}
            <div className="service-card isolate col-span-2 grid grid-cols-6 gap-6 pb-30 md:gap-4 md:px-8 md:pb-40 font-urbanist">
              {/* Red Card Overlay */}
              <div className="relative col-span-6 grid aspect-3/4 flex-none grid-cols-2 gap-2 overflow-hidden bg-red-600 md:aspect-3/4 md:rounded-2xl lg:aspect-video pointer-events-none shadow-xl before:pointer-events-none before:absolute before:inset-0 before:z-1 before:bg-black/10 before:content-['']">
                <div className="pointer-events-none relative z-10 col-span-2 flex flex-col items-center justify-center gap-2 p-4 text-white">
                  <h2 className="text-center text-balance text-[36px] font-bold drop-shadow-md">
                    Mastering Neural Logic
                  </h2>
                  <div className="absolute bottom-4 left-4">
                    <div className="group block[--media-button-icon-height:20px]">
                      <div slot="icon" className="relative grid cursor-pointer place-items-center rounded-full bg-white/20 backdrop-blur-lg transition-colors duration-200 hover:bg-white/40" style={{ width: "24px", height: "24px" } as React.CSSProperties}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play z-10 h-[12px] w-[12px] fill-white" aria-hidden="true"><polygon points="6 3 20 12 6 21 6 3" /></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-full grid grid-cols-6 gap-4">
                {/* Text Box */}
                <div className="col-span-6 flex flex-col justify-between rounded-2xl border border-gray-200 bg-gray-50 p-6 max-md:mx-4 max-md:mt-4 max-md:aspect-video md:col-span-3 md:min-h-48 shadow-sm">
                  <p className="flex-1 pb-12 font-bold text-[24px] md:pb-0">Scaling Operational Intelligence</p>
                  <p className="pr-4 text-[20px] font-medium leading-relaxed lg:max-w-full">
                    Zentorex AI consistently enhances your business logic, synthesizes complex multimodal data, and builds systemic authority through Gemini's 1.5 architecture.<br /><br />
                    Let us optimize the neural pipelines, so you can focus on the high-level vision that drives global impact.
                  </p>
                </div>

                {/* Blue Sub-Card */}
                <div className="relative w-[calc(100%-var(--spacing)*4)] shrink-0 snap-start max-md:first-of-type:pl-4 md:w-full col-span-6 max-md:pl-4 md:col-span-3 md:flex-1">
                  <div className="group relative isolate aspect-video flex-none grid-cols-2 gap-6 overflow-hidden rounded-2xl bg-blue-600 shadow-md grid w-full">
                    <div className="pointer-events-none relative z-10 col-span-2 flex flex-col justify-between gap-2 p-4 text-white bg-black/10">
                      <div className="flex items-start justify-between">
                        <div className="flex flex-wrap gap-2 xl:items-center">
                          <span className="inline-block w-fit rounded-md border border-white/30 bg-white/10 px-2 py-1 text-[16px] font-semibold text-white backdrop-blur-sm">Multimodal</span>
                          <span className="inline-block w-fit rounded-md border border-white/30 bg-white/10 px-2 py-1 text-[16px] font-semibold text-white backdrop-blur-sm">Neural Scale</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="relative grid cursor-pointer place-items-center rounded-full bg-white/20 backdrop-blur-lg p-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play z-10 h-[12px] w-[12px] fill-white" aria-hidden="true"><polygon points="6 3 20 12 6 21 6 3" /></svg>
                        </div>
                        <p className="font-bold text-[20px] text-white drop-shadow-sm">Long-Context Reasoning</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-card isolate col-span-2 grid grid-cols-6 gap-6 pb-30 md:gap-4 md:px-8 md:pb-40 font-urbanist">
              {/* Blue Card Overlay */}
              <div className="relative col-span-6 grid aspect-3/4 flex-none grid-cols-2 gap-2 overflow-hidden bg-blue-600 md:aspect-3/4 md:rounded-2xl lg:aspect-video pointer-events-none shadow-xl before:pointer-events-none before:absolute before:inset-0 before:z-1 before:bg-black/10 before:content-['']">
                <div className="pointer-events-none relative z-10 col-span-2 flex flex-col items-center justify-center gap-2 p-4 text-white">
                  <h2 className="text-center text-balance text-[36px] font-bold drop-shadow-md">
                    Neural Frameworks Tailored to Your Enterprise
                  </h2>
                  <div className="absolute bottom-4 left-4">
                    <div className="group block [--media-button-icon-height:20px]">
                      <div slot="icon" className="relative grid cursor-pointer place-items-center rounded-full bg-white/20 backdrop-blur-lg transition-colors duration-200 hover:bg-white/40" style={{ width: "24px", height: "24px" } as React.CSSProperties}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play z-10 h-[12px] w-[12px] fill-white" aria-hidden="true"><polygon points="6 3 20 12 6 21 6 3" /></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-full grid grid-cols-6 gap-4">
                {/* Left Text Box */}
                <div className="col-span-6 flex flex-col justify-between rounded-2xl border border-gray-200 bg-gray-50 p-6 max-md:mx-4 max-md:mt-4 max-md:aspect-video md:min-h-48 lg:col-span-2 shadow-sm">
                  <p className="flex-1 pb-12 font-bold text-[24px] md:pb-0">
                    Every enterprise is unique. We architect bespoke neural systems.
                  </p>
                  <p className="text-[20px] font-medium leading-relaxed md:max-w-[80%] lg:max-w-full">
                    We believe intelligence should be autonomous and measurable. Our experts analyze your specific operational landscape to deploy Gemini-driven frameworks that capture market share and drive exponential value.
                  </p>
                </div>

                <div className="col-span-6 no-scrollbar flex snap-x snap-mandatory gap-4 max-md:overflow-x-auto md:grid md:grid-cols-4 md:gap-4 lg:col-span-4">
                  {/* Sub-Card 1 (Red) */}
                  <div className="relative w-[calc(100%-var(--spacing)*4)] shrink-0 snap-start max-md:first-of-type:pl-4 md:col-span-2 md:w-full max-md:last-of-type:pr-4">
                    <div className="group relative isolate aspect-video flex-none grid-cols-2 gap-6 overflow-hidden rounded-2xl bg-red-600 shadow-md grid w-full">
                      <div className="pointer-events-none relative z-10 col-span-2 flex flex-col justify-between gap-2 p-4 text-white bg-black/10">
                        <div className="flex items-start justify-between">
                          <div className="flex flex-wrap gap-2 xl:items-center">
                            <span className="inline-block w-fit rounded-md border border-white/30 bg-white/10 px-2 py-1 text-[16px] font-semibold text-white backdrop-blur-sm">Core</span>
                            <span className="inline-block w-fit rounded-md border border-white/30 bg-white/10 px-2 py-1 text-[16px] font-semibold text-white backdrop-blur-sm">Engine</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <p className="font-bold text-[20px] text-white drop-shadow-sm">Gemini API Orchestration</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sub-Card 2 (Yellow) */}
                  <div className="relative w-[calc(100%-var(--spacing)*4)] shrink-0 snap-start max-md:first-of-type:pl-4 md:col-span-2 md:w-full max-md:last-of-type:pr-4">
                    <div className="group relative isolate aspect-video flex-none grid-cols-2 gap-6 overflow-hidden rounded-2xl bg-yellow-500 shadow-md grid w-full">
                      <div className="pointer-events-none relative z-10 col-span-2 flex flex-col justify-between gap-2 p-4 text-white bg-black/10">
                        <div className="flex items-start justify-between">
                          <div className="flex flex-wrap gap-2 xl:items-center">
                            <span className="inline-block w-fit rounded-md border border-white/30 bg-white/10 px-2 py-1 text-[16px] font-semibold text-white backdrop-blur-sm">Agentic</span>
                            <span className="inline-block w-fit rounded-md border border-white/30 bg-white/10 px-2 py-1 text-[16px] font-semibold text-white backdrop-blur-sm">Scale</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <p className="font-bold text-[20px] text-white drop-shadow-sm">Autonomous Agent Design</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-card isolate col-span-2 grid grid-cols-6 gap-6 pb-30 md:gap-4 md:px-8 md:pb-40 font-urbanist">
              {/* Yellow Card Overlay */}
              <div className="relative col-span-6 grid aspect-3/4 flex-none grid-cols-2 gap-2 overflow-hidden bg-yellow-500 md:aspect-3/4 md:rounded-2xl lg:aspect-video pointer-events-none shadow-xl before:pointer-events-none before:absolute before:inset-0 before:z-1 before:bg-black/10 before:content-['']">
                <div className="pointer-events-none relative z-10 col-span-2 flex flex-col items-center justify-center gap-2 p-4 text-white">
                  <h2 className="text-center text-balance text-[36px] font-bold drop-shadow-md">
                    Self-Evolving Cognitive Growth
                  </h2>
                </div>
              </div>

              <div className="col-span-full grid grid-cols-6 gap-4">
                {/* Left Text Box */}
                <div className="col-span-6 flex flex-col justify-between rounded-2xl border border-gray-200 bg-gray-50 p-6 max-md:mx-4 max-md:mt-4 max-md:aspect-video md:min-h-48 lg:col-span-2 shadow-sm">
                  <p className="flex-1 pb-12 font-bold text-[24px] md:pb-0">Continuous Neural Optimization</p>
                  <p className="text-[20px] font-medium leading-relaxed md:max-w-[80%] lg:max-w-full">
                    AI models evolve daily, and so do our systems. We continuously monitor, adapt, and fine-tune your autonomous agents to ensure long-term, compounding intelligence and market-leading digital visibility.
                  </p>
                </div>

                <div className="col-span-6 no-scrollbar flex snap-x snap-mandatory gap-4 max-md:overflow-x-auto md:grid md:grid-cols-4 md:gap-4 lg:col-span-4">
                  {/* Sub-Card 1 (Red) */}
                  <div className="relative w-[calc(100%-var(--spacing)*4)] shrink-0 snap-start max-md:first-of-type:pl-4 md:col-span-2 md:w-full max-md:last-of-type:pr-4">
                    <div className="group relative isolate aspect-video flex-none grid-cols-2 gap-6 overflow-hidden rounded-2xl bg-red-600 shadow-md grid w-full">
                      <div className="pointer-events-none relative z-10 col-span-2 flex flex-col justify-between gap-2 p-4 text-white bg-black/10">
                        <div className="flex items-start justify-between">
                          <div className="flex flex-wrap gap-2 xl:items-center">
                            <span className="inline-block w-fit rounded-md border border-white/30 bg-white/10 px-2 py-1 text-[16px] font-semibold text-white backdrop-blur-sm">Generative</span>
                            <span className="inline-block w-fit rounded-md border border-white/30 bg-white/10 px-2 py-1 text-[16px] font-semibold text-white backdrop-blur-sm">Synthesis</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <p className="font-bold text-[20px] text-white drop-shadow-sm">Dynamic Content Synthesis</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sub-Card 2 (Pink) */}
                  <div className="relative w-[calc(100%-var(--spacing)*4)] shrink-0 snap-start max-md:first-of-type:pl-4 md:col-span-2 md:w-full max-md:last-of-type:pr-4">
                    <div className="group relative isolate aspect-video flex-none grid-cols-2 gap-6 overflow-hidden rounded-2xl bg-pink-600 shadow-md grid w-full">
                      <div className="pointer-events-none relative z-10 col-span-2 flex flex-col justify-between gap-2 p-4 text-white bg-black/10">
                        <div className="flex items-start justify-between">
                          <div className="flex flex-wrap gap-2 xl:items-center">
                            <span className="inline-block w-fit rounded-md border border-white/30 bg-white/10 px-2 py-1 text-[16px] font-semibold text-white backdrop-blur-sm">Predictive</span>
                            <span className="inline-block w-fit rounded-md border border-white/30 bg-white/10 px-2 py-1 text-[16px] font-semibold text-white backdrop-blur-sm">Alignment</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <p className="font-bold text-[20px] text-white drop-shadow-sm">Predictive Value Optimization</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Services