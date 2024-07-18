// Select the carousel element
const carousel = document.getElementById('carousel');
const carouselChildren = carousel.children;

// Select "Previous" and "Next" buttons
const buttonPrev = document.getElementById('button-left');
const buttonNext = document.getElementById('button-right');

let current = 0; // Index of the current slide
const total = carouselChildren.length; // Total number of slides

// Function to show/hide slides based on index
function moveTo(index) {
    // Hide all slides
    Array.from(carouselChildren).forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block'; // Show the current slide
        } else {
            slide.style.display = 'none'; // Hide other slides
        }
    });
}

// Initially show the first slide
moveTo(current);

// Event listener for the "Next" button
buttonNext.addEventListener('click', () => {
    current++;
    if (current >= total) {
        current = 0; // Reset to the first slide if at the end
    }
    moveTo(current);
});

// Event listener for the "Previous" button
buttonPrev.addEventListener('click', () => {
    current--;
    if (current < 0) {
        current = total - 1; // Go to the last slide if at the first one
    }
    moveTo(current);
});
