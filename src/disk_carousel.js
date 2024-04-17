import { Splide } from "@splidejs/splide";
import "@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css";

/* VIDEO CARRUSEL EN DISCOS */
document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    heightRatio: 0.5,
    width: "100vw",
    margin: 0,
    padding: { left: "10vw", right: "10vw" },
    easing: "ease",
    autoHeight: true,
    cover: true,
    arrows: true,
    drag: true,
    speed: 1000,
    video: {
      loop: true,
    },
    breakpoints: {
      640: {
        heightRatio: 0.8,
      },
    },
  }).mount(window.splide.Extensions);
});
