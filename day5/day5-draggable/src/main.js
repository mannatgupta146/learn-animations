import { gsap } from "gsap";
import "./style.css";
    
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(Draggable, InertiaPlugin, ScrollTrigger, SplitText);

Draggable.create(".box", {
    bounds: "#app",
    type: "x, y",
    edgeResistance: 1,
    inertia: true,
    dragResistance: 0.5,
})