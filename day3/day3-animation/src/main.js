import { gsap } from 'gsap'
import './style.css'

let count = 0
const loaderCount = document.querySelector(".loaderCount h1")

const interval = setInterval(() => {
    count++
    loaderCount.innerHTML = `${count}%`
    if (count === 100) {
        clearInterval(interval)
        landingAnimation()
    }
}, 30)

function landingAnimation() {

    const tl = gsap.timeline()

    tl.to(".loaderCount", {
        opacity: 0,
        duration: 1.5,
        delay: 0.2,
        ease: "power3.out",
    }).to(".loader", {
        yPercent: -100,
        duration: 1.5,
        ease: "expo.out",
    }, "-=0.8").from(".background img", {
        scale: 1.5,
        duration: 0.6,
        ease: "expo.out",
    }, "-=0.8").from(".heading h1", {
        yPercent: 100,
        duration: 1.2,
        ease: "expo.out",
    }).from(".subHeading h2", {
        yPercent: 100,
        duration: 1.2,
        ease: "expo.out",
    }, "-=0.6")
}