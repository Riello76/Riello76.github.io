document.addEventListener("DOMContentLoaded", () => {
  const ticker = document.querySelector(".gt-news-ticker");
  if (!ticker) return;

  const container = ticker.parentElement;
  let start = container.offsetWidth; // Start from the right edge
  const speed = 50; // pixels per second

  function animate(time) {
    start -= speed / 60; // Move left based on speed (approx. 60fps)

    // Reset position when ticker scrolls completely off the left
    if (start <= -ticker.scrollWidth) {
      start = container.offsetWidth; // Jump back to the right
    }

    ticker.style.transform = `translateX(${start}px)`;
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
});
