# Responsive audit — 29 October 2026

## Coverage and results

- Current portfolio: 15 pages × 14 CSS viewport widths = 210 passing layout checks.
- Linked original demos and exported notebooks: 31 pages × the same 14 widths = 434 passing layout checks.
- Widths: 280, 320, 375, 480, 768, 769, 820, 960, 1024, 1280, 1920, 2560, 3840, 7680 px. A vertical scrollbar may reduce the content width.
- Navigation: 108 passing dropdown checks across the homepage, Python/Pandas and Tableau pages at 12 widths (all three dropdowns per viewport), including hamburger visibility, opening a dropdown, menu containment and Escape handling.
- Visual review: homepage at smartphone and 4K viewport widths; existing colours and eye-shaped headings retained.
- JavaScript syntax and `git diff --check` passed.

## Changes

- Align CSS and JavaScript navigation breakpoints at 769 px; provide larger touch targets and visible keyboard focus; hide collapsed dropdown links from keyboard navigation; support Escape.
- Scale rem-based type/spacing above 1920 px and bound the main reading area, avoiding an excessively stretched layout on 4K/8K screens.
- Allow grid/flex children to shrink; keep tool labels and footer links inside their containers.
- Contain Tableau's injected dashboard widths and preserve local scrolling for code and data tables.
- Reuse the shared, working navigation on the two remaining data pages.
- Remove fixed-width overflow in original demo images, Heat Wave sections and archived CV iframes.
- Respect reduced motion and prevent mobile AOS transforms from obscuring content.

## Fire Stick and tablet navigation

The expanded navigation starts at a 769 px CSS viewport in both CSS and JavaScript; hamburger navigation is retained below that width. This preserves the original lower CSS threshold and avoids inconsistent interaction behaviour from the former 1024 px JavaScript threshold. The expanded menu and all dropdowns are checked at 769, 820 and 960 px as well as larger widths. A physical Fire Stick browser remains untested; its actual CSS viewport, browser scaling and remote-control behaviour cannot be inferred from television size.

## Reproduce

Serve the repository root and open `/tests/responsive-audit.html`. Run the layout audit and navigation audit. The fixture sets iframe viewports on the same origin; it disables animation only inside those test frames so measurements describe final content positions. It exempts descendants deliberately contained by a horizontal scroller.

## Limits

This is a Chromium browser layout audit using CSS viewport emulation, not physical testing on every phone or television. Screen diagonal does not determine the CSS viewport: resolution, browser scaling, zoom and viewing distance also matter. A 100-inch TV may expose a 1920, 3840 or other CSS viewport.

Third-party iframe contents (YouTube, Microsoft and Tableau) are cross-origin; the surrounding layout is checked, but their internal controls, service availability and device support are outside this patch. Existing archival application logic and missing historical resources are not certified by the layout checks. Safari/WebKit and physical TV remote controls were not tested.
