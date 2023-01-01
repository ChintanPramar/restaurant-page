import loadHome from "./home";
import loadmenu from "./menu";
import loadContact from "./contact";

loadHome();
const homeBtn = document.querySelector("[data-home]");
const menuBtn = document.querySelector("[data-menu]");
const contactBtn = document.querySelector("[data-con]");


function setActive(button) {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active-btn");
    }
  });

  button.classList.add("active-btn");
}

homeBtn.addEventListener("click", (event) => {
  if (event.target.classList.contains("active-btn")) return;
  setActive(homeBtn);
  loadHome();
});
menuBtn.addEventListener("click", (event) => {
    if (event.target.classList.contains("active-btn")) return;
    setActive(menuBtn);
    loadmenu();
  });

contactBtn.addEventListener("click", (event) => {
  if (event.target.classList.contains("active-btn")) return;
  setActive(contactBtn);
  loadContact();
});

