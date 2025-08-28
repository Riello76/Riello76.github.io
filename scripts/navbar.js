document.addEventListener("DOMContentLoaded", () => {
  // ===== Dropdown toggles =====
  const dropdownToggles = document.querySelectorAll(".gt-dropdown-toggle");

  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      const currentDropdown = toggle.closest(".gt-dropdown");
      const isOpen = currentDropdown.classList.contains("show");

      // Close all dropdowns
      document.querySelectorAll(".gt-dropdown").forEach((dropdown) => {
        dropdown.classList.remove("show");
      });

      if (!isOpen) {
        // Open clicked dropdown
        currentDropdown.classList.add("show");

        // ===== Trigger shine animation =====
        const menu = currentDropdown.querySelector(".gt-dropdown-menu");
        if (menu) {
          // Clone the overlay element
          const shineClone = menu.cloneNode(true);
          shineClone.classList.add("shine-active");
          menu.parentNode.replaceChild(shineClone, menu);
        }
      }
    });
  });

  // ===== Close dropdowns when clicking outside the navbar =====
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".gt-navbar")) {
      document.querySelectorAll(".gt-dropdown").forEach((dropdown) => {
        dropdown.classList.remove("show");
      });
    }
  });

  // ===== Hamburger toggler =====
  const toggler = document.querySelector(".gt-navbar-toggler");
  const collapse = document.querySelector(".gt-navbar-collapse");

  if (toggler && collapse) {
    toggler.addEventListener("click", (e) => {
      e.stopPropagation();
      const expanded = toggler.getAttribute("aria-expanded") === "true";
      toggler.setAttribute("aria-expanded", String(!expanded));
      collapse.classList.toggle("show");
    });
  }

  // ===== Sound on hover for dropdown items =====
  const hoverSound = new Audio("/sounds/hover.mp3");
  hoverSound.volume = 0.95; // volume soft

  document.querySelectorAll(".gt-dropdown-item").forEach((item) => {
    item.addEventListener("mouseenter", () => {
      hoverSound.currentTime = 0; // restart sound if already playing
      hoverSound.play().catch(() => {}); // avoids autoplay restrictions
    });
  });
});
