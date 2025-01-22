let menuToggle = document.getElementById("menu-toggle"); // Hamburger button
let mobileMenu = document.getElementById("mobile-menu"); // Mobile menu
let menuClose = document.getElementById("menu-close"); // Close button

let tl_nav = gsap.timeline();

tl_nav.from("#mobile-menu",{
    y : "-100%",
    opacity : 0,
    duration : 0.3,
    
})

tl_nav.from("#mobile-menu a",{
    x : "100%",
    opacity : 0,
    // duration : 0.6,
    stagger : 0.2
})

tl_nav.from("#navbtn",{
    x : "100%",
    opacity : 0,
    // duration : 0.6,
    stagger : 0.2
})


tl_nav.from(menuClose,{
    x : "100%",
    opacity : 0,
    duration : 0.2,
    
})

tl_nav.pause();
menuToggle.addEventListener('click',  () => {
    console.log('clicked')
    tl_nav.play();
})
menuClose.addEventListener('click', () => {
    tl_nav.reverse();

    
})


  // Select the navbar
  const navbar = document.getElementById('navbar');

  // Add a scroll event listener
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0.5) {
      navbar.classList.add('bg-white', 'shadow-lg', 'border-gray-300');
      navbar.classList.remove('bg-transparent', 'border-transparent');
    } else {
      navbar.classList.remove('bg-white', 'shadow-lg', 'border-gray-300');
      navbar.classList.add('bg-transparent', 'border-transparent');
    }
  });