document.addEventListener("DOMContentLoaded", () => {
  const ticker = document.querySelector(".gt-news-ticker");
  if (!ticker) return;

  const container = ticker.parentElement;
  const speed = 50; // pixels per second
  let lastTime = null;
  let start = container.offsetWidth;

  function animate(time) {
    if (!lastTime) lastTime = time;
    const delta = (time - lastTime) / 1000; // seconds since last frame
    lastTime = time;

    // Move based on real elapsed time, not fixed frame count
    start -= speed * delta;

    if (start <= -ticker.scrollWidth) {
      start = container.offsetWidth;
    }

    ticker.style.transform = `translateX(${start}px)`;
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
});
