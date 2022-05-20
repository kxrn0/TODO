import "./imports.js";

import { create_task } from "./task.js";
import { create_task_dom } from "./taskdom.js";
import { create_id, make_cover } from "./utilities.js";
import { create_side_project } from "./side_project.js";

//import { emptyObj } from "./empty_period.js";
// import { asideInterface } from "./aside.js";

// asideInterface.resize_aside();

//--------------------------------------------------------------------------------------

// const extras = document.querySelectorAll(".period-project .lower-section");
// const checks = document.querySelectorAll(".period-project .show-tasks");
// const tasks = [];
// const extInterface = {
//     array: tasks,
//     warning: null,
//     checked: null,
//     unchecked: null,
//     userDataString: null
// };

// let priorities = ["low", "medium", "high"];

// extras.forEach(extra => {
//     for (let i = 0; i < 3; i++) {
//         let description, checkedBox, priority, duedate, id, notes, task;

//         description = "This is a test task";
//         checkedBox = false;
//         priority = priorities[~~(Math.random() * priorities.length)];
//         duedate = "2022-05-13";
//         id = create_id(10);
//         notes = [
//             {
//                 text: "This is a string",
//                 id: create_id(10)
//             },
//             {
//                 text: "This is a test",
//                 id: create_id(10)
//             }
//         ];

//         task = create_task(description, checkedBox, priority, duedate, id, notes);
//         extra.append(create_task_dom(task, extInterface));
//     }
// });

// checks.forEach(check => check.addEventListener("click", () => {
//     resize_secs(check);
// }));

// checks.forEach(check => {
//     let parent, taskChecks, wrapper, lowerSecs;
//     parent = check.parentElement.parentElement;
//     taskChecks = parent.querySelectorAll(".task .expand-contract");
//     wrapper = parent.querySelector(".extra-wrapper");
//     lowerSecs = parent.querySelector(".lower-section");

//     taskChecks.forEach(task => task.addEventListener("click", () => {
//         let height;

//         setTimeout(() => {
//             height = window.getComputedStyle(lowerSecs).height;
//             wrapper.style.height = height;
//         }, 330);
//     }));
// });

// function resize_secs(check) {
//     let grandParent, wrapper, lowerSecs, height;

//     grandParent = check.parentElement.parentElement;
//     wrapper = grandParent.querySelector(".extra-wrapper");
//     lowerSecs = grandParent.querySelector(".lower-section");
//     height = window.getComputedStyle(lowerSecs).height;

//     if (check.checked) {
//         wrapper.style.height = height;
//         lowerSecs.style.top = 0;
//     }
//     else {
//         wrapper.style.height = 0;
//         lowerSecs.style.top = `-${height}`;
//     }
// }

//--------------------------------------------------------------------------------------

// const main = document.querySelector("main");

// main.append(emptyObj);

//--------------------------------------------------------------------------------------

import { create_project_main_dom } from "./project_dom.js";
import { create_project } from "./project.js";
import { create_preview } from "./preview.js";

const main = document.querySelector("main");
const today = document.querySelector(".today-button");

const warning = document.querySelector(".delete-project");
const projects = [];
const funs = [];
const p = [];
const addNewProject = document.querySelector(".add-project");
const createProjectModal = document.querySelector(".create-project-modal");
const createProject = document.querySelector(".create-project-form");
const cancelCreation = document.querySelector(".cancel-project-creation")
const coverInput = document.getElementById("project-cover");
const coverLabel = document.querySelector(".label-cover");
const imageWrapper = document.querySelector(".image-cover-wrapper");
const coverImage = document.getElementById("actual-image");
const removeImage = document.querySelector(".image-cover-wrapper .remove-image");
let cover;

today.addEventListener("click", () => {
    let current;

    current = main.querySelector(".project-item");

    if (!current)
        current = main.querySelector(".period-projects");

    if (current)
        main.removeChild(current);
    main.append(create_preview(p, 100));
});

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

    let project, sideProject, mainProject, retProject, extInterface, li;

    project = create_project(
        createProject["project-name"].value,
        createProject["project-description"].value,
        cover,
        [],
        create_id(10)
    );
    projects.push(project);
    sideProject = create_side_project(project);
    extInterface = {
        modal: warning,
        array: projects,
        side: { update: sideProject.update, remove: sideProject.remove }
    };
    retProject = create_project_main_dom(project, extInterface);
    mainProject = retProject.project;

    //...
    p.push({ project, udpate : retProject.update });

    funs.push({ update: retProject.update, id: project.id });

    sideProject.side.addEventListener("click", () => {
        let current, main, active;

        main = document.querySelector("main");
        current = main.querySelector(".project-item");

        if (!current)
            current = main.querySelector(".period-projects");

        if (current)
            current.replaceWith(mainProject);
        else
            main.append(mainProject);

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
});

cancelCreation.addEventListener("click", great_reset)

removeImage.addEventListener("click", reset);

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