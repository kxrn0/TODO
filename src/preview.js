import { create_task_dom } from "./taskdom";

export function create_preview(projectItems, timePeriod) {
    const preview = document.createElement("ul");

    preview.classList.add("period-projects");

    for (let i = 0; i < projectItems.length; i++) {
        let tasks;

        tasks = projectItems[i].project.tasks.filter(task => {
            if (is_within_date(task.duedate, timePeriod) && !task.checked)
                return true;
            return false;
        });
        if (tasks.length)
            preview.append(create_li(tasks, projectItems[i].project.label, projectItems[i].update));
    }

    function is_within_date(one, two) {
        return true;
    }

    function create_li(tasks, label, update) {
        const li = document.createElement("li");
        const period = document.createElement("div");
        const principal = document.createElement("div");
        const img = document.createElement("img");
        const projectLabel = document.createElement("h2");
        const canvas = document.createElement("canvas");
        const chevron = document.createElement("input");
        const wrapper = document.createElement("div");
        const lower = document.createElement("div");
        let checks, expandables;
        
        li.append(period);
        period.append(principal);
        principal.append(img);
        principal.append(projectLabel);
        principal.append(canvas);
        principal.append(chevron);
        period.append(wrapper);
        wrapper.append(lower);

        period.classList.add("period-project");
        principal.classList.add("principal-section");
        chevron.classList.add("show-tasks");
        wrapper.classList.add("extra-wrapper");
        lower.classList.add("lower-section");

        img.src = "./project.svg";
        projectLabel.innerText = label;
        canvas.width = 50;
        canvas.height = 50;
        chevron.setAttribute("type", "checkbox");
        checks = [];
        expandables = [];

        for (let task of tasks) {
            let taskDom;

            taskDom = create_task_dom(task, { warning : null }).cloneNode(true);
            checks.push(taskDom.querySelector(".checkmark input[type='checkbox']"));
            expandables.push(taskDom.querySelector(".expand-contract"));
            lower.append(taskDom);
        }

        checks.forEach(check => check.addEventListener("click", () => {
            let task;
    
            task = check.parentElement.parentElement.parentElement;
            lower.removeChild(task);
            expand_contract();
            if (!preview.querySelectorAll(".task").length)
                preview.parentElement.removeChild(preview);
            //update();
        }));

        expandables.forEach(expandable => expandable.parentElement.removeChild(expandable));

        chevron.addEventListener("click", expand_contract);

        function expand_contract() {
            let height;
            
            height = window.getComputedStyle(lower).height;
            if (chevron.checked) {
                wrapper.style.height = height
                lower.style.top = 0;
            }
            else {
                wrapper.style.height = 0;
                lower.style.top = `-${height}`;
            }
        }

        return li;
    }
    
    return preview;
}