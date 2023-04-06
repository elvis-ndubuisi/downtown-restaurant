import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import registerAnimation, {
  revealContentAfter,
  animateIndexAbout,
} from "./animations";

document.addEventListener("DOMContentLoaded", () => {
  registerAnimation();
});
revealContentAfter();
animateIndexAbout();
