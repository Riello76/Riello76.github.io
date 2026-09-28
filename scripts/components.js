// ====================================================================================================
// GLOBAL HTML COMPONENTS
// Loads the shared header and footer across all portfolio pages.
// ====================================================================================================

document.addEventListener("DOMContentLoaded", async () => {
  // ================================================================================================
  // LOAD HEADER AND FOOTER
  // ================================================================================================
  await Promise.all([
    loadComponent("site-header", "/components/header.html"),
    loadComponent("site-footer", "/components/footer.html"),
  ]);

  // ================================================================================================
  // SET ACTIVE NAVIGATION LINK
  // ================================================================================================
  setActiveNavigation();

  // ================================================================================================
  // NOTIFY OTHER SCRIPTS THAT GLOBAL COMPONENTS ARE READY
  // ================================================================================================
  document.dispatchEvent(new CustomEvent("componentsLoaded"));
});

// ====================================================================================================
// LOAD COMPONENT
// ====================================================================================================

async function loadComponent(elementId, filePath) {
  const container = document.getElementById(elementId);

  if (!container) {
    return;
  }

  try {
    const response = await fetch(filePath);

    if (!response.ok) {
      throw new Error(`Unable to load ${filePath}: ${response.status}`);
    }

    container.innerHTML = await response.text();
  } catch (error) {
    console.error("Component loading error:", error);
  }
}

// ====================================================================================================
// ACTIVE NAVIGATION
// ====================================================================================================

function setActiveNavigation() {
  const currentPath = normalizePath(window.location.pathname);

  const navigationLinks = document.querySelectorAll(
    "#site-header .gt-nav-link:not(.gt-dropdown-toggle)",
  );

  navigationLinks.forEach((link) => {
    link.classList.remove("active");

    const linkPath = normalizePath(
      new URL(link.href, window.location.origin).pathname,
    );

    if (linkPath === currentPath) {
      link.classList.add("active");
    }
  });
}

// ====================================================================================================
// NORMALIZE URL PATH
// ====================================================================================================

function normalizePath(path) {
  if (path === "/index.html") {
    return "/";
  }

  return path.replace(/\/index\.html$/, "/");
}
