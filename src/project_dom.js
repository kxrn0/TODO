import { create_task_dom } from "./taskdom";
import { create_task } from "./task";
import { create_id } from "./utilities";
import { kill_many } from "./utilities";
import { make_cover } from "./utilities";

/**
 * todo;
 * edit project label from clicking on it                                       [x];
 * edit project description from clicking on it                                 [x];
 * clear note tasks on the form                                                 [x];
 * implement deletion of individual tasks                                       [x];
 * implement deletion of project                                                [x];
 * remove all checked by clicking on the corresponding button                   [x];
 * show the correct percentage in the inner p element                           [x];
 * show the percentage of completed tasks with the canvas element               [x];
 * change the image used for the project                                        [x];
 * add different algorithms to make a picture when the user doesn't provide one []
 */

export function create_project_main_dom(projectObj, extInterface) {
    const project = document.createElement("div");
    const deleteProject = document.createElement("button");
    const info = document.createElement("div");
    const graphics = document.createElement("div");
    const logo = document.createElement("img");
    const canvasContainer = document.createElement("div");
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const canvasProgress = document.createElement("p");
    const details = document.createElement("div");
    const projectH2 = document.createElement("h2");
    const projectDescription = document.createElement("p");
    const projectNameInput = document.createElement("input");
    const projectDescriptionInput = document.createElement("textarea");
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
    const addTaskModal = document.createElement("div");
    const addTaskModalContent = document.createElement("div");
    const addForm = document.createElement("form");
    const variables = document.createElement("ul");
    const controls = document.createElement("div");
    const createTaskButton = document.createElement("button");
    const cancelCreationButton = document.createElement("button");
    const labelLi = document.createElement("li");
    const newLabel = document.createElement("label");
    const newLabelInput = document.createElement("input");
    const dueDateLi = document.createElement("li");
    const newDueDateLabel = document.createElement("label");
    const dueDateInput = document.createElement("input");
    const prioritiesLi = document.createElement("li");
    const priorityP = document.createElement("p");
    const choices = document.createElement("ul");
    const highLi = document.createElement("li");
    const highInput = document.createElement("input");
    const highLabel = document.createElement("label");
    const mediumLi = document.createElement("li");
    const mediumInput = document.createElement("input");
    const mediumLabel = document.createElement("label");
    const lowLi = document.createElement("li");
    const lowInput = document.createElement("input");
    const lowLabel = document.createElement("label");
    const notesLi = document.createElement("li");
    const notesP = document.createElement("p");
    const newNotes = document.createElement("ul");
    const addNewNote = document.createElement("button");
    const newNoteArea = document.createElement("textarea");
    const warning = document.createElement("div");
    const warnignContent = document.createElement("div");
    const deletion = document.createElement("div");
    const warningMessagePt1 = document.createElement("h2");
    const warned = document.createElement("p");
    const warningMessagePt2 = document.createElement("h2");
    const warnignControls = document.createElement("div");
    const yes = document.createElement("button");
    const no = document.createElement("button");

    const imageModal = document.createElement("div");
    const imageModalContent = document.createElement("div");
    const imageInputWrapper = document.createElement("div");
    const actualImg = document.createElement("img");
    const imageInput = document.createElement("input");
    const imageLabel = document.createElement("label");
    const imageControls = document.createElement("div");
    const imageYes = document.createElement("button");
    const imageNo = document.createElement("button");

    let innerInterface, checks, deleteLocal, newCover;

    //#region

    project.append(imageModal);
    imageModal.append(imageModalContent);
    imageModalContent.append(imageInputWrapper);
    imageInputWrapper.append(imageInput);
    imageInputWrapper.append(imageLabel);
    imageModalContent.append(imageControls);
    imageControls.append(imageYes);
    imageControls.append(imageNo);

    project.append(deleteProject);
    project.append(info);
    project.append(tasks);
    project.append(addTaskModal);
    project.append(warning);
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
    addTaskModal.append(addTaskModalContent);
    addTaskModalContent.append(addForm);
    addForm.append(variables);
    addForm.append(controls);
    controls.append(createTaskButton);
    controls.append(cancelCreationButton);
    variables.append(labelLi);
    labelLi.append(newLabel);
    labelLi.append(newLabelInput);
    variables.append(dueDateLi);
    dueDateLi.append(newDueDateLabel);
    dueDateLi.append(dueDateInput);
    variables.append(prioritiesLi);
    prioritiesLi.append(priorityP);
    prioritiesLi.append(choices);
    choices.append(highLi);
    choices.append(mediumLi);
    choices.append(lowLi);
    highLi.append(highInput);
    highLi.append(highLabel);
    mediumLi.append(mediumInput);
    mediumLi.append(mediumLabel);
    lowLi.append(lowInput);
    lowLi.append(lowLabel);
    variables.append(notesLi);
    notesLi.append(notesP);
    notesLi.append(newNotes);
    newNotes.append(addNewNote);
    warning.append(warnignContent);
    warnignContent.append(deletion);
    warnignContent.append(warnignControls);
    deletion.append(warningMessagePt1);
    deletion.append(warned);
    deletion.append(warningMessagePt2);
    warnignControls.append(yes);
    warnignControls.append(no);

    //#endregion


    //#region
    imageModal.classList.add("modal");
    imageModal.classList.add("image-modal");
    imageModalContent.classList.add("modal-content");
    imageInputWrapper.classList.add("image-input-wrapper");
    imageControls.classList.add("controls");
    imageYes.classList.add("yes");
    imageNo.classList.add("no");

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
    controls.classList.add("controls");
    addTaskModal.classList.add("modal");
    addTaskModalContent.classList.add("modal-content");
    addForm.classList.add("create-new-task");
    variables.classList.add("variables");
    createTaskButton.classList.add("create");
    cancelCreationButton.classList.add("cancel");
    choices.classList.add("choices");
    newNotes.classList.add("new-task-notes");
    addNewNote.classList.add("new-task-add-note");
    warning.classList.add("modal");
    warning.classList.add("warning-delete-task");
    warnignContent.classList.add("modal-content");
    deletion.classList.add("deletion");
    warnignControls.classList.add("controls");
    yes.classList.add("yes");
    no.classList.add("no");
    //#endregion

    //#region
    imageInput.setAttribute("type", "file");
    imageInput.setAttribute("accept", ".jpg, .jpeg, .png");
    imageInput.id = `image-input-${projectObj.id}`;
    imageLabel.setAttribute("for", `image-input-${projectObj.id}`);
    imageYes.innerText = "Change";
    imageNo.innerText = "Cancel";
    projectNameInput.setAttribute("type", "text");
    logo.src = projectObj.img;
    canvas.width = 200;
    canvas.height = 200;
    projectH2.innerText = projectObj.label;
    projectDescription.innerText = projectObj.description;
    uncheckH2.innerText = "Checklist";
    removeH2.innerText = "Checked";
    removeP.innerText = "Clear all checked";
    shredder.src = "./shredder.svg";
    createTaskButton.innerText = "Create";
    cancelCreationButton.innerText = "Cancel";
    cancelCreationButton.setAttribute("type", "button");
    newLabel.innerText = "Label";
    newLabel.setAttribute("for", `new-task-label-${projectObj.id}`);
    newLabelInput.setAttribute("name", "new-task-label");
    newLabelInput.id = `new-task-label-${projectObj.id}`;
    newLabelInput.setAttribute("type", "text");
    newLabelInput.required = true;
    newDueDateLabel.setAttribute("for", `new-task-due-date-${projectObj.id}`);
    newDueDateLabel.innerText = "Due date";
    dueDateInput.setAttribute("type", "date");
    dueDateInput.required = true;
    dueDateInput.id = `new-task-due-date-${projectObj.id}`;
    dueDateInput.name = "new-task-due-date";
    priorityP.innerText = "Priority";
    highInput.setAttribute("type", "checkbox");
    highInput.id = `new-task-high-${projectObj.id}`;
    highInput.classList.add("new-task-high");
    highInput.setAttribute("name", "new-task-high");
    highLabel.setAttribute("for", `new-task-hign-${projectObj.id}`);
    highLabel.innerText = "High";
    mediumInput.setAttribute("type", "checkbox");
    mediumInput.id = `new-task-medium-${projectObj.id}`;
    mediumInput.classList.add("new-task-medium");
    mediumInput.setAttribute("name", "new-task-medium");
    mediumLabel.setAttribute("for", `new-task-medium-${projectObj.id}`);
    mediumLabel.innerText = "Medium";
    lowInput.setAttribute("type", "checkbox");
    lowInput.checked = true;
    lowInput.id = `new-task-low-${projectObj.id}`;
    lowInput.classList.add("new-task-low");
    lowInput.setAttribute("name", "new-task-low");
    lowLabel.setAttribute("for", `new-task-low-${projectObj.id}`);
    lowLabel.innerText = "Low";
    notesP.innerText = "Notes";
    addNewNote.setAttribute("type", "button");
    warningMessagePt1.innerText = "Do you really wish to delete"
    warningMessagePt2.innerText = "?";
    yes.innerText = "Delete";
    no.innerText = "Cancel";
    //#endregion

    checks = [];
    innerInterface = {
        checked,
        unchecked,
        array: projectObj.tasks,
        modal: warning,
        userDataString: null,
        update : () => {
            update();
            update_checks();
        }
    };
    deleteLocal = false;
    update();

    projectObj.tasks.forEach(task => {
        let taskDom;

        taskDom = create_task_dom(task, innerInterface);
        if (task.checked) {
            taskDom.classList.add("checked");
            checked.append(taskDom);
        }
        else {
            taskDom.classList.add("unchecked");
            unchecked.append(taskDom);
        }
        checks.push(taskDom.querySelector(".checkmark input[type='checkbox']"));
    });

    checks.forEach(check => check.addEventListener("click", update));

    deleteProject.addEventListener("click", () => {
        let deleteButton, cancelButton;

        extInterface.modal.style.display = "block";
        deleteButton = extInterface.modal.querySelector(".yes");
        cancelButton = extInterface.modal.querySelector(".no");

        deleteButton.addEventListener("click", delete_project);

        cancelButton.addEventListener("click", hide);

        function delete_project() {
            let index;

            index = extInterface.array.findIndex(project => project.id == projectObj.id);
            extInterface.array.splice(index, 1);
            extInterface.side.remove();
            project.parentElement.removeChild(project);
            hide();
        }

        function hide() {
            extInterface.modal.style.display = "none";

            deleteButton.removeEventListener("click", delete_project);

            cancelButton.removeEventListener("click", hide);
        }
    });

    projectH2.addEventListener("click", () => {
        projectNameInput.value = projectH2.innerText;
        projectH2.replaceWith(projectNameInput);
        projectNameInput.focus();
    });

    projectNameInput.addEventListener("focusout", () => {
        let value;

        value = projectNameInput.value.trim();
        if (value) {
            projectH2.innerText = value;
            projectObj.label = value;
            extInterface.side.update();
        }
        projectNameInput.replaceWith(projectH2);
    });

    projectDescription.addEventListener("click", () => {
        projectDescriptionInput.value = projectDescription.innerText;
        projectDescription.replaceWith(projectDescriptionInput);
        projectDescriptionInput.focus();
    });

    projectDescriptionInput.addEventListener("focusout", () => {
        let value;

        value = projectDescriptionInput.value;
        if (value) {
            projectDescription.innerText = value;
            projectObj.description = value;
        }
        projectDescriptionInput.replaceWith(projectDescription);
    });

    document.addEventListener("keydown", event => {
        if (event.key == "Enter" && (document.activeElement == projectNameInput ||
            document.activeElement == projectDescriptionInput ||
            document.activeElement == newNoteArea))
            document.activeElement.blur();
    });

    highInput.addEventListener("click", () => {
        if (highInput.checked)
            mediumInput.checked = true;
    });

    mediumInput.addEventListener("click", () => {
        highInput.checked = false;
    });

    lowInput.addEventListener("click", () => {
        highInput.checked = false;
        mediumInput.checked = false;
        lowInput.checked = true;
    });

    addTask.addEventListener("click", () => {
        let leftOverNotes;

        leftOverNotes = newNotes.querySelectorAll(".new-task-notes li");
        leftOverNotes.forEach(note => note.parentElement.removeChild(note));

        addTaskModal.style.display = "block";
        addTaskModal.querySelector("input[name='new-task-label']").focus();
    });

    addForm.addEventListener("submit", event => {
        event.preventDefault();

        let task, taskDom, priority, notes;

        priority = highInput.checked ? "high" : mediumInput.checked ? "medium" : "low"
        notes = [...addForm.querySelectorAll(".new-task-notes p")].map(p => {
            return { text: p.innerText, id: create_id(10) };
        });
        task = create_task(addForm["new-task-label"].value, false, priority, addForm["new-task-due-date"].value, create_id(10), notes);
        taskDom = create_task_dom(task, innerInterface);
        unchecked.append(taskDom);
        projectObj.tasks.push(task);
        addTaskModal.style.display = "none";
        addForm.reset();
        update();
        update_checks();
    });

    cancelCreationButton.addEventListener("click", () => {
        addForm.reset();
        addTaskModal.style.display = "none";
    });

    addNewNote.addEventListener("click", () => {
        newNotes.append(newNoteArea);
        newNoteArea.focus();
    });

    newNoteArea.addEventListener("focusout", () => {
        let value = newNoteArea.value.trim();

        if (value) {
            let li, button, parag;

            li = document.createElement("li");
            button = document.createElement("button");
            parag = document.createElement("p");

            li.append(button);
            li.append(parag);

            button.classList.add("remove-new-task-note");

            parag.innerText = value;
            newNoteArea.replaceWith(li);

            button.addEventListener("click", () => li.parentElement.removeChild(li));
        }
        else
            newNoteArea.parentElement.removeChild(newNoteArea);
        newNoteArea.value = '';
    });

    removeAllChecked.addEventListener("click", () => {
        warned.innerText = "All checked items";
        warning.style.display = "block";
        deleteLocal = true;
    });

    yes.addEventListener("click", () => {
        if (deleteLocal)
            remove_all_checked();
        hide();
    });

    no.addEventListener("click", hide);

    logo.addEventListener("click", () => imageModal.style.display = "block");

    imageInput.addEventListener("change", () => {
        make_cover(URL.createObjectURL(imageInput.files[0]), 200, 200).then(res => {
            newCover = res;
            actualImg.src = newCover;
        });
    });

    actualImg.addEventListener("load", () => {
        imageInputWrapper.replaceWith(actualImg);
    });

    imageYes.addEventListener("click", () => {
        projectObj.img = newCover ? newCover : "./pepe.jpg";
        logo.src = newCover ? newCover : "./pepe.jpg";
        hide_cover();
    });

    imageNo.addEventListener("click", hide_cover);

    function hide_cover() {
        imageModal.style.display = "none";
        actualImg.replaceWith(imageInputWrapper);
        newCover = '';
    }

    function hide() {
        warning.style.display = "none";
        deleteLocal = false;
    }

    function remove_all_checked() {
        let toRemoveDom;

        toRemoveDom = checked.querySelectorAll(".task");
        toRemoveDom.forEach(remed => remed.parentElement.removeChild(remed));
        kill_many(projectObj.tasks, task => task.checked);
        update();
        update_checks();
    }

    function update_checks() {
        //remove event listeners, is this even necessary?
        checks.forEach(check => check.removeEventListener("click", update));
        checks = document.querySelectorAll(".project-item .task .checkmark input[type='checkbox']");
        checks.forEach(check => check.addEventListener("click", update));
    }

    function update() {
        update_per_chan();
        draw_percentage();
        extInterface.side.update();
    }

    function update_per_chan() {
        let per;

        if (!projectObj.tasks.length)
            per = 0;
        else
            per = ~~(100 * projectObj.tasks.filter(task => task.checked).length / projectObj.tasks.length);
        canvasProgress.innerText = `${per}%`;
    }

    function draw_percentage() {
        let angle;

        if (!projectObj.tasks.length)
            angle = 0;
        else
            angle = Math.PI * 2 * projectObj.tasks.filter(task => task.checked).length / projectObj.tasks.length;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.lineWidth = 10;
        context.strokeStyle = "rgb(225, 200, 255)";
        context.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2 - 5, 0, Math.PI * 2);
        context.stroke();
        context.beginPath();
        context.strokeStyle = "rgb(100, 150, 1900)";
        context.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2 - 5, - Math.PI / 2, angle - Math.PI / 2);
        context.stroke();
    }

    function update_external() {
        console.log("hi");
        return 0;
    }

    return { project, update : update_external };
}