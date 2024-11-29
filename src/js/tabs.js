const TABLIST = document.querySelector("[role='tablist']");
const TABS = TABLIST.querySelectorAll("[role='tab']");

let tabFocus = 0;

TABLIST.addEventListener("keydown", (e) => {
  const KEYDOWNLEFT = 37;
  const KEYDOWNRIGHT = 39;

  if (e.keyCode === KEYDOWNLEFT || e.keyCode === KEYDOWNRIGHT) {
    TABS[tabFocus].setAttribute("tabindex", -1);

    if (e.keyCode === KEYDOWNRIGHT) {
      tabFocus++;
      if (tabFocus >= TABS.length) {
        tabFocus = 0;
      }
    } else if (e.keyCode === KEYDOWNLEFT) {
      tabFocus--;
      if (tabFocus < 0) {
        tabFocus = TABS.length - 1;
      }
    }
  }

  TABS[tabFocus].setAttribute("tabindex", 0);
  TABS[tabFocus].focus();
});

TABS.forEach((tab) => {
  tab.addEventListener("click", changeTabPanel);
});

function changeTabPanel(e) {
  const TARGETTAB = e.target;
  const TARGETPANEL = TARGETTAB.getAttribute("aria-controls");
  const TARGETIMAGE = TARGETTAB.getAttribute("data-image");

  console.log(TARGETPANEL);

  const TABCONTAINER = TARGETTAB.parentNode;
  const MAINCONTAINER = TABCONTAINER.parentNode;

  TABCONTAINER.querySelector("[aria-selected='true']").setAttribute(
    "aria-selected",
    false
  );

  TARGETTAB.setAttribute("aria-selected", true);

  hideContent(MAINCONTAINER, "[role='tabpanel']");
  showContent(MAINCONTAINER, [`#${TARGETPANEL}`]);

  hideContent(MAINCONTAINER, "picture");
  showContent(MAINCONTAINER, [`#${TARGETIMAGE}`]);
}

function hideContent(parent, content) {
  parent
    .querySelectorAll(content)
    .forEach((item) => item.setAttribute("hidden", true));
}
function showContent(parent, content) {
  parent.querySelector(content).removeAttribute("hidden");
}
