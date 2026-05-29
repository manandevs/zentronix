"use client";

import type { CSSProperties } from "react";

type PlayIconButtonProps = {
  className?: string;
};

export function PlayIconButton({
  className = "group block [--media-button-icon-height:20px]",
}: PlayIconButtonProps) {
  return (
    <div className={className}>
      <div
        slot="icon"
        className="relative grid cursor-pointer place-items-center rounded-full bg-white/20 backdrop-blur-lg transition-colors duration-200 hover:bg-white/40"
        style={{ width: "24px", height: "24px" } as CSSProperties}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-play z-10 h-[12px] w-[12px] fill-white"
          aria-hidden="true"
        >
          <polygon points="6 3 20 12 6 21 6 3" />
        </svg>
      </div>
    </div>
  );
}
