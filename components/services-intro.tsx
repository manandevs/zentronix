"use client";

import { ScrollReveal } from "./scroll-reveal";

export function ServicesIntro() {
  return (
    <ScrollReveal className="px-6 py-8 pb-32 max-w-4xl mx-auto">
      <p className="text-center text-[20px] font-medium leading-relaxed font-urbanist">
        Driven by Google’s Gemini 1.5 Pro architecture and our proprietary{" "}
        <span className="decoration-black cursor-help underline decoration-dotted underline-offset-[10%] font-semibold">
          Neural Logic Framework
        </span>
        , Zentorex AI doesn’t just process data—we{" "}
        <strong>
          reason, synthesize, and scale your operational intelligence at machine
          speed
        </strong>
        . From long-context analysis to autonomous agent orchestration, we
        redefine the architecture of modern enterprise growth.
      </p>
    </ScrollReveal>
  );
}
