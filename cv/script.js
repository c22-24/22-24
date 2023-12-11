// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Використовуйте GSAP для анімації тексту
    gsap.from(".title", { opacity: 0, duration: 1, y: -50, ease: "power2.out" });
    gsap.from(".description", { opacity: 0, duration: 1, y: -50, ease: "power2.out", delay: 0.5 });
    // Додайте інші анімації за необхідністю
  });
  