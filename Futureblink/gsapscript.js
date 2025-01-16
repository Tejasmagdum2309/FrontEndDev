let tl1 = gsap.timeline();

tl1.from("#hero #up",{
    opacity : 0,
    duration : 0.8,
    y : 60,
    stagger : 0.3
})



gsap.from("#heading-section-2",{
    opacity : 0,
    scrollTrigger : {
        trigger : "#section-2",
        scroller : "body",
        // markers : true,
        start : 'top 80%',
        end : 'top 40%',
        scrub : 2
    }
})


let tl2 = gsap.timeline();

tl2.from("#card-1",{
        opacity : 0,
        y : 60,
        stagger : 0.3,
        scale : 0.4,
        scrollTrigger : {
            trigger : "#section-2",
            scroller : "body",
            // markers : true,
            start : 'top 50%',
            end : 'top top',
            scrub : 2
        }
})


tl2.from("#card-2",{
    opacity : 0,
    y : 60,
    stagger : 0.3,
    scrollTrigger : {
        trigger : "#section-2",
        scroller : "body",
        // markers : true,
        start : 'top 22%',
        end : 'top -20%',
        scrub : 2
    }
})


gsap.from("#card-3-heading",{
    opacity : 0,
    scale : 0.4,
    scrollTrigger : {
        trigger : "#section-3",
        scroller : "body",
        // markers : true,
        start : 'top 90%',
        end : 'top 40%',
        scrub : 2
    }
})  

gsap.from("#card-3-left",{
    opacity : 0,
    scale : 0.4,
    x : -100,
    scrollTrigger : {
        trigger : "#section-3",
        scroller : "body",
        // markers : true,
        start : 'top bottom',
        end : 'top 30%',
        scrub : 2
    }
})  

gsap.from("#card-3-right",{
    opacity : 0,
    x : 100,
    scale : 0.4,
    
    scrollTrigger : {
        trigger : "#section-3",
        scroller : "body",
        // markers : true,
        start : 'top bottom',
        end : 'top 20%',
        scrub : 2
    }
})  


gsap.from("#section-4",{
    opacity : 0,
    scale : 0.4,
    scrollTrigger : {
        trigger : "#section-3",
        scroller : "body",
        // markers : true,
        start : 'top bottom',
        end : 'top 20%',
        scrub : 2
    }
})  




gsap.from("#section-5",{
    opacity : 0,
    scale : 0.4,
    scrollTrigger : {
        trigger : "#section-4",
        scroller : "body",
        // markers : true,
        start : 'top bottom',
        end : 'top 20%',
        scrub : 2
    }
})  








