import { gsap } from "gsap";
import "./style.css";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.set(".image", {
    scale: 0.3
})

gsap.set(".content", {
    gap: "40em"
})

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page2",
        start: "top top",
        end: "top -100%",
        scrub: true,
        pin: true,
    }
})

tl.to(".image", {
    scale: 1,
    ease: "power4.out",
}).to(".content", {
    gap: "2rem",

}, "<")