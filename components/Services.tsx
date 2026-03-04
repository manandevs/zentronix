import Image from 'next/image'
import React from 'react'

function Services() {
  return (
    <section className="transition-colors duration-300 bg-white" id="services">
      <div className="relative transition-colors duration-300">
        <section className="relative pb-30 transition-colors duration-300 lg:pb-12">

          <div className="flex flex-col items-center gap-4 pt-40 md:pt-60 lg:pt-0">
            <div className="flex w-full flex-col items-center justify-start gap-4 pb-24 lg:min-h-[120svh] lg:flex-row lg:justify-center lg:gap-0">
              <h2 className="sr-only">Targeted SEO, Extraordinary Growth</h2>

              <div
                className="sticky top-[30vh] self-start max-lg:mx-auto lg:top-0"
                style={{ marginTop: "0vh", paddingTop: "30vh", paddingBottom: "0px" }}
              >
                <span
                  className="block max-w-[19ch] text-center font-bold text-8xl leading-none md:text-11xl lg:mx-[0.1em] lg:text-11xl xl:text-12xl 2xl:text-14xl tracking-tight"
                  aria-hidden="true"
                >
                  Targeted
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
                  Search
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
                  Dominance
                </span>
              </div>
            </div>

            {/* Subheading */}
            <div className="px-6 py-8 pb-32 max-w-4xl mx-auto">
              <p className="text-center text-[20px] font-medium leading-relaxed ">
                Driven by cutting-edge analytics and a constantly expanding <span className="decoration-black cursor-help underline decoration-dotted underline-offset-[10%] font-semibold">Growth Framework</span>, Zentronix doesn’t just perform tasks—we <strong>analyze, adapt, and scale your visibility faster than the competition</strong>. From technical audits to high-conversion funnels, we transform the way your digital business operates.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mx-auto">
            {/* Feature Block 1 */}
            <div className="service-card isolate col-span-2 grid grid-cols-6 gap-6 pb-30 md:gap-4 md:px-8 md:pb-40">
              <div className="relative col-span-6 grid aspect-3/4 flex-none grid-cols-2 gap-2 overflow-hidden bg-red-600 md:aspect-3/4 md:rounded-2xl lg:aspect-video pointer-events-none shadow-xl before:pointer-events-none before:absolute before:inset-0 before:z-1 before:bg-black/10 before:content-['']">
                <div className="pointer-events-none relative z-10 col-span-2 flex flex-col items-center justify-center gap-2 p-4 text-white">
                  <h2 className="text-center text-balance text-[36px] font-bold drop-shadow-md">Dominating Search Results</h2>
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
                <div className="col-span-6 flex flex-col justify-between rounded-2xl border border-gray-200 bg-gray-50 p-6 max-md:mx-4 max-md:mt-4 max-md:aspect-video md:col-span-3 md:min-h-48 shadow-sm">
                  <p className="flex-1 pb-12 font-bold text-[24px] md:pb-0">Scaling Your Traffic</p>
                  <p className="pr-4 text-[20px] font-medium leading-relaxed  lg:max-w-full">
                    Zentronix consistently elevates your search rankings, captures high-intent organic traffic, and systematically builds your domain authority.<br /><br />
                    Let us optimize the algorithms, so you can focus on closing the leads we bring to your pipeline.
                  </p>
                </div>
                <div className="relative w-[calc(100%-var(--spacing)*4)] shrink-0 snap-start max-md:first-of-type:pl-4 md:w-full col-span-6 max-md:pl-4 md:col-span-3 md:flex-1">
                  <div className="group relative isolate aspect-video flex-none grid-cols-2 gap-6 overflow-hidden rounded-2xl bg-blue-600 shadow-md grid w-full">
                    <div className="pointer-events-none relative z-10 col-span-2 flex flex-col justify-between gap-2 p-4 text-white bg-black/10">
                      <div className="flex items-start justify-between">
                        <div className="flex flex-wrap gap-2 xl:items-center">
                          <span className="inline-block w-fit rounded-md border border-white/30 bg-white/10 px-2 py-1 text-[16px] font-semibold text-white backdrop-blur-sm">Organic</span>
                          <span className="inline-block w-fit rounded-md border border-white/30 bg-white/10 px-2 py-1 text-[16px] font-semibold text-white backdrop-blur-sm">5× ROI</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="relative grid cursor-pointer place-items-center rounded-full bg-white/20 backdrop-blur-lg p-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play z-10 h-[12px] w-[12px] fill-white" aria-hidden="true"><polygon points="6 3 20 12 6 21 6 3" /></svg>
                        </div>
                        <p className="font-bold text-[20px] text-white drop-shadow-sm">In-depth SEO Audits</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Block 2 */}
            <div className="service-card isolate col-span-2 grid grid-cols-6 gap-6 pb-30 md:gap-4 md:px-8 md:pb-40">
              <div className="relative col-span-6 grid aspect-3/4 flex-none grid-cols-2 gap-2 overflow-hidden bg-blue-600 md:aspect-3/4 md:rounded-2xl lg:aspect-video pointer-events-none shadow-xl before:pointer-events-none before:absolute before:inset-0 before:z-1 before:bg-black/10 before:content-['']">
                <div className="pointer-events-none relative z-10 col-span-2 flex flex-col items-center justify-center gap-2 p-4 text-white">
                  <h2 className="text-center text-balance text-[36px] font-bold drop-shadow-md">Strategies Tailored to Your Niche</h2>
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
                <div className="col-span-6 flex flex-col justify-between rounded-2xl border border-gray-200 bg-gray-50 p-6 max-md:mx-4 max-md:mt-4 max-md:aspect-video md:min-h-48 lg:col-span-2 shadow-sm">
                  <p className="flex-1 pb-12 font-bold text-[24px] md:pb-0">Every business is unique. We craft bespoke SEO strategies.</p>
                  <p className="text-[20px] font-medium leading-relaxed  md:max-w-[80%] lg:max-w-full">We believe growth should be measurable and sustainable. Our experts analyze your specific market to deploy frameworks that capture market share and drive real, tangible revenue.</p>
                </div>

                <div className="col-span-6 no-scrollbar flex snap-x snap-mandatory gap-4 max-md:overflow-x-auto md:grid md:grid-cols-4 md:gap-4 lg:col-span-4">
                  <div className="relative w-[calc(100%-var(--spacing)*4)] shrink-0 snap-start max-md:first-of-type:pl-4 md:col-span-2 md:w-full max-md:last-of-type:pr-4">
                    <div className="group relative isolate aspect-video flex-none grid-cols-2 gap-6 overflow-hidden rounded-2xl bg-red-600 shadow-md grid w-full">
                      <div className="pointer-events-none relative z-10 col-span-2 flex flex-col justify-between gap-2 p-4 text-white bg-black/10">
                        <div className="flex items-start justify-between">
                          <div className="flex flex-wrap gap-2 xl:items-center">
                            <span className="inline-block w-fit rounded-md border border-white/30 bg-white/10 px-2 py-1 text-[16px] font-semibold text-white backdrop-blur-sm">Technical</span>
                            <span className="inline-block w-fit rounded-md border border-white/30 bg-white/10 px-2 py-1 text-[16px] font-semibold text-white backdrop-blur-sm">Audit</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <p className="font-bold text-[20px] text-white drop-shadow-sm">Technical SEO Optimization</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative w-[calc(100%-var(--spacing)*4)] shrink-0 snap-start max-md:first-of-type:pl-4 md:col-span-2 md:w-full max-md:last-of-type:pr-4">
                    <div className="group relative isolate aspect-video flex-none grid-cols-2 gap-6 overflow-hidden rounded-2xl bg-yellow-500 shadow-md grid w-full">
                      <div className="pointer-events-none relative z-10 col-span-2 flex flex-col justify-between gap-2 p-4 text-white bg-black/10">
                        <div className="flex items-start justify-between">
                          <div className="flex flex-wrap gap-2 xl:items-center">
                            <span className="inline-block w-fit rounded-md border border-white/30 bg-white/10 px-2 py-1 text-[16px] font-semibold text-white backdrop-blur-sm">Authority</span>
                            <span className="inline-block w-fit rounded-md border border-white/30 bg-white/10 px-2 py-1 text-[16px] font-semibold text-white backdrop-blur-sm">Growth</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <p className="font-bold text-[20px] text-white drop-shadow-sm">High-Quality Link Building</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Feature Block 3 */}
            <div className="service-card isolate col-span-2 grid grid-cols-6 gap-6 pb-30 md:gap-4 md:px-8 md:pb-40">
              <div className="relative col-span-6 grid aspect-3/4 flex-none grid-cols-2 gap-2 overflow-hidden bg-yellow-500 md:aspect-3/4 md:rounded-2xl lg:aspect-video pointer-events-none shadow-xl before:pointer-events-none before:absolute before:inset-0 before:z-1 before:bg-black/10 before:content-['']">
                <div className="pointer-events-none relative z-10 col-span-2 flex flex-col items-center justify-center gap-2 p-4 text-white">
                  <h2 className="text-center text-balance text-[36px] font-bold drop-shadow-md">Data-Driven Continuous Growth</h2>
                </div>
              </div>

              <div className="col-span-full grid grid-cols-6 gap-4">
                <div className="col-span-6 flex flex-col justify-between rounded-2xl border border-gray-200 bg-gray-50 p-6 max-md:mx-4 max-md:mt-4 max-md:aspect-video md:min-h-48 lg:col-span-2 shadow-sm">
                  <p className="flex-1 pb-12 font-bold text-[24px] md:pb-0">Optimizing Month Over Month</p>
                  <p className="text-[20px] font-medium leading-relaxed  md:max-w-[80%] lg:max-w-full">Search algorithms evolve constantly, and so do our strategies. We continuously monitor, adapt, and refine your campaigns to ensure long-term, compounding growth and improved digital visibility.</p>
                </div>

                <div className="col-span-6 no-scrollbar flex snap-x snap-mandatory gap-4 max-md:overflow-x-auto md:grid md:grid-cols-4 md:gap-4 lg:col-span-4">
                  <div className="relative w-[calc(100%-var(--spacing)*4)] shrink-0 snap-start max-md:first-of-type:pl-4 md:col-span-2 md:w-full max-md:last-of-type:pr-4">
                    <div className="group relative isolate aspect-video flex-none grid-cols-2 gap-6 overflow-hidden rounded-2xl bg-red-600 shadow-md grid w-full">
                      <div className="pointer-events-none relative z-10 col-span-2 flex flex-col justify-between gap-2 p-4 text-white bg-black/10">
                        <div className="flex items-start justify-between">
                          <div className="flex flex-wrap gap-2 xl:items-center">
                            <span className="inline-block w-fit rounded-md border border-white/30 bg-white/10 px-2 py-1 text-[16px] font-semibold text-white backdrop-blur-sm">Content</span>
                            <span className="inline-block w-fit rounded-md border border-white/30 bg-white/10 px-2 py-1 text-[16px] font-semibold text-white backdrop-blur-sm">Strategy</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <p className="font-bold text-[20px] text-white drop-shadow-sm">Content Strategy Execution</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative w-[calc(100%-var(--spacing)*4)] shrink-0 snap-start max-md:first-of-type:pl-4 md:col-span-2 md:w-full max-md:last-of-type:pr-4">
                    <div className="group relative isolate aspect-video flex-none grid-cols-2 gap-6 overflow-hidden rounded-2xl bg-pink-600 shadow-md grid w-full">
                      <div className="pointer-events-none relative z-10 col-span-2 flex flex-col justify-between gap-2 p-4 text-white bg-black/10">
                        <div className="flex items-start justify-between">
                          <div className="flex flex-wrap gap-2 xl:items-center">
                            <span className="inline-block w-fit rounded-md border border-white/30 bg-white/10 px-2 py-1 text-[16px] font-semibold text-white backdrop-blur-sm">Conversion</span>
                            <span className="inline-block w-fit rounded-md border border-white/30 bg-white/10 px-2 py-1 text-[16px] font-semibold text-white backdrop-blur-sm">Focus</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <p className="font-bold text-[20px] text-white drop-shadow-sm">Conversion Rate Optimization</p>
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