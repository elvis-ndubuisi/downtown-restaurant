import { gsap, Power2, Bounce, Power3 } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import ScrollTrigger from "gsap/ScrollTrigger";

const blackBg = document.querySelector(".left").firstElementChild;

/**
 * Removes ::after property to reveal content
 * @param {Element} target Index page heading <h1> tag
 */
export function revealContentAfter(target, idArr) {
  const tl = gsap
    .timeline({ defaults: { duration: 2, stagger: 0.3 } })
    .to(".heading", {
      duration: 0,
      css: { visibility: "visible" },
    })
    .to(CSSRulePlugin.getRule(".heading::after"), {
      duration: 1.2,
      delay: 0.5,
      height: "0%",
      ease: Power2.easeInOut,
    })
    .to(".heading", { duration: 1, delay: -1, opacity: 1 })
    .from(".scroll-indicator", {
      duration: 0.5,
      y: -100,
      opacity: 0,
      delay: -1,
      ease: Bounce.easeInOut,
    })
    .from(".lined-wrapper", {
      duration: 1,
      x: -100,
      opacity: 0,
      ease: Bounce.easeInOut,
    });
}

export function animateIndexAbout() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".index-showcase",
      start: "bottom center",
      end: "+=500 top",
      markers: false,
      toggleActions: "play none none none",
    },
  });

  tl.fromTo(
    blackBg,
    {
      height: "40%",
      width: "50%",
    },
    {
      duration: 0.9,
      width: "45%",
      height: "100%",
      ease: Power3.easeInOut,
    }
  )
    .to("#about-img1", { duration: 0, css: { visibility: "visible" } })
    .from("#about-img1", {
      duration: 1,
      delay: -0.3,
      x: "-80",
      y: "40",
      opacity: 0,
      ease: Power3.easeInOut,
    })
    .to("#about-img2", { duration: 0, css: { visibility: "visible" } })
    .from("#about-img2", {
      duration: 1,
      delay: -0.4,
      x: 100,
      opacity: 0,
      ease: Power2.easeIn,
    });
}

export function revealNavMenu() {
  let tl = gsap.timeline();

  tl.to(".nav-menu", { duration: 0, display: "block", height: "100vh" }).from(
    ".nav-menu",
    {
      duration: 0.8,
      opacity: 0,
      height: 0,
      transformOrigin: "right top",
      skewY: 2,
      height: 0,
      ease: Power3.easeInOut,
    }
  );
}

export function hideNavMenu() {
  gsap
    .timeline()
    .to(".nav-menu", {
      delay: 0.4,
      duration: 1,
      height: 0,
      ease: Power3.easeOut,
    })
    .to(".nav-menu", { duration: 0, display: "none" })
    .from(".nav-menu .header", { duration: 0.5, delay: -0.3, opacity: 0 });
}

function registerAnimations() {
  gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);
}

export default registerAnimations();
