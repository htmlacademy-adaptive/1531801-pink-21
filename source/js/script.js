const navMain = document.querySelector(".main-nav");
const navToggle = document.querySelector(".main-nav__toggle");
const header = document.querySelector(".page-header");

navMain.classList.remove("main-nav--nojs");
navMain.classList.remove("main-nav--opened");
navMain.classList.add("main-nav--closed");
header.classList.add("page-header--transparent");

navToggle.addEventListener("click", function () {
  header.classList.toggle("page-header--transparent");
  if (navMain.classList.contains("main-nav--opened")) {
    navMain.classList.remove("main-nav--opened");
    navMain.classList.add("main-nav--closed");
  } else {
    navMain.classList.add("main-nav--opened");
    navMain.classList.remove("main-nav--closed");
  }
});
