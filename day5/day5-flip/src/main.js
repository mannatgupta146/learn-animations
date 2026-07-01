import { gsap } from "gsap";
import "./style.css";

import { Draggable } from "gsap/Draggable";
import { Flip } from "gsap/Flip";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(
  Draggable,
  Flip,
  InertiaPlugin,
  ScrollTrigger,
  SplitText
);

const flipImage = document.querySelector(".flipImage");
const flipImage2 = document.querySelector(".flipImage2");

const imageShow = document.querySelector(".imageShow");
const imageGallery = document.querySelector(".imageGallery");

function swapImages() {
  const state = Flip.getState([flipImage, flipImage2]);

  if (flipImage.parentElement === imageGallery) {
    imageShow.appendChild(flipImage);
    imageGallery.appendChild(flipImage2);
  } else {
    imageGallery.appendChild(flipImage);
    imageShow.appendChild(flipImage2);
  }

  Flip.from(state, {
    duration: 1.2,
    ease: "power1.inOut",
    absolute: true,
    scale: true,
  });
}

flipImage.addEventListener("click", swapImages);
flipImage2.addEventListener("click", swapImages);