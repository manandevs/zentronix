import Image from 'next/image'
import React from 'react'

function Technology() {
  return (
    <section className="text-primary transition-colors duration-300 font-urbanist" id="technology" data-section-title="technology" data-toc-section="true">
      <div className="relative transition-colors duration-300">
        <section className="overflow-clip bg-white transition-colors duration-300 [--border-radius:12px] [--container-padding:16px] [--entry-progress:0] [--exit-progress:0] lg:pb-24 lg:[--container-padding:24px]">
          
          <div className="flex h-[180vh] flex-col justify-end">
            <div className="h-[300vh] min-h-[300vh] w-full">
              <div
                className="mx-auto flex min-h-[calc(100vh-var(--spacing)*6)] w-full justify-center bg-linear-to-b from-indigo-50 via-white to-stone-100"
                style={{
                  clipPath: "inset(0px calc((var(--container-padding)) * var(--exit-progress)) round calc(var(--border-radius) * var(--exit-progress)))",
                  "--exit-progress": 0
                } as React.CSSProperties}
              >
                <div className="relative flex min-h-[400vh] w-full flex-col">
                  
                  {/* MAIN STICKY HEADLINE */}
                  <div className="z-30 sticky top-0 flex h-svh w-full flex-col items-center justify-center px-4 text-center">
                    <p className="font-semibold text-sm mb-4">
                      The Gemini 1.5 Architecture
                    </p>
                    <h1 className="max-w-[15ch] text-[55px] md:text-[100px] font-bold leading-[0.9] tracking-tighter">
                      From raw complexity to{" "}
                      <span className="font-lobster font-normal text-indigo-600">Neural Mastery</span>
                    </h1>
                  </div>

                  {/* FLOATING CONTENT BLOCKS - These appear as the user scrolls down */}
                  <div className="relative z-40 px-6 lg:px-20 justify-between py-[35vh]">
                    
                    {/* Block 1 */}
                    <div className="max-w-md bg-white/40 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-xl">
                      <h3 className="text-2xl font-bold mb-3">Multimodal Synthesis</h3>
                      <p className="text-stone-600 leading-relaxed">
                        Zentorex AI processes 2-million token context windows, allowing your enterprise to reason across text, vision, and code archives simultaneously.
                      </p>
                    </div>

                    {/* Block 2 (Right Aligned) */}
                    <div className="max-w-md ml-auto bg-white/40 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-xl">
                      <h3 className="text-2xl font-bold mb-3">Agentic Orchestration</h3>
                      <p className="text-stone-600 leading-relaxed">
                        Our framework deploys autonomous agents that don't just follow instructions—they plan, reflect, and execute complex business logic.
                      </p>
                    </div>

                    {/* Block 3 */}
                    <div className="max-w-md bg-white/40 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-xl">
                      <h3 className="text-2xl font-bold mb-3">Predictive Epochs</h3>
                      <p className="text-stone-600 leading-relaxed">
                        We optimize for the next epoch of search. By understanding neural intent, Zentorex ensures your brand remains the primary source of truth.
                      </p>
                    </div>

                  </div>

                  {/* BOTTOM STICKY IMAGE */}
                  <div className="absolute top-1/2 left-1/2 z-20 mx-auto my-0 flex h-[100vh] w-[140vw] -translate-x-1/2 flex-col justify-end lg:aspect-square xl:max-w-1/2 pointer-events-none">
                    <Image
                      alt="Neural Visualization"
                      src="/images/image.png"
                      width={1080}
                      height={1524}
                      loading="lazy"
                      sizes="(max-width: 1280px) 100vw, 50vw"
                      className="h-full w-full object-contain object-bottom opacity-80"
                      style={{ objectPosition: "50% 50%" }}
                    />
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

export default Technology