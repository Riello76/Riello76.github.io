document.addEventListener("DOMContentLoaded", () => {
  // ===== Elements =====
  const dropdowns = document.querySelectorAll(".gt-dropdown");
  const dropdownToggles = document.querySelectorAll(".gt-dropdown-toggle");
  const isDesktop = window.matchMedia("(min-width: 1024px)");

  // ===== Audio setup =====
  const hoverSound = new Audio(
    "/sounds/mixkit-cool-interface-click-tone-2568.wav",
  );

  hoverSound.volume = 0.25;
  hoverSound.preload = "auto";

  let audioUnlocked = false;

  // ===== Unlock audio after first user interaction =====
  document.addEventListener(
    "click",
    () => {
      audioUnlocked = true;
      console.log("🔓 Audio unlocked");
    },
    { once: true },
  );

  // ===== Soft hover sound only on top-level dropdowns =====
  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("mouseenter", () => {
      if (!audioUnlocked) return;

      hoverSound.pause();
      hoverSound.currentTime = 0;

      hoverSound.play().catch(() => {});
    });
  });

  // ===== Mobile click dropdown =====
  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
      // Desktop uses hover
      if (isDesktop.matches) return;

      e.preventDefault();
      e.stopPropagation();

      const currentDropdown = toggle.closest(".gt-dropdown");
      const isOpen = currentDropdown.classList.contains("show");

      // Close all dropdowns
      dropdowns.forEach((d) => d.classList.remove("show"));

      // Open current if it was closed
      if (!isOpen) {
        currentDropdown.classList.add("show");
      }
    });
  });

  // ===== Desktop hover dropdown =====
  let closeTimer;

  function enableDesktopHover() {
    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("mouseenter", () => {
        clearTimeout(closeTimer);

        // Close other dropdowns
        dropdowns.forEach((d) => {
          if (d !== dropdown) d.classList.remove("show");
        });

        // Open current dropdown
        dropdown.classList.add("show");
      });

      dropdown.addEventListener("mouseleave", () => {
        clearTimeout(closeTimer);

        // Delay close so moving into the menu feels natural
        closeTimer = setTimeout(() => {
          dropdown.classList.remove("show");
        }, 300);
      });
    });
  }

  if (isDesktop.matches) {
    enableDesktopHover();
  }

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

  // ===== Close dropdowns when clicking outside (mobile only) =====
  document.addEventListener("click", (e) => {
    if (isDesktop.matches) return;

    if (!e.target.closest(".gt-navbar")) {
      dropdowns.forEach((d) => d.classList.remove("show"));
    }
  });
});
