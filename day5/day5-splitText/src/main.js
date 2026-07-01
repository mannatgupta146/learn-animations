import { gsap } from "gsap";
import "./style.css";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger,SplitText);

const split = new SplitText(".title h1", { 
    type: "chars, words, lines",
    wordsClass: "titleWord",
    charsClass: "titleChars"
});

gsap.from(split.chars, {
    yPercent: 100,
    opacity: 0,
    duration: 1,
    ease: "expo.out",
    stagger: {
        each: 0.05,
        from: "start"
    }
})