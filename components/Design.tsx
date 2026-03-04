"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

const slides = [
  {
    title: "Data-Driven Decisions",
    text: "We base every decision on hard data and advanced analytics. Our dedicated SEO developers ensure your strategy targets high-converting keywords with precise accuracy.",
    dark: true,
    bg: "bg-amber-500"
  },
  {
    title: "Sustainable Organic Growth",
    text: "Our white-hat SEO techniques build a rock-solid foundation, protecting your digital assets from algorithm penalties and ensuring long-term visibility.",
    bg: "bg-indigo-600",
  },
  {
    title: "Tailored to Your Business",
    text: "We customize every growth campaign to fit your unique market landscape, audience intent, and specific revenue objectives.",
    bg: "bg-orange-600"
  },
  {
    title: "Transparent and Measurable",
    text: "We provide clear, jargon-free reporting so you always know exactly how your campaigns are performing and what ROI you are achieving.",
    bg: "bg-lime-600",
  },
];

export default function Design() {
  return (
    <section
      className="text-primary transition-colors duration-300 pt-20"
      id="design"
      data-section-title="design"
      data-toc-section="true"
    >
      <section className="pt-12 pb-[var(--header-height)] md:scale-(--scale) md:rounded-(--borderRadius) md:pt-6">
        <h2 className="px-4 pb-[calc(var(--header-height)+(var(--spacing)*12))] text-center text-[36px] font-bold  lg:px-6 my-14">
          Engineered for Rapid Growth
        </h2>

        <div className="sticky top-[calc((var(--header-height)+(var(--spacing)*3)))]">
          <Swiper
            modules={[FreeMode]}
            freeMode
            loop={true}
            grabCursor
            slidesPerView="auto"
            spaceBetween={8}
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