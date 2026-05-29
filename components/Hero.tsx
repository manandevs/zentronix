"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"

const PlasmaGlobe = dynamic(() => import("@/components/plasma-globe"), {
  ssr: false,
  loading: () => null,
});


const Hero = () => {
  return (
    <section
      aria-label="Hero Section"
      className="[--border-radius:12px] [--container-padding:16px] lg:[--container-padding:24px] max-w-screen overflow-hidden relative"
    >
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: -80, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="top-20 flex flex-col items-center gap-3 pt-35 pb-16 lg:gap-6 sticky"
        >
          <p className="max-w-2xl px-6 py-2 text-center text-[20px] font-medium ">
            The Ultimate Gemini AI Integration Engine
          </p>
          <h1 className="max-w-[20ch] px-4 py-2 text-center font-bold text-[50px] md:text-[98px] leading-[1.05] font-lobster">
            Scale Your Neural Intelligence
          </h1>
          <p className="w-full text-right px-6 py-2 text-[24px] font-medium ">
            Meet Zentorex AI
          </p>

          <PlasmaGlobe
            scale={0.75}
            speed={0.75}
            intensity={0.75}
            right="600px"
            top="50px"
          />
          <PlasmaGlobe
            scale={0.5}
            speed={0.25}
            intensity={0.25}
            left="750px"
            top="5px"
          />
        </motion.div>

        <div
          className="aspect-square h-[80svh] w-full overflow-hidden bg-black md:h-[120svh] relative"
          style={
            {
              clipPath:
                "inset(0px calc(var(--container-padding) * (1 - var(--entry-progress))) round calc(var(--border-radius)  * (1 - var(--entry-progress))))",
              "--entry-progress": 0,
            } as React.CSSProperties
          }
        >
          <Image
            src="/images/hero-image.png"
            alt="Data-driven digital growth visualization"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            quality={85}
            className="object-cover z-1"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="top-0 flex flex-col gap-3 pt-35 pb-16 lg:gap-6 fixed z-10 w-full text-white"
          >
            <p className="max-w-sm py-2 pr-6 pl-14 text-sm font-medium leading-[1.2] rounded-r-full bg-black/75">
              Enterprise-Grade Gemini API Solutions
            </p>
            <h2 className="max-w-6xl py-2 pl-14 font-lobster tracking-wide font-bold text-4xl md:text-8xl drop-shadow-sm rounded-r-full bg-black/75">
              Master Generative Logic
            </h2>
            <p className="max-w-4xl text-lg pl-14 pr-6 font-medium leading-relaxed rounded-r-full bg-black/85">
              Leverage multimodal reasoning, long-context understanding, and
              autonomous agents to transform your business workflows with
              Zentorex AI.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="fixed bottom-0 z-10 flex w-full origin-top justify-center px-6 pb-4 md:pb-6"
        >
          <a
            className="btn-agency flex w-80 justify-between gap-1 rounded-full glass-agency px-4 py-3 backdrop-blur-xl md:px-5 lg:w-100 shadow-xl border border-white/25"
            href="/chat"
          >
            <p className="font-semibold text-black">Launch Intelligence Console</p>
            <p className="text-right">
              <span className="pr-1.5 text-gray-800">Access Live Beta</span>
              <span
                className="inline-block h-2 w-2 animate-pulse rounded-full bg-black"
                aria-hidden
              />
            </p>
          </a>
        </motion.div>
    </section>
  );
};

export default Hero;
