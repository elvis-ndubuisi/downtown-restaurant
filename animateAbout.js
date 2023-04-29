import { gsap, Power2, Power3 } from "gsap";

const blackBg = document.querySelector(".left").firstElementChild;

function animateIndexAbout() {
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

animateIndexAbout();
