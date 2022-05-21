import { create_task_dom } from "./taskdom";
import { emptyObj } from "./empty_period";

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
            preview.append(create_li(tasks, projectItems[i]));
    }

    function is_within_date(duedate, period) {
        let today, currentPeriod, correctPeriod;

        today = new Date();
        currentPeriod = [
            today.getFullYear(),
            today.getMonth() + 1,
            today.getDate()
        ];
        correctPeriod = duedate.split('-');

        if (period == "today" && currentPeriod[0] == correctPeriod[0] &&
            currentPeriod[1] == correctPeriod[1] && currentPeriod[2] == correctPeriod[2])
            return true;
        else if (period == "this-week") {
            let dates, dayLength, startOfTheWeek;

            dates = [];
            dayLength = 24 * 3600 * 1000;
            startOfTheWeek = new Date(today - today.getDay() * dayLength);
            for (let i = 0; i < 7; i++)
                dates.push(new Date(startOfTheWeek.valueOf() + i * dayLength));
            dates = dates.map(date => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`);
            return dates.some(date => date == duedate)
        }
        else if (period == "this-month" && currentPeriod[0] == correctPeriod[0] &&
            currentPeriod[1] == correctPeriod[1])
            return true;
        else if (period == "this-year" && currentPeriod[0] == correctPeriod[0])
            return true;
        return false;
    }

    function create_li(tasks, projectItem) {
        const li = document.createElement("li");
        const period = document.createElement("div");
        const principal = document.createElement("div");
        const img = document.createElement("img");
        const projectLabel = document.createElement("h2");
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        const chevron = document.createElement("input");
        const wrapper = document.createElement("div");
        const lower = document.createElement("div");
        let expandables;

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
        projectLabel.innerText = projectItem.project.label;
        canvas.width = 50;
        canvas.height = 50;
        chevron.setAttribute("type", "checkbox");
        expandables = [];
        draw_percentage();

        for (let task of tasks) {
            let taskDom, check;

            taskDom = create_task_dom(task, { warning: null }).cloneNode(true);
            expandables.push(taskDom.querySelector(".expand-contract"));
            lower.append(taskDom);

            check = taskDom.querySelector(".checkmark input[type='checkbox']");
            check.addEventListener("click", () => {
                lower.removeChild(taskDom);
                task.checked = true;
                expand_contract();
                projectItem.update();
                draw_percentage();

                if (!li.querySelector(".task"))
                    preview.removeChild(li);

                if (!preview.querySelectorAll(".task").length) {
                    let main;

                    main = preview.parentElement;
                    main.removeChild(preview);
                    main.append(emptyObj);
                }
            });
        }

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

        function draw_percentage() {
            let angle;

            angle = Math.PI * 2 * projectItem.project.tasks.filter(task => task.checked).length / projectItem.project.tasks.length;

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

        return li;
    }

    return preview;
}