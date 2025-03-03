import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function animateSection5(trigger: HTMLElement) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(".title", {
        opacity: 0,
        x: -50,
    })

    gsap.set(".paragraph", {
        opacity: 0,
        x: -50,
    })

    gsap.set(".image", {
        opacity: 0,
        y: 50,
    })

    gsap.set(".item", {
        opacity: 0,
        x: 50,
    })

    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: trigger,
            start: "top 80%",
        }, duration: 1, ease: "power2.out",
    })

    timeline.to(".title", {
        opacity: 1,
        x: 0,
    }).to(".paragraph", {
        opacity: 1,
        x: 0,
    }, '<').to(".image", {
        opacity: 1,
        y: 0,
    }, '<').to(".item", {
        opacity: 1,
        x: 0,
        duration: 2,
        stagger: {
            each: 0.3,
            from: "end"
        },
    }, '<')
}

