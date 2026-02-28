document.addEventListener("DOMContentLoaded", function () {

  // Fade in page
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.opacity = 1;
  }, 100);

  // Scroll reveal
  function reveal() {
    document.querySelectorAll(".reveal").forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 100) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", reveal);
  reveal();

  // Page transition
  document.querySelectorAll("a").forEach(link => {
    if (link.hostname === window.location.hostname) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(".page-transition").classList.add("active");
        setTimeout(() => {
          window.location = this.href;
        }, 600);
      });
    }
  });

});
