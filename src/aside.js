const aside = document.querySelector("aside");
const burger = document.querySelector(".burger input[type='checkbox']");

burger.addEventListener("click", () => {
    aside.style.transform = burger.checked ? "translateX(0)" : "translateX(-100%)";
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 480)
        aside.style.transform = "translateX(0)";
});