let menuToggle = document.getElementById("menu-toggle"); // Hamburger button
let mobileMenu = document.getElementById("mobile-menu"); // Mobile menu
let menuClose = document.getElementById("menu-close"); // Close button

console.log(menuToggle,mobileMenu,menuClose);

let tl_nav = gsap.timeline();

tl_nav.from("#mobile-menu",{
    x : "100%",
    opacity : 0,
    duration : 0.6,
    
})


tl_nav.from("#mobile-menu a",{
    x : "100%",
    opacity : 0,
    duration : 0.6,
    stagger : 0.2
})



tl_nav.pause();

menuToggle.addEventListener('click',  () => {
    tl_nav.play();
})

menuClose.addEventListener('click', () => {
    tl_nav.reverse();

    
})
