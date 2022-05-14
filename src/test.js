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
    }
}));