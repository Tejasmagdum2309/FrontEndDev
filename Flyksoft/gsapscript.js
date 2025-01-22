
gsap.from("nav a" , {
    y : -50,
    scale : 0.4,
    opacity : 0,
    stagger : 0.3

})

let tl1 = gsap.timeline();



tl1.from("#hero #up",{
    opacity : 0,
    duration : 0.8,
    y : 60,
    stagger : 0.3
})



// Ensure GSAP and ScrollTrigger plugins are registered
gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia(); // Create a matchMedia instance

mm.add("(max-width: 768px)" , () =>  {
      gsap.from("#card", {
        y: -50,
        opacity: 0.5,
        scale: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#section-2",
          scroller: "body",
        //   markers: true, // Shows markers for debugging
          start: "top 70%",
          end: "top -30%",
          scrub: 2,
        },
      });
    }
);

mm.add(
// / For large devices (769px and above)
    "(min-width: 769px)", () => {
      gsap.from("#card", {
        y: -100,
        opacity: 0.4,
        scale: 0,
        stagger: 0.3,
        scrollTrigger: {
          trigger: "#section-2",
          scroller: "body",
        //   markers: true, // Shows markers for debugging
          start: "top 80%",
          end: "top 40%",
          scrub: 2,
        },
      });
    })


