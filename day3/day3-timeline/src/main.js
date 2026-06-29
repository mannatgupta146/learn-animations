import { gsap } from 'gsap'
import './style.css'

const tl = gsap.timeline()

tl.to("#box1", {
    x: 1200,
    duration: 1,
    delay: 0.5,
    ease: "power4.out",
}).to("#box2", {
    x: 1200,
    duration: 1,
    ease: "power4.out",
}).to("#box3", {
    x: 1200,
    duration: 1,
    ease: "power4.out",
}).to("#box4", {
    x: 1200,
    duration: 1,
    ease: "power4.out",
})