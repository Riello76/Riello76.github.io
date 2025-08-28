document.addEventListener("DOMContentLoaded", () => {
  // ===== Audio setup =====
  const hoverSound = new Audio("/sounds/hover3.mp3"); // path from root
  hoverSound.volume = 1; // set maximum volume
  let audioUnlocked = false; // flag to track if audio is unlocked

  // ===== Function to unlock audio (silent trick for fade-in files) =====
  const unlockAudio = () => {
    if (!audioUnlocked) {
      hoverSound.currentTime = 0.001; // start at 1ms to bypass silent fade-in
      hoverSound.volume = 0; // play silently
      hoverSound
        .play()
        .then(() => {
          hoverSound.pause(); // pause immediately
          hoverSound.currentTime = 0; // reset to start
          hoverSound.volume = 1; // restore normal volume
          audioUnlocked = true; // mark audio as unlocked
          console.log("🔓 Audio unlocked, hover now works (trick applied)");
        })
        .catch(() => {}); // ignore play errors
    }
  };

  // ===== Global unlock on first user click =====
  document.addEventListener("click", unlockAudio, { once: true });

  // ===== Dropdown toggle click handler =====
  const dropdownToggles = document.querySelectorAll(".gt-dropdown-toggle");
  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      const currentDropdown = toggle.closest(".gt-dropdown");
      const isOpen = currentDropdown.classList.contains("show");

      // Close all other dropdowns
      document
        .querySelectorAll(".gt-dropdown")
        .forEach((d) => d.classList.remove("show"));

      if (!isOpen) {
        currentDropdown.classList.add("show");

        // Trigger shine animation
        const menu = currentDropdown.querySelector(".gt-dropdown-menu");
        if (menu) {
          const shineClone = menu.cloneNode(true);
          shineClone.classList.add("shine-active");
          menu.parentNode.replaceChild(shineClone, menu);
        }
      }
    });
  });

  // ===== Hamburger toggler click handler =====
  const toggler = document.querySelector(".gt-navbar-toggler");
  const collapse = document.querySelector(".gt-navbar-collapse");
  if (toggler && collapse) {
    toggler.addEventListener("click", (e) => {
      e.stopPropagation();
      const expanded = toggler.getAttribute("aria-expanded") === "true";
      toggler.setAttribute("aria-expanded", String(!expanded));
      collapse.classList.toggle("show"); // show/hide menu
    });
  }

  // ===== Hover sound on dropdown items =====
  document.querySelectorAll(".gt-dropdown-item").forEach((item) => {
    item.addEventListener("mouseenter", () => {
      if (audioUnlocked) {
        hoverSound.currentTime = 0; // restart sound
        hoverSound.play().catch(() => {}); // play safely, ignore errors
      }
    });
  });

  // ===== Close dropdowns when clicking outside navbar =====
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".gt-navbar")) {
      document
        .querySelectorAll(".gt-dropdown")
        .forEach((d) => d.classList.remove("show"));
    }
  });
});
