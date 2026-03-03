"use client"
import React, { useState } from 'react'

function Faqs() {
  return (
    <section className="text-primary transition-colors duration-300" id="faqs" data-section-title="faqs" data-toc-section="true">
      <div className="s relative  transition-colors duration-300">
        <section className=" pt-10 pb-30 text-primary lg:pt-24 lg:pb-40">
          <div className="grid grid-cols-12 gap-3 p-4 lg:p-6">
            <div className="col-span-full pb-10 lg:col-span-6">
              <h3 className="subheading-2 lg:body-2">Frequently asked questions</h3>
            </div>
            <div className="col-span-full lg:col-span-6">
              <div className="w-full flex flex-col gap-2" role="presentation">

                <FAQItem question="What can Memo do?">
                  <p className="[&+&]:mt-[1em]">The Sunday team is developing two things: first: a<em> robot with skills</em>, and second: <em>the robot’s capability to acquire new skills.</em></p>
                  <p className="[&+&]:mt-[1em]">Think of it like the difference between cooking a few good home-made dishes versus developing a whole restaurant operation with great chefs who will source better ingredients, produce new menus, and run a kitchen that makes more dishes, all of which adds up to a great dining experience.</p>
                  <p className="[&+&]:mt-[1em]">Today, Memo (*the robot with skills*) can do the following things: </p>
                  <ul className="list-dash relative mb-[1em] list-outside pl-[1em] last-of-type:mb-0 [p+&]:mt-[1em]">
                    <li className="pl-3">Dishes: Memo can collect utensils, baby plates, cups, and delicate wine glasses. Memo will also clear used napkins, and dump food scraps into the trash bin. Finally Memo will load up your dishwasher and run it.</li>
                    <li className="pl-3">Coffee: Memo can pull a shot from an espresso machine with a nice crema on top. </li>
                    <li className="pl-3">Laundry: This is a new skill for Memo, who is very proud of being able to handle piles of socks now.</li>
                  </ul>
                  <p className="[&+&]:mt-[1em]">We are still actively improving the reliability and generalization of these skills, so Memo can do them in your home out-of-the-box.</p>
                </FAQItem>

                <FAQItem question="Is Memo available for purchase?">
                  <p className="[&+&]:mt-[1em]">Not yet — but you <em>can</em> apply to become a Founding Family in our 2026 beta program. Memo will not be available for purchase until after we complete our beta testing in 2026 and incorporate everything we learn into the production of Memo at scale.</p>
                  <p className="[&+&]:mt-[1em]">During the beta, we’re focused on making Memo exceptionally good at helping you—prioritizing safety, hygiene, maintenance, durability, interaction quality, and real-life usefulness inside a messy home.</p>
                </FAQItem>

                <FAQItem question="How much will a Memo cost?">
                  <p className="[&+&]:mt-[1em]">Building a single Memo today — by hand, with custom components and no economies of scale — costs approximately $20,000.</p>
                  <p className="[&+&]:mt-[1em]">We don’t expect that to be the retail price. Large-scale manufacturing in our next phase will meaningfully reduce costs by at least 50%, and exact pricing will be announced closer to launch.</p>
                </FAQItem>

                <FAQItem question="How big is Memo? How fast can Memo move?">
                  <p className="[&+&]:mt-[1em]">Memo can lower to touch the ground or reach as tall as 7 feet with its arms. For most tasks, Memo rests at 4 feet.</p>
                  <p className="[&+&]:mt-[1em]">Memo’s hardware is powerful, but the software sets hard limits on Memo’s speed. It helps Memo avoid collisions in unseen environments to go at a meandering pace.</p>
                  <p className="[&+&]:mt-[1em]">For most tasks today, we train Memo to move at 50% of a human’s natural pace. This feels safer and makes it easier for our team to see and critique the precision of movements (we’re picky, down to a few millimeters). Please refer to specs on our Technology page for more details.</p>
                </FAQItem>

                <FAQItem question="Is Memo safe?">
                  <p className="[&+&]:mt-[1em]">Yes, Memo is uniquely engineered with strict standards for safety and privacy. Memo has <span tabIndex={0} aria-describedby="f72fce608190"><span className="decoration-skip-ink-none cursor-help underline decoration-secondary decoration-dotted decoration-from-font underline-offset-[10%]"><em>compliant control</em></span></span>, which means you can safely push the robot limbs around while it’s in the middle of manipulation tasks, and it not resist or be stiff to your touch.</p>
                  <p className="[&+&]:mt-[1em]">Unlike humanoids which require power to constantly maintain balance, Memo also has <span tabIndex={0} aria-describedby="82806cd6eede"><span className="decoration-skip-ink-none cursor-help underline decoration-secondary decoration-dotted decoration-from-font underline-offset-[10%]"><em>passive stability</em></span></span>, meaning that you can cut power to the robot in any state and it will not suddenly drop its weight or fall down.</p>
                </FAQItem>

                <FAQItem question="What is the Sunday Beta program?">
                  <p className="[&+&]:mt-[1em]">Find an overview of our <a className="underline underline-offset-[20%]" href="/beta-program">Beta Program here</a>. More details of the Beta Program will be released in early 2026. Subscribe to our newsletter and follow us at <a href="https://x.com/sundayrobotics" className="underline underline-offset-[20%]" target="_blank" rel="noopener noreferrer">@sundayrobotics</a> on X for updates.</p>
                </FAQItem>

              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Faqs

interface FAQItemProps {
  question: string;
  children: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden border-t border-border not-first:mt-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="flex w-full cursor-pointer items-start justify-between text-left pt-4"
        aria-expanded={isOpen}
      >
        <span className="max-w-[60ch] flex-1">
          <p className="body-2 font-semibold">{question}</p>
        </span>
        <span
          className={`inline-flex shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
            }`}
          aria-hidden="true"
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
            className="lucide lucide-chevron-down h-4 w-4 opacity-70"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className="overflow-hidden">
          <div className="pb-6 body-2 text-secondary pt-4">{children}</div>
        </div>
      </div>
    </div>
  );
};
