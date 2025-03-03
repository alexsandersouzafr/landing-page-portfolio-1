"use client";
import animateSection2 from "@/animations/section-2";
import { useGSAP } from "@gsap/react";
import { CheckCircle } from "lucide-react";
import { useRef } from "react";

const listItems = ["CREATIVE DESIGN", "EASY TO USE", "BEST USER EXPERIENCE"];

export default function Section2() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useGSAP(() => animateSection2(sectionRef.current!), { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="setion flex w-full justify-center bg-white px-2 py-16"
    >
      <div className="flex w-full max-w-[1170px] flex-col items-center justify-center gap-8">
        <h1 className="title text-3xl">About Our App</h1>
        <p className="paragraph max-w-[600px] text-center text-paragraph">
          Velit consequat reprehenderit exercitation commodo. Ad minim nostrud
          duis in eu consectetur enim sunt excepteur velit culpa proident
          voluptate commodo. Dolor laboris commodo sunt cillum eu do amet.
          Nostrud occaecat sit sit commodo laboris culpa.
        </p>
        <div className="flex flex-col items-center justify-between gap-8 lg:grid lg:grid-cols-2">
          <div className="flex w-full items-center justify-center">
            <img src="preview-2.png" alt="App preview" />
          </div>
          <div className="flex flex-col items-center justify-center gap-16">
            {listItems.map((item, i) => (
              <div
                className="item flex max-w-[500px] items-start gap-4 rounded-lg border border-royal/10 p-4 shadow-md"
                key={i}
              >
                <CheckCircle className="size-[24px] shrink-0 text-royal" />
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl">{item}</h3>
                  <p className="text-paragraph">
                    Et laboris laborum nulla Lorem in ut pariatur et sint elit
                    ad quis velit commodo. Ullamco qui nisi reprehenderit cillum
                    mollit ex ex sit cupidatat aute Lorem.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
