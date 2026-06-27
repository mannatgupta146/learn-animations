import { gsap } from 'gsap'
import './style.css'

// gsap.to('.box', {
//     x: 1300,
//     duration: 1.5,
//     delay: 0.6,
//     ease: "power1.out",
//     repeat: -1,
//     stagger: {
//         each: 0.2,
//         from: "random",
//     },
// })

gsap.from("h1 span", {
    yPercent: 100,
    duration: 0.6,
    opacity: 0,
    delay: 0.2,
    ease: "expo.out",
    stagger: {
        each: 0.1,
        from: "start"
    },
})