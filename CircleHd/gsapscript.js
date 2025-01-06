// time line for navbar and hero

let tl1 = gsap.timeline();

tl1.from("nav a",{
    y : -20,
    stagger: 0.1,
    opacity : 0,
    duration : 0.8,

})


tl1.from("#nav_btn", {
    y: -20,       // Slight vertical animation
    opacity: 0,   // Fades in
});



gsap.from("#hero_info",{
    opacity : 0,
    duration : 0.8,
    scale : 0.4

});

gsap.from("#hero_img",{
    opacity : 0,
    duration : 0.8,
    scale : 0.4
});


// for hero and other same

gsap.from("#section_2",{
    scale : 0,
    duration : 1,
    scrollTrigger : {
        trigger : "#section_2",
        scroller : "body",
        markers : true,
    }
})

