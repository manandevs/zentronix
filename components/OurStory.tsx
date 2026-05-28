"use client"

import React, { useState } from 'react'

function OurStory() {
  const videos = ["/vedio/ourstory-2.mp4", "/vedio/ourstory-1.mp4"];
  const [videoIndex, setVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    // Switch to the next video in the array, or back to the first one
    setVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  return (
    <section className="transition-colors duration-300">
      <div className="relative transition-colors duration-300">
        <section className="p-4 transition-colors duration-300 lg:p-6 text-lg font-urbanist">
          <p>Built for the next generation of industry leaders, Zentorex AI works tirelessly to orchestrate your neural infrastructure. Offload the complexity of Gemini AI integration and autonomous workflows to us, so you can focus entirely on high-level strategy and expanding your vision.</p>
        </section>

        <section className="lg-px-6 grid grid-cols-1 gap-6 px-4 py-24 text-primary transition-colors duration-300 md:grid-cols-12 font-urbanist">
          <div className="grid grid-cols-1 grid-rows-2 gap-6 rounded-xl border border-border p-3 sm:grid-cols-2 sm:grid-rows-1 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
            <div className="flex items-center px-4">
              <p className="mx-auto text-center text-balance text-lg">
                Advanced intelligence should provide what matters most — autonomous reasoning and cognitive scale. Discover how our expert engineering team helps businesses dominate their market through Gemini-powered innovation.
              </p>
            </div>
            
            {/* Video Container Button */}
            <button className="group/button flex aspect-video cursor-pointer items-center justify-center overflow-hidden rounded-md bg-black relative">
              
              {/* Background Video Implementation */}
              <video
                key={videos[videoIndex]} // Key forces re-render when source changes
                autoPlay
                muted
                playsInline
                onEnded={handleVideoEnd}
                className="absolute inset-0 w-full h-full object-cover opacity-60 transition-scale duration-700 group-hover/button:scale-105"
              >
                <source src={videos[videoIndex]} type="video/mp4" />
              </video>

              {/* Button Overlay */}
              <span className="inline-flex flex-nowrap items-center justify-center rounded-full label-1 leading-none transition-all cursor-pointer gap-1 px-3.5 py-3 group/button max-md:h-9 md:h-auto !gap-1.5 !pl-2.5 bg-white/75 backdrop-blur-xl border border-transparent hover:bg-white absolute z-10 group-hover/button:scale-110 active:scale-95" aria-disabled="false">
                <div className="flex h-4 w-4 items-center justify-center rounded-full p-1 transition-colors bg-black/10 group-hover/button:bg-black">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play w-3 h-3 fill-white stroke-white transition-colors" aria-hidden="true">
                    <polygon points="6 3 20 12 6 21 6 3" />
                  </svg>
                </div>
                <span className="font-semibold text-black">The Intelligence Story</span>
              </span>
            </button>
          </div>
        </section>
      </div>
    </section>
  )
}

export default OurStory