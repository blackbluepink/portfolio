gsap.registerPlugin(ScrollTrigger)
let tl = gsap.timeline()

tl.from('.text-in-anim', {
    y: '-50%',
    opacity: 0,
    duration: 1.5,
    ease: Power4.easeOut
})
gsap.from('.scroll-anim1', {
    scrollTrigger: {
        trigger: '.scroll-anim1',
        start: 'top bottom'
    },
    y: 70,
    opacity: 0,
    duration: 1.5
})
gsap.from('.info-anim0', {
    scrollTrigger: {
        trigger: '.info-anim0',
        start: 'top bottom'
    },
    y: 70,
    opacity: 0,
    duration: 1.5
})
gsap.from('.info-anim1', {
    scrollTrigger: {
        trigger: '.info-anim1',
        start: 'top bottom'
    },
    y: 70,
    opacity: 0,
    duration: 1.5
})
gsap.from('.info-anim2', {
    scrollTrigger: {
        trigger: '.info-anim2',
        start: 'top bottom'
    },
    y: 70,
    opacity: 0,
    duration: 1.5
})

gsap.from('.contact-cta', {
    scrollTrigger: {
        trigger: '.contact-cta',
        start: 'top bottom'
    },
    y: 70,
    opacity: 0,
    duration: 1.5
})

