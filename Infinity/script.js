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


  function changeVideo(videoSrc, selectedCard) {
    // Change video source
    document.getElementById('videoPlayer').src = videoSrc;
    document.getElementById('videoPlayer').play();

    // Remove background from all cards
    document.querySelectorAll('.group').forEach(card => {
        card.style.backgroundColor = 'transparent';
    });

    // Apply selected background color
    selectedCard.style.backgroundColor = '#fff8f6';
}

function highlightCard(card) {
    card.style.backgroundColor = '#fff8f6';
}

function resetCard(card) {
    if (card !== document.querySelector('.group[style*="background-color: rgb(255, 248, 246)"]')) {
        card.style.backgroundColor = 'transparent';
    }
}