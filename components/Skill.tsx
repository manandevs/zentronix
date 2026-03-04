"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  { color: "bg-pink-600", mode: "Organic", speed: "High", title: "Keyword Optimization", rotate: "2deg" },
  { color: "bg-blue-600", mode: "Technical", speed: "Core", title: "Site Architecture Audit", rotate: "-2deg" },
  { color: "bg-green-600", mode: "Authority", speed: "Scale", title: "Backlink Acquisition", rotate: "3deg" },
  { color: "bg-yellow-500", mode: "Content", speed: "Value", title: "High-Intent Blogging", rotate: "-1.5deg" },
  { color: "bg-purple-600", mode: "Local SEO", speed: "Target", title: "Map Pack Dominance", rotate: "1deg" },
  { color: "bg-red-600", mode: "E-Commerce", speed: "Sales", title: "Product Page Optimization", rotate: "-3deg" },
  { color: "bg-indigo-600", mode: "Analytics", speed: "Data", title: "Performance Reporting", rotate: "2.5deg" },
  { color: "bg-teal-500", mode: "Conversion", speed: "UX", title: "Funnel Improvements", rotate: "-2deg" },
  { color: "bg-cyan-400", mode: "Strategy", speed: "Plan", title: "Competitor Analysis", rotate: "1.5deg" },
  { color: "bg-orange-600", mode: "Growth", speed: "ROI", title: "Revenue Scaling", rotate: "-1deg" },
];

export default function Skill() {
  const cardsElRef = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const cardsLength = cardsData.length + 1;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${window.innerHeight * (cardsLength + 1)}`,
          pin: true,
          scrub: true,
        },
      });

      cardsElRef.current.forEach((card, i) => {
        if (!card) return;

        tl.to(
          card,
          {
            bottom: "10%",
            rotate: cardsData[i]?.rotate || "0deg",
            duration: 0.5,
            ease: "power2.out",
          },
          i * 0.5
        );
      });

      cardsElRef.current.forEach((card) => {
        if (!card) return;
        tl.to(card, { bottom: 0, duration: 0 });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex min-h-screen w-full flex-col items-center justify-center py-16 lg:py-24"
    >
      {/* Intro Section */}
      <div className="z-10 mx-auto flex justify-center px-4 pb-16 lg:px-6 lg:pb-24">
        <div className="max-w-[50ch] text-center text-[20px] font-medium leading-relaxed ">
          <p>
            Our proprietary{" "}
            <span
              tabIndex={0}
              className="cursor-help font-bold underline decoration-dotted underline-offset-[10%]"
            >
              Growth Frameworks
            </span>{" "}
            enable Zentronix to distill millions of data points into actionable SEO strategies,
            unlocking exponential traffic growth. What the data reveals, we execute to perfection.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      {cardsData.map((card, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) cardsElRef.current[index] = el;
          }}
          style={{ zIndex: index + 50 }}
          className="absolute bottom-[-100%] flex w-full items-center justify-center"
        >
          <div className="grid w-full grid-cols-12 gap-6 px-4 pb-16 lg:px-6 lg:pb-24">
            <div className="group relative isolate col-span-12 grid aspect-video grid-cols-2 gap-6 overflow-hidden rounded-2xl border border-white/20 shadow-2xl md:col-span-8 md:col-start-3 lg:col-span-6 lg:col-start-4">
              <div className="pointer-events-none relative z-10 col-span-2 flex flex-col justify-between gap-2 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-md border border-white/30 bg-white/20 px-3 py-1 text-[16px] font-bold backdrop-blur-md">
                    {card.mode}
                  </span>
                  <span className="rounded-md border border-white/30 bg-white/20 px-3 py-1 text-[16px] font-bold backdrop-blur-md">
                    {card.speed}
                  </span>
                </div>
                <p className="text-[28px] font-bold drop-shadow-md">{card.title}</p>
              </div>

              <div className="absolute h-full w-full overflow-hidden rounded-sm">
                <div className={`h-full w-full ${card.color} opacity-90`} />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* CTA Section */}
      <div
        ref={(el) => {
          if (el) cardsElRef.current[cardsData.length] = el;
        }}
        style={{ zIndex: cardsData.length + 55 }}
        className="absolute bottom-[-100%] flex w-full items-center justify-center"
      >
        <div className="relative z-10 flex flex-col items-center gap-10 rounded-3xl border border-gray-100 bg-white/80 p-8 shadow-sm backdrop-blur-sm">
          <div className="max-w-[50ch] text-center text-[20px] font-medium leading-relaxed ">
            <p>
              To date, we’ve successfully partnered with over 500 ambitious brands.
              We rigorously analyze market trends and consumer behavior to position your
              business as the authority in your industry.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-300 bg-white px-8 py-4 text-[20px] font-semibold  transition-all duration-300 hover:border-black hover:bg-black hover:text-white hover:shadow-lg"
            >
              Explore Our Services
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-black bg-black px-8 py-4 text-[20px] font-semibold text-white transition-all duration-300 hover:border-gray-900 hover:bg-gray-900 hover:shadow-xl"
            >
              Get a Free Audit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}