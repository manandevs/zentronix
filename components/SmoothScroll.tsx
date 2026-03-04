"use client";

import { useEffect, useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let scroll: any;

    const initScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      if (!containerRef.current) return;

      scroll = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
        lerp: 0.08,
        multiplier: 1,
        smartphone: { smooth: true },
        tablet: { smooth: true },
      } as any); // 👈 fix typing issue safely
    };

    initScroll();

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={containerRef}>
      {children}
    </div>
  );
}