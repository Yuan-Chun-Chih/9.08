document.addEventListener("DOMContentLoaded", function () { 
  /* --- 平滑捲動 (Navbar) --- */
  const links = document.querySelectorAll(".nav-list a");
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      const target = document.querySelector(href);
      if (!target) return;
      const offset = 70; // 如有固定 nav 可調整
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });

  /* --- 淡入（IntersectionObserver）--- */
  const faders = document.querySelectorAll(".fade-in");
  const obsOptions = { threshold: 0.15 };
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, obsOptions);
  faders.forEach(el => appearOnScroll.observe(el));

  // === 打字機效果已移除 ===
});
