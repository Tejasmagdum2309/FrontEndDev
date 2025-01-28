let menuToggle = document.getElementById("menu-toggle"); // Hamburger button
let mobileMenu = document.getElementById("mobile-menu"); // Mobile menu
let menuClose = document.getElementById("menu-close"); // Close button

console.log(menuToggle,mobileMenu,menuClose);

let tl_nav = gsap.timeline();

tl_nav.from("#mobile-menu",{
    x : "100%",
    opacity : 0,
    duration : 0.6,
    
})


tl_nav.from("#mobile-menu a",{
    x : "100%",
    opacity : 0,
    duration : 0.6,
    stagger : 0.2
})



tl_nav.pause();

menuToggle.addEventListener('click',  () => {
    tl_nav.play();
})

menuClose.addEventListener('click', () => {
    tl_nav.reverse();

    
})



const cards = document.querySelectorAll(".card");
  const dynamicImage = document.getElementById("dynamicImage");
  const dynamicText = document.getElementsByClassName("dynamicText");

  // Data for the cards
  const cardData = {
    1: {
      img: "./images/1.png", // Replace with actual image URL
      text: "Extend your offerings to include deposit accounts, treasury services, credit cards, and over 100 other financial products, providing a single, uniform experience to customers.",
    },
    2: {
        img: "./images/2.png", // Replace with actual image URL
        text: "Extend your core with seamless technology integration: Prelim’s technology integrates with popular core systems, including Fiserv, FIS, Jack Henry, Finastra, and CSI, enabling real-time searches of existing customer records and the onboarding of new customers.",
    },
    3: {
        img: "./images/3.png", // Replace with actual image URL
        text: "Orchestrate over two dozen disparate bank systems and financial apps using our proprietary point-to-point integrations.",
    },
    4: {
        img: "./images/4.png", // Replace with actual image URL
        text: "Prelim’s modern cloud-based application enables employees to originate, process, and onboard financial applications both in-branch and on the go.",
    },
  };
// Add click event listeners to all cards
cards.forEach((card, idx) => {
    card.addEventListener("click", () => {
      const cardId = card.dataset.id; // Get the ID of the clicked card
      const data = cardData[cardId];
  
      // Update the image on the right side
      dynamicImage.src = data.img;
  
      // Clear all paragraphs in cards and update only the selected card
      cards.forEach((c, i) => {
        const paragraph = c.querySelector(".dynamicText");
        const innerWall = c.querySelector(".innerwall");
        const h3 = c.querySelector("h3");
        if (i === parseInt(cardId) - 1) {
          paragraph.textContent = data.text; // Update the clicked card's paragraph
          innerWall.style.width = "18px";
          innerWall.style.backgroundColor = "#4e63f8";
          innerWall.style.transition = "width 0.3s ease-in-out, background-color 0.3s ease-in-out";
          h3.style.color = "#4e63f8";
        } else {
          paragraph.textContent = ""; // Clear other cards' paragraphs
          innerWall.style.width = "0px";
          innerWall.style.backgroundColor = "transparent";
          innerWall.style.transition = "width 0.3s ease-in-out, background-color 0.3s ease-in-out";
          h3.style.color = "#000";
        }
      });
  
      // Highlight the selected card (optional)
      cards.forEach((c) => c.classList.remove("bg-red-600")); // Remove highlight
    //   card.classList.add("bg-red-600"); // Add highlight to clicked card
    });
  });
  
  // Initialize with the first card's data
  const initialData = cardData[1];
  dynamicImage.src = initialData.img;
  cards[0].querySelector(".dynamicText").textContent = initialData.text;
  cards[0].querySelector("h3").style.color = "#4e63f8";
  
  cards[0].querySelector(".innerwall").style.width = "18px";
  cards[0].querySelector(".innerwall").style.backgroundColor = "#4e63f8";   
//   cards[0].querySelector(".innerwall").style.transition = "width 0.3s ease-in-out, background-color 0.3s ease-in-out";
  