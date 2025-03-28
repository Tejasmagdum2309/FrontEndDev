let tl1 = gsap.timeline();

tl1.from("nav a", {
  y: -20,
  stagger: 0.3,
  opacity: 0,
  duration: 0.8,
});

gsap.from("#t1", {
  opacity: 0.4,
  stagger: 0.4,
  scale: 0,
  y: "100%",
  duration: 0.8,
});

let mm = gsap.matchMedia(); // Create one instance for matchMedia

// Animations for different breakpoints
mm.add("(max-width: 768px)", () => {
 
  
   // Stop animations on mobile and ensure #report6 is shown
  // document.querySelectorAll("#report1, #report2, #report3, #report4, #report5").forEach(el => {
  //   el.style.display = "none"; // Hide other reports
  // });
  // document.querySelector("#report6").style.opacity = "1"; // Ensure #report6 is fully visible
  document.querySelector("#report1").style.opacity = "1"; // Ensure #report6 is fully visible
  document.querySelector("#report1").style.bottom = "10%"; // Ensure #report6 is fully visible



});

// *******************************************************************************************************************

mm.add("(min-width: 769px)", () => {
  // About Section Animation for Desktop

  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Animate elements when scrolling to the trigger point
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".flex", // Element that triggers the animation
        markers: true,
        start: "30% center", // When the top of .flex hits the center of the viewport
        end: "30% center", // Optional: end of the trigger
        scrub: 3, // Increase scrub value for slower, smoother scrolling
      },
    })
    .to("#report1", {
      left: "10%",
      rotation: -16,
      duration: 3, // Slower animation
    })
    .to(
      "#report2",
      {
        left: "25%",
        bottom: "20%",
        duration: 3, // Slower animation
      },
      "<" // Start at the same time as the previous animation
    )
    .to(
      "#report3",
      {
        left: "10%",
        duration: 3, // Slower animation
      },
      "<"
    )
    .to(
      "#report4",
      {
        left: "30%",
        rotation: -12,
        duration: 3, // Slower animation
      },
      "<"
    )
    .to(
      "#report5",
      {
        left: "24%",
        rotation: 10,
        duration: 3, // Slower animation
      },
      "<"
    )
    .to(
      "#report6",
      {
        right: "10%",
        transformOrigin: "right center", // Set the rotation axis to the right side
        opacity: 1,
        duration: 3, // Slower animation
      },
      "<"
    );
});
