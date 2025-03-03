"use client";
import animateSection4 from "@/animations/section-4";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Section4() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useGSAP(() => animateSection4(sectionRef.current!), { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="section flex w-full justify-center overflow-hidden bg-white px-4 py-16"
    >
      <div className="flex w-full max-w-[1170px] flex-col items-center justify-center gap-8">
        <h1 className="title text-3xl">Checkout Our Interface</h1>
        <p className="paragraph max-w-[600px] text-center text-paragraph">
          Velit consequat reprehenderit exercitation commodo. Ad minim nostrud
          duis in eu consectetur enim sunt excepteur velit culpa proident
          voluptate commodo.
        </p>
        <img src="screenshot.png" alt="interface preview" />
      </div>
    </section>
  );
}
