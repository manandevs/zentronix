"use client";
import dynamic from "next/dynamic";

import Header from "@/components/layout/header";
import { SectionFallback } from "@/components/shared/section-fallback";
import { ServicesIntro } from "@/components/home/services-intro";
import { NeuralLogicBlock } from "@/components/home/neural-logic-block";
import { EnterpriseFrameworkBlock } from "@/components/home/enterprise-framework-block";
import { CognitiveGrowthBlock } from "@/components/home/cognitive-growth-block";
import Footer from "@/components/layout/footer";

const Hero = dynamic(() => import("@/components/home/hero"), {
  loading: () => <SectionFallback minHeight="80svh" />,
});

const OurStory = dynamic(() => import("@/components/home/our-story"), {
  loading: () => <SectionFallback minHeight="50vh" />,
});

const Skill = dynamic(() => import("@/components/home/skill"), {
  loading: () => <SectionFallback minHeight="80vh" />,
});

const Design = dynamic(() => import("@/components/home/design"), {
  loading: () => <SectionFallback minHeight="50vh" />,
});

const Faqs = dynamic(() => import("@/components/home/faqs"), {
  loading: () => <SectionFallback minHeight="40vh" />,
});


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <OurStory />
      {/* <AgenticSection /> */}
      <ServicesIntro />
      <NeuralLogicBlock />
      <EnterpriseFrameworkBlock />
      <CognitiveGrowthBlock />
      <Skill />
      <Design />
      <Faqs />
      <Footer />
    </>
  );
}
