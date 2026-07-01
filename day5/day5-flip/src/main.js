import { gsap } from "gsap";
import "./style.css";

import { Draggable } from "gsap/Draggable";
import { Flip } from "gsap/Flip";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(Draggable,Flip,InertiaPlugin,ScrollTrigger,SplitText);

const flipImage = document.querySelector(".flipImage");
const imageShow = document.querySelector(".imageShow");

flipImage.addEventListener("click", () => {
    const state = Flip.getState(flipImage);
    imageShow.appendChild(flipImage);

    Flip.from(state, {
        duration: 0.8,
        ease: "power1.inOut",
    })
})