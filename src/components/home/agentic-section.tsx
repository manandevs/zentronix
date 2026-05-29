"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.08,
    },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export function AgenticSection() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="flex w-full flex-col items-center justify-start gap-4 pb-24 lg:min-h-[80svh] lg:flex-row lg:justify-center lg:gap-0 font-urbanist"
      variants={reduceMotion ? undefined : containerVariants}
      initial={reduceMotion ? undefined : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: false, amount: 0.25, margin: "-40px" }}
    >
      <h2 className="sr-only">Autonomous Intelligence, Exponential Growth</h2>

      <div
        className="sticky top-[20vh] self-start max-lg:mx-auto lg:top-0"
        style={{ marginTop: "0vh", paddingTop: "30vh", paddingBottom: "0px" }}
      >
        <motion.span
          className="block max-w-[19ch] text-center font-bold text-8xl leading-none md:text-11xl lg:mx-[0.1em] lg:text-11xl xl:text-12xl 2xl:text-14xl tracking-tight"
          aria-hidden="true"
          variants={reduceMotion ? undefined : wordVariants}
        >
          Agentic
        </motion.span>
      </div>

      <div
        className="sticky top-[20vh] self-start max-lg:mx-auto lg:top-0"
        style={{ marginTop: "20vh", paddingTop: "30vh", paddingBottom: "0px" }}
      >
        <motion.span
          className="block max-w-[19ch] text-center font-bold text-8xl leading-none md:text-11xl lg:mx-[0.1em] lg:text-11xl xl:text-12xl 2xl:text-14xl tracking-tight"
          aria-hidden="true"
          variants={reduceMotion ? undefined : wordVariants}
        >
          Systemic
        </motion.span>
      </div>

      <div
        className="sticky top-[40vh] self-start max-lg:mx-auto "
        style={{ marginTop: "40vh", paddingTop: "30vh", paddingBottom: "0px" }}
      >
        <motion.span
          className="block max-w-[19ch] text-center font-bold text-8xl leading-none md:text-11xl lg:mx-[0.1em] lg:text-11xl xl:text-12xl 2xl:text-14xl tracking-tight"
          aria-hidden="true"
          variants={reduceMotion ? undefined : wordVariants}
        >
          Evolution
        </motion.span>
      </div>
    </motion.div>
  );
}
