import Image from 'next/image'
import React from 'react'

function Design() {
  return (
    <section className="  text-primary transition-colors duration-300" id="design" data-section-title="design" data-toc-section="true">
      <div className="s relative  transition-colors duration-300">
        <section className="text-text-primary bg-surface pt-12 pb-[var(--header-height)] md:scale-(--scale) md:rounded-(--borderRadius) md:pt-6" style={{ "--scale": 0.9607201309328969, "--borderRadius": "24px" } as React.CSSProperties}>
          <h2 className="px-4 pb-[calc(var(--header-height)+(var(--spacing)*12))] text-center heading-1 lg:px-6 lg:display-1">Designed for real use</h2>
          <div className="scroll-mt-[calc(var(--header-height)+(var(--spacing)*3))]">
            <div style={{ opacity: 1, transform: "none" }}>
              <div style={{ height: "calc(1280.41px + 100vh)" }}>
                <div className="sticky top-[calc((var(--header-height)+(var(--spacing)*3)))] overflow-hidden">
                  <div className="no-scrollbar flex h-[calc(100svh-(var(--header-height)*2))] translate-x-0 snap-x snap-mandatory [scroll-padding:calc(var(--spacing)*4)] items-center gap-2 overflow-x-auto px-4 lg:w-max lg:translate-x-[var(--tx)] lg:transform-gpu lg:px-6 lg:will-change-transform" style={{ "--tx": "0px" } as React.CSSProperties}>

                    <article className="relative grid aspect-2/3 h-[calc(100svh-(var(--header-height)*2))] max-h-[540px] max-w-[calc(100vw-2rem)] flex-none snap-start grid-rows-2 gap-6 overflow-hidden rounded-xl bg-black p-3 body-2 md:aspect-3/4 2xl:max-h-[600px] 2xl:p-4 before:pointer-events-none before:absolute before:inset-0 before:z-1 before:bg-linear-to-b before:from-black/30 before:to-black/0 dark">
                      <div className="z-10">
                        <h3 className="text-primary">Your privacy is protected</h3>
                        <p className="text-secondary">Memo is an autonomous robot that does not need to learn through human tele-operation. Instead, we obtain training data from our Memory Developers wearing our Skill Capture Glove™.</p>
                      </div>
                      <Image alt="" src="/images/image.png" width={1000} height={1500} className="h-full w-full rounded-sm object-cover absolute" style={{ objectPosition: "50% 50%" }} />
                    </article>

                    <article className="relative grid aspect-2/3 h-[calc(100svh-(var(--header-height)*2))] max-h-[540px] max-w-[calc(100vw-2rem)] flex-none snap-start grid-rows-2 gap-6 overflow-hidden rounded-xl bg-black p-3 body-2 md:aspect-3/4 2xl:max-h-[600px] 2xl:p-4 lg:aspect-3/2 lg:grid-cols-2 lg:grid-rows-1 light" style={{ backgroundColor: "#eadcce" }}>
                      <div className="z-10">
                        <h3 className="text-primary">Safety for the whole family</h3>
                        <p className="text-secondary">With a low center of gravity, stable wheelbase, and a lightweight body, Memo is safe for small members of the home.</p>
                      </div>
                      <Image alt="placeholder" src="/images/image.png" width={1800} height={2400} className="h-full w-full rounded-sm object-cover" style={{ objectPosition: "50% 50%" }} />
                    </article>

                    <article className="relative grid aspect-2/3 h-[calc(100svh-(var(--header-height)*2))] max-h-[540px] max-w-[calc(100vw-2rem)] flex-none snap-start grid-rows-2 gap-6 overflow-hidden rounded-xl bg-black p-3 body-2 md:aspect-3/4 2xl:max-h-[600px] 2xl:p-4 before:pointer-events-none before:absolute before:inset-0 before:z-1 before:bg-linear-to-b before:from-black/30 before:to-black/0 dark">
                      <div className="z-10">
                        <h3 className="text-primary">Tailored to your home</h3>
                        <p className="text-secondary">Customize Memo to fit your aesthetic with a selection of color-ways and personalized hats.</p>
                      </div>
                      <Image alt="" src="/images/image.png" width={1800} height={2400} className="h-full w-full rounded-sm object-cover absolute" style={{ objectPosition: "50% 50%" }} />
                    </article>

                    <article className="relative grid aspect-2/3 h-[calc(100svh-(var(--header-height)*2))] max-h-[540px] max-w-[calc(100vw-2rem)] flex-none snap-start grid-rows-2 gap-6 overflow-hidden rounded-xl bg-black p-3 body-2 md:aspect-3/4 2xl:max-h-[600px] 2xl:p-4 lg:aspect-3/2 lg:grid-cols-2 lg:grid-rows-1 light" style={{ backgroundColor: "#aec2b8" }}>
                      <div className="z-10">
                        <h3 className="text-primary">Simple, soft and easy to clean</h3>
                        <p className="text-secondary">Memo has a soft-to-the-touch silicone shell, with no sharp corners and can be wiped down with any household cleaning product.</p>
                      </div>
                      <Image alt="" src="/images/image.png" width={1800} height={2400} className="h-full w-full rounded-sm object-cover" style={{ objectPosition: "50% 50%" }} />
                    </article>

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

export default Design