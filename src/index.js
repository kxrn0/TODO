import "./imports.js";

import { create_task } from "./task.js";
import { create_task_dom } from "./taskdom.js";
import { create_id } from "./utilities.js";
//import { asideInterface } from "./aside.js";

const checked = document.querySelector(".checked");
const unchecked = document.querySelector(".unchecked");

const tasks = [];
const extInterface = {
    array: tasks,
    warning: null,
    checked,
    unchecked,
    userDataString: null
};

let priorities = ["low", "medium", "high"];
for (let i = 0; i < 10; i++) {
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
    unchecked.append(create_task_dom(task, extInterface));
}

//asideInterface.resize_aside();