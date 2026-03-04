import Image from 'next/image'
import React from 'react'

function Technology() {
  return (
    <section className="  text-primary transition-colors duration-300" id="technology" data-section-title="technology" data-toc-section="true">
      <div className="s relative  transition-colors duration-300">
        <section className="overflow-clip bg-white transition-colors duration-300 [--border-radius:12px] [--container-padding:16px] [--entry-progress:0] [--exit-progress:0] lg:pb-24 lg:[--container-padding:24px]">
          <div className="pointer-events-none absolute inset-0 z-20 h-full" style={{ opacity: 1 }}></div>
          <div className="flex h-[140vh] flex-col justify-end">
            <div className="h-[240vh] min-h-[240vh] w-full">
              <div className="mx-auto flex min-h-[calc(100vh-var(--spacing)*6)] w-full justify-center bg-linear-to-b from-green-tint from-33% to-warm-grey-dark" style={{ clipPath: "inset(0px calc((var(--container-padding)) * var(--exit-progress)) round calc(var(--border-radius) * var(--exit-progress)))", "--exit-progress": 0 } as React.CSSProperties}>
                <div className="relative flex min-h-[240vh] w-full flex-col">
                  <h1 className="z-30 sticky top-0 mx-auto flex h-svh items-center justify-center px-4 pt-0 text-center text-[50px] md:text-[98px] font-bold text-balance lg:px-20">
                    From invisible to industry leader
                  </h1>
                  <div className="absolute bottom-0 left-1/2 z-20 mx-auto my-0 flex h-[80vh] w-[140vw] -translate-x-1/2 flex-col justify-end lg:aspect-square xl:max-w-1/2">
                    <Image alt="Skill Capture glove" src="/images/image.png" width={1080} height={1524} className="h-full w-full object-contain !object-bottom" style={{ objectPosition: "50% 50%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Technology