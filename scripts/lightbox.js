// Run only on desktop
if (window.matchMedia("(min-width: 1024px)").matches) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  // Stop if lightbox elements are not present
  if (!lightbox || !lightboxImg) {
    console.warn("Lightbox elements not found.");
  } else {
    let scale = 1;
    let translateX = 0;
    let translateY = 0;

    let isDragging = false;
    let startX = 0;
    let startY = 0;

    // Update transform
    function updateTransform() {
      lightboxImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    }

    // Reset zoom state
    function resetZoom() {
      scale = 1;
      translateX = 0;
      translateY = 0;
      updateTransform();
    }

    // Close lightbox helper
    function closeLightbox() {
      lightbox.classList.remove("active");
      lightbox.setAttribute("aria-hidden", "true");

      resetZoom();

      setTimeout(() => {
        lightboxImg.removeAttribute("src");
      }, 150);
    }

    // Open image
    document.querySelectorAll(".branding-images img").forEach((img) => {
      img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;

        resetZoom();

        lightbox.classList.add("active");
        lightbox.setAttribute("aria-hidden", "false");
      });
    });

    // Mouse wheel zoom
    lightbox.addEventListener(
      "wheel",
      (event) => {
        event.preventDefault();

        const zoomStep = 0.1;

        if (event.deltaY < 0) {
          scale += zoomStep;
        } else {
          scale -= zoomStep;
        }

        // Clamp zoom between 1x and 10x
        scale = Math.min(Math.max(scale, 1), 10);

        updateTransform();
      },
      { passive: false },
    );

    // Drag start
    lightboxImg.addEventListener("mousedown", (event) => {
      if (scale <= 1) return;

      isDragging = true;

      startX = event.clientX - translateX;
      startY = event.clientY - translateY;

      lightboxImg.style.cursor = "grabbing";
    });

    // Drag move
    document.addEventListener("mousemove", (event) => {
      if (!isDragging) return;

      translateX = event.clientX - startX;
      translateY = event.clientY - startY;

      updateTransform();
    });

    // Drag end
    document.addEventListener("mouseup", () => {
      isDragging = false;
      lightboxImg.style.cursor = scale > 1 ? "grab" : "zoom-out";
    });

    // Double click reset
    lightboxImg.addEventListener("dblclick", (event) => {
      event.stopPropagation();
      resetZoom();
    });

    // Close on background click only
    lightbox.addEventListener("click", (event) => {
      if (event.target !== lightbox) return;

      closeLightbox();
    });

    // Close with ESC key
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      }
    });

    // Close with right mouse button
    lightbox.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      closeLightbox();
    });
  }
}
