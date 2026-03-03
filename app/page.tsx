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
    <div className="content-blocks relative  transition-colors duration-300 font-lobster">
      <Header />
      <Hero />
      <OurStory />
      <Services />
      <Technology />
      <Skill />
      <Design />
      <section className=" relative scroll-mt-[calc(100vh/4)]">
        <div className="flex min-h-[600px] scroll-mt-[calc(100vh/4)] flex-col items-center justify-center bg-blue-tint will-change-[height]" style={{ height: "50vh" }}>
          <div className="relative flex h-full w-full items-center justify-between gap-6 p-4 lg:p-6">
            <div className="flex h-full w-full flex-col items-center justify-center gap-6 p-4 md:flex-row md:px-18 lg:p-6 xl:px-26" style={{ opacity: 1 }}>
              <div className="md:flex-1">
                <h3 className="text-center subheading-2 md:text-left">Memo wears many hats.</h3>
                <h3 className="subheading-2 text-secondary md:hidden md:text-primary">Which should it wear next?</h3>
              </div>
              <div className="flex h-full flex-1 flex-col items-center justify-center max-md:gap-6">
                <div className="flex w-[96px] flex-1 items-center justify-center md:w-[160px]">
                  <Image
                    src={"/images/favicon.png"}
                    alt='favicon'
                    width={150}
                    height={150}
                  />
                </div>
                <div className="z-10">
                  <button type="button" className="inline-flex flex-nowrap items-center justify-center rounded-full label-1 leading-none transition-colors cursor-pointer gap-1 px-3.5 py-3 group/button max-md:h-9 md:h-auto bg-black text-white border border-transparent hover:border-border hover:bg-transparent hover:text-black" aria-disabled="false">
                    <span>Cast your vote now</span>
                  </button>
                </div>
              </div>
              <div className="hidden flex-1 md:block">
                <h3 className="text-right subheading-2">Which should it wear next?</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Faqs />



      <div className="relative m-4 grid h-[488px] grid-cols-1 grid-rows-1 overflow-hidden rounded-xl md:m-6 lg:h-[40vh] xl:h-[50vh]">
        <div className="relative z-10 col-span-1 col-start-1 row-start-1 flex flex-col items-center justify-center gap-1 p-6 dark md:flex-row md:gap-4 bg-surface">
          <h3 className="text-center label-1 text-primary">Be one of our Founding Families.</h3>
          <h3 className="pb-2 text-center label-1 sm:pb-0 text-accent">Insider access. Exclusive perks. Design input.</h3>
          <a className="inline-flex flex-nowrap items-center justify-center rounded-full label-1 leading-none transition-colors cursor-pointer gap-1 px-3.5 py-3 group/button max-md:h-9 md:h-auto !gap-1.5 !pr-2.5 border border-white/20 bg-transparent text-white hover:border-white hover:bg-white hover:text-black" aria-disabled="false" href="/beta-program">
            <span>Beta program</span>
          </a>
        </div>
      </div>

      <div className="relative m-4 mb-10 grid h-[40vh]">
        <div className="relative z-10 col-span-1 col-start-1 row-start-1 flex flex-col items-center justify-center gap-1 bg-surface p-6 md:flex-row md:gap-4 light">
          <h3 className="text-center label-1 text-primary">Get the latest in your inbox</h3>
          <h3 className="pb-2 text-center label-1 text-secondary sm:pb-0">Sign up to our newsletter</h3>
          <button type="button" className="inline-flex flex-nowrap items-center justify-center rounded-full label-1 leading-none transition-colors cursor-pointer gap-1 px-3.5 py-3 group/button max-md:h-9 md:h-auto !gap-1.5 !pr-2.5 border border-black/10 bg-transparent text-black hover:border-black hover:bg-black hover:text-white" aria-disabled="false">
            <span>Subscribe</span>
            <div className="flex h-4 w-4 items-center justify-center rounded-full p-1 backdrop-blur-xl transition-colors bg-off-black-10 group-hover/button:bg-white [&_svg]:stroke-black group-hover/button:text-black legal group-hover/button:[&_svg]:stroke-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-3 h-3 transition-colors" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}