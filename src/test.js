//const buttons = document.querySelectorAll(".activity button");
const active = "active-sidebar-element";

const elems = [
    ...document.querySelectorAll(".activity button"),
    ...document.querySelectorAll(".projects .project")
];

elems.forEach(elem => elem.addEventListener("click", () => {
    if (elem.id != active) {
        document.getElementById(active).id = '';
        elem.id = active;

        if (window.innerWidth < 480) {
            let aside;
            
            if (elem.classList.contains(".activity button"))
                aside.style.height = "fit-content";   
            else if (elem.classList.contains(".project"))
                aside.style.height = "100%";
        }
    }
}));