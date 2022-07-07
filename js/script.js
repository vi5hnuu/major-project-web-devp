console.log("hello world");

/* Updating year */
const yearEl = document.querySelector(".year");
const currYear = new Date().getFullYear();
yearEl.textContent = currYear.toString();

/* make mobile navigation work */
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function (e) {
  headerEl.classList.toggle("nav-open");
});

/* close mobile nav */
const alllinks = document.querySelectorAll("a:link");
alllinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

//sticky nav
const sectionheroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    const bodyEl = document.body.classList;
    if (ent.isIntersecting === false) {
      bodyEl.add("sticky");
    } else {
      if (bodyEl.contains("sticky")) bodyEl.remove("sticky");
    }
  },
  {
    //in viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionheroEl);
