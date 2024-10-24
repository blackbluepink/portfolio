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


// Function to add fade-out effect and navigate to a new page
function transitionToPage(href) {
    document.body.classList.add('fade-out'); // Add the fade-out class
    setTimeout(function() {
        window.location.href = href; // Redirect after the fade-out completes
    }, 250); // The timeout matches the duration of the fade effect (0.5s)
}

// Add event listeners to your navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        const targetHref = link.getAttribute('href'); // Get the link's href value
        transitionToPage(targetHref); // Trigger the transition
    });
});
