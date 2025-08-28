document.addEventListener("DOMContentLoaded", () => {
  // ===== Audio setup =====
  const hoverSound = new Audio("/sounds/hover3.mp3"); // path dal root del server
  hoverSound.volume = 1; // più udibile
  let audioUnlocked = false;

  // ===== Funzione per sbloccare audio =====
  const unlockAudio = () => {
    if (!audioUnlocked) {
      hoverSound
        .play()
        .then(() => {
          hoverSound.pause();
          hoverSound.currentTime = 0;
          audioUnlocked = true;
          console.log("🔓 Audio unlocked, hover now works");
        })
        .catch(() => {});
    }
  };

  // ===== Dropdown toggles =====
  const dropdownToggles = document.querySelectorAll(".gt-dropdown-toggle");
  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      unlockAudio();

      const currentDropdown = toggle.closest(".gt-dropdown");
      const isOpen = currentDropdown.classList.contains("show");

      // Chiude tutti i dropdown
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

  // ===== Hamburger toggler =====
  const toggler = document.querySelector(".gt-navbar-toggler");
  const collapse = document.querySelector(".gt-navbar-collapse");
  if (toggler && collapse) {
    toggler.addEventListener("click", (e) => {
      e.stopPropagation();
      unlockAudio(); // sblocca audio al click sull'hamburger

      const expanded = toggler.getAttribute("aria-expanded") === "true";
      toggler.setAttribute("aria-expanded", String(!expanded));
      collapse.classList.toggle("show");
    });
  }

  // ===== Hover sound sui dropdown items =====
  document.querySelectorAll(".gt-dropdown-item").forEach((item) => {
    item.addEventListener("mouseenter", () => {
      if (audioUnlocked) {
        hoverSound.currentTime = 0; // restart
        hoverSound.play().catch(() => {}); // evita errori browser
      }
    });
  });

  // ===== Chiudi dropdown cliccando fuori =====
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".gt-navbar")) {
      document
        .querySelectorAll(".gt-dropdown")
        .forEach((d) => d.classList.remove("show"));
    }
  });
});
