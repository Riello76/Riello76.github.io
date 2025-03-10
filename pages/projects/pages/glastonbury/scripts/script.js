// Navbar Buttons Script

// Function to navigate to a subpage
function subPage(pageName) {
  const subpagePath = `/pages/projects/pages/glastonbury/pages/${pageName}.html`;

  if (pageName === "home") {
    window.location.assign("/pages/projects/pages/glastonbury/index.html");
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

// Wait for the DOM content to be fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", () => {
  // Select all slide images and bullet elements
  const slides = document.querySelectorAll(".carousel-slide img");
  const bullets = document.querySelectorAll(".carousel-bullets .bullet");
  const nextButton = document.querySelector(".next");
  const prevButton = document.querySelector(".prev");

  // Initialize the current slide index
  let currentSlide = 0;

  // Function to show a specific slide
  const showSlide = (index) => {
    // Calculate the new slide index, wrapping around if necessary
    currentSlide = (index + slides.length) % slides.length;

    // Remove the "active" class from all slides and bullets
    slides.forEach((slide) => slide.classList.remove("active"));
    bullets.forEach((bullet) => bullet.classList.remove("active"));

    // Add the "active" class to the current slide and bullet
    slides[currentSlide].classList.add("active");
    bullets[currentSlide].classList.add("active");
  };

  // Initialize the carousel to show the first slide
  showSlide(currentSlide);

  // Add click event listener for the "next" button to show the next slide
  nextButton.addEventListener("click", () => showSlide(currentSlide + 1));

  // Add click event listener for the "prev" button to show the previous slide
  prevButton.addEventListener("click", () => showSlide(currentSlide - 1));

  // Add click event listeners to each bullet to show the corresponding slide
  bullets.forEach((bullet, index) => {
    bullet.addEventListener("click", () => showSlide(index));
  });

  // Automatically show the next slide every 2 seconds
  let autoSlideInterval = setInterval(() => showSlide(currentSlide + 1), 2000);

  // Function to stop the automatic slide show (if needed)
  const stopAutoSlide = () => clearInterval(autoSlideInterval);

  // Stop the automatic slide show when the user interacts with the controls
  nextButton.addEventListener("click", stopAutoSlide);
  prevButton.addEventListener("click", stopAutoSlide);
  bullets.forEach((bullet) => bullet.addEventListener("click", stopAutoSlide));
});

// Hamburger Menu Script

function toggleMenu() {
  const navbarButtons = document.querySelector(".navbar-buttons");
  navbarButtons.classList.toggle("active");
}
