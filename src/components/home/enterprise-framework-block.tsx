"use client";

import { PlayIconButton } from "../shared/play-icon-button";

export function EnterpriseFrameworkBlock() {
  return (
    <div className="service-card isolate col-span-2 grid grid-cols-6 gap-6 pb-30 md:gap-4 md:px-8 md:pb-40 font-urbanist">
      <div className="relative col-span-6 grid aspect-3/4 flex-none grid-cols-2 gap-2 overflow-hidden bg-blue-600 md:aspect-3/4 md:rounded-2xl lg:aspect-video pointer-events-none shadow-xl before:pointer-events-none before:absolute before:inset-0 before:z-1 before:bg-black/10 before:content-['']">
        <div className="pointer-events-none relative z-10 col-span-2 flex flex-col items-center justify-center gap-2 p-4 text-white">
          <h2 className="text-center text-balance text-[36px] font-bold drop-shadow-md">
            Neural Frameworks Tailored to Your Enterprise
          </h2>
          <div className="absolute bottom-4 left-4">
            <PlayIconButton />
          </div>
        </div>
      </div>

      <div className="col-span-full grid grid-cols-6 gap-4">
        <div className="col-span-6 flex flex-col justify-between rounded-2xl border border-gray-200 bg-gray-50 p-6 max-md:mx-4 max-md:mt-4 max-md:aspect-video md:min-h-48 lg:col-span-2 shadow-sm">
          <p className="flex-1 pb-12 font-bold text-[24px] md:pb-0">
            Every enterprise is unique. We architect bespoke neural systems.
          </p>
          <p className="text-[20px] font-medium leading-relaxed md:max-w-[80%] lg:max-w-full">
            We believe intelligence should be autonomous and measurable. Our
            experts analyze your specific operational landscape to deploy
            Gemini-driven frameworks that capture market share and drive
            exponential value.
          </p>
        </div>

        <div className="col-span-6 no-scrollbar flex snap-x snap-mandatory gap-4 max-md:overflow-x-auto md:grid md:grid-cols-4 md:gap-4 lg:col-span-4">
          <div className="relative w-[calc(100%-var(--spacing)*4)] shrink-0 snap-start max-md:first-of-type:pl-4 md:col-span-2 md:w-full max-md:last-of-type:pr-4">
            <div className="group relative isolate aspect-video flex-none grid-cols-2 gap-6 overflow-hidden rounded-2xl bg-red-600 shadow-md grid w-full">
              <div className="pointer-events-none relative z-10 col-span-2 flex flex-col justify-between gap-2 p-4 text-white bg-black/10">
                <div className="flex items-start justify-between">
                  <div className="flex flex-wrap gap-2 xl:items-center">
                    <span className="inline-block w-fit rounded-md border border-white/30 bg-white/10 px-2 py-1 text-[16px] font-semibold text-white backdrop-blur-sm">
                      Core
                    </span>
                    <span className="inline-block w-fit rounded-md border border-white/30 bg-white/10 px-2 py-1 text-[16px] font-semibold text-white backdrop-blur-sm">
                      Engine
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <p className="font-bold text-[20px] text-white drop-shadow-sm">
                    Gemini API Orchestration
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-[calc(100%-var(--spacing)*4)] shrink-0 snap-start max-md:first-of-type:pl-4 md:col-span-2 md:w-full max-md:last-of-type:pr-4">
            <div className="group relative isolate aspect-video flex-none grid-cols-2 gap-6 overflow-hidden rounded-2xl bg-yellow-500 shadow-md grid w-full">
              <div className="pointer-events-none relative z-10 col-span-2 flex flex-col justify-between gap-2 p-4 text-white bg-black/10">
                <div className="flex items-start justify-between">
                  <div className="flex flex-wrap gap-2 xl:items-center">
                    <span className="inline-block w-fit rounded-md border border-white/30 bg-white/10 px-2 py-1 text-[16px] font-semibold text-white backdrop-blur-sm">
                      Agentic
                    </span>
                    <span className="inline-block w-fit rounded-md border border-white/30 bg-white/10 px-2 py-1 text-[16px] font-semibold text-white backdrop-blur-sm">
                      Scale
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <p className="font-bold text-[20px] text-white drop-shadow-sm">
                    Autonomous Agent Design
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
