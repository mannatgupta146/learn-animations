import { gsap } from 'gsap'
import './style.css'

// gsap.from('.box', {
//     x: 500,
//     duration: 1,
//     delay: 1,
// })

// gsap.fromTo('.box', {
//     x: 0,
// }, {
//     x: 300,
//     y: 200,
//     duration: 1,
//     delay: 0.5,
// })

gsap.to('.box', {
    x: 500,
    duration: 1,
    delay: 0.6,
    ease: "steps.inOut",
})