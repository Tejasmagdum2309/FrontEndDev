let tl1 = gsap.timeline();

tl1.from("nav a",{
    y : -20,
    stagger: 0.3,
    opacity : 0,
    duration : 0.8,
})

gsap.from("#hero #t1",{
    opacity : 0.4,
    stagger : 0.4,
    scale : 0,
    y : 50,
});

let mm = gsap.matchMedia(); // Create one instance for matchMedia

// Animations for different breakpoints
mm.add("(max-width: 768px)", () => {
  // About Section Animation for Mobile
  gsap.from("#features #t2", {
    duration: 0.4,
    opacity: 0,
    y: "100%",
    scrollTrigger: {
      trigger: "#features",
      scroller: "body",
      start: "top 70%",
    //   markers : true,
      end: "top 35%",
      scrub: 2,
    },
  });


  gsap.from("#features #feature-cards div", {
    opacity: 0,
    y: "100%",
    stagger : 0.8,
    scrollTrigger: {
      trigger: "#features",
      scroller: "body",
      start: "top 35%",
    //   markers : true,
      end: "top -100%",
      scrub: 2,
    },
  });

  gsap.from("#action div", {
    duration: 0.4,
    opacity: 0,
    y: "100%",
    scrollTrigger: {
      trigger: "#action",
      scroller: "body",
      start: "top 96%",
    //   markers : true,
      end: "top 54%",
      scrub: 2,
    },
  });

  gsap.from("#case #t3", {
    duration: 0.4,
    opacity: 0,
    y: "100%",
    scrollTrigger: {
      trigger: "#case",
      scroller: "body",
      start: "top 86%",
    //   markers : true,
      end: "top 38%",
      scrub: 2,
    },
  });

  gsap.from("#case #t4 div", {
    duration: 0.4,
    opacity: 0,
    stagger : 0.3,
    x: "100%",
    scrollTrigger: {
      trigger: "#case",
      scroller: "body",
      start: "top 54%",
    //   markers : true,
      end: "top 10%",
      scrub: 2,
    },
  });


});

// *******************************************************************************************************************

mm.add("(min-width: 769px)", () => {
  // About Section Animation for Desktop
  gsap.from("#features #t2", {
    duration: 0.4,
    opacity: 0,
    y: "100%",
    scrollTrigger: {
      trigger: "#features",
      scroller: "body",
      start: "top 88%",
    //   markers : true,
      end: "top 50%",
      scrub: 2,
    },
  });

  gsap.from("#features #feature-cards div", {
    duration: 0.4,
    opacity: 0,
    y: "100%",
    scrollTrigger: {
      trigger: "#features",
      scroller: "body",
      start: "top 90%",
    //   markers : true,
      end: "top 24%",
      scrub: 2,
    },
  });

  gsap.from("#action div", {
    duration: 0.4,
    opacity: 0,
    y: "100%",
    scrollTrigger: {
      trigger: "#action",
      scroller: "body",
      start: "top 96%",
    //   markers : true,
      end: "top 40%",
      scrub: 2,
    },
  });

  gsap.from("#case #t3", {
    duration: 0.4,
    opacity: 0,
    y: "100%",
    scrollTrigger: {
      trigger: "#case",
      scroller: "body",
      start: "top 86%",
    //   markers : true,
      end: "top 38%",
      scrub: 2,
    },
  });

  gsap.from("#case #t4 div", {
    duration: 0.4,
    opacity: 0,
    stagger : 0.3,
    x: "100%",
    scrollTrigger: {
      trigger: "#case",
      scroller: "body",
      start: "top 86%",
    //   markers : true,
      end: "top 38%",
      scrub: 2,
    },
  });
  
  
  
});



