import "./imports.js";

import { create_task } from "./task.js";
import { create_task_dom } from "./taskdom.js";
import { create_id } from "./utilities.js";
// import { asideInterface } from "./aside.js";

// const checked = document.querySelector(".checked");
// const unchecked = document.querySelector(".unchecked");

// const tasks = [];
// const extInterface = {
//     array: tasks,
//     warning: null,
//     checked,
//     unchecked,
//     userDataString: null
// };

// let priorities = ["low", "medium", "high"];
// for (let i = 0; i < 10; i++) {
//     let description, checkedBox, priority, duedate, id, notes, task;

//     description = "This is a test task";
//     checkedBox = false;
//     priority = priorities[~~(Math.random() * priorities.length)];
//     duedate = "2022-05-13";
//     id = create_id(10);
//     notes = [
//         {
//             text: "This is a string",
//             id: create_id(10)
//         },
//         {
//             text: "This is a test",
//             id: create_id(10)
//         }
//     ];

//     task = create_task(description, checkedBox, priority, duedate, id, notes);
//     unchecked.append(create_task_dom(task, extInterface));
// }

// asideInterface.resize_aside();

const extras = document.querySelectorAll(".period-project .lower-section");
const checks = document.querySelectorAll(".period-project .show-tasks");
const tasks = [];
const extInterface = {
    array: tasks,
    warning: null,
    checked: null,
    unchecked: null,
    userDataString: null
};

let priorities = ["low", "medium", "high"];

extras.forEach(extra => {
    for (let i = 0; i < 3; i++) {
        let description, checkedBox, priority, duedate, id, notes, task;

        description = "This is a test task";
        checkedBox = false;
        priority = priorities[~~(Math.random() * priorities.length)];
        duedate = "2022-05-13";
        id = create_id(10);
        notes = [
            {
                text: "This is a string",
                id: create_id(10)
            },
            {
                text: "This is a test",
                id: create_id(10)
            }
        ];

        task = create_task(description, checkedBox, priority, duedate, id, notes);
        extra.append(create_task_dom(task, extInterface));
    }
});

// function resize_expanded() {
//     let height;

//     height = window.getComputedStyle(extraSection).height;
//     if (expand.checked) {
//         extraWrapper.style.height = height;
//         extraSection.style.top = 0;
//     }
//     else {
//         extraWrapper.style.height = 0;
//         extraSection.style.top = `-${height}`;
//     }
// }


/**
 * don't add an event listener every time you click it
 */
checks.forEach(check => check.addEventListener("click", () => {
    resize_secs(check);
}));

checks.forEach(check => {
    let parent, taskChecks, wrapper, lowerSecs;
    parent = check.parentElement.parentElement;
    console.log(parent);
    taskChecks = parent.querySelectorAll(".task .expand-contract");
    wrapper = parent.querySelector(".extra-wrapper");
    lowerSecs = parent.querySelector(".lower-section");

    taskChecks.forEach(task => task.addEventListener("click", () => {
        let height;

        setTimeout(() => {
            height = window.getComputedStyle(lowerSecs).height;
            wrapper.style.height = height;
        }, 330);
    }));
});

function resize_secs(check) {
    let grandParent, wrapper, lowerSecs, height;

    grandParent = check.parentElement.parentElement;
    wrapper = grandParent.querySelector(".extra-wrapper");
    lowerSecs = grandParent.querySelector(".lower-section");
    height = window.getComputedStyle(lowerSecs).height;

    if (check.checked) {
        wrapper.style.height = height;
        lowerSecs.style.top = 0;
    }
    else {
        wrapper.style.height = 0;
        lowerSecs.style.top = `-${height}`;
    }
}

/**
 * Take every checkbox in the project element, add an event listener to it so that whenever it is pressed,
 * it opens or closes the tasks section.
 * Next take all checkboxes inside tasks, add an event listener to each one so that whenever they are checked, 
 * the project's extra section will be resized.
 */