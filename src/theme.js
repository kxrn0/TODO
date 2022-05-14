const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle input[type='checkbox']");

root.className = "light";
toggle.addEventListener("click", () => root.className = toggle.checked ? "dark" : "light");