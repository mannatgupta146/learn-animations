import { gsap } from 'gsap'
import './style.css'

gsap.set('.box', {
    x: -300,
    y: 200,
})

gsap.to('.box', {
    x: 1500,
    duration: 1.5,
    delay: 0.6,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
})