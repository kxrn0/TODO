import "./imports.js";
import { create_id, make_cover } from "./utilities.js";
import { create_side_project } from "./side_project.js";
import { emptyObj } from "./empty_period.js";
import { create_project_main_dom } from "./project_dom.js";
import { create_project } from "./project.js";
import { create_preview } from "./preview.js";

// import { asideInterface } from "./aside.js";

// asideInterface.resize_aside();

const main = document.querySelector("main");
const warning = document.querySelector(".delete-project");
const addNewProject = document.querySelector(".add-project");
const createProjectModal = document.querySelector(".create-project-modal");
const createProject = document.querySelector(".create-project-form");
const cancelCreation = document.querySelector(".cancel-project-creation")
const coverInput = document.getElementById("project-cover");
const coverLabel = document.querySelector(".label-cover");
const imageWrapper = document.querySelector(".image-cover-wrapper");
const coverImage = document.getElementById("actual-image");
const removeImage = document.querySelector(".image-cover-wrapper .remove-image");
const userDataString = "_todo_user_projects_";
const projects = localStorage.getItem(userDataString) ? JSON.parse(localStorage.getItem(userDataString)) : [];
const pees = [];
const today = document.querySelector(".today-button");
const thisWeek = document.querySelector(".this-week-button");
const thisMonth = document.querySelector(".this-month-button");
const thisYear = document.querySelector(".this-year-button");
let cover;

today.addEventListener("click", () => {
    go_to_preview("today");
    switch_active(today);
});

thisWeek.addEventListener("click", () => {
    go_to_preview("this-week");
    switch_active(thisWeek);
});

thisMonth.addEventListener("click", () => {
    go_to_preview("this-month");
    switch_active(thisMonth);
});

thisYear.addEventListener("click", () => {
    go_to_preview("this-year");
    switch_active(thisYear);
});

for (let project of projects) {
    load_project(project);
}

today.click();

coverInput.addEventListener("change", () => {
    make_cover(URL.createObjectURL(coverInput.files[0]), 200, 200).then(res => {
        cover = res;
        coverImage.src = res;
        coverInput.style.display = "none";
        coverLabel.style.display = "none";
        imageWrapper.style.display = "flex";
    });
});

addNewProject.addEventListener("click", () => {
    createProjectModal.style.display = "block"
    createProject["project-name"].focus();
});

createProject.addEventListener("submit", event => {
    event.preventDefault();

    let project;

    project = create_project(
        createProject["project-name"].value,
        createProject["project-description"].value,
        cover,
        [],
        create_id(10)
    );
    projects.push(project);
    localStorage.setItem(userDataString, JSON.stringify(projects));
    load_project(project);
});

cancelCreation.addEventListener("click", great_reset)

removeImage.addEventListener("click", reset);

function go_to_preview(period) {
    let current, preview;

    current = main.querySelector(".project-item");
    if (!current)
        current = main.querySelector(".period-projects");
    if (!current)
        current = main.querySelector(".empty-period");

    if (current)
        main.removeChild(current);
    preview = create_preview(pees, period);
    if (preview.querySelector("li"))
        main.append(create_preview(pees, period));
    else 
        main.append(emptyObj);
}

function switch_active(elem) {
    let current;

    current = document.getElementById("active-sidebar-element");
    if (current)
        current.id = '';
    elem.id = "active-sidebar-element";
}

function load_project(project) {
    let sideProject, mainProject, retProject, extInterface, li;

    sideProject = create_side_project(project);
    extInterface = {
        modal: warning,
        array: projects,
        side: { update: sideProject.update, remove: sideProject.remove },
        previews : pees,
        userDataString
    };
    retProject = create_project_main_dom(project, extInterface);
    mainProject = retProject.project;

    //...
    pees.push({ project, update : retProject.update });

    sideProject.side.addEventListener("click", () => {
        let current, active;

        current = main.querySelector(".project-item");
        if (!current)
            current = main.querySelector(".period-projects");
        if (!current)
            current = main.querySelector(".empty-period");

        if (current)
            current.replaceWith(mainProject);
        else
            main.append(mainProject);

        retProject.update();

        active = document.getElementById("active-sidebar-element");
        if (active)
            active.id = '';
        sideProject.side.id = "active-sidebar-element";
    });

    li = document.createElement("li");
    li.append(sideProject.side);
    document.querySelector("aside .projects ul").append(li);
    great_reset();
    sideProject.side.click();
}

function great_reset() {
    createProject.reset();
    reset();
    createProjectModal.style.display = "none";
}

function reset() {
    cover = '';
    coverImage.src = "./pepe.jpg";
    imageWrapper.style.display = "none";
    coverLabel.style.display = "block";
    coverInput.style.display = "block";
}