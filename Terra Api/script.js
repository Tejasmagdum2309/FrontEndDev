let menuToggle = document.getElementById("menu-toggle"); // Hamburger button
let mobileMenu = document.getElementById("mobile-menu"); // Mobile menu
let menuClose = document.getElementById("menu-close"); // Close button
let mainContent = document.getElementById("main-content");


let tl_nav = gsap.timeline();

tl_nav.from("#mobile-menu",{
    y : "100%",
    opacity : 0,
    duration : 0.3,
    
})

tl_nav.from(menuClose,{
    y : "100%",
    opacity : 0,
    duration : 0.2,
    
})

tl_nav.from("#mobile-menu a",{
    y : "100%",
    opacity : 0,
    // duration : 0.6,
    stagger : 0.2
})

tl_nav.from("#navbtn",{
    y : "100%",
    opacity : 0,
    // duration : 0.6,
    stagger : 0.2
})




tl_nav.pause();
menuToggle.addEventListener('click',  () => {
    mainContent.classList.add("blur-md"); // Blur background
    tl_nav.play();
})
menuClose.addEventListener('click', () => {
    mainContent.classList.remove("blur-md"); // Blur background
    tl_nav.reverse();

    
})


  

