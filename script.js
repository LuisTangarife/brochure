/* CRONOM ONE – menú móvil y enlace activo */
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");
  const toggle = document.querySelector(".menu-toggle");

  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  menu.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );

  const links = [...menu.querySelectorAll("a[href^='#']")];
  const sections = links
    .map((l) => document.querySelector(l.getAttribute("href")))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((l) =>
          l.classList.toggle("active", l.getAttribute("href") === "#" + entry.target.id)
        );
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );

  sections.forEach((s) => observer.observe(s));
});

/* Ampliar imágenes de la galería */
document.addEventListener("DOMContentLoaded", () => {
  const box = document.getElementById("lightbox");
  const big = box.querySelector("img");
  document.querySelectorAll(".gallery img").forEach((img) =>
    img.addEventListener("click", () => {
      big.src = img.src;
      big.alt = img.alt;
      box.showModal();
    })
  );
  box.addEventListener("click", () => box.close());
});
