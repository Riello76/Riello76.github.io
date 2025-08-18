document.addEventListener("DOMContentLoaded", () => {
  // Select the news ticker element
  const ticker = document.querySelector(".gt-news-ticker");
  if (!ticker) return; // Exit if no ticker is found

  // Get the parent container to calculate the starting point
  const container = ticker.parentElement;
  let start = container.offsetWidth; // Start from the right edge of the container
  const speed = 50; // Speed in pixels per second

  // Animation function, called every frame
  function animate(time) {
    start -= speed / 60; // Move left based on speed (approx. 60fps)

    // Reset position when the ticker scrolls completely off the left
    if (start <= -ticker.scrollWidth) {
      start = container.offsetWidth; // Jump back to the right
    }

    // Apply the horizontal translation to the ticker
    ticker.style.transform = `translateX(${start}px)`;

    // Continue the animation on the next frame
    requestAnimationFrame(animate);
  }

  // Start the animation loop
  requestAnimationFrame(animate);
});
