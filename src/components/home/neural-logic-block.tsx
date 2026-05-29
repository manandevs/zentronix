"use client";
import { PlayIconButton } from "../shared/play-icon-button";

export function NeuralLogicBlock() {
  return (
    <div className="service-card isolate col-span-2 grid grid-cols-6 gap-6 pb-30 md:gap-4 md:px-8 md:pb-40 font-urbanist">
      <div className="relative col-span-6 grid aspect-3/4 flex-none grid-cols-2 gap-2 overflow-hidden bg-red-600 md:aspect-3/4 md:rounded-2xl lg:aspect-video pointer-events-none shadow-xl before:pointer-events-none before:absolute before:inset-0 before:z-1 before:bg-black/10 before:content-['']">
        <div className="pointer-events-none relative z-10 col-span-2 flex flex-col items-center justify-center gap-2 p-4 text-white">
          <h2 className="text-center text-balance text-[36px] font-bold drop-shadow-md">
            Mastering Neural Logic
          </h2>
          <div className="absolute bottom-4 left-4">
            <PlayIconButton className="group block[--media-button-icon-height:20px]" />
          </div>
        </div>
      </div>

      <div className="col-span-full grid grid-cols-6 gap-4">
        <div className="col-span-6 flex flex-col justify-between rounded-2xl border border-gray-200 bg-gray-50 p-6 max-md:mx-4 max-md:mt-4 max-md:aspect-video md:col-span-3 md:min-h-48 shadow-sm">
          <p className="flex-1 pb-12 font-bold text-[24px] md:pb-0">
            Scaling Operational Intelligence
          </p>
          <p className="pr-4 text-[20px] font-medium leading-relaxed lg:max-w-full">
            Zentorex AI consistently enhances your business logic, synthesizes
            complex multimodal data, and builds systemic authority through
            Gemini's 1.5 architecture.
            <br />
            <br />
            Let us optimize the neural pipelines, so you can focus on the
            high-level vision that drives global impact.
          </p>
        </div>

        <div className="relative w-[calc(100%-var(--spacing)*4)] shrink-0 snap-start max-md:first-of-type:pl-4 md:w-full col-span-6 max-md:pl-4 md:col-span-3 md:flex-1">
          <div className="group relative isolate aspect-video flex-none grid-cols-2 gap-6 overflow-hidden rounded-2xl bg-blue-600 shadow-md grid w-full">
            <div className="pointer-events-none relative z-10 col-span-2 flex flex-col justify-between gap-2 p-4 text-white bg-black/10">
              <div className="flex items-start justify-between">
                <div className="flex flex-wrap gap-2 xl:items-center">
                  <span className="inline-block w-fit rounded-md border border-white/30 bg-white/10 px-2 py-1 text-[16px] font-semibold text-white backdrop-blur-sm">
                    Multimodal
                  </span>
                  <span className="inline-block w-fit rounded-md border border-white/30 bg-white/10 px-2 py-1 text-[16px] font-semibold text-white backdrop-blur-sm">
                    Neural Scale
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative grid cursor-pointer place-items-center rounded-full bg-white/20 backdrop-blur-lg p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-play z-10 h-[12px] w-[12px] fill-white"
                    aria-hidden="true"
                  >
                    <polygon points="6 3 20 12 6 21 6 3" />
                  </svg>
                </div>
                <p className="font-bold text-[20px] text-white drop-shadow-sm">
                  Long-Context Reasoning
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
