import "./style.css";
import registerAnimation, {
  revealContentAfter,
  // animateIndexAbout,
  revealNavMenu,
  hideNavMenu,
} from "./animations";
import { gsap } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
const navClose = document.getElementById("close");
const navOpen = document.getElementById("open");
const hoverMenus = document.querySelectorAll(".changeFocus-link");
const sliderItems = document.querySelectorAll(".slider-item");

gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

hoverMenus.forEach((lk) => {
  lk.addEventListener("mouseover", () => {
    sliderItems.forEach((sl) => {
      if (sl.id === `item-${lk.id}`) {
        sl.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

navClose.addEventListener("click", () => hideNavMenu());

navOpen.addEventListener("click", () => revealNavMenu());

revealContentAfter();
// animateIndexAbout();
