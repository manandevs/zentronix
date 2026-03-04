"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import Services from "@/components/Services";
import Technology from "@/components/Technology";
import Design from "@/components/Design";
import Faqs from "@/components/Faqs";
import Skill from "@/components/Skill";


export default function Home() {
  return (
    <div className="content-blocks relative transition-colors duration-300 ">
      <Header />
      <Hero />
      <OurStory />
      <Services />
      <Technology />
      <Skill />
      <Design />
      <Faqs />

      <section className="space-y-16 py-12">
        <div className="rounded-2xl p-6 md:px-12 bg-gray-50/50">
          <div className="flex flex-col items-center justify-center text-center">
            <h3 className="label-1 text-[36px] font-bold leading-tight ">
              Partner with Zentronix today.
              <br />
              Exclusive strategies. Measurable ROI. Market dominance.
            </h3>

            <a
              href="/beta-program"
              className="inline-flex items-center justify-center rounded-full border border-black/20 px-8 py-4 font-semibold text-[20px] bg-black  transition-all duration-300 hover:scale-105 text-white hover:bg-gray-900 shadow-lg hover:shadow-xl mt-6"
            >
              Get Your Free Audit
            </a>
          </div>
        </div>

        <div className="p-6">
          <div className="flex flex-col items-center justify-between gap-10 md:flex-row">

            <div className="md:flex-1">
              <h3 className="text-center md:text-left text-[36px] font-bold leading-tight ">
                Comprehensive Digital Growth.
              </h3>
            </div>

            <div className="flex flex-1 flex-col items-center gap-6">
              <div className="w-[110px] md:w-[160px]">
                <Image
                  src="/images/favicon.png"
                  alt="favicon"
                  width={160}
                  height={160}
                  className="w-full h-auto drop-shadow-md"
                />
              </div>

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 mt-8  font-semibold text-[20px] transition-all duration-300 text-white hover:bg-gray-900 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Start Your Growth Journey
              </button>
            </div>

            <div className="hidden md:block md:flex-1">
              <h3 className="text-right text-[36px] font-bold leading-tight ">
                Ready to dominate search?
              </h3>
            </div>

          </div>
        </div>

        <div className="rounded-2xl px-6 py-12 pb-36 light">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-center md:gap-8">

            <h3 className="text-[36px] font-bold leading-tight ">
              Get the latest SEO insights.
              <br />
              Sign up for our newsletter.
            </h3>

            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/20 bg-black px-8 py-4 font-semibold text-[20px]  transition-all duration-300 text-white hover:bg-gray-900 shadow-lg hover:shadow-xl"
            >
              Subscribe Now
            </button>

          </div>
        </div>

      </section>
    </div>
  );
}