const NAV = document.querySelector(".c-primary-navigation");
const NAVTOGGLE = document.querySelector(".mobile-nav-toggle");

NAVTOGGLE.addEventListener("click", () => {
  const VISIBILITY = NAV.getAttribute("data-visible");
  if (VISIBILITY === "false") {
    NAV.setAttribute("data-visible", true);
    NAVTOGGLE.setAttribute("aria-expanded", true);
  } else {
    NAV.setAttribute("data-visible", false);
    NAVTOGGLE.setAttribute("aria-expanded", false);
  }
});
