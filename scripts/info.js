// ========== GT NEWS TICKER SCRIPT ==========
// This script handles dynamic news insertion into the ticker.
// It waits for the DOM to be ready before adding content.
// Author: Gaspare Tocci
document.addEventListener("DOMContentLoaded", () => {
  const ticker = document.querySelector(".gt-news-ticker");
  if (!ticker) return;

  // Imposta posizione iniziale visibile
  ticker.style.transform = "translateX(0)";
  ticker.style.transition = "transform 10s linear"; // velocità lenta

  // Scorrimento dopo breve delay
  setTimeout(() => {
    // Calcola la distanza da percorrere fino a ":"
    const container = ticker.parentElement;
    const distance = ticker.scrollWidth - container.offsetWidth;
    ticker.style.transform = `translateX(-${distance}px)`;
  }, 100); // 0.1s delay, la news è già visibile subito
});
