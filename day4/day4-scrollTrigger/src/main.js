import { gsap } from "gsap";
import "./style.css";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
    x: 1200,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: ".box",
        start: "top 50%",
        end: "top 20%",
        scrub: true,
        pin: true,
        onUpdate: () => {},
        onEnter: () => {},
        onLeave: () => {},
        onEnterBack: () => {},
        onLeaveBack: () => {}
    }
})