document.addEventListener("DOMContentLoaded", () => {
  // Dropdown toggles
  const dropdownToggles = document.querySelectorAll(".gt-dropdown-toggle");
  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      const currentDropdown = toggle.closest(".gt-dropdown");
      const isOpen = currentDropdown.classList.contains("show");
      document.querySelectorAll(".gt-dropdown").forEach((dropdown) => {
        dropdown.classList.remove("show");
      });
      if (!isOpen) {
        currentDropdown.classList.add("show");
      }
    });
  });

  // Close dropdowns when clicking outside navbar
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".gt-navbar")) {
      document.querySelectorAll(".gt-dropdown").forEach((dropdown) => {
        dropdown.classList.remove("show");
      });
    }
  });

  // Hamburger toggler
  const toggler = document.querySelector(".gt-navbar-toggler");
  const collapse = document.querySelector(".gt-navbar-collapse");

  if (toggler && collapse) {
    toggler.addEventListener("click", () => {
      const expanded = toggler.getAttribute("aria-expanded") === "true";
      toggler.setAttribute("aria-expanded", String(!expanded));
      collapse.classList.toggle("show");
    });
  }
});
