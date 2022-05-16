import { create_task_dom } from "./taskdom";

export function create_project_main_dom(projectObj, extInterface) {
    const project = document.createElement("div");
    const deleteProject = document.createElement("button");
    const info = document.createElement("div");
    const graphics = document.createElement("div");
    const logo = document.createElement("img");
    const canvasContainer = document.createElement("div");
    const canvas = document.createElement("canvas");
    const canvasProgress = document.createElement("p");
    const details = document.createElement("div");
    const projectH2 = document.createElement("h2");
    const projectDescription = document.createElement("p");
    const tasks = document.createElement("div");
    const uncheckedContainer = document.createElement("div");
    const uncheckH2 = document.createElement("h2");
    const unchecked = document.createElement("div");
    const addTask = document.createElement("button");
    const checkContainer = document.createElement("div");
    const removeChecked = document.createElement("div");
    const removeH2 = document.createElement("h2");
    const removeAllChecked = document.createElement("div");
    const removeP = document.createElement("p");
    const shredder = document.createElement("img");
    const checked = document.createElement("div");
    let innerInterface = {
        checked,
        unchecked, 
        array : projectObj.tasks,
        warning: null,
        userDataString : null
    };
    let checks;

    project.append(deleteProject);
    project.append(info);
    project.append(tasks);
    info.append(graphics);
    info.append(details);
    graphics.append(logo);
    graphics.append(canvasContainer);
    canvasContainer.append(canvas);
    canvasContainer.append(canvasProgress);
    details.append(projectH2);
    details.append(projectDescription);
    tasks.append(uncheckedContainer);
    uncheckedContainer.append(uncheckH2);
    uncheckedContainer.append(unchecked);
    unchecked.append(addTask);
    tasks.append(checkContainer);
    checkContainer.append(removeChecked);
    removeChecked.append(removeH2);
    removeChecked.append(removeAllChecked);
    removeAllChecked.append(removeP);
    removeAllChecked.append(shredder);
    checkContainer.append(checked);

    project.classList.add("project-item");
    deleteProject.classList.add("delete-project");
    info.classList.add("info");
    graphics.classList.add("graphics");
    canvasContainer.classList.add("canvas-container");
    details.classList.add("details");
    tasks.classList.add("tasks");
    uncheckedContainer.classList.add("unchecked-container");
    unchecked.classList.add("unchecked");
    addTask.classList.add("add-task");
    checkContainer.classList.add("checked-container");
    removeChecked.classList.add("remove-checked");
    removeAllChecked.classList.add("remove-all-checked");
    checked.classList.add("checked");

    logo.src = projectObj.img;
    canvas.width = 200;
    canvas.height = 200;
    projectH2.innerText = projectObj.label;
    projectDescription.innerText = projectObj.description;
    uncheckH2.innerText = "Checklist";
    removeH2.innerText = "Checked";
    removeP.innerText = "Clear all checked";
    shredder.src = "./shredder.svg";

    //...
    canvas.style.border = "2px solid red";

    update_per_chan();

    checks = [];
    projectObj.tasks.forEach(task => {
        let taskdom;

        taskdom = create_task_dom(task, innerInterface);
        if (task.checked) {
            taskdom.classList.add("checked");
            checked.append(taskdom);
        }
        else {
            taskdom.classList.add("unchecked");
            unchecked.append(taskdom);
        }
        checks.push(taskdom.querySelector(".checkmark input[type='checkbox']"));
    });

    checks.forEach(check => check.addEventListener("click", update_per_chan));

    addTask.addEventListener("click", () => {
        console.log("shalom");
    });

    function update_per_chan() {
        if (!projectObj.tasks.length)
            return "0%";

        let per;

        per = 100 * ~~( projectObj.tasks.filter(task => task.checked).length / projectObj.tasks.length);
        canvasProgress.innerText = `${per}%`;
    }

    return project;
}