import { gsap } from "gsap";
import "./style.css";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger,SplitText);

const split = new SplitText(".title h1", { type: "chars, words, lines" });

gsap.from(split.lines, {
    yPercent: 100,
    opacity: 0,
    duration: 1,
    ease: "expo.out",
    stagger: {
        each: 0.5,
        from: "start"
    }
})