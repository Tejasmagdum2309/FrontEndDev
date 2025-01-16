let menuToggle = document.getElementById("menu-toggle"); // Hamburger button
let mobileMenu = document.getElementById("mobile-menu"); // Mobile menu
let menuClose = document.getElementById("menu-close"); // Close button

let tl_nav = gsap.timeline();

tl_nav.from("#mobile-menu",{
    y : "-100%",
    opacity : 0,
    duration : 0.9,
    
})

tl_nav.from("#mobile-menu a",{
    y : "100%",
    opacity : 0,
    duration : 0.9,
    stagger : 0.8
})

tl_nav.from(menuClose,{
    y : "100%",
    opacity : 0,
    duration : 0.9,
    
})

tl_nav.pause();
menuToggle.addEventListener('click',  () => {
    tl_nav.play();
})
menuClose.addEventListener('click', () => {
    tl_nav.reverse();

    
})
