let tl1 = gsap.timeline();

tl1.from("nav a",{
    y : -20,
    stagger: 0.3,
    opacity : 0,
    duration : 0.8,
    delay :2.6
})

gsap.from("#hero",{
    opacity : 0.4,
    duration : 0.8,
    scale : 0.6,
    y : 50,
    delay :2.6


});

let mm = gsap.matchMedia(); // Create one instance for matchMedia

// Animations for different breakpoints
mm.add("(max-width: 768px)", () => {
  // About Section Animation for Mobile
  gsap.from("#about h2, #about-content", {
    duration: 0.4,
    opacity: 0,
    y: "100%",
    scrollTrigger: {
      trigger: "#about",
      scroller: "body",
      start: "top 70%",
      end: "top 20%",
      scrub: 2,
    },
  });

  // Customer Section Animation for Mobile
  gsap.from("#customer h2, #customer #c", {
    duration: 0.4,
    opacity: 0,
    y: "100%",
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#customer",
      scroller: "body",
      start: "top 70%",
      end: "top 20%",
      scrub: 2,
    },
  });

  gsap.from("#types h2, #types ul li , #types p ,#types #btn" , {
    duration: 0.4,
    opacity: 0,
    x: "100%",
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#types",
      scroller: "body",
      start: "top 75%",
      end: "top 20%",
      scrub: 2,
    },
  });

  gsap.from("#tp h2" , {
    duration: 0.4,
    opacity: 0,
    y: "100%",
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#tp",
      scroller: "body",
      start: "top 75%",
      end: "top 20%",
      scrub: 2,
    },
  });

  gsap.from("#tp1 " , {
    duration: 0.4,
    opacity: 0,
    X: "100%",
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#tp1",
      scroller: "body",
      start: "top 75%",
      end: "top 20%",
      scrub: 2,
    },
  });

  gsap.from("#tp2" , {
    duration: 0.4,
    opacity: 0,
    X: "100%",
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#tp2",
      scroller: "body",
      start: "top 75%",
      end: "top 20%",
      scrub: 2,
    },
  });

  gsap.from("#tp3" , {
    duration: 0.4,
    opacity: 0,
    X: "100%",
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#tp3",
      scroller: "body",
      start: "top 75%",
      end: "top 20%",
      scrub: 2,
    },
  });

  gsap.from("#tp4" , {
    duration: 0.4,
    opacity: 0,
    X: "100%",
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#tp4",
      scroller: "body",
      start: "top 75%",
      end: "top 20%",
      scrub: 2,
    },
  });

  gsap.from("#last" , {
    duration: 0.4,
    opacity: 0,
    y: "100%",
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#tp4",
      scroller: "body",
      start: "50% 55%",
      end: "50% 20%",
      scrub: 2,
    },
  });

});

mm.add("(min-width: 769px)", () => {
  // About Section Animation for Desktop
  gsap.from("#about h2, #about-content", {
    duration: 0.4,
    opacity: 0,
    y: "100%",
    scrollTrigger: {
      trigger: "#about",
      scroller: "body",
      start: "top 80%",
      end: "top 20%",
      scrub: 2,
    },
  });

  // Customer Section Animation for Desktop
  gsap.from("#customer h2, #customer #c", {
    duration: 0.4,
    opacity: 0,
    y: "100%",
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#customer",
      scroller: "body",
      start: "top 80%",
      end: "top 20%",
      scrub: 2,
    },
  });

  gsap.from("#types h2, #types ul li , #types p ,#types #btn" , {
    duration: 0.4,
    opacity: 0,
    x: "100%",
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#types",
      scroller: "body",
      start: "top 85%",
      end: "top 30%",
      scrub: 2,
    },
  });

  gsap.from("#tp h2" , {
    duration: 0.4,
    opacity: 0,
    y: "100%",
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#tp",
      scroller: "body",
      start: "top 85%",
      end: "top 40%",
      scrub: 2,
    },
  });

  gsap.from("#tp1 " , {
    duration: 0.4,
    opacity: 0,
    X: "100%",
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#tp1",
      scroller: "body",
      start: "top 75%",
      end: "top 20%",
      scrub: 2,
    },
  });

  gsap.from("#tp2" , {
    duration: 0.4,
    opacity: 0,
    X: "100%",
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#tp2",
      scroller: "body",
      start: "top 75%",
      end: "top 20%",
      scrub: 2,
    },
  });

  gsap.from("#tp3" , {
    duration: 0.4,
    opacity: 0,
    X: "100%",
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#tp3",
      scroller: "body",
      start: "top 75%",
      end: "top 20%",
      scrub: 2,
    },
  });

  gsap.from("#tp4" , {
    duration: 0.4,
    opacity: 0,
    X: "100%",
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#tp4",
      scroller: "body",
      start: "top 75%",
      end: "top 20%",
      scrub: 2,
    },
  });

  gsap.from("#last" , {
    duration: 0.4,
    opacity: 0,
    y: "100%",
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#tp4",
      scroller: "body",
      start: "50% 55%",
      end: "50% 28%",
      scrub: 2,
    },
  });
  
});



