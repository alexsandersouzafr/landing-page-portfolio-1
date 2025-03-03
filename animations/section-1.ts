import gsap from "gsap";

export default function animateSection1() {
  const timeline = gsap.timeline({duration:0.5, delay:1});

  gsap.set(".hero", { x: -30, opacity:0});
  gsap.set(".preview-img", { x: 30, opacity:0});

  timeline.to(".hero", {
    x: 0,
    ease: "power2.in",
    opacity: 1,
  });

  timeline.to(".preview-img", {
    x: 0,
    ease: "power2.in",
    opacity: 1,
  },"<");
}
