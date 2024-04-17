import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* SCROLL FLUIDO */
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

/* SCROLL CATEGORIA VERTICAL */
let slides = gsap.utils.toArray(".slide"),
  getRatio = (el) =>
    window.innerHeight / (window.innerHeight + el.offsetHeight);

slides.forEach((slide, i) => {
  let bg = slide.querySelector("img"),
    content = slide.querySelector("figcaption"),
    tl = gsap.timeline({
      scrollTrigger: {
        trigger: slide,
        start: () => (i ? "top bottom" : "top top"),
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

  tl.fromTo(
    bg,
    {
      y: () => (i ? -window.innerHeight * getRatio(slide) : 0),
    },
    {
      y: () => window.innerHeight * (1 - getRatio(slide)),
      ease: "none",
    }
  );
  tl.fromTo(
    content,
    {
      y: () => (i ? window.innerHeight * -getRatio(slide) * 2 : 0),
    },
    {
      y: () => window.innerHeight * getRatio(slide) * 2,
      ease: "none",
    },
    0
  );
});
