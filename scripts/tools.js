const carousel = document.querySelector(".carousel-inner");
const prevBtn = document.querySelector(".carousel-control.prev");
const nextBtn = document.querySelector(".carousel-control.next");

let scrollPosition = 0;
const cardWidth = carousel.querySelector(".tool-card").offsetWidth + 16; // 16 = gap

nextBtn.addEventListener("click", () => {
  if (scrollPosition < carousel.scrollWidth - carousel.offsetWidth) {
    scrollPosition += cardWidth;
    carousel.style.transform = `translateX(-${scrollPosition}px)`;
  }
});

prevBtn.addEventListener("click", () => {
  if (scrollPosition > 0) {
    scrollPosition -= cardWidth;
    carousel.style.transform = `translateX(-${scrollPosition}px)`;
  }
});
