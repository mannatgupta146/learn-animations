import { gsap } from 'gsap'
import './style.css'

gsap.to('.box', {
    x: 1500,
    duration: 1.5,
    delay: 0.6,
    ease: "power1.out",
    repeat: -1,
})