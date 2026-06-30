import { gsap } from "gsap";
import "./style.css";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.set(".image", {
    scale: 0.3
})

gsap.to(".image", {
    scale: 1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".page2",
        start: "top top",
        end: "top -100%",
        scrub: true,
        pin: true,
    }
})