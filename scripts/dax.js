// Modal elements
const modal = document.getElementById("ppt-modal");
const openBtn = document.getElementById("open-ppt-btn");
const closeBtn = document.getElementById("close-ppt-btn");

// Open modal
openBtn.addEventListener("click", () => {
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");

  // Lock page scroll
  document.body.style.overflow = "hidden";
});

// Close modal
function closeModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");

  // Restore page scroll
  document.body.style.overflow = "";
}

closeBtn.addEventListener("click", closeModal);

// Close when clicking outside the box
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Close with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("show")) {
    closeModal();
  }
});
