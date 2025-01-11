let tl1 = gsap.timeline();

tl1.from("nav a",{
    y : -20,
    stagger: 0.3,
    opacity : 0,
    duration : 0.8,
})

let tl2 = gsap.timeline();

tl2.from("#overlay_hero h1",{
    duration : 0.3,
    opacity : 0,
    y : 40,
})

tl2.from("#overlay_hero p",{
    duration : 0.3,
    y : 40,
    opacity : 0
})

tl2.from("#overlay_hero span",{
    duration : 0.3,
    opacity : 0,
    y : 40,
})

gsap.to('#hero video',{
      scale : 1.6,
      duration : 2,
      scrollTrigger : {
        trigger : '#hero',
        scroller : 'body',
        start : 'top top',
        end : '80% top',
        // markers : true,
        scrub : 1,
        pin : true
      }
})




  

 gsap.from("#section-6 h2",{
    opacity : 0,
    scale : 0.4,
    y : 80,
    scrollTrigger : {
      trigger : "#section-6",
      scroller : "body",
      start : "top 90%",
        end : "top 30%",
      scrub : 1
 }})

 gsap.from("#card",{
    opacity : 0,
    y : 80,
    scale : 0.4,
    scrollTrigger : {
      trigger : "#section-6",
      scroller : "body",
      start : "top 90%",
        end : "top 30%",
      scrub : 1
 }
});

gsap.from("#last_card",{
    opacity : 0,
    x : 500,
    scale : 0.4,

    scrollTrigger : {
      trigger : "#section-7",
      scroller : "body",
      start : "top 60%",
        end : "top 10%",
      scrub : 1
 }
});


