"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

const slides = [
  {
    title: "Neural Logic Synthesis",
    text: "Transform vast datasets into crystalline intelligence using Gemini’s multi-modal reasoning. We turn raw complexity into strategic clarity with sub-second precision.",
    bg: "bg-blue-500", // Deep Intelligence
  },
  {
    title: "Agentic Orchestration",
    text: "Deploy autonomous agents that reason, plan, and execute across your ecosystem. Build self-evolving systems that grow more intelligent with every interaction.",
    bg: "bg-yellow-500", // Technology & Clarity
  },
  {
    title: "Multi-Modal Architectures",
    text: "Seamlessly integrate text, vision, and audio into a single cognitive pipeline. Tailor Gemini 1.5 Pro to your specific enterprise context for hyper-relevant outputs.",
    bg: "bg-green-500", // Sophistication & Foundation
  },
  {
    title: "Predictive Growth Engine",
    text: "Visualize the trajectory of your transformation. Our engine maps model performance directly to ROI, giving you a measurable blueprint for market dominance.",
    bg: "bg-rose-500", // Impact & Action
  },
];

export default function Design() {
  return (
    <section
      className="text-primary transition-colors duration-300 pt-20 font-urbanist max-w-screen overflow-hidden"
      id="design"
      data-section-title="design"
      data-toc-section="true"
    >
      <section className="pt-12 pb-[var(--header-height)] md:scale-(--scale) md:rounded-(--borderRadius) md:pt-6">
        <h2 className="px-4 pb-[calc(var(--header-height)+(var(--spacing)*12))] text-center text-[42px] font-bold lg:px-6 my-14 tracking-tighter">
          Architected for{" "}
          <span className="font-lobster font-normal text-indigo-600">Infinite Scale</span>
        </h2>

        <div className="sticky top-[calc((var(--header-height)+(var(--spacing)*3)))]">
          <Swiper
            modules={[FreeMode]}
            freeMode
            centeredSlides
            loop={true}
            grabCursor
            slidesPerView="auto"
            spaceBetween={12}
            className="px-4 md:px-6"
          >
            {slides.map((slide, i) => (
              <SwiperSlide
                key={i}
                className="!w-auto max-w-[calc(100vw-2rem)]"
              >
                <article
                  className={`relative grid aspect-2/3 h-[calc(100svh-(var(--header-height)*2))] max-h-[540px] flex-none snap-start gap-6 overflow-hidden rounded-xl p-6 body-2 md:aspect-3/4 2xl:max-h-[600px] 2xl:p-8 ${slide.bg} lg:aspect-3/2 lg:grid-cols-2 lg:grid-rows-1 shadow-lg`}
                >
                  <div className="z-10 flex flex-col justify-end lg:justify-start bg-black/40 lg:bg-transparent p-4 rounded-xl lg:p-0">
                    <h3 className="text-[28px] font-bold  mb-4 drop-shadow-md">{slide.title}</h3>
                    <p className="text-[20px] /90 leading-relaxed font-medium drop-shadow-sm">{slide.text}</p>
                  </div>

                  <Image
                    alt=""
                    src="/images/image.png"
                    width={1800}
                    height={2400}
                    className="h-full w-full rounded-sm object-cover absolute lg:relative mix-blend-overlay opacity-80"
                    style={{ objectPosition: "50% 50%" }}
                  />
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </section>
  );
}