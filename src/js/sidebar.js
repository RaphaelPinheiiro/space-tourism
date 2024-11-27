const SIDEBAR = document.querySelector(".js-sidebar");
const OPENBUTTON = document.querySelector(".js-openbutton");
const CLOSEBUTTON = document.querySelector(".js-closebutton");

OPENBUTTON.addEventListener("click", () => {
  SIDEBAR.classList.add("visible");
});

CLOSEBUTTON.addEventListener("click", () => {
  SIDEBAR.classList.remove("visible");
});
