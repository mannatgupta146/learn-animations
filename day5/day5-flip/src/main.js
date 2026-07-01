import { gsap } from "gsap";
import "./style.css";

import { Draggable } from "gsap/Draggable";
import { Flip } from "gsap/Flip";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(Draggable,Flip,InertiaPlugin,ScrollTrigger,SplitText);