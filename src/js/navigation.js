const SIDEBAR = document.querySelector(".js-sidebar");
const OPENMENU = document.querySelector(".js-open");
const CLOSEMENU = document.querySelector(".js-close");

OPENMENU.addEventListener("click", () => {
  SIDEBAR.classList.add("openmenu");
});

CLOSEMENU.addEventListener("click", () => {
  SIDEBAR.classList.remove("openmenu");
});
