let tl1 = gsap.timeline();

tl1.from("nav a",{
    y : -20,
    stagger: 0.3,
    opacity : 0,
    duration : 0.8,
})

gsap.from("#t1",{
    opacity : 0.4,
    stagger : 0.4,
    scale : 0,
    y : "100%",
    duration : 0.8
});

let mm = gsap.matchMedia(); // Create one instance for matchMedia

// Animations for different breakpoints
mm.add("(max-width: 768px)", () => {
  // About Section Animation for Mobile

  gsap.from("#lr-1 #l", {
    opacity: 0,
    y: "100%",
    stagger : 0.8,
    scrollTrigger: {
      trigger: "#lr-1",
      scroller: "body",
      start: "top 80%",
      end: "top 25%",
      scrub: 2,
    },
  });

  gsap.from("#lr-2 #l", {
    opacity: 0,
    y: "100%",
    stagger : 0.8,
    scrollTrigger: {
      trigger: "#lr-2",
      scroller: "body",
      start: "top 80%",
      end: "top 25%",
      scrub: 2,
    },
  });

  gsap.from("#lr-3 #l", {
    opacity: 0,
    y: "100%",
    stagger : 0.8,
    scrollTrigger: {
      trigger: "#lr-3",
      scroller: "body",
      start: "top 80%",
      end: "top 25%",
      scrub: 2,
    },
  });

  gsap.from("#cards #c1", {
    opacity: 0,
    x: "100%",
    stagger : 0.8,
    scrollTrigger: {
      trigger: "#cards",
      scroller: "body",

      start: "top 80%",
      end: "top 25%",
      scrub: 2,
    },
  });

  gsap.from("#cards #c2", {
    opacity: 0,
    x: "-100%",
    stagger : 0.8,
    scrollTrigger: {
      trigger: "#cards",
      scroller: "body",
      start: "top 80%",
      end: "top 25%",
      scrub: 2,
    },
  });

  


  gsap.from("#ceo #ele", {
    opacity: 0,
    y: "100%",
    stagger : 0.8,
    scrollTrigger: {
      trigger: "#ceo",
      scroller: "body",
      start: "top 80%",
      end: "top 25%",
      scrub: 2,
    },
  });

  
   
 

 




});

// *******************************************************************************************************************

mm.add("(min-width: 769px)", () => {
  // About Section Animation for Desktop
  gsap.from("#lr-1 #l", {
    opacity: 0,
    y: "100%",
    scrollTrigger: {
      trigger: "#lr-1",
      scroller: "body",

      start: "top 70%",
      end: "top 30%",
      scrub: 2,
    },
  });

  gsap.from("#lr-2 #l", {
    opacity: 0,
    y: "100%",
    scrollTrigger: {
      trigger: "#lr-2",
      scroller: "body",
      start: "top 70%",
      end: "top 30%",
      scrub: 2,
    },
  });

  gsap.from("#lr-3 #l", {
    opacity: 0,
    y: "100%",
    scrollTrigger: {
      trigger: "#lr-3",
      scroller: "body",
      start: "top 70%",
      end: "top 30%",
      scrub: 2,
    },
  });

  gsap.from("#cards #c2", {
    opacity: 0,
    x: "100%",
    scrollTrigger: {
      trigger: "#section-3",
      scroller: "body",
      start: "top 80%",
      end: "top 38%",
      scrub: 2,
    },
  });

  gsap.from("#cards #c1", {
    opacity: 0,
    x: "-100%",
    scrollTrigger: {
      trigger: "#section-3",
      scroller: "body",
      start: "top 80%",
      end: "top 38%",
      scrub: 2,
    },
  });

  gsap.from("#ceo #ele", {
    opacity: 0,
    x: "100%",
    scrollTrigger: {
      trigger: "#ceo",
      scroller: "body",
      start: "top 60%",
      end: "top 30%",
      scrub: 2,
    },
  });




  
  
  
  
});



