import { gsap } from 'gsap'
import './style.css'

const play = document.querySelector(".play")
const pause = document.querySelector(".pause")
const reverse = document.querySelector(".reverse")
const restart = document.querySelector(".restart")
const seek = document.querySelector(".seek")

const tl = gsap.timeline({paused : true, })

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
}).addLabel("end").to("#box4", {
    x: 1200,
    duration: 1,
    ease: "power4.out",
})

play.addEventListener("click", () => {
    tl.play()
})

pause.addEventListener("click", () => {
    tl.pause()
})

reverse.addEventListener("click", () => {
    tl.reverse()
})

restart.addEventListener("click", () => {
    tl.restart()
})

seek.addEventListener("click", () => {
    tl.seek("end")
})