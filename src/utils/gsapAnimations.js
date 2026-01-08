import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ===== Fade up très doux ===== */
export const fadeUp = (el, delay = 0) => {
  gsap.from(el, {
    opacity: 0,
    y: 28,
    duration: 1.1,
    delay,
    ease: "power3.out",
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play none none none"
    }
  });
};

/* ===== Texte éditorial ===== */
export const fadeText = (el) => {
  gsap.from(el, {
    opacity: 0,
    y: 16,
    duration: 0.9,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: "top 88%"
    }
  });
};

/* ===== Cards (services, forces, projets) ===== */
export const staggerCards = (els) => {
  gsap.from(els, {
    opacity: 0,
    y: 24,
    duration: 0.9,
    stagger: 0.12,
    ease: "power3.out",
    scrollTrigger: {
      trigger: els[0],
      start: "top 85%"
    }
  });
};
