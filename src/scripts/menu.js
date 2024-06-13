const button = document.querySelector(".Bars");
const nav = document.querySelector(".Header-nav");

button.addEventListener("click", () => {
    nav.classList.toggle("isActive");
    button.classList.toggle('TransformBars');
});