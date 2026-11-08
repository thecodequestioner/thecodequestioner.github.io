/* ==========================================================
   HOMEPAGE TYPING TEXT
   Words typed in the intro on the home page. Edit freely.
   Screen readers get the full list as hidden text, and users
   who prefer reduced motion see the first word without animation.
   ========================================================== */
const TYPED_STRINGS = [
  "the data",
  "the process",
  "the status quo",
  "the question itself"
];

/* ==========================================================
   TYPING EFFECT (home page only)
   Runs only if the typing element exists, Typed.js loaded,
   and the visitor has not asked for reduced motion.
   ========================================================== */
function initTypedText() {
  const target = document.querySelector(".dynamic-text");
  if (!target) return;

  const hiddenList = document.querySelector("[data-typed-list]");
  if (hiddenList) {
    hiddenList.textContent = TYPED_STRINGS.join(", ");
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion || typeof Typed === "undefined") return;

  new Typed(target, {
    strings: TYPED_STRINGS,
    typeSpeed: 110,
    backSpeed: 92,
    backDelay: 1000,
    loop: true
  });
}

/* ==========================================================
   FOOTER YEAR
   ========================================================== */
function setYear() {
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initTypedText();
  setYear();
});
