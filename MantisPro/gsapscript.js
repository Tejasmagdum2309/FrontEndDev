gsap.from("#navbar", {
    opacity: 0.6,
    // y: 50,
    duration: 1,

    scrollTrigger: {
      trigger: "#google-play",
      start: "top top",
      end: "top top",
    //   
      scrub: 1,
    //   toggleActions: "play none none reverse",
      onEnter: () => {
        let navbar = document.getElementById("navbar");
        navbar.classList.remove("absolute");
        navbar.classList.add('fixnav');
        
    },
      onLeaveBack: () => { document.getElementById("navbar").classList.remove("fixnav");
        document.getElementById("navbar").classList.add("absolute");
      },
    },
  });

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



  mm.add("(max-width: 768px)", () => {
    // About Section Animation for Mobile
  
    gsap.from("#r11", {
      opacity: 0,
      y: "100%",
      stagger : 0.8,
      scrollTrigger: {
        trigger: "#r1",
        scroller: "body",
        start: "top 80%",
        end: "top 25%",
        
        scrub: 2,
      },
    });

    gsap.from("#r22", {
      opacity: 0,
      y: "100%",
      stagger : 0.8,
      scrollTrigger: {
        trigger: "#r2",
        scroller: "body",
        start: "top 80%",
        end: "top 25%",
        
        scrub: 2,
      },
    });

    gsap.from("#r33", {
      opacity: 0,
      y: "100%",
      stagger : 0.8,
      scrollTrigger: {
        trigger: "#r3",
        scroller: "body",
        start: "top 80%",
        end: "top 25%",
        
        scrub: 2,
      },
    });

    gsap.from("#r44", {
      opacity: 0,
      y: "100%",
      stagger : 0.8,
      scrollTrigger: {
        trigger: "#r4",
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


      gsap.to("#middle-img", {
      y: "-20%", // Moves slower
      ease: "none",
      scrollTrigger: {
          trigger: ".middle-container",
          start: "top bottom",
          end: "top -50%",  // Stop moving at 40% from top
         
          scrub: 1
      }
  });
     
    gsap.from("#r11", {
      opacity: 0,
      x: "100%",
      stagger : 0.8,
      scrollTrigger: {
        trigger: "#r1",
        scroller: "body",
        start: "top 70%",
        end: "top 20%",
        scrub: 2,
      },
    });


    gsap.from("#r22", {
      opacity: 0,
      x: "-100%",
      stagger : 0.8,
      scrollTrigger: {
        trigger: "#r2",
        scroller: "body",
        start: "top 90%",
        end: "top 40%",
        scrub: 2,
      },
    });

    gsap.from("#r33", {
      opacity: 0,
      x: "100%",
      stagger : 0.8,
      scrollTrigger: {
        trigger: "#r3",
        scroller: "body",
        start: "top 85%",
        end: "top 30%",
        scrub: 2,
      },
    });


    gsap.from("#r44", {
      opacity: 0,
      x: "-100%",
      stagger : 0.8,
      scrollTrigger: {
        trigger: "#r4",
        scroller: "body",
        start: "top 80%",
        end: "top 40%",
        scrub: 2,
      },
    });
  
  

  
    
    
    
  });