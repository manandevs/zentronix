"use client"

import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div className="">
      <div className="fixed top-0 right-0 left-0 z-40 hidden h-full w-full bg-transparent sm:block invisible opacity-0"></div>

      <div className="pointer-events-none fixed top-0 right-0 bottom-0 z-80 hidden items-center justify-center p-8 sm:flex">
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pointer-events-auto relative z-10 flex cursor-pointer flex-nowrap items-center gap-[5px] overflow-hidden rounded-xl backdrop-blur-lg [--toc-width-closed:40px] [--toc-width-open:100%] sm:[--toc-width-open:300px] justify-start bg-grey-dark/45"
          style={{ width: "var(--toc-width-closed)", height: "130px" }}
        >
          <div
            className="toc-items pointer-events-none flex gap-2"
            style={{
              opacity: 0,
              visibility: "hidden",
              "--element-width": "344px",
              "--element-height": "485px",
            } as React.CSSProperties}
          >
            {/* Content unchanged */}
          </div>
        </motion.div>
      </div>

      <section
        data-page-header="true"
        data-header-type="hero"
        className="[--border-radius:12px] [--container-padding:16px] [--entry-progress:0] [--exit-progress:0] lg:[--container-padding:24px]"
      >
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: -80, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="top-20 flex flex-col items-center gap-3 pt-35 pb-16 lg:gap-6 sticky"
        >
          <div>
            <p className="max-w-xl px-6 text-center font-mono leading-[1.2]">
              The helpful home robot Beta launching late 2026
            </p>
          </div>

          <h1 className="max-w-[24ch] px-4 text-center text-6xl font-heading">
            Meet Your Smart Companion
          </h1>

          <p className="max-w-xl px-6 text-center font-mono">
            Zentronix – Centralized Technology & Network Interface Exchange platform.
          </p>
        </motion.div>

        <div
          className="aspect-square h-[80svh] w-full overflow-hidden bg-black md:h-[120svh]"
          style={{
            clipPath:
              "inset(0px calc(var(--container-padding) * (1 - var(--entry-progress))) round calc(var(--border-radius)  * (1 - var(--entry-progress))))",
            "--entry-progress": 0,
            "--exit-progress": 0,
          } as React.CSSProperties}
        >
          <img src="/images/image.png" alt="" className="w-full h-full object-cover z-1" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="top-0 flex flex-col items-center gap-3 pt-35 pb-16 lg:gap-6 fixed z-10 w-full"
          >
            <div>
              <p className="max-w-xl px-6 text-center font-mono">
                The helpful home robot Beta launching late 2026
              </p>
            </div>
            <h1 className="max-w-[24ch] px-4 text-center text-5xl font-heading">
              Meet Your Smart Companion
            </h1>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="fixed bottom-0 z-10 flex w-full origin-top justify-center px-6 pb-4 md:pb-6"
        >
          <a
            className="flex w-95 justify-between gap-1 rounded-full bg-accent px-4 py-4 label-1 leading-4 backdrop-blur-xl md:px-5 lg:w-100 shadow"
            href="/beta-program"
          >
            <p>Join the Founding Family</p>
            <p className="text-right">
              <span className="pr-1.5 text-secondary">
                Apply to the beta
              </span>
              <span className="inline-block h-2 w-2 animate-[blinking_0.75s_ease-in-out_infinite] rounded-full bg-black max-sm:hidden"></span>
            </p>
          </a>
        </motion.div>
      </section>
    </div>
  )
}

export default Hero