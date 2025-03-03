import { gsap } from "gsap";

export default function animateNavBar() {
  const timeline = gsap.timeline({
    delay: 0.5,
    duration: 1,
    ease: "power2.in",
  });
  gsap.set(".navbar", {
    y: -20,
    opacity: 0,
  });

  gsap.set(".contacts>div", { x: -20, opacity: 0 });
  gsap.set(".icons>svg", { x: 20, opacity: 0 });
  gsap.set(".nav-button", { x: 10, opacity: 0 });
  gsap.set(".logo", { scaleY: 0, opacity: 0 });
  gsap.set(".logo>img", { opacity: 0 });

  timeline
    .to(".navbar", {
      y: 0,
      opacity: 1,
    })
    .to(
      ".contacts>div",
      {
        x: 0,
        opacity: 1,
        stagger: 0.2,
      },
      "<",
    )
    .to(
      ".icons>svg",
      {
        x: 0,
        opacity: 1,
        stagger: 0.2,
      },
      "<",
    )
    .to(
      ".nav-button",
      {
        x: 0,
        opacity: 1,
        stagger: 0.2,
      },
      "<",
    )
    .to(".logo", {
      scaleY: 1,
      opacity: 1,
      duration: 1,
    })
    .to(".logo>img", { opacity: 1, duration: 2 });
}
