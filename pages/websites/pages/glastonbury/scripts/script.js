// Navbar Buttons Script

// Go to subpage
function subPage(pageName) {
  const subpagePath = `/pages/websites/pages/glastonbury/pages/${pageName}.html`;
 
  if (pageName == "home") {
    window.location.assign("/pages/websites/pages/glastonbury/index.html");
  } else {
    window.location.assign(subpagePath);
  }
  
}

// Wait for the DOM content to be fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", () => {
  // Select the .navbar-buttons element from the DOM
  const navbarButtons = document.querySelector(".navbar-buttons");

  // Check if navbarButtons is successfully found in the DOM
  if (navbarButtons) {
    // Add a click event listener to navbarButtons
    navbarButtons.addEventListener("click", (event) => {
      // Check if the clicked element has the class 'nav-btn'
      if (event.target.classList.contains("nav-btn")) {
        // Remove the 'selected' class from all .nav-btn elements
        const btns = document.querySelectorAll(".nav-btn");
        btns.forEach((b) => b.classList.remove("selected"));

        // Add the 'selected' class to the clicked .nav-btn element
        event.target.classList.add("selected");
      }
    });
  } else {
    // Log an error message to the console if .navbar-buttons is not found
    console.error("Element with class 'navbar-buttons' not found.");
  }
});







// Carousel Script

// Select all slide images and bullet elements
const slides = document.querySelectorAll(".carousel-slide img"),
  bullets = document.querySelectorAll(".carousel-bullets .bullet");

// Initialize the current slide index
let currentSlide = 0;

// Set the first image and the first bullet as active on page load
slides[currentSlide].classList.add("active");
bullets[currentSlide].classList.add("active");

// Function to show a specific slide
const showSlide = (index) => {
  // Calculate the new slide index, wrapping around if necessary
  currentSlide = (index + slides.length) % slides.length;

  // Remove the "active" class from all slides and bullets
  slides.forEach((slide, i) => slide.classList.remove("active"));
  bullets.forEach((bullet, i) => bullet.classList.remove("active"));

  // Add the "active" class to the current slide and bullet
  slides[currentSlide].classList.add("active");
  bullets[currentSlide].classList.add("active");
};

// Add click event listener for the "next" button to show the next slide
document.querySelector(".next").onclick = () => showSlide(currentSlide + 1);

// Add click event listener for the "prev" button to show the previous slide
document.querySelector(".prev").onclick = () => showSlide(currentSlide - 1);

// Add click event listeners to each bullet to show the corresponding slide
bullets.forEach((bullet, index) => {
  bullet.onclick = () => showSlide(index);
});

// Automatically show the next slide every 2 seconds
setInterval(() => showSlide(currentSlide + 1), 2000);

// Hamburger Menu Script

function toggleMenu() {
    const navbarButtons = document.querySelector('.navbar-buttons');
    navbarButtons.classList.toggle('active');
}
