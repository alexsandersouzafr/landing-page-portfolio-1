import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function animateScroll(): void {

  // Função para calcular o yPercent dinamicamente com tipagem
  const getDynamicYPercent = (element: HTMLElement | null): number => {
    if (!element) return 0; // Proteção contra elemento nulo
    const elementHeight: number = element.offsetHeight; // Altura do elemento
    const windowHeight: number = window.innerHeight;   // Altura da janela
    // Calcula um deslocamento proporcional (ex.: 30% da altura do elemento em relação à janela)
    return -(elementHeight / windowHeight) * 30; // Ajuste o multiplicador (30) conforme necessário
  };


  const scrollConfig = {
    trigger: ".animate-scroll",
    start: "top top",
    end: "+=10000",
    scrub: true,
    pin: true,
  };

  const timeline = gsap.timeline({
    scrollTrigger: scrollConfig,
    ease: "none",
  });

  gsap.set(".section", {
    position: "absolute",
    top: 0,
    left: 0,
    yPercent: 100
  });

  const sections: HTMLElement[] = gsap.utils.toArray(".section");


  timeline
    .to(sections[0]!, { yPercent: 0 })
    .to('.content1', {
      yPercent: () => getDynamicYPercent(document.querySelector<HTMLElement>('.content1')),
    }) // O "!" assume que o elemento existe
    .to(sections[1]!, { yPercent: 0 })
    .to('.content2', {
      yPercent: () => getDynamicYPercent(document.querySelector<HTMLElement>('.content2')),
    })
    .to(sections[2]!, { yPercent: 0 })
    .to('.content3', {
      yPercent: () => getDynamicYPercent(document.querySelector<HTMLElement>('.content3')),
    });
}