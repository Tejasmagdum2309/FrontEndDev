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

gsap.from("#heading_1",{
    scale : 0,
    opacity : 0,
    y : -40,
    duration : 1,
    scrollTrigger : {
        trigger : "#section_2",
        scroller : "body",
        // //markers : true,
        start : "top 90%",
        end : "top 40%",
        scrub : 1
    }
})


let tl2 = gsap.timeline();


tl2.from("#cards",{
    scale : 0,
    opacity : 0,
    // x : 400,
    
    // duration : 1,
    transform : "translateX(-250%)",
    stagger : 0.4,
    scrollTrigger : {
        trigger : "#section_2",
        scroller : "body",
        // //markers : true,
        start : "top 0%",
        end : "top -50%",
        scrub : 2,
        pin : true
    }
})


tl2.from("#Ai_learning_h1",{
    x : "-200%",
    scale : 0,
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : "#section_3",
        scroller : "body",
        // //markers : true,
        start : 'top 70%',
        end : 'top 30%',
        scrub : 2
    }
})


tl2.from("#Ai_learning_p",{
    x : "200%",
    scale : 0,
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : "#section_3",
        scroller : "body",
        // //markers : true,
        start : 'top 70%',
        end : 'top 30%',
        scrub : 2
    }
})

tl2.from("#Ai_learning_img",{
    y : "200%",
    scale : 0,
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : "#section_3",
        scroller : "body",
        // //markers : true,
        start : 'top 70%',
        end : 'top 30%',
        scrub : 2
    }
})




tl2.from("#section_4_left",{
    x : "-200%",
    scale : 0,
    // rotate : -120,
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : "#section_4",
        scroller : "body",
        //markers : true,
        start : 'top 90%',
        end : 'top 40%',
        scrub : 2
    }
})

tl2.from("#section_4_right",{
    x : "200%",
    scale : 0,
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : "#section_4",
        scroller : "body",
        //markers : true,
        start : 'top 90%',
        end : 'top 40%',
        scrub : 2
    }
})

tl2.from("#section_5_right",{
    x : "200%",
    scale : 0,
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : "#section_5",
        scroller : "body",
        //markers : true,
        start : 'top 90%',
        end : 'top 40%',
        scrub : 2
    }
})

tl2.from("#section_5_left",{
    x : "-200%",
    scale : 0,
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : "#section_5",
        scroller : "body",
        //markers : true,
        start : 'top 90%',
        end : 'top 40%',
        scrub : 2
    }
})


tl2.from("#section_6_right",{
    x : "200%",
    scale : 0,
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : "#section_6",
        scroller : "body",
        //markers : true,
        start : 'top 90%',
        end : 'top 40%',
        scrub : 2
    }
})

tl2.from("#section_6_left",{
    x : "-200%",
    scale : 0,
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : "#section_6",
        scroller : "body",
        //markers : true,
        start : 'top 90%',
        end : 'top 40%',
        scrub : 2
    }
})

tl2.from("#section_7_right",{
    x : "200%",
    scale : 0,
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : "#section_7",
        scroller : "body",
        //markers : true,
        start : 'top 90%',
        end : 'top 40%',
        scrub : 2
    }
})

tl2.from("#section_7_left",{
    x : "-200%",
    scale : 0,
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : "#section_7",
        scroller : "body",
        //markers : true,
        start : 'top 90%',
        end : 'top 40%',
        scrub : 2
    }
})

tl2.from("#section_8_right",{
    x : "200%",
    scale : 0,
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : "#section_8",
        scroller : "body",
        //markers : true,
        start : 'top 90%',
        end : 'top 40%',
        scrub : 2
    }
})

tl2.from("#section_8_left",{
    x : "-200%",
    scale : 0,
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : "#section_8",
        scroller : "body",
        //markers : true,
        start : 'top 90%',
        end : 'top 40%',
        scrub : 2
    }
})


let tl3 = gsap.timeline();



tl3.from("#testomanial_cards",{
    scale : 0,
    opacity : 0,
    // x : 400,
    
    // duration : 1,
    transform : "translateX(-250%)",
    stagger : 0.4,
    scrollTrigger : {
        trigger : "#testomanial",
        scroller : "body",
        // markers : true,
        start : "top 90%",
        end : "top 30%",
        scrub : 2,
    }
})

tl3.from("#bluesss",{
    scale : 0,
    opacity : 0,
    y : 100,
    stagger : 0.4,
    scrollTrigger : {
        trigger : "#bluesss_container",
        scroller : "body",
        // markers : true,
        start : "top 90%",
        end : "top 30%",
        scrub : 2,
    }
})


// navabr modification

const menu = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');


let tl_nav = gsap.timeline();

tl_nav.from("#mobile-menu",{
    x : "100%",
    opacity : 0,
    duration : 0.8
})


tl_nav.from("#mobile-menu a",{
    x : "100%",
    opacity : 0,
    duration : 0.8,
    stagger : 0.2
})



menu.addEventListener('click', () => {
    if(mobileMenu.classList.contains('hidden')){
         tl_nav.play();mobileMenu.classList.toggle('hidden');
    }
    else{
        tl_nav.reverse();mobileMenu.classList.toggle('hidden');
    }
    
});


let body = document.querySelector('body');
let cursor = document.querySelector('.cursor_circle');

function isSmallDevice() {
    return window.innerWidth <= 768; // Adjust 768px as per your requirement
}


body.addEventListener('mousemove', (dots) => {

    if(isSmallDevice()){
      return;
    }
    gsap.to(cursor, {
        duration : 1,
        x : dots.x,
        y : dots.y
    })
})
