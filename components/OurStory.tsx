import React from 'react'

function OurStory() {
  return (
    <section className="ransition-colors duration-300">
      <div className="relative transition-colors duration-300">
        <section className="p-4 transition-colors duration-300 lg:p-6 text-lg">
          <p>Built for ambitious brands, Zentronix works tirelessly to scale your digital presence. Hand off your SEO and growth strategies to us, so you can focus entirely on running and expanding your business.</p>
        </section>

        <section className="lg-px-6 grid grid-cols-1 gap-6  px-4 py-24 text-primary transition-colors duration-300 md:grid-cols-12">
          <div className="grid grid-cols-1 grid-rows-2 gap-6 rounded-xl border border-border p-3 sm:grid-cols-2 sm:grid-rows-1 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
            <div className="flex items-center px-4">
              <p className="mx-auto text-center text-balance text-lg">Great marketing should give you back what matters most — measurable ROI and growth. See how our expert team helps businesses dominate their industry.</p>
            </div>
            <button className="group/button flex aspect-video cursor-pointer items-center justify-center overflow-hidden rounded-md bg-black dark relative">
              <span className="inline-flex flex-nowrap items-center justify-center rounded-full label-1 leading-none transition-colors cursor-pointer gap-1 px-3.5 py-3 group/button max-md:h-9 md:h-auto !gap-1.5 !pl-2.5 bg-white/20 backdrop-blur-xl  border border-transparent hover:bg-white hover: absolute z-10 group-hover/button:bg-white group-hover/button:" aria-disabled="false">
                <div className="flex h-4 w-4 items-center justify-center rounded-full p-1 backdrop-blur-xl transition-colors [&_svg]:fill-white group-hover:[&_svg]:fill-white bg-white/20 group-hover/button:bg-black [&_svg]:stroke-white  text-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play w-3 h-3 transition-colors" aria-hidden="true">
                    <polygon points="6 3 20 12 6 21 6 3" />
                  </svg>
                </div>
                <span>Our story</span>
              </span>
            </button>
          </div>
        </section>
      </div>
    </section>
  )
}

export default OurStory