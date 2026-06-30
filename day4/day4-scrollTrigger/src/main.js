import { gsap } from "gsap";
import "./style.css";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
    x: 1200,
    duration: 1.5,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: ".box",
        start: "top 30%",
    }
})