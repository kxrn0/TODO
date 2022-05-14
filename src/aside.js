const aside = document.querySelector("aside");
const burger = document.querySelector(".burger input[type='checkbox']");

export const asideInterface = (
    () => {
        const aside = document.querySelector("aside");

        function resize_aside() {
            let nav, height;
        
            setTimeout(() => {
                nav = document.querySelector("nav");
                height = window.getComputedStyle(nav).getPropertyValue("height");
                aside.style.minHeight = `calc(100vh - ${height})`;
            }, 500);
        }        

        return { resize_aside };
    }
)();

burger.addEventListener("click", () => {
    aside.style.transform = burger.checked ? "translateX(0)" : "translateX(-100%)";
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 480)
        aside.style.transform = "translateX(0)";
});

asideInterface.resize_aside();