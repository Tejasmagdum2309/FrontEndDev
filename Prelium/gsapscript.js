let tl1 = gsap.timeline();

tl1.from("nav a",{
    y : -20,
    stagger: 0.3,
    opacity : 0,
    duration : 0.8,
})

let tl2 = gsap.timeline();

tl2.from("#hero h1",{
    duration : 0.4,
    opacity : 0,
    y : 40,
})

tl2.from("#hero h3",{
    duration : 0.4,
    y : 40,
    opacity : 0
})

tl2.from("#hero span",{
    duration : 0.4,
    opacity : 0,
    y : 40,
})

tl2.from("#hero img",{
    duration : 0.4,
    opacity : 0,
    y : 40,
}
)


let tl3 = gsap.timeline();
tl3.from("#section-3 h2" , {

    opacity : 0,
    // scale : 0.4,
    x : "-100%",
    stagger : 1,

    scrollTrigger : {
      trigger : "#section-3",
      scroller : "body",
    //   markers : true,
      start : "top 80%",
        end : "top 30%",
      scrub : 1
 }});

tl3.from(".boxcard #left",{

    opacity : 0,
    // scale : 0.4,
    x : "-100%",
    stagger : 1,

    scrollTrigger : {
      trigger : "#section-3",
      scroller : "body",
    //   markers : true,
      start : "top 60%",
        end : "top 10%",
      scrub : 1
 }})

 tl3.from(".boxcard #right",{

    opacity : 0,
    // scale : 0.4,
    x : "100%",
    stagger : 1,

    scrollTrigger : {
      trigger : "#section-3",
      scroller : "body",
    //   markers : true,
      start : "top 60%",
        end : "top 10%",
      scrub : 1
 }})

 
 tl3.from("#section-4_up",{

    opacity : 0,
    // scale : 0.4,
    y: "100%",
    scrollTrigger : {
      trigger : "#section-4",
      scroller : "body",
    //   markers : true,
      start : "top 60%",
        end : "top 10%",
      scrub : 1
 }})


tl3.from("#section-5_pop",{

    opacity : 0,
    // scale : 0.4,
    // y: "100%",
    scrollTrigger : {
      trigger : "#section-5",
      scroller : "body",
    //   markers : true,
      start : "top 60%",
        end : "top 10%",
      scrub : 1
 }})


 gsap.from("#card",{
    opacity : 0,
    x : 500,
    scale : 0.4,
    duration : 0.6,
    stagger : 1,

    scrollTrigger : {
      trigger : "#section-6",
      scroller : "body",
      start : "top 95%",
    //   markers : true,
      end : "top 20%",
      
      scrub : 1
 }
});

gsap.from("#footer",{
    opacity : 0,
    stagger : 1,
    duration : 0.6,
    scrollTrigger : {
      trigger : "footer",
      scroller : "body",
      start : "top 75%",
    //   markers : true,
      end : "top 40%",
      scrub : 1
 }
});