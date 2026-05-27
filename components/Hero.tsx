"use client"

import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section aria-label="Hero Section" className="[--border-radius:12px] [--container-padding:16px] lg:[--container-padding:24px]">
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: -80, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="top-20 flex flex-col items-center gap-3 pt-35 pb-16 lg:gap-6 sticky"
      >
        <p className="max-w-2xl px-6 py-2 text-center text-[20px] font-medium ">
          The Premier SEO & Digital Growth Agency
        </p>
        <h1 className="max-w-[20ch] px-4 py-2 text-center font-bold text-[50px] md:text-[98px] leading-[1.05]">
          Scale Your Digital Presence
        </h1>
        <p className="w-full text-right px-6 py-2 text-[24px] font-medium ">
          Meet Your Smart Companion
        </p>
      </motion.div>

      <div
        className="aspect-square h-[80svh] w-full overflow-hidden bg-black md:h-[120svh] relative"
        style={{
          clipPath: "inset(0px calc(var(--container-padding) * (1 - var(--entry-progress))) round calc(var(--border-radius)  * (1 - var(--entry-progress))))",
          "--entry-progress": 0,
        } as any}
      >
        <Image 
          src="/images/hero-image.png" 
          alt="Data-driven digital growth visualization" 
          fill
          priority
          className="object-cover z-1" 
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="top-0 flex flex-col items-center gap-3 pt-35 pb-16 lg:gap-6 fixed z-10 w-full text-white"
        >
          <p className="max-w-2xl py-2 px-6 text-center text-[20px] font-medium leading-[1.2] glass-agency rounded-2xl bg-black/25">
            The Premier SEO & Digital Growth Agency
          </p>
          <h2 className="max-w-[20ch] px-4 text-center font-bold text-[50px] md:text-[98px] leading-[1.05] drop-shadow-sm glass-agency rounded-2xl bg-black/25">
            Scale Your Digital Presence
          </h2>
          <p className="max-w-3xl px-6 text-center text-[22px] font-medium leading-relaxed glass-agency rounded-2xl bg-black/25">
            Drive organic traffic, generate high-quality leads, and dominate your market with our proven, data-driven SEO strategies.
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
          className="btn-agency flex w-95 justify-between gap-1 rounded-full glass-agency px-4 py-4 backdrop-blur-xl md:px-5 lg:w-100 shadow-xl border border-white/30"
          href="/beta-program"
        >
          <p className="font-semibold text-black">Join the Founding Family</p>
          <p className="text-right">
            <span className="pr-1.5 text-gray-500">Apply to the beta</span>
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-black"></span>
          </p>
        </a>
      </motion.div>
    </section>
  )
}

export default Hero