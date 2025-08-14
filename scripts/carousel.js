/* ========== GT Carousel Script ========== */
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("gt-carousel");
  const items = carousel.querySelectorAll(".gt-carousel-item");
  const prevBtn = carousel.querySelector(".gt-carousel-control-prev");
  const nextBtn = carousel.querySelector(".gt-carousel-control-next");
  const indicators = carousel.querySelectorAll(
    ".gt-carousel-indicators button"
  );
  let currentIndex = 0;
  const intervalTime = 3000; // time in ms between automatic slides
  let autoSlide = setInterval(nextSlide, intervalTime);

  /* ========== Function: Show Slide ========== */
  function showSlide(index) {
    items.forEach((item, i) => {
      item.classList.toggle("gt-active", i === index);
    });
    indicators.forEach((btn, i) => {
      btn.classList.toggle("gt-active", i === index);
    });
    currentIndex = index;
  }

  /* ========== Function: Next Slide ========== */
  function nextSlide() {
    let nextIndex = (currentIndex + 1) % items.length;
    showSlide(nextIndex);
  }

  /* ========== Function: Previous Slide ========== */
  function prevSlide() {
    let prevIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(prevIndex);
  }

  /* ========== Event Listeners: Buttons ========== */
  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetInterval();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetInterval();
  });

  /* ========== Event Listeners: Indicators ========== */
  indicators.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      showSlide(i);
      resetInterval();
    });
  });

  /* ========== Function: Reset Auto-Slide Interval ========== */
  function resetInterval() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, intervalTime);
  }

  /* ========== Initialize First Slide ========== */
  showSlide(currentIndex);
});
