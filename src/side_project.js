export function create_side_project(projectObj, extInterface) {
    const sideProject = document.createElement("div");
    const logo = document.createElement("img");
    const projectName = document.createElement("h3");
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    sideProject.append(logo);
    sideProject.append(projectName);
    sideProject.append(canvas);

    sideProject.classList.add("project");
    logo.src = "./project.svg";
    projectName.innerText = projectObj.label;
    canvas.width = 50;
    canvas.height = 50;

    function update() {
        projectName.innerText = projectObj.label;
        draw_percentage();
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

    function remove() {
        sideProject.parentElement.removeChild(sideProject);
    }

    //sideProject.addEventListener("click", () => document.querySelector("main .project-item").replaceWith(mainProject));

    return { side : sideProject, update, remove };
}