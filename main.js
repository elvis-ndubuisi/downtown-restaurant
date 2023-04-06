import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import { revealContentAfter } from "./animations";

document.addEventListener("DOMContentLoaded", () => {
  revealContentAfter(".heading");
});
