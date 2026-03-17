const navToggle = document.querySelector(".nav-toggle");
const header =document.querySelector(".header-unit-2");

navToggle.addEventListener("click", () => {
     header.classList.toggle("nav-open");
});

const carousel = document.querySelector("section:nth-of-type(4) > div:last-child");
const arrows = document.querySelectorAll("section:nth-of-type(4) img [src*='circle']");


if (carousel && arrows.length === 2) {
    const [prev,next] = arrows;
}

next.addEventListener("click", () => {
    carousel.scrollBy({left: 300, behavior: "smooth"});
});

prev.addEventListener("click", () => {
    carousel.scrollBy({left: -300, behavior: "smooth"});
});





m


