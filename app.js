document.addEventListener("DOMContentLoaded", function () {

  document.body.classList.add("loaded");

  // PAGE TRANSITION
  document.querySelectorAll("a").forEach(link => {
    if (link.hostname === window.location.hostname) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = this.href;
        document.body.style.opacity = 0;
        setTimeout(() => {
          window.location.href = href;
        }, 500);
      });
    }
  });

  // NAVBAR SCROLL EFFECT
  window.addEventListener("scroll", function () {
    const nav = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  // SCROLL REVEAL
  function reveal() {
    const elements = document.querySelectorAll(".reveal");
    elements.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", reveal);
  reveal();

});