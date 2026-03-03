import React from 'react'

function Services() {
  return (
    <section className="  text-primary transition-colors duration-300" id="services" data-section-title="services" data-toc-section="true">
      <div className="s relative  transition-colors duration-300">
        <section className="relative  pb-30 transition-colors duration-300 lg:pb-6">
          <div className="pointer-events-none absolute top-0 h-full w-full"></div>

          <div className="flex flex-col items-center gap-2 pt-40 md:pt-60 lg:pt-0">
            <div className="flex w-full flex-col items-center justify-start gap-2 pb-24 lg:min-h-[120svh] lg:flex-row lg:justify-center lg:gap-0">
              <h2 className="sr-only">Everyday Tasks, Extraordinary Results</h2>

              <div
                className="sticky top-[30vh] self-start max-lg:mx-auto lg:top-0"
                style={{ marginTop: "0vh", paddingTop: "30vh", paddingBottom: "0px" }}
              >
                <span
                  className="block max-w-[19ch] text-center font-heading text-8xl leading-none text-primary md:text-11xl lg:mx-[0.1em] lg:text-11xl xl:text-12xl 2xl:text-14xl"
                  aria-hidden="true"
                >
                  Everyday
                </span>
              </div>

              <div
                className="sticky top-[30vh] self-start max-lg:mx-auto lg:top-0"
                style={{ marginTop: "20vh", paddingTop: "30vh", paddingBottom: "0px" }}
              >
                <span
                  className="block max-w-[19ch] text-center font-heading text-8xl leading-none text-primary md:text-11xl lg:mx-[0.1em] lg:text-11xl xl:text-12xl 2xl:text-14xl"
                  aria-hidden="true"
                >
                  Tasks
                </span>
              </div>

              <div
                className="sticky top-[30vh] self-start max-lg:mx-auto lg:top-0"
                style={{ marginTop: "40vh", paddingTop: "30vh", paddingBottom: "0px" }}
              >
                <span
                  className="block max-w-[19ch] text-center font-heading text-8xl leading-none text-primary md:text-11xl lg:mx-[0.1em] lg:text-11xl xl:text-12xl 2xl:text-14xl"
                  aria-hidden="true"
                >
                  Extraordinary
                </span>
              </div>
            </div>

            {/* Subheading */}
            <div className="px-6 py-6 pb-24">
              <p className="max-w-[40ch] text-center subheading-2 text-primary lg:heading-3">
                Driven by cutting-edge AI and a constantly growing <span className="decoration-skip-ink-none cursor-help underline decoration-secondary decoration-dotted decoration-from-font underline-offset-[10%]">Skill Library</span>, Memo doesn’t just perform tasks—it <strong>learns, adapts, and masters new skills faster than any household robot</strong>. From tidying up to precision chores, Memo transforms the way your home works.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            {/* Feature Block 1 */}
            <div className="service-card isolate col-span-2 grid grid-cols-6 gap-4 pb-30 md:gap-2 md:px-6 md:pb-40">
              <div className="relative col-span-6 grid aspect-3/4 flex-none grid-cols-2 gap-2 overflow-hidden bg-black md:aspect-3/4 md:rounded-xl lg:aspect-video pointer-events-none before:pointer-events-none before:absolute before:inset-0 before:z-1 before:bg-black/3 before:content-['']">
                <div className="pointer-events-none relative z-10 col-span-2 flex flex-col items-center justify-center gap-2 p-3 dark">
                  <h2 className="text-center heading-1 text-balance text-primary">Memo works in the kitchen</h2>
                  <div className="absolute bottom-3 left-3">
                    {/* <mediaplaybutton mediacontroller="id-ibw8uytlwqmmm9zqe4g" className="group block [--media-button-icon-height:16px] [--media-control-background:none] [--media-control-hover-background:none]" notooltip="true" tabIndex={0} role="button" aria-label="play" mediapaused="true" medialang="en">
                        <div slot="icon" className="relative grid cursor-pointer place-items-center rounded-full bg-white/20 backdrop-blur-lg transition-colors duration-200 hover:bg-white/35 text-primary after:absolute after:-inset-3 after:-right-38 after:bg-transparent after:content-['']" style={{ width: "16px", height: "16px", "--p": 0, "--thickness": "1px", "--ring-color": "currentColor" } as React.CSSProperties}>
                          <span className="progress-ring pointer-events-none absolute inset-0 rounded-full"></span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pause z-10 hidden h-[9px] w-[9px] group-aria-[label=pause]:block [&_polygon]:fill-current [&_rect]:fill-current" aria-hidden="true"><rect x="14" y="4" width="4" height="16" rx="1" /><rect x="6" y="4" width="4" height="16" rx="1" /></svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play z-10 hidden h-[9px] w-[9px] group-aria-[label=play]:block [&_polygon]:fill-current" aria-hidden="true"><polygon points="6 3 20 12 6 21 6 3" /></svg>
                        </div>
                      </mediaplaybutton> */}
                  </div>
                </div>
                {/* <mediacontroller id="id-ibw8uytlwqmmm9zqe4g" className="isolate overflow-hidden pointer-events-auto absolute h-full w-full object-cover" role="region" aria-label="video player" userinactive="true" mediapaused="true" mediaplaybackrate="1" mediamuted="true" medialoop="true" mediavolume="1" mediavolumelevel="off" mediacurrenttime="0" medialoading="true" medialang="en" mediaduration="30.13" mediastreamtype="on-demand" mediaseekable="0:30.13">
                    <Image alt="" src="https://image.mux.com/PNiU02pVoDIkiPdE9cG45Iprm8Y00Pk02vd63ZOlZONGLM/thumbnail.webp" fill className="pointer-events-none absolute inset-0 object-cover opacity-100" />
                    <video slot="media" muted loop draggable="false" playsInline crossOrigin="anonymous" className="relative z-10 h-full w-full cursor-pointer object-cover" tabIndex={-1} preload="auto" src="https://stream.mux.com/PNiU02pVoDIkiPdE9cG45Iprm8Y00Pk02vd63ZOlZONGLM/medium.mp4">
                      <track kind="metadata" label="cuepoints" />
                      <track kind="chapters" label="chapters" />
                    </video>
                  </mediacontroller> */}
              </div>

              <div className="col-span-full grid grid-cols-6 gap-2">
                <div className="col-span-6 flex flex-col justify-between rounded-xl border border-border p-3 max-md:mx-4 max-md:mt-4 max-md:aspect-video md:col-span-3 md:min-h-48">
                  <p className="flex-1 pb-12 label-1 text-primary md:pb-0">Lightening the load</p>
                  <p className="pr-4 body-1 text-primary lg:max-w-full">
                    Memo can quietly and autonomously clear tables of plates and delicate glasses, throw out food scraps, and load up your dishwasher before running it.<br /><br />
                    Let Memo take care of the table, so you can go take care of the things only you can do.
                  </p>
                </div>
                <div className="relative w-[calc(100%-var(--spacing)*4)] shrink-0 snap-start max-md:first-of-type:pl-4 md:w-full col-span-6 max-md:pl-4 md:col-span-3 md:flex-1">
                  <div className="group relative isolate aspect-video flex-none grid-cols-2 gap-6 overflow-hidden rounded-xl bg-black dark before:pointer-events-none before:absolute before:inset-0 before:z-1 before:bg-black/0 before:content-[''] grid w-full">
                    <div className="pointer-events-none relative z-10 col-span-2 flex flex-col justify-between gap-2 p-3 dark bg-black/3">
                      <div className="flex items-start justify-between">
                        <div className="flex flex-wrap gap-1 xl:items-center">
                          <span className="inline-block w-fit rounded-sm border border-primary/20 px-1.25 py-0.75 label-2 leading-4 text-primary">Autonomous</span>
                          <span className="inline-block w-fit rounded-sm border border-primary/20 px-1.25 py-0.75 label-2 leading-4 text-primary">5×</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {/* <mediaplaybutton mediacontroller="id-wubv8xxfgfmmm9zqe4i" className="group block [--media-button-icon-height:16px] [--media-control-background:none] [--media-control-hover-background:none]" notooltip="true" tabIndex={0} role="button" aria-label="play" mediapaused="true" medialang="en">
                            <div slot="icon" className="relative grid cursor-pointer place-items-center rounded-full bg-white/20 backdrop-blur-lg transition-colors duration-200 hover:bg-white/35 text-primary after:absolute after:-inset-3 after:-right-38 after:bg-transparent after:content-['']" style={{ width: "16px", height: "16px", "--p": 0, "--thickness": "1px", "--ring-color": "currentColor" } as React.CSSProperties}>
                              <span className="progress-ring pointer-events-none absolute inset-0 rounded-full"></span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play z-10 hidden h-[9px] w-[9px] group-aria-[label=play]:block [&_polygon]:fill-current" aria-hidden="true"><polygon points="6 3 20 12 6 21 6 3" /></svg>
                            </div>
                          </mediaplaybutton> */}
                        <p className="label-1 text-primary">Uncut video of Memo cleaning up</p>
                      </div>
                    </div>
                    {/* <mediacontroller id="id-wubv8xxfgfmmm9zqe4i" className="isolate overflow-hidden pointer-events-auto absolute h-full w-full rounded-sm object-cover" role="region" aria-label="video player" userinactive="true" mediapaused="true" mediaplaybackrate="1" mediamuted="true" mediavolume="1" mediavolumelevel="off" mediacurrenttime="0" medialoading="true" medialang="en" mediaduration="159.092" mediastreamtype="on-demand" mediaseekable="0:159.092">
                        <Image alt="" src="https://image.mux.com/i2aJBzn6BIs2jQY8e3QKX2z2XhfsJv00QAzNHDyrV2XQ/thumbnail.webp" fill className="pointer-events-none absolute inset-0 object-cover opacity-100" />
                        <video slot="media" muted draggable="false" playsInline crossOrigin="anonymous" className="relative z-10 h-full w-full cursor-pointer object-cover" tabIndex={-1} preload="auto" src="https://stream.mux.com/i2aJBzn6BIs2jQY8e3QKX2z2XhfsJv00QAzNHDyrV2XQ/medium.mp4">
                          <track kind="metadata" label="cuepoints" />
                        </video>
                      </mediacontroller> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Block 2 */}
            <div className="service-card isolate col-span-2 grid grid-cols-6 gap-4 pb-30 md:gap-2 md:px-6 md:pb-40">
              <div className="relative col-span-6 grid aspect-3/4 flex-none grid-cols-2 gap-2 overflow-hidden bg-black md:aspect-3/4 md:rounded-xl lg:aspect-video pointer-events-none before:pointer-events-none before:absolute before:inset-0 before:z-1 before:bg-black/3 before:content-['']">
                <div className="pointer-events-none relative z-10 col-span-2 flex flex-col items-center justify-center gap-2 p-3 dark">
                  <h2 className="text-center heading-1 text-balance text-primary">Memo works in homes it&apos;s never seen</h2>
                  <div className="absolute bottom-3 left-3">
                    {/* <mediaplaybutton mediacontroller="id-vyum4y21c3mm9zqe4j" className="group block [--media-button-icon-height:16px] [--media-control-background:none] [--media-control-hover-background:none]" notooltip="true" tabIndex={0} role="button" aria-label="play" mediapaused="true" medialang="en">
                        <div slot="icon" className="relative grid cursor-pointer place-items-center rounded-full bg-white/20 backdrop-blur-lg transition-colors duration-200 hover:bg-white/35 text-primary after:absolute after:-inset-3 after:-right-38 after:bg-transparent after:content-['']" style={{ width: "16px", height: "16px", "--p": 0, "--thickness": "1px", "--ring-color": "currentColor" } as React.CSSProperties}>
                          <span className="progress-ring pointer-events-none absolute inset-0 rounded-full"></span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play z-10 hidden h-[9px] w-[9px] group-aria-[label=play]:block [&_polygon]:fill-current" aria-hidden="true"><polygon points="6 3 20 12 6 21 6 3" /></svg>
                        </div>
                      </mediaplaybutton> */}
                  </div>
                </div>
                {/* <mediacontroller id="id-vyum4y21c3mm9zqe4j" className="isolate overflow-hidden pointer-events-auto absolute h-full w-full object-cover" role="region" aria-label="video player" userinactive="true" mediapaused="true" mediaplaybackrate="1" mediamuted="true" medialoop="true" mediavolume="1" mediavolumelevel="off" mediacurrenttime="0" medialoading="true" medialang="en" mediaduration="47.08" mediastreamtype="on-demand" mediaseekable="0:47.08">
                    <Image alt="" src="https://image.mux.com/MmU2brIl545p02LxkOSGOYzOU3gBCzJYe01sVvsfIjqY00/thumbnail.webp" fill className="pointer-events-none absolute inset-0 object-cover opacity-100" />
                    <video slot="media" muted loop draggable="false" playsInline crossOrigin="anonymous" className="relative z-10 h-full w-full cursor-pointer object-cover" tabIndex={-1} preload="auto" src="https://stream.mux.com/MmU2brIl545p02LxkOSGOYzOU3gBCzJYe01sVvsfIjqY00/medium.mp4">
                      <track kind="metadata" label="cuepoints" />
                    </video>
                  </mediacontroller> */}
              </div>
              <div className="col-span-full grid grid-cols-6 gap-2">
                <div className="col-span-6 flex flex-col justify-between rounded-xl border border-border p-3 max-md:mx-4 max-md:mt-4 max-md:aspect-video md:min-h-48 lg:col-span-2">
                  <p className="flex-1 pb-12 label-1 text-primary md:pb-0">Every home is different. Memo works in yours.</p>
                  <p className="body-2 text-primary md:max-w-[50%] lg:max-w-full">We believe Memo should be easy to use in the real-world, working autonomously out-of-the-box. Hundreds of people in unique homes show Memo how chores are done each day, so Memo can robustly handle the chaos of real life.</p>
                </div>
                <div className="col-span-6 no-scrollbar flex snap-x snap-mandatory gap-2 max-md:overflow-x-auto md:grid md:grid-cols-4 md:gap-2 lg:col-span-4">
                  <div className="relative w-[calc(100%-var(--spacing)*4)] shrink-0 snap-start max-md:first-of-type:pl-4 md:col-span-2 md:w-full max-md:last-of-type:pr-4">
                    <div className="group relative isolate aspect-video flex-none grid-cols-2 gap-6 overflow-hidden rounded-xl bg-black dark before:pointer-events-none before:absolute before:inset-0 before:z-1 before:bg-black/0 before:content-[''] grid w-full">
                      <div className="pointer-events-none relative z-10 col-span-2 flex flex-col justify-between gap-2 p-3 dark bg-black/3">
                        <div className="flex items-start justify-between">
                          <div className="flex flex-wrap gap-1 xl:items-center">
                            <span className="inline-block w-fit rounded-sm border border-primary/20 px-1.25 py-0.75 label-2 leading-4 text-primary">Autonomous</span>
                            <span className="inline-block w-fit rounded-sm border border-primary/20 px-1.25 py-0.75 label-2 leading-4 text-primary">4×</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <p className="label-1 text-primary">Picking up utensils</p>
                        </div>
                      </div>
                      {/* <mediacontroller id="id-8gg5v4lolkpmm9zqe4j" className="isolate overflow-hidden pointer-events-auto absolute h-full w-full rounded-sm object-cover" role="region" aria-label="video player" userinactive="true" mediapaused="true" mediaplaybackrate="1" mediamuted="true" mediavolume="1" mediavolumelevel="off" mediacurrenttime="0" medialoading="true" medialang="en" mediaduration="29.95" mediastreamtype="on-demand" mediaseekable="0:29.95">
                          <Image alt="" src="https://image.mux.com/d8gKqaem3hi01tFEkbkGl00SFt01bnBlIcQzEuEPFnU9mQ/thumbnail.webp" fill className="pointer-events-none absolute inset-0 object-cover opacity-100" />
                          <video slot="media" muted draggable="false" playsInline crossOrigin="anonymous" className="relative z-10 h-full w-full cursor-pointer object-cover" tabIndex={-1} preload="auto" src="https://stream.mux.com/d8gKqaem3hi01tFEkbkGl00SFt01bnBlIcQzEuEPFnU9mQ/medium.mp4" />
                        </mediacontroller> */}
                    </div>
                  </div>
                  <div className="relative w-[calc(100%-var(--spacing)*4)] shrink-0 snap-start max-md:first-of-type:pl-4 md:col-span-2 md:w-full max-md:last-of-type:pr-4">
                    <div className="group relative isolate aspect-video flex-none grid-cols-2 gap-6 overflow-hidden rounded-xl bg-black dark before:pointer-events-none before:absolute before:inset-0 before:z-1 before:bg-black/0 before:content-[''] grid w-full">
                      <div className="pointer-events-none relative z-10 col-span-2 flex flex-col justify-between gap-2 p-3 dark bg-black/3">
                        <div className="flex items-start justify-between">
                          <div className="flex flex-wrap gap-1 xl:items-center">
                            <span className="inline-block w-fit rounded-sm border border-primary/20 px-1.25 py-0.75 label-2 leading-4 text-primary">Autonomous</span>
                            <span className="inline-block w-fit rounded-sm border border-primary/20 px-1.25 py-0.75 label-2 leading-4 text-primary">4×</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <p className="label-1 text-primary">Loading a plate in the dishwasher</p>
                        </div>
                      </div>
                      {/* <mediacontroller id="id-3ij2wpayzzkmm9zqe4k" className="isolate overflow-hidden pointer-events-auto absolute h-full w-full rounded-sm object-cover" role="region" aria-label="video player" userinactive="true" mediapaused="true" mediaplaybackrate="1" mediamuted="true" mediavolume="1" mediavolumelevel="off" mediacurrenttime="0" medialoading="true" medialang="en" mediaduration="18.617" mediastreamtype="on-demand" mediaseekable="0:18.617">
                          <Image alt="" src="https://image.mux.com/np00yxVOCqSKb00LMiTYRTv9KeVwcoGYFetwPm4BzR02Nk/thumbnail.webp" fill className="pointer-events-none absolute inset-0 object-cover opacity-100" />
                          <video slot="media" muted draggable="false" playsInline crossOrigin="anonymous" className="relative z-10 h-full w-full cursor-pointer object-cover" tabIndex={-1} preload="auto" src="https://stream.mux.com/np00yxVOCqSKb00LMiTYRTv9KeVwcoGYFetwPm4BzR02Nk/medium.mp4" />
                        </mediacontroller> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Block 3 */}
            <div className="service-card isolate col-span-2 grid grid-cols-6 gap-4 pb-30 md:gap-2 md:px-6 md:pb-40">
              <div className="relative col-span-6 grid aspect-3/4 flex-none grid-cols-2 gap-2 overflow-hidden bg-black md:aspect-3/4 md:rounded-xl lg:aspect-video pointer-events-none before:pointer-events-none before:absolute before:inset-0 before:z-1 before:bg-black/3 before:content-['']">
                <div className="pointer-events-none relative z-10 col-span-2 flex flex-col items-center justify-center gap-2 p-3 dark">
                  <h2 className="text-center heading-1 text-balance text-primary">Memo is always learning</h2>
                  <div className="absolute bottom-3 left-3">
                    {/* <mediaplaybutton mediacontroller="id-mjc5uxibkpgmm9zqe4k" className="group block [--media-button-icon-height:16px] [--media-control-background:none] [--media-control-hover-background:none]" notooltip="true" tabIndex={0} role="button" aria-label="play" mediapaused="true" medialang="en">
                        <div slot="icon" className="relative grid cursor-pointer place-items-center rounded-full bg-white/20 backdrop-blur-lg transition-colors duration-200 hover:bg-white/35 text-primary after:absolute after:-inset-3 after:-right-38 after:bg-transparent after:content-['']" style={{ width: "16px", height: "16px", "--p": 0, "--thickness": "1px", "--ring-color": "currentColor" } as React.CSSProperties}>
                          <span className="progress-ring pointer-events-none absolute inset-0 rounded-full"></span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play z-10 hidden h-[9px] w-[9px] group-aria-[label=play]:block [&_polygon]:fill-current" aria-hidden="true"><polygon points="6 3 20 12 6 21 6 3" /></svg>
                        </div>
                      </mediaplaybutton> */}
                  </div>
                </div>
                {/* <mediacontroller id="id-mjc5uxibkpgmm9zqe4k" className="isolate overflow-hidden pointer-events-auto absolute h-full w-full object-cover" role="region" aria-label="video player" userinactive="true" mediapaused="true" mediaplaybackrate="1" mediamuted="true" medialoop="true" mediavolume="1" mediavolumelevel="off" mediacurrenttime="0" medialoading="true" medialang="en" mediaduration="32.733" mediastreamtype="on-demand" mediaseekable="0:32.733">
                    <Image alt="" src="https://image.mux.com/qONaNfbAttQQA02IDKgj7LueTxfka7TcfsJ5lNBlaVCE/thumbnail.webp" fill className="pointer-events-none absolute inset-0 object-cover opacity-100" />
                    <video slot="media" muted loop draggable="false" playsInline crossOrigin="anonymous" className="relative z-10 h-full w-full cursor-pointer object-cover" tabIndex={-1} preload="auto" src="https://stream.mux.com/qONaNfbAttQQA02IDKgj7LueTxfka7TcfsJ5lNBlaVCE/medium.mp4">
                      <track kind="metadata" label="cuepoints" />
                    </video>
                  </mediacontroller> */}
              </div>
              <div className="col-span-full grid grid-cols-6 gap-2">
                <div className="col-span-6 flex flex-col justify-between rounded-xl border border-border p-3 max-md:mx-4 max-md:mt-4 max-md:aspect-video md:min-h-48 lg:col-span-2">
                  <p className="flex-1 pb-12 label-1 text-primary md:pb-0">New skills every month</p>
                  <p className="body-2 text-primary md:max-w-[50%] lg:max-w-full">In December 2024, Memo had only one arm and learned its first task: arranging shoes. Today, Memo is trained on multiple skills in parallel. In October 2025, Memo learned to fold piles of socks, handle glassware, and pull a shot of espresso.</p>
                </div>
                <div className="col-span-6 no-scrollbar flex snap-x snap-mandatory gap-2 max-md:overflow-x-auto md:grid md:grid-cols-4 md:gap-2 lg:col-span-4">
                  <div className="relative w-[calc(100%-var(--spacing)*4)] shrink-0 snap-start max-md:first-of-type:pl-4 md:col-span-2 md:w-full max-md:last-of-type:pr-4">
                    <div className="group relative isolate aspect-video flex-none grid-cols-2 gap-6 overflow-hidden rounded-xl bg-black dark before:pointer-events-none before:absolute before:inset-0 before:z-1 before:bg-black/0 before:content-[''] grid w-full">
                      <div className="pointer-events-none relative z-10 col-span-2 flex flex-col justify-between gap-2 p-3 dark bg-black/3">
                        <div className="flex items-start justify-between">
                          <div className="flex flex-wrap gap-1 xl:items-center">
                            <span className="inline-block w-fit rounded-sm border border-primary/20 px-1.25 py-0.75 label-2 leading-4 text-primary">Autonomous</span>
                            <span className="inline-block w-fit rounded-sm border border-primary/20 px-1.25 py-0.75 label-2 leading-4 text-primary">1×</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <p className="label-1 text-primary">Memo making an espresso</p>
                        </div>
                      </div>
                      {/* <mediacontroller id="id-b7khp98vfjmm9zqe4l" className="isolate overflow-hidden pointer-events-auto absolute h-full w-full rounded-sm object-cover" role="region" aria-label="video player" userinactive="true" mediapaused="true" mediaplaybackrate="1" mediamuted="true" mediavolume="1" mediavolumelevel="off" mediacurrenttime="0" medialoading="true" medialang="en" mediaduration="101.802" mediastreamtype="on-demand" mediaseekable="0:101.802">
                          <Image alt="" src="https://image.mux.com/1mZKYbW8PpvoTmbgMRdsaTm007g54KNlRqlVHibfdHRk/thumbnail.webp" fill className="pointer-events-none absolute inset-0 object-cover opacity-100" />
                          <video slot="media" muted draggable="false" playsInline crossOrigin="anonymous" className="relative z-10 h-full w-full cursor-pointer object-cover" tabIndex={-1} preload="auto" src="https://stream.mux.com/1mZKYbW8PpvoTmbgMRdsaTm007g54KNlRqlVHibfdHRk/medium.mp4" />
                        </mediacontroller> */}
                    </div>
                  </div>
                  <div className="relative w-[calc(100%-var(--spacing)*4)] shrink-0 snap-start max-md:first-of-type:pl-4 md:col-span-2 md:w-full max-md:last-of-type:pr-4">
                    <div className="group relative isolate aspect-video flex-none grid-cols-2 gap-6 overflow-hidden rounded-xl bg-black dark before:pointer-events-none before:absolute before:inset-0 before:z-1 before:bg-black/0 before:content-[''] grid w-full">
                      <div className="pointer-events-none relative z-10 col-span-2 flex flex-col justify-between gap-2 p-3 dark bg-black/3">
                        <div className="flex items-start justify-between">
                          <div className="flex flex-wrap gap-1 xl:items-center">
                            <span className="inline-block w-fit rounded-sm border border-primary/20 px-1.25 py-0.75 label-2 leading-4 text-primary">Autonomous</span>
                            <span className="inline-block w-fit rounded-sm border border-primary/20 px-1.25 py-0.75 label-2 leading-4 text-primary">5×</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <p className="label-1 text-primary">Memo folding six pairs of socks in a row</p>
                        </div>
                      </div>
                      {/* <mediacontroller id="id-5jgoin9s2mhmm9zqe4l" className="isolate overflow-hidden pointer-events-auto absolute h-full w-full rounded-sm object-cover" role="region" aria-label="video player" userinactive="true" mediapaused="true" mediaplaybackrate="1" mediamuted="true" mediavolume="1" mediavolumelevel="off" mediacurrenttime="0" medialoading="true" medialang="en" mediaduration="98.832" mediastreamtype="on-demand" mediaseekable="0:98.832">
                          <Image alt="" src="https://image.mux.com/jM6QGCAnRqLBhfn009kbC02OSyYRyH1wkPX5woDp6D5xg/thumbnail.webp" fill className="pointer-events-none absolute inset-0 object-cover opacity-100" />
                          <video slot="media" muted draggable="false" playsInline crossOrigin="anonymous" className="relative z-10 h-full w-full cursor-pointer object-cover" tabIndex={-1} preload="auto" src="https://stream.mux.com/jM6QGCAnRqLBhfn009kbC02OSyYRyH1wkPX5woDp6D5xg/medium.mp4" />
                        </mediacontroller> */}
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