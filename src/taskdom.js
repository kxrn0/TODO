import { create_id, due_date } from "./utilities.js";

export function create_task_dom(taskObj, extInterface) {
    const task = document.createElement("div");
    const mainSection = document.createElement("div");
    const checkMark = document.createElement("div");
    const checkInput = document.createElement("input");
    const checkLabel = document.createElement("label")
    const label = document.createElement("h2");
    const labelInput = document.createElement("input");
    const dueDate = document.createElement("p");
    const expand = document.createElement("input");
    const priority = document.createElement("div");
    const high = document.createElement("div");
    const medium = document.createElement("div");
    const low = document.createElement("div");
    const extraWrapper = document.createElement("div");
    const extraSection = document.createElement("div");
    const edit = document.createElement("div");
    const deleteTask = document.createElement("button");
    const changeDate = document.createElement("div");
    const dateLabel = document.createElement("label");
    const dateInput = document.createElement("input");
    const changePriority = document.createElement("div");
    const priorityLabel = document.createElement("p");
    const priorities = document.createElement("div");
    const priorityHigh = document.createElement("div");
    const priorityMedium = document.createElement("div");
    const priorityLow = document.createElement("div");
    const highCheck = document.createElement("input");
    const highLabel = document.createElement("label");
    const mediumCheck = document.createElement("input");
    const mediumLabel = document.createElement("label");
    const lowCheck = document.createElement("input");
    const lowLabel = document.createElement("label");
    const notes = document.createElement("div");
    const notesContainer = document.createElement("div");
    const notesTitle = document.createElement("h2");
    const addNote = document.createElement("button");
    const noteArea = document.createElement("textarea");

    task.append(mainSection);
    mainSection.append(checkMark);
    checkMark.append(checkInput);
    checkMark.append(checkLabel);
    mainSection.append(label);
    mainSection.append(dueDate);
    mainSection.append(expand);
    mainSection.append(priority);
    priority.append(high);
    priority.append(medium);
    priority.append(medium);
    priority.append(low);
    task.append(extraWrapper);
    extraWrapper.append(extraSection);
    extraSection.append(edit);
    edit.append(deleteTask);
    edit.append(changeDate);
    changeDate.append(dateLabel);
    changeDate.append(dateInput);
    edit.append(changePriority);
    changePriority.append(priorityLabel);
    changePriority.append(priorities);
    priorities.append(priorityHigh);
    priorityHigh.append(highCheck);
    priorityHigh.append(highLabel);
    priorities.append(priorityMedium);
    priorityMedium.append(mediumCheck);
    priorityMedium.append(mediumLabel);
    priorities.append(priorityLow);
    priorityLow.append(lowCheck);
    priorityLow.append(lowLabel);
    extraSection.append(notes);
    notes.append(notesTitle);
    notes.append(notesContainer);
    notes.append(addNote);

    task.classList.add("task");
    task.classList.add("unchecked");
    mainSection.classList.add("main-section");
    checkMark.classList.add("checkmark");
    label.classList.add("label");
    labelInput.setAttribute("type", "text");
    dueDate.classList.add("due-date");
    expand.classList.add("expand-contract");
    expand.setAttribute("type", "checkbox");
    priority.classList.add("priority");
    high.classList.add("high");
    medium.classList.add("medium");
    low.classList.add("low");
    extraWrapper.classList.add("extra-wrapper");
    extraSection.classList.add("extra-section");
    edit.classList.add("edit");
    deleteTask.classList.add("delete");
    changeDate.classList.add("change-date");
    changePriority.classList.add("change-priority");
    priorities.classList.add("priorities");
    priorityHigh.classList.add("high-priority");
    priorityMedium.classList.add("medium-priority");
    priorityLow.classList.add("low-priority");
    notes.classList.add("notes");
    notesContainer.classList.add("container");
    addNote.classList.add("add-note");

    priorityLabel.innerText = "Priority";
    checkInput.setAttribute("type", "checkbox");
    checkInput.id = `check-${taskObj.id}`;
    checkInput.checked = taskObj.checked;
    checkLabel.setAttribute("for", `check-${taskObj.id}`);
    checkLabel.innerText = "Done!";
    label.innerText = taskObj.description;
    dueDate.innerText = due_date(taskObj.duedate);
    dateInput.setAttribute("type", "date");
    dateInput.id = `date-input-${taskObj.id}`;
    dateInput.value = taskObj.duedate;
    dateLabel.setAttribute("for", `date-input-${taskObj.id}`);
    dateLabel.innerText = "Due Date";
    highCheck.setAttribute("type", "checkbox");
    highCheck.id = `high-${taskObj.id}`;
    highCheck.id = `high-${taskObj.id}`;
    highLabel.setAttribute("for", `high-${taskObj.id}`);
    highLabel.innerText = "High";
    mediumCheck.setAttribute("type", "checkbox");
    mediumCheck.id = `medium-${taskObj.id}`;
    mediumLabel.setAttribute("for", `medium-${taskObj.id}`);
    mediumLabel.innerText = "Medium";
    lowCheck.setAttribute("type", "checkbox");
    lowCheck.id = `low-${taskObj.id}`;
    lowLabel.setAttribute("for", `low-${taskObj.id}`);
    lowLabel.innerText = "Low";
    notesTitle.innerText = "Notes";

    if (taskObj.priority == "high") {
        highCheck.checked = true;
        mediumCheck.checked = true;
        lowCheck.checked = true;

        high.classList.add("active");
        medium.classList.add("active");
    }
    else if (taskObj.priority == "medium") {
        highCheck.checked = false;
        mediumCheck.checked = true;
        lowCheck.checked = true;

        medium.classList.add("active");
    }
    else if (taskObj.priority == "low") {
        highCheck.checked = false;
        mediumCheck.checked = false;
        lowCheck.checked = true;
    }

    highCheck.addEventListener("click", () => {
        if (highCheck.checked) {
            mediumCheck.checked = true;
            lowCheck.checked = true;
            taskObj.priority = "high";

            high.classList.add("active");
        }
        else {
            taskObj.priority = "medium";

            high.classList.remove("active");
        }

        medium.classList.add("active");
    });

    mediumCheck.addEventListener("click", () => {
        if (mediumCheck.checked) {
            lowCheck.checked = true;
            taskObj.priority = "medium";

            high.classList.remove("active");
            medium.classList.add("active");
        }
        else {
            highCheck.checked = false;
            taskObj.priority = "low";

            high.classList.remove("active");
            medium.classList.remove("active");
        }
    });

    lowCheck.addEventListener("click", () => {
        if (!lowCheck.checked) {
            highCheck.checked = false;
            mediumCheck.checked = false;
        }
        lowCheck.checked = true;
        taskObj.priority = "low";

        high.classList.remove("active");
        medium.classList.remove("active");
    });

    for (let note of taskObj.notes) {
        notesContainer.append(create_note(note));
    }

    expand.addEventListener("click", resize_expanded);

    checkInput.addEventListener("click", () => {
        taskObj.checked = checkInput.checked;
        task.classList.toggle("checked");
        task.classList.toggle("unchecked");

        if (checkInput.checked) {
            extInterface.unchecked.removeChild(task);
            extInterface.checked.append(task);
            highCheck.disabled = true;
            mediumCheck.disabled = true;
            lowCheck.disabled = true;
            dateInput.disabled = true;
            addNote.disabled = true;
        }
        else {
            extInterface.checked.removeChild(task);
            extInterface.unchecked.append(task);
            highCheck.disabled = false;
            mediumCheck.disabled = false;
            lowCheck.disabled = false;
            dateInput.disabled = false;
            addNote.disabled = false;
        }
        task.scrollIntoView({ behavior: "smooth" });
    });

    dateInput.addEventListener("change", () => {
        dueDate.innerText = due_date(dateInput.value);
        taskObj.duedate = dateInput.value;
    });

    addNote.addEventListener("click", () => {
        notesContainer.append(noteArea);
        resize_expanded();
        noteArea.focus();
    });

    noteArea.addEventListener("focusout", () => {
        let value;

        value = noteArea.value.trim();
        if (value) {
            let braveNewNote;

            braveNewNote = { text: value, id: create_id(10) };
            notesContainer.append(create_note(braveNewNote));
            taskObj.notes.push(braveNewNote);
        }
        noteArea.value = '';
        noteArea.parentElement.removeChild(noteArea);
        resize_expanded();
    });

    document.addEventListener("keydown", event => {
        if (event.key == "Enter" && document.activeElement == noteArea)
            document.activeElement.blur();
    });

    label.addEventListener("click", () => {
        if (!checkInput.checked) {
            labelInput.value = label.innerText;
            label.replaceWith(labelInput);
            labelInput.focus();
        }
    });

    labelInput.addEventListener("focusout", () => {
        let value;

        value = labelInput.value.trim();
        if (value) {
            label.innerText = value;
            labelInput.replaceWith(label);
            taskObj.description = value;
        }
    });

    document.addEventListener("keydown", event => {
        if (event.key == "Enter" && document.activeElement == labelInput)
            document.activeElement.blur();
    });

    deleteTask.addEventListener("click", () => {
        let name, deleteButton, cancelButton;

        name = extInterface.modal.querySelector(".modal-content p");
        name.innerText = taskObj.description;
        extInterface.modal.style.display = "block";
        deleteButton = extInterface.modal.querySelector(".yes");
        cancelButton = extInterface.modal.querySelector(".no");

        deleteButton.addEventListener("click", delete_task);

        cancelButton.addEventListener("click", hide);

        function delete_task() {
            let index;

            index = extInterface.array.findIndex(task => task.id == taskObj.id);
            extInterface.array.splice(index, 1);
            task.parentElement.removeChild(task);
            hide();
        }

        function hide() {
            extInterface.modal.style.display = "none";

            deleteButton.removeEventListener("click", delete_task);

            cancelButton.removeEventListener("click", hide);
        }
    });

    function resize_expanded() {
        let height;

        height = window.getComputedStyle(extraSection).height;
        if (expand.checked) {
            extraWrapper.style.height = height;
            extraSection.style.top = 0;
        }
        else {
            extraWrapper.style.height = 0;
            extraSection.style.top = `-${height}`;
        }
    }

    function create_note(newNote) {
        const note = document.createElement("div");
        const deleteNote = document.createElement("button");
        const noteContent = document.createElement("p");

        note.append(deleteNote);
        note.append(noteContent);

        note.classList.add("note");
        deleteNote.classList.add("delete");

        noteContent.innerText = newNote.text;

        deleteNote.addEventListener("click", () => {
            if (checkInput.checked)
                return;

            let index;

            index = taskObj.notes.findIndex(deathNote => deathNote.id == newNote.id);
            taskObj.notes.splice(index, 1);

            note.parentElement.removeChild(note);
            resize_expanded();
        });
        return note;
    }

    return task;
}