"use client";
import animateSection1 from "@/animations/section-1";
import { useGSAP } from "@gsap/react";

export default function Section1() {
  useGSAP(() => {
    animateSection1();
  });

  return (
    <section className="flex w-full items-center justify-center overflow-hidden bg-[url('/bg.png')] bg-cover p-2">
      <div className="relative flex w-full max-w-[1170px] flex-wrap items-center justify-center gap-4 pt-32 md:pb-16 md:pt-44 lg:flex-nowrap lg:justify-between">
        <div className="hero relative">
          <div className="absolute -right-8 -top-8 h-[250px] w-[250px] border-[10px] border-white/50 md:h-[450px] md:w-[550px]" />
          <div className="relative z-10 flex w-[300px] flex-col justify-between bg-white p-4 md:h-[450px] md:w-[550px] md:p-8">
            <h1 className="text-xl text-royal md:text-5xl">
              A GREAT APP MAKES YOUR LIFE BETTER
            </h1>
            <p className="text-sm text-paragraph">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <div className="flex flex-col gap-2">
              <h2 className="text-md text-navy md:text-3xl">
                DOWNLOAD APP NOW
              </h2>
              <div className="grid grid-cols-2 gap-2 md:flex md:gap-4">
                <img
                  src="google-badge.png"
                  alt="Google button."
                  className="shrink"
                />
                <img
                  src="apple-badge.png"
                  alt="Apple button"
                  className="shrink"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          src="mobile-preview.png"
          alt="mobile preview"
          className="preview-img relative -right-12 shrink md:-right-24 md:top-16 md:scale-90 xl:-right-40 xl:scale-100"
        />
      </div>
    </section>
  );
}
