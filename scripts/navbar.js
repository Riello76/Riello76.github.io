document.addEventListener("DOMContentLoaded", () => {
  // ===== Elements =====
  const navbar = document.querySelector(".gt-navbar");
  const toggler = document.querySelector(".gt-navbar-toggler");
  const collapse = document.querySelector(".gt-navbar-collapse");
  const dropdowns = document.querySelectorAll(".gt-dropdown");
  const dropdownToggles = document.querySelectorAll(".gt-dropdown-toggle");
  const isDesktop = window.matchMedia("(min-width: 1024px)");

  // ===== Stop if navbar elements are missing =====
  if (!navbar || !toggler || !collapse) {
    console.warn("Navbar elements not found.");
    return;
  }

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
    },
    { once: true },
  );

  // ===== Play dropdown hover sound =====
  function playHoverSound() {
    if (!audioUnlocked) return;

    hoverSound.pause();
    hoverSound.currentTime = 0;

    hoverSound.play().catch(() => {});
  }

  // ===== Close all dropdowns =====
  function closeAllDropdowns() {
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("show");

      clearTimeout(dropdown.closeTimer);

      const toggle = dropdown.querySelector(".gt-dropdown-toggle");

      if (toggle) {
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ===== Open one dropdown =====
  function openDropdown(dropdown) {
    closeAllDropdowns();

    dropdown.classList.add("show");

    const toggle = dropdown.querySelector(".gt-dropdown-toggle");

    if (toggle) {
      toggle.setAttribute("aria-expanded", "true");
    }
  }

  // ===== Toggle one dropdown on mobile =====
  function toggleDropdown(dropdown) {
    const isOpen = dropdown.classList.contains("show");

    closeAllDropdowns();

    if (!isOpen) {
      dropdown.classList.add("show");

      const toggle = dropdown.querySelector(".gt-dropdown-toggle");

      if (toggle) {
        toggle.setAttribute("aria-expanded", "true");
      }
    }
  }

  // ==============================================================
  // Desktop dropdown handling
  // ==============================================================

  dropdowns.forEach((dropdown) => {
    // ===== Open dropdown on mouse enter =====
    dropdown.addEventListener("mouseenter", () => {
      if (!isDesktop.matches) return;

      clearTimeout(dropdown.closeTimer);

      openDropdown(dropdown);
      playHoverSound();
    });

    // ===== Close dropdown after mouse leaves =====
    dropdown.addEventListener("mouseleave", () => {
      if (!isDesktop.matches) return;

      clearTimeout(dropdown.closeTimer);

      dropdown.closeTimer = setTimeout(() => {
        dropdown.classList.remove("show");

        const toggle = dropdown.querySelector(".gt-dropdown-toggle");

        if (toggle) {
          toggle.setAttribute("aria-expanded", "false");
        }
      }, 300);
    });
  });

  // ==============================================================
  // Dropdown click handling
  // ==============================================================

  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", (event) => {
      const dropdown = toggle.closest(".gt-dropdown");

      if (!dropdown) return;

      // ===== Desktop: click toggles dropdown =====
      if (isDesktop.matches) {
        event.preventDefault();
        event.stopPropagation();

        clearTimeout(dropdown.closeTimer);

        const isOpen = dropdown.classList.contains("show");

        if (isOpen) {
          dropdown.classList.remove("show");

          toggle.setAttribute("aria-expanded", "false");
        } else {
          openDropdown(dropdown);
        }

        return;
      }

      // ===== Mobile: click toggles dropdown =====
      event.preventDefault();
      event.stopPropagation();

      toggleDropdown(dropdown);
    });
  });

  // ==============================================================
  // Hamburger menu
  // ==============================================================

  toggler.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();

    const isOpen = toggler.getAttribute("aria-expanded") === "true";

    toggler.setAttribute("aria-expanded", String(!isOpen));

    collapse.classList.toggle("show", !isOpen);

    // ===== Close dropdowns when main menu is closed =====
    if (isOpen) {
      closeAllDropdowns();
    }
  });

  // ==============================================================
  // Close mobile menu when clicking outside
  // ==============================================================

  document.addEventListener("click", (event) => {
    if (isDesktop.matches) return;

    if (!event.target.closest(".gt-navbar")) {
      closeAllDropdowns();

      collapse.classList.remove("show");

      toggler.setAttribute("aria-expanded", "false");
    }
  });

  // ==============================================================
  // Close mobile menu after selecting a normal navigation link
  // ==============================================================

  const normalNavLinks = collapse.querySelectorAll(
    ".gt-nav-link:not(.gt-dropdown-toggle)",
  );

  normalNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (!isDesktop.matches) {
        closeAllDropdowns();

        collapse.classList.remove("show");

        toggler.setAttribute("aria-expanded", "false");
      }
    });
  });

  // ==============================================================
  // Handle desktop/mobile changes dynamically
  // ==============================================================

  function handleViewportChange() {
    closeAllDropdowns();

    collapse.classList.remove("show");

    toggler.setAttribute("aria-expanded", "false");

    dropdowns.forEach((dropdown) => {
      clearTimeout(dropdown.closeTimer);
    });
  }

  isDesktop.addEventListener("change", handleViewportChange);

  // ==============================================================
  // Initial state
  // ==============================================================

  closeAllDropdowns();

  collapse.classList.remove("show");

  toggler.setAttribute("aria-expanded", "false");
});
