"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  { color: "bg-pink-600", mode: "Autonomous", speed: "1×", title: "Skill Capture Glove in use", rotate: "rotate-[2deg]" },
  { color: "bg-blue-600", mode: "Teleop", speed: "1×", title: "Remote navigation testing", rotate: "rotate-[-2deg]" },
  { color: "bg-green-600", mode: "Autonomous", speed: "5×", title: "Folding six pairs of socks", rotate: "rotate-[3deg]" },
  { color: "bg-yellow-500", mode: "Training", speed: "2×", title: "Learning to pour coffee", rotate: "rotate-[-1.5deg]" },
  { color: "bg-purple-600", mode: "Autonomous", speed: "1×", title: "Loading the dishwasher", rotate: "rotate-[1deg]" },
  { color: "bg-red-600", mode: "Autonomous", speed: "4×", title: "Sorting colorful blocks", rotate: "rotate-[-3deg]" },
  { color: "bg-indigo-600", mode: "Teleop", speed: "0.5×", title: "Delicate glassware handling", rotate: "rotate-[2.5deg]" },
  { color: "bg-teal-500", mode: "Training", speed: "1×", title: "Mapping living room layout", rotate: "rotate-[-2deg]" },
  { color: "bg-cyan-400", mode: "Autonomous", speed: "1×", title: "Watering indoor plants", rotate: "rotate-[1.5deg]" },
  { color: "bg-orange-600", mode: "Autonomous", speed: "2×", title: "Clearing the dining table", rotate: "rotate-[-1deg]" },
];

export default function Skill() {
  const cardsElRef = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const cardsLength = cardsElRef.current.length;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${window.innerHeight * (cardsLength + 2)}`,
          pin: true,  // pin the container
          scrub: true,
        },
      });

      // Animate cards sequentially with a rotation effect
      cardsElRef.current.forEach((card, i) => {
        if (!card) return;
        tl.to(card, {
          bottom: "10%",
          rotate: cardsData[i].rotate,
          duration: 0.5,
          ease: "power2.out",
        }, i * 0.5);
      });

      // Optional: reset cards
      cardsElRef.current.forEach((card) => {
        if (!card) return;
        tl.to(card, { bottom: 0, rotate: 0, duration: 0 });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen flex w-full flex-col items-center justify-center py-16 lg:py-24 relative">

      {/* Intro Section */}
      <div className="mx-auto flex justify-center px-4 pb-16 lg:px-6 lg:pb-24">
        <div className="max-w-[40ch] text-center subheading-2 text-primary lg:heading-3">
          <p className="[&+&]:mt-[1em]">
            Our{" "}
            <span
              tabIndex={0}
              aria-describedby="91d1519d90ce"
              className="decoration-skip-ink-none cursor-help underline decoration-secondary decoration-dotted decoration-from-font underline-offset-[10%]"
            >
              Skill Capture Glove
            </span>
            ™ enables Memo to distill millions of human movements into its
            onboard AI, unlocking helpful home skills. What the glove does, Memo
            learns.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      {cardsData.map((card, index) => (
        <div
          key={index}
          ref={(el) => { cardsElRef.current[index] = el }}
          className={`absolute bottom-[-100%] z-[${index + 40}] w-full flex items-center justify-center`}
        >
          <div className="grid w-full grid-cols-12 gap-6 px-4 pb-16 lg:px-6 lg:pb-24">
            <div className={`group relative isolate grid aspect-video flex-none grid-cols-2 gap-6 overflow-hidden rounded-xl col-span-12 md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-4`}>
              <div className="pointer-events-none relative z-10 col-span-2 flex flex-col justify-between gap-2 p-3 dark">
                <div className="flex items-start justify-between">
                  <div className="flex flex-wrap gap-1 xl:items-center">
                    <span className="inline-block w-fit rounded-sm border border-primary/20 px-1.25 py-0.75 label-2 leading-4 text-primary">{card.mode}</span>
                    <span className="inline-block w-fit rounded-sm border border-primary/20 px-1.25 py-0.75 label-2 leading-4 text-primary">{card.speed}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <p className="label-1 text-primary">{card.title}</p>
                </div>
              </div>
              <div className="isolate overflow-hidden pointer-events-auto absolute h-full w-full rounded-sm object-cover">
                <div className={`pointer-events-none h-full w-full ${card.color}`} />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Footer / CTA Section */}
      <div className="flex flex-col items-center gap-12 px-6 relative z-10">
        <div className="max-w-[40ch] text-center body-2 text-primary">
          <p className="[&+&]:mt-[1em]">
            To date we’ve shipped over 2,000 gloves to our{" "}
            <span
              tabIndex={0}
              aria-describedby="65576db50a4c"
              className="decoration-skip-ink-none cursor-help underline decoration-secondary decoration-dotted decoration-from-font underline-offset-[10%]"
            >
              Memory Developers
            </span>
            . They collect ‘memories’ in their homes to make Memo useful in
            yours.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="inline-flex flex-nowrap items-center justify-center rounded-full label-1 leading-none transition-colors cursor-pointer gap-1 px-3.5 py-3 group/button max-md:h-9 md:h-auto border border-black/10 bg-transparent text-black hover:border-black hover:bg-black hover:text-white"
          >
            Explore Technology
          </Link>

          <Link
            href=""
            className="inline-flex flex-nowrap items-center justify-center rounded-full label-1 leading-none transition-colors cursor-pointer gap-1 px-3.5 py-3 group/button max-md:h-9 md:h-auto border border-black/10 bg-transparent text-black hover:border-black hover:bg-black hover:text-white"
          >
            Become a MemDev
          </Link>
        </div>
      </div>
    </div>
  );
}