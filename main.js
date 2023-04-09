import "./style.css";
import registerAnimation, {
  revealContentAfter,
  animateIndexAbout,
  revealNavMenu,
  hideNavMenu,
} from "./animations";
import Swiper from "swiper";
import "swiper/css";

const navClose = document.getElementById("close");
const navOpen = document.getElementById("open");

document.addEventListener("DOMContentLoaded", () => {
  registerAnimation();
});

navClose.addEventListener("click", () => hideNavMenu());

navOpen.addEventListener("click", () => revealNavMenu());

revealContentAfter();
animateIndexAbout();

console.log("first");

const swiper = new Swiper(".nav-menu_slider-container", {
  direction: "horizontal",
  loop: true,
  // centerInsufficientSlides: true,
  // centeredSlidesBounds: true,
  centeredSlides: true,
  spaceBetween: 100,
  slidesPerView: 2,
  // initialSlide: 1,
});
