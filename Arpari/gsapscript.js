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

  gsap.from("#section-2", {
    opacity: 0,
    y: "100%",
    stagger : 0.8,
    scrollTrigger: {
      trigger: "#hero",
      scroller: "body",
    //   markers : true,
      start: "bottom 90%",
      end: "bottom 35%",
      scrub: 2,
    },
  });

  
  gsap.from("#section-3 #t2", {
    opacity: 0,
    y: "100%",
    scrollTrigger: {
      trigger: "#section-3",
    //   markers: true,
      scroller: "body",
      start: "top 80%",
      end: "top 40%",
      scrub: 2,
    },
  });

  gsap.from("#lr11", {
    opacity: 0,
    y: "100%",
    scrollTrigger: {
      trigger: "#lr1",
    //   markers: true,
      scroller: "body",
      start: "top 80%",
      end: "top 40%",
      scrub: 2,
    },
  });
  gsap.from("#lr22", {
    opacity: 0,
    y: "100%",
    scrollTrigger: {
      trigger: "#lr2",
    //   markers: true,
      scroller: "body",
      start: "top 80%",
      end: "top 40%",
      scrub: 2,
    },
  });
  gsap.from("#lr33", {
    opacity: 0,
    y: "100%",
    scrollTrigger: {
      trigger: "#lr3",
    //   markers: true,
      scroller: "body",
      start: "top 80%",
      end: "top 40%",
      scrub: 2,
    },
  });
  gsap.from("#lr44", {
    opacity: 0,
    y: "100%",
    scrollTrigger: {
      trigger: "#lr4",
    //   markers: true,
      scroller: "body",
      start: "top 80%",
      end: "top 40%",
      scrub: 2,
    },
  });

  gsap.from("#section-6", {
    opacity: 0,
    y: "100%",
    scrollTrigger: {
      trigger: "#section-5",
    //   markers: true,
      start: "bottom 80%",
      end: "bottom 20%",
      scrub: 2,
    },
  });


  
  
});

// *******************************************************************************************************************

mm.add("(min-width: 769px)", () => {
  // About Section Animation for Desktop
  gsap.from("#section-2", {
    opacity: 0,
    y: "100%",
    scrollTrigger: {
      trigger: "#hero",
      scroller: "body",
    //   markers : true,
      start: "bottom 70%",
      end: "bottom 30%",
      scrub: 2,
    },
  });

  gsap.from("#section-3 #t2", {
    opacity: 0,
    y: "100%",
    scrollTrigger: {
      trigger: "#section-3",
    //   markers: true,
      scroller: "body",
      start: "top 80%",
      end: "top 40%",
      scrub: 2,
    },
  });

  gsap.from("#lr11", {
    opacity: 0,
    y: "100%",
    scrollTrigger: {
      trigger: "#lr1",
    //   markers: true,
      scroller: "body",
      start: "top 80%",
      end: "top 40%",
      scrub: 2,
    },
  });
  gsap.from("#lr22", {
    opacity: 0,
    y: "100%",
    scrollTrigger: {
      trigger: "#lr2",
    //   markers: true,
      scroller: "body",
      start: "top 80%",
      end: "top 40%",
      scrub: 2,
    },
  });
  gsap.from("#lr33", {
    opacity: 0,
    y: "100%",
    scrollTrigger: {
      trigger: "#lr3",
    //   markers: true,
      scroller: "body",
      start: "top 80%",
      end: "top 40%",
      scrub: 2,
    },
  });
  gsap.from("#lr44", {
    opacity: 0,
    y: "100%",
    scrollTrigger: {
      trigger: "#lr4",
    //   markers: true,
      scroller: "body",
      start: "top 80%",
      end: "top 40%",
      scrub: 2,
    },
  });

  gsap.from("#section-6", {
    opacity: 0,
    y: "100%",
    scrollTrigger: {
      trigger: "#section-5",
    //   markers: true,
      start: "bottom 80%",
      end: "bottom 20%",
      scrub: 2,
    },
  });






  
  
  
  
});



