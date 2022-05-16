import "./imports.js";

import { create_task } from "./task.js";
import { create_task_dom } from "./taskdom.js";
import { create_id } from "./utilities.js";
import { emptyObj } from "./empty_period.js";
// import { asideInterface } from "./aside.js";

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
    unchecked.append(create_task_dom(task, extInterface));
}

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
//     console.log(parent);
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

// import { create_project_main_dom } from "./project_dom.js";
// import { create_project } from "./project.js";

// const main = document.querySelector("main");

// let label, description, img, tasks, id, project, projectDom;

// label = "By Me";
// description = "This is a title, it's unclear, but its obvious."
// //#region
// img = "data:image/png;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4gxYSUNDX1BST0ZJTEUAAQEAAAxITGlubwIQAABtbnRyUkdCIFhZWiAHzgACAAkABgAxAABhY3NwTVNGVAAAAABJRUMgc1JHQgAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLUhQICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFjcHJ0AAABUAAAADNkZXNjAAABhAAAAGx3dHB0AAAB8AAAABRia3B0AAACBAAAABRyWFlaAAACGAAAABRnWFlaAAACLAAAABRiWFlaAAACQAAAABRkbW5kAAACVAAAAHBkbWRkAAACxAAAAIh2dWVkAAADTAAAAIZ2aWV3AAAD1AAAACRsdW1pAAAD+AAAABRtZWFzAAAEDAAAACR0ZWNoAAAEMAAAAAxyVFJDAAAEPAAACAxnVFJDAAAEPAAACAxiVFJDAAAEPAAACAx0ZXh0AAAAAENvcHlyaWdodCAoYykgMTk5OCBIZXdsZXR0LVBhY2thcmQgQ29tcGFueQAAZGVzYwAAAAAAAAASc1JHQiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAABJzUkdCIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWFlaIAAAAAAAAPNRAAEAAAABFsxYWVogAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z2Rlc2MAAAAAAAAAFklFQyBodHRwOi8vd3d3LmllYy5jaAAAAAAAAAAAAAAAFklFQyBodHRwOi8vd3d3LmllYy5jaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkZXNjAAAAAAAAAC5JRUMgNjE5NjYtMi4xIERlZmF1bHQgUkdCIGNvbG91ciBzcGFjZSAtIHNSR0IAAAAAAAAAAAAAAC5JRUMgNjE5NjYtMi4xIERlZmF1bHQgUkdCIGNvbG91ciBzcGFjZSAtIHNSR0IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZGVzYwAAAAAAAAAsUmVmZXJlbmNlIFZpZXdpbmcgQ29uZGl0aW9uIGluIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAALFJlZmVyZW5jZSBWaWV3aW5nIENvbmRpdGlvbiBpbiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHZpZXcAAAAAABOk/gAUXy4AEM8UAAPtzAAEEwsAA1yeAAAAAVhZWiAAAAAAAEwJVgBQAAAAVx/nbWVhcwAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAo8AAAACc2lnIAAAAABDUlQgY3VydgAAAAAAAAQAAAAABQAKAA8AFAAZAB4AIwAoAC0AMgA3ADsAQABFAEoATwBUAFkAXgBjAGgAbQByAHcAfACBAIYAiwCQAJUAmgCfAKQAqQCuALIAtwC8AMEAxgDLANAA1QDbAOAA5QDrAPAA9gD7AQEBBwENARMBGQEfASUBKwEyATgBPgFFAUwBUgFZAWABZwFuAXUBfAGDAYsBkgGaAaEBqQGxAbkBwQHJAdEB2QHhAekB8gH6AgMCDAIUAh0CJgIvAjgCQQJLAlQCXQJnAnECegKEAo4CmAKiAqwCtgLBAssC1QLgAusC9QMAAwsDFgMhAy0DOANDA08DWgNmA3IDfgOKA5YDogOuA7oDxwPTA+AD7AP5BAYEEwQgBC0EOwRIBFUEYwRxBH4EjASaBKgEtgTEBNME4QTwBP4FDQUcBSsFOgVJBVgFZwV3BYYFlgWmBbUFxQXVBeUF9gYGBhYGJwY3BkgGWQZqBnsGjAadBq8GwAbRBuMG9QcHBxkHKwc9B08HYQd0B4YHmQesB78H0gflB/gICwgfCDIIRghaCG4IggiWCKoIvgjSCOcI+wkQCSUJOglPCWQJeQmPCaQJugnPCeUJ+woRCicKPQpUCmoKgQqYCq4KxQrcCvMLCwsiCzkLUQtpC4ALmAuwC8gL4Qv5DBIMKgxDDFwMdQyODKcMwAzZDPMNDQ0mDUANWg10DY4NqQ3DDd4N+A4TDi4OSQ5kDn8Omw62DtIO7g8JDyUPQQ9eD3oPlg+zD88P7BAJECYQQxBhEH4QmxC5ENcQ9RETETERTxFtEYwRqhHJEegSBxImEkUSZBKEEqMSwxLjEwMTIxNDE2MTgxOkE8UT5RQGFCcUSRRqFIsUrRTOFPAVEhU0FVYVeBWbFb0V4BYDFiYWSRZsFo8WshbWFvoXHRdBF2UXiReuF9IX9xgbGEAYZRiKGK8Y1Rj6GSAZRRlrGZEZtxndGgQaKhpRGncanhrFGuwbFBs7G2MbihuyG9ocAhwqHFIcexyjHMwc9R0eHUcdcB2ZHcMd7B4WHkAeah6UHr4e6R8THz4faR+UH78f6iAVIEEgbCCYIMQg8CEcIUghdSGhIc4h+yInIlUigiKvIt0jCiM4I2YjlCPCI/AkHyRNJHwkqyTaJQklOCVoJZclxyX3JicmVyaHJrcm6CcYJ0kneierJ9woDSg/KHEooijUKQYpOClrKZ0p0CoCKjUqaCqbKs8rAis2K2krnSvRLAUsOSxuLKIs1y0MLUEtdi2rLeEuFi5MLoIuty7uLyQvWi+RL8cv/jA1MGwwpDDbMRIxSjGCMbox8jIqMmMymzLUMw0zRjN/M7gz8TQrNGU0njTYNRM1TTWHNcI1/TY3NnI2rjbpNyQ3YDecN9c4FDhQOIw4yDkFOUI5fzm8Ofk6Njp0OrI67zstO2s7qjvoPCc8ZTykPOM9Ij1hPaE94D4gPmA+oD7gPyE/YT+iP+JAI0BkQKZA50EpQWpBrEHuQjBCckK1QvdDOkN9Q8BEA0RHRIpEzkUSRVVFmkXeRiJGZ0arRvBHNUd7R8BIBUhLSJFI10kdSWNJqUnwSjdKfUrESwxLU0uaS+JMKkxyTLpNAk1KTZNN3E4lTm5Ot08AT0lPk0/dUCdQcVC7UQZRUFGbUeZSMVJ8UsdTE1NfU6pT9lRCVI9U21UoVXVVwlYPVlxWqVb3V0RXklfgWC9YfVjLWRpZaVm4WgdaVlqmWvVbRVuVW+VcNVyGXNZdJ114XcleGl5sXr1fD19hX7NgBWBXYKpg/GFPYaJh9WJJYpxi8GNDY5dj62RAZJRk6WU9ZZJl52Y9ZpJm6Gc9Z5Nn6Wg/aJZo7GlDaZpp8WpIap9q92tPa6dr/2xXbK9tCG1gbbluEm5rbsRvHm94b9FwK3CGcOBxOnGVcfByS3KmcwFzXXO4dBR0cHTMdSh1hXXhdj52m3b4d1Z3s3gReG54zHkqeYl553pGeqV7BHtje8J8IXyBfOF9QX2hfgF+Yn7CfyN/hH/lgEeAqIEKgWuBzYIwgpKC9INXg7qEHYSAhOOFR4Wrhg6GcobXhzuHn4gEiGmIzokziZmJ/opkisqLMIuWi/yMY4zKjTGNmI3/jmaOzo82j56QBpBukNaRP5GokhGSepLjk02TtpQglIqU9JVflcmWNJaflwqXdZfgmEyYuJkkmZCZ/JpomtWbQpuvnByciZz3nWSd0p5Anq6fHZ+Ln/qgaaDYoUehtqImopajBqN2o+akVqTHpTilqaYapoum/adup+CoUqjEqTepqaocqo+rAqt1q+msXKzQrUStuK4trqGvFq+LsACwdbDqsWCx1rJLssKzOLOutCW0nLUTtYq2AbZ5tvC3aLfguFm40blKucK6O7q1uy67p7whvJu9Fb2Pvgq+hL7/v3q/9cBwwOzBZ8Hjwl/C28NYw9TEUcTOxUvFyMZGxsPHQce/yD3IvMk6ybnKOMq3yzbLtsw1zLXNNc21zjbOts83z7jQOdC60TzRvtI/0sHTRNPG1EnUy9VO1dHWVdbY11zX4Nhk2OjZbNnx2nba+9uA3AXcit0Q3ZbeHN6i3ynfr+A24L3hROHM4lPi2+Nj4+vkc+T85YTmDeaW5x/nqegy6LzpRunQ6lvq5etw6/vshu0R7ZzuKO6070DvzPBY8OXxcvH/8ozzGfOn9DT0wvVQ9d72bfb794r4Gfio+Tj5x/pX+uf7d/wH/Jj9Kf26/kv+3P9t////2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAEsASwDASIAAhEBAxEB/8QAHAAAAgMBAQEBAAAAAAAAAAAAAAECAwQFBgcI/8QAORAAAQQBAwIEBAQFAwQDAAAAAQACAxEEBRIhMUEGE1FhFCJxgQcykaEVI0Kx0VLB8CQz4fEWQ2L/xAAaAQEBAQEBAQEAAAAAAAAAAAAAAQIDBAUG/8QAJhEBAQEAAgEEAgEFAQAAAAAAAAECAxESBCExQRMiUQUUYXGRQv/aAAwDAQACEQMRAD8A+FGku1qcLGSTMa+QRscQC8gkN9TxyUpGBj3NDg4AkBw6FehzKMMMjRI4tYTy4CyB9FFJCindJ2khESQCWgizz6JWl1KqGhTLG9WkuHrVKPFD17opK6OYMjLC277qlCRD68o28JgpElULokmhRQnSS24mpPxMSfG+Hxpo5iC7zog4ggECj1HX6HhBksBtUpxReYCfRVX/AO0w4joaVQ3N2mlFSbReN11fKuyxAJf+nJLPdBXBK+CdksZAew2CQDz9CnCYXTXk+Zso35dXdcde1qtCdhf85WnIdiuggGPHI2QN/ml5BBd7LMmG2gApAEq6GDcVf5A6VytzFYu4yBhtSLQtfwzgOQn8Ka6FanHWPNjMZpVlpC6BgcCL6Kv4Z8kmyNjnuN8NbZIAs8KXFammIKQNFSLKUO/osfDp32tJBohJw4Q+eWSOOJ7yWRAhjT0bZs/uSouO00HBw9Qr2iJHKdJXyu3pODoeRiF+oa3JhTbyBE3AM4LaFHcCP0WLemo4ANG1fNO2SKNrY2tLBRcLt/uVQhQFpsALwHGhfJrok2u6O6AcAHGjY7H1QEI6KhoHRatQzG5ssb2Y0WOGRtZtjFBxH9X1KyIRIJICCgE2iwoougoGgJJhUTdVKTcaV0BmbG4xA7S+uL9LVSsbPK2IxiR3lk2W3wrOvsJwG0V17qFKVgjlRCgY4sUnYDK28+qElQgmmBak2Mu5QVotSc2igsLevdBFXx2ARxz7Kto5WqCO1czusavS2EOHTut8GNu5KIYRQW+COq9F6sxxV/DcVVqYxeB8q6+EMT+Z8U15+Q7Cw9Hdr9uqfmb4Rj7WbA4uBDaPPv6cdO33XWSMuM/E3Dos3w8sLxNHubtP5mmv3+i9B5II9FnyY3GMM/pHQeitxFjymTEDI4sZtaSabd17e6xujIPRdzKgoHhYmNZteHdey8m8u2XO6Hoom6Vko+Y0qlxbCfKSmKpFKGV0ErZWVuabFi/2UHEl5c6rJ57BCiVOxY5zNjNrSHAfMb6n/ZQ68pNcQ6wmoDshCFRONzWyBz2b2jqLq/uouNuJA+gSQnYZquOfdFEjhJWNeAwgjlBWhPqnSCKaEIBHRCm6NzQCfsggOqumbA1sRhkc8uYDIHNra7uBzyPf/CqCEBaAhCC7IibA8MZPFMC0HdFdWRdcgcj9PROGQNHKppFKiyRwLrCRdYChSsZHdcgX6ogjFldKN7ZA0BgFei5wG1xHHHHC2QOpbyxqOxA3gWtsW1vULJiPjD6m3AUfyjm+yu388ELtKxY0A30V7b3A9ysbXkdFpZNZ5XWaY6bI+RR6pTR8JROtWv8AnFBXyakcbPxQG/KvP5UTozyKXpcy43USuNqWV53FAAegXDfVdI5DZBHvBaHbhXKi1vyngWapRkItTbIC1cI0rlbGHDy91UPzdbrn7Ku1ZK5p/LfTm1WpWoSipBIrIEUi1Kix3zAg13QIDkWrsmAQFoDrsWohm5u4FQkkfI4F7nOIAaCTfAFAfoqIoQhQCYFpJqgCdpIQCEIQWReUGyeYHFxb/LLTQBsdfUVam7zDjte6thO0ci7AHbr3VCYVQITpCAQQpF10ladBDgItFIQANcqx0m4eirT6KiTAXOAHJWmF4a4BZAeVbFyaB5SJXeeSGMkMgeXC+tkfVTjfwuXE17hYBLbq64/VdJkzRjtYYyJATZvqtysNTZFZ8wANGlljdxybWkzvMTYyflb0W4jRFNQ6qx2YWGweQuaZa79FnmyeOqnk0uzcwyEk9VxJ5bvlWzTA9SsEr7KxdLFbzZ6qNp9SgilzbRQhO0EQkl3QVA+6aQR3QTa5wFA8FKlJ8flhh3sdubu+U3XsfdRKBUjhPskgEI7IVDQmikFuM6BkpOTG97NpoMdtN1x9lSeqE6UAEUpMsG2kgjuEAWVqIfZSIj8qwXb93ShVfW+q35cmDJh4rMaAxzNaBM4m959evqr9P8N6rqYBxcGVzT0cRtH7qs2uNSsaYxEQWnffBvhe4g/CrxDLG15bjM3C6MoJ/uoP/DDxBHvLYoZNn5mteCUmonk8UHAytL28DqrZzC+Rvl0Gk9hVBdPUvDWp6azdlYU8Zs3bOB91x9lX6hall+DtbkY7WAlvb3tZhypOJqrSBIStQipNNFImz0pNo5WSulgZfkO5Fj0K6WXlszZA9kLIuAC1vQn1XDjHIXQxzyLXTLna2xtqtyuedo4WVzi1IykjldOklUzSkOPKySyDbd8qUri5xAWORxsi1yvs3EXvtUkpu7FRBAcC4WB1HquVbgaaKkXIlcx0r3Rs2MJJazde0el91EIpIUw0bgD0Vj4mh3BQZqtFIKXdQOkKSSBWmEWKoDt1TCCXZQPVSII6qKpBxXU36UhAUg1QJTjc1rwXix6KNK2bHdC1jnEEOFilUVuILiQOPRFJNIDgT0WuZ8cjPl/t0VkLVMb3s3bTVij9F19B8N5+v5QixI/kB+eV35WrV4W8MS6/mt3l0WG1wbJL6n/SPdfV9Rji0fHxtJ0prWOLdvlx11PHUd0nveo56108zpGhaJoU2/Jh+Mcz80rqo/Qdl19Vz4YGCWeMwRztDsaKCZp2tvku9OOiXiGWYT4Gj6hHDgxMbvMkQMnX6Lzmo6fjO1H4fAne6IN4kyAI7NWe9Bevh4p9vFzc1+nsm52fj40epYGPlnSw0OIlksu9TxzVrLLqEk2b8biapjsaGCV8QeSRzy35hyf2XMwHarJhO0jH13D+DEO9wlftAB6sBIvg+iNBxtLxtRzcbWXRyWyochrnGMO+3259q7rvM9d2xw1vykket1jXsCTTA2HKZI55Fxltmu9g9FwJ/Bui+JNOdNixnGzWj5nNNtcVk0Jums1jytajJhc0taZA4NDuxI9CFrz80aVnTYelZYdiEhwdGQTyOW7u9LhrgzZ4Z+fnt6Jzan7X4fMtc8N6hoWR5eXAWtPLZOxC4zo6X6P1LDwNS0KDHncyaCamxyPPQkdV8S8TeHcnQNRdBNGRGTcbuxC8ube+tPZNdzt57y7HREbfmoq91NHRJnJul08U7WRt5WyJtFUR0VsibwukjFSfW3qsrnbbFrRJ+VYZXK0VPmMbiQsbzucT3U5XWVT1Xn1XbMIoVjo37Q8tIaehrqqvdYbCdIJBPAofW1dBEZRJTw0NbZs1aCm0WkeCQjqgG1u+bok6txrogq7DjxpJi3LmfDHscQ9jN53UaFehNBS3qClvXlXNgL4ZZQ5m2ICw5ws2ew7qmqStUFKbOqsmyDNHCzy42CJm0FjaLvc+pVQdwiNUWW2CdsroIpg0EbJW202CP/Kpypo5sqSSLHZjsceImOJDfYEkk+vPqq0q5Usnfa9hSBSPCAqHaLJ4tCKUAOq6Wi4Euq6lDgwMDpJnBoJNBvPJXOpfQfw4xm4vxerSR7nBpihcejT3P+yl34ztm+/s9wcFmg+HodPxoS+KJwfJI08AnsT6mlxNQ1R2XmRyxMEAiAEYZ/SB3vuevK7J1+P+B5OA6IukldYfYodP8LyU+RDEdrpGh3YWt8PJmfLhyYv00ZWblPzo86WSR8zXBzZH83S6mgQY/ibXcl+tZexxZvvcGF56Hmq4ChqmuP1fS8DBjxWRR4jfzA2Saq/YLDpmjZuq5PlYcLZHjk/MAB9yt/3uPiOf9nr5qOPiRz68zT4JR5ck/lMlcONt9V3fEejReHszG8jJdI943/OAHNIPBXJnwpcGd8OTBsmjNOB7FZzN8VOfNc5zu5c6/wByu2fUTXvL7JfT+PtY9JPFHreku1fNz2Py2ODHQcNtoI4Hvyubk/w1urQy4uJK3DDml8D37ieeaVMULW1V9O66Wizx6frEOXPGXxsDhQFkWKsLeeXMnyl4bfpYJcLVPEkbIbxMNxva4V8wHPA4Fnhd3xLo2B4i06XD3MdlRMJio2eOyy69p0mS1+u4UjTjytG4NG11dCT9SqvDGLkyZD54nMDI6tru99gufJnPJjy766b45ca/2+IZuO7GypIH/njdtP8Az/nVUlrmHaSOfQ2vbfiVoxwNZ+PjiMcOUS4NPY2b/wCe68SGl3QdO65cevKO+p1XUiwgMZku+y5u6gFYygyz1WOCZ7Whm47fS0OmokA8LtKz0tmePVc+V3VSkkJtUPcR1U1SRS88qvupONqC89dpGx+Z5mPHG5vLGht31CyHqUITsJHTojupDaAbFntz0UVFCZaW9QRfPKEETyUk0KB+yiQmUIEmhWSy+bttrG7WhvyirodfqgrTBo2khAElxtCAhBIBSY0uJ9lAIvlBtbFGRx+5X1XwM/HxtFxYZMZ+RNMCYomiw4km7/ZfImSFq+u/h3mYeTo+2c7Z8Zu2OUdY3gkg/cFeT12/Hi7jXFO9NrzE/BGHFgf9TJwXd7BPT7WvF6jpWQ3VWOEbvzAD256L2Gqa5Do+O6edz5DI/wAx7bHD/wDU0jouVB4lOrReZLCIwPyv7u+q+X6HXNnvk+Y7c+c6ni6mn4+fpMzgyNgfNER8zuKpVaMNQxHTy4c7I3NbuLX965491hfqmWJWtZK4MHLbF1+q248skpMpcLf1scL28fo+TV7lY3z5z8smofHzxS503mPMhJdIe5Xm9HllZqLDbntBtzCeDyvfySbMU4wpzZG7SOy5UeFDg5LZHYrXAfma01a9XFN8GdZs7tcOTrl1nUvw9Z4h17S9Q03FZjR3M03t2V5Yr8t/4SZ4cbk4+A6DMi8zMaXBpP5eL+64L8rSJcjHYYX47P8A7SDd/T0XQxcLCzJ5ZsPIdBBGN0QeSXkjtxz914N83LjXlqPXnObOpUM7T9S0iLyMmRzceQ2AJLY4/T9FLR9UfpmQS3mN/D2uHBWbxq7VhjYUObNv8xhLADyB78df8Kfh7GgnZBi5ttvgvJo9F9Cf1Djxxz8n/r2ee+nt11n6V/iRkQ6r4ZY5jBcL926/Uf8AhfG/MLLC+8+ItMx9O8OavC5wdG+Nr4i/kj5qq/uvgMhbwG3wO67cXt2zv6WeeUCQu7rPdJh1LvNMeLvaPoORq8GRkRvjZHBQdvJsk3QAH0K42UDHM9jurSQVbjajlYQeMad8YeKcGmrHusb3Oe4kmyeSVLpqREq7JxX4zmNc+N29geDG8OFEX1Hf27KlCw0AhCLQA5ToJA8qQ5UEpZZJ3bpXl7gKsm1Wpk8VQUCVSLnOxjgMa2OQZQeS6TcC0soUK9bvnuoSNhEMTo5HOkdfmNLKDOeKPexXYUoSs8qVzLDqJFjoUm0snwSE3UDwo2ganNK6eZ0r9u5xs7Who/QKtNFCErTRCTStCC2STzGxt2MbsbttraLubs+p5UWt3OoJBSD6ILRRA/VBJzHMNFdTQtdn0TM82P54ncSR3w4f5XLkkdKQXG6FBWYckEOS1+Tj/ERC90XmFm7jjkcjnn7LO8Z3myzuEvV7fT3P0nxTpD3YkzGSf1QymnA/7rHDpbYcNrDuY9vA56r57i5s2DkCfHftd/f2K9hpHiHUc+GQTsjEN7WuDT17r52vSbx+uL7O85J86dJoJlpdIP8ALEcbPTlY9PfCZnGdjnNLHUGnoa4SMr3ufJ1cCaA4v6L38c1308+7nrtvjz43TPZe4RkAtuyD7rZkTNk3Pb0PPSl4nDkn+KyHSNbAw0BsduJ+p9V6WEuEDNxJaQKJWpu1PGRimcXzE+hXL1bUptOkhlZK+MjrsNFdVgqYg9bXN17RcrUJ4fLA2VzyvNdTy/b4dvH29nd0jxGMzy3z4xymNFup3NL2+A7AO1+PitmfPG4xsBL3NPpXRv39F4jSvC+RhQxP3gBlbm+3uvTYmoMwMkSzSxxsa/dy6rHcV7r896iZvL3j393tz34+7D441gx+DZMPJLjlvk2vLu1E9D37L4vYo2OV6z8QfEzNd1t3w5AxovlbXf3/AN/uvGkr9R6WXPHJfl8/k6uvYFaMLFfmZAhYWhxBNuNDhZrTY8sJI9KXf792U5Yyx5b1ruquh6LrY2rMiw/JfEHO55ofNfr7hclxBcSFKN2oQYUBh+CynZAdG0vLm7S11cj9bWFFqTAxxp7too80iolJBQoBSaQCL6d1FCC1wu3NHy+qrtAc4N23x6JWgbAC7k0FEmjwi1EqAVkez+rqoAJIN+BmQYnn+bjsm8xm0EgHb9L9f9lid7dFGk0CTSTHVBLYdu6uEu6lZqrSHBtAbTV0gK+WcSMA2gUqFKGFfiwmeYNWdasKbypi77Kwq44Ek2XDjRNLnyvDWgCyvoOm+Gnw4MTJJGR0PlYTzfUml4jH1E6drOJmujc4QuD9t1u+6+j4OXiax5We1piM0bhuPG1wHABPVTWd611lz3uZz3pbh+GmiHIfPnwMb8oa5zqAB78rd/8AFtLjY98utQujFsYInBxv+ncLvkqmCGKTw9F8RjeccqfqTe4AkV9l5/BxJD4gyGsxWz7JHfJI8bQAKG49KH7r08fFuat1Xz+TmxcyZjTpGg4+Rr2bj41TvhjY5sUb20539RB/0j+635Glag3JEL8Z8VC6I+w/svP+GTmadr7s6NhGfud/22jYCXV+Xpts0F9D8Pa7rYfrMutQjL27A1hAbTxfHT2WNcV4s3r7/wCu+Obz3J/H/HzXJklj1GaNsl7X1Y9VyNU8Q6lhzmCJ7QzbQdXII4K+q5eG3WNS87J0yGLHMDpo2RPDBuNdwPVeU1/wJPlZ+Xj4LRkbGtLHxn5S8NBcB+q8urjrrce7Nt95Xz461qbtxdnTncORvKzyZM0v55nu+ptQlifBK+ORpbI004H1ChYDSCLPqumcZnxC2glR7oKFtDPRRTU3SB0TGBjQW3bhdu+qCtCZSUAhCEAhMCxaSAQEI6coBTaBXKW0eXu3i7rbXP1SQRQKHUWikqUDCDylSaAFBPhRTQCvx3QN3mZpd8vyNBrn6qhIhBInnhFqNotBY0N53X04r1SKjad8qUCYNdElIKwXSTS5RYw/M4U1oHdfQGRtZomnROiMckTedpoHj0Hf3XmfDGGyWaXIkrdHQYT0F9SvY6Xiv1rOkYwOMMAAIHAs8j9q/VXy1O5Pt5efxtnf0rg1OSJjovi9oiiJjhddFxPb9/3WX+MfwtrZDD5z82YRvBNAGwbCy6njsj8RnGjc1xiNt96A/wArF4gk8jHwDK0kDJDvlPShyrx8m5n/AE4648Xcn8vWQ6jhxOm8oME/yksYbFX0tejlyJG6SW6cBI5zPOypyCSzcaI5PqvEaXGyZ3mmMMMlE+te69hpwxoH5gblBrfI5Y1/yyEmxfqAvTdfktcMfo5jRHlZLvNBhglY4kbzTaFmyfpdJZvj/TdCgOPo++fK7yu/KSev+y8j4s10iMaVizYk0AAdJLDH8znc8bjzxZXkA1zrPZebWM3Xdnb6XH5eEk9mnUcp+bnTZMgaHyOLnBo4tYymeqijpB3VsUkLIZWvi3ve0Bj95Gw3ya7qlCii+6ZN0khAykU2OLHtcACWkEAix91KWQzSvkIAL3FxDRQ5N8KhMa0h29xaQLbQuz6KKl2TIaWNLbvv6fZREQatFGkk7vhFFIVzsWZuIzKMdQOeYw6+C4AEjr7q0wYw01s3xN5BkIMIb+Vo6En3V6GNSDuOij3W/Emw2Q1PCXvvrfZRZ7sHdJSIUVlDpIhFotUKkJpILIonyyNjiY573EBrWiyT6UiSJ8Ujo3ja5pohRa8tcC0kEdCDSkXEm3Ek97QQpHZM9UAE3VcC+SgSdKQagikoZIc7hobx0b0TDVALpaNiHP1fFxg3cHyCx7d0jOr1O3uMLRYdO8PQlzg2aWMSOLvXuP7Lf4CnxXMy53zPb5mQ8ta3+oCgAf2UfxAzXaPp/wDDDFGHOaBE5vYf5UvArX4nhCWVjGl4HnOtvFepK6b1mWdPnya1x937rlSYvxvjnU3QBzjDQa0DoSbKs8YaFNh52iY8rQ50zjIADwBQu1r/AA3iydW1/Uc45DY2ySkvocmr6fqu7nYQf+JuHhiTz8fHhErzNyQXc7b78AH7rrnWfxTH8uO5qc95P4nTm6jpeJg+GZJXZTPiZgI42Rnnnqf0tcmXIlwNCyZIJ3xSCKg5h5AXpfHToJtVxo4mNjZAw2Gtq3Hv+gXhvE2TJBprI2fK2R9E1xQ7LPJjr9p7N+n15a8Pl4wuJcS4248lMPIFKb4pXME7onNje8tDttNvqQO3F9FV0NEUuT6kNJTY4MdZaHexUDyeFFBS7opIqB2pMZvDqcAQLAPU89B7qCsx55MXIZPE7bIw200qIVSaHPL3Fzup5StEasZuM+Kbz3vDwweUGjhxvm/tarmimxnmKVhY6gaPoeQf3VNp7ieqvYXRATJVoxZzj/ECNxiut3uoqrcaSQUIBCsx4JcmdsMET5ZHXTGCyaFnj6BQ2tPUhRU3uMjy81ZNmhSqIVqg5ERQgIQT8x/leVuOzdu29rUCLQi0CCaEEeiAQtbPgv4dIHB/xe/5Tfy7VkQWNfSvxcObOdM2HZcMLp3bnhvytFmr6n2WRNKGB+i9j+HuEyfW3TzSeTjwst0xaXbSenA+i8pi40uZO2CFhc93b09yvq+hNZ4b8GyZMYjL5bD5C39T7p3O+q483dzZHivG+p5Gr+JpY9rXBjtkYiunenHqV7HTxk6J4AnkyZnMe/Ec1kPqObJXjPCGHLrvjOINmLHOkLi+gTzwveeOJ8OZ2P4cxL8vFbte5hLiWiiQT6k0rrF67c7ZLMfwl+GWm4+Lo5ypCW5b2Oc3cSR0vp3Kv8D/ABGb8Z4hyJGz5c8pdsceKPAHtQAVsmI/Q/DuRjve1uTlsHyAcxEiuPta06INP0nw4yKaRvyAu2ggX6fX1XeZncj5u96vf+au13SG6o7zsd0fnFxMgaeBxzyvkXizPblaj5EVeTCA0e5Hde71TV8zD0mfMxpGNbJGdo//AD0XyeaV00jnuNucbK6c9skxa7f0/j775OiM8hgbAZHGNri4MJ4BIAJr14UOqRQDS8tr6rXPHiiGAwPc6QtHmX/q7/uqnV3FFRgyJcbIjnhdtkjcHNd6EKMsz5ZC95tzjZPqVFBNcKs9U0IEhS4pRQCEI6KB7eEdEWgCyqBbWajMzA+EIBjskGuRaxkUooBCEKBtJa4EEg+oKfPY0oqQPCCai4WrGxSOjdIGPLGVucASG30s9r5UFUQ4ATaAeqRHKkAopGgOFBTIUSKQMKZHCgOq62r6Dm6PjYs+QGGLJZuY5jgfsfRFcnonTdhO6iKptXaimiEmOqKQOqD2/gnTIsnStWyJLa5jWhryODzyF6jxa2fR/BrY5KjdIwMZGetHlcTwrinU8LScGGUsidMTMAehBuz9gp/itmyZGpYwL3Bu3/tnqK4FrV4u/wBnCa/bpzPw6wYp9UnyA4/E48ZfG266dT9V39Cwoc3Wc/HyZpG5zmeZFHx8/wA3Nk8+68v4T8RY2gxZYmY7dJGQwsHJJ7FQxZ9T1bX369jgxGKQO3+h7ADuulk8ZLXO51bqvtvinR49TwMeJpqdrg1ldXCuQvNa7hRY7NP0yeQMqO3yOAtw7/uup4f1ZsEfxWuaiDlZdPAIpsbQKAAHThcvV8rFy8yXPlLDGSGRvI7dg0f87rrw/rerfZ4PUcf5J5Z+Xj/Guq478aPFxoTExjRExpPUDuvAnldrxNM2XVn7JA9rBVj17riWuG9eWrX1ODj8MTISpNWBoc3jqubspQmRRISQTYxzj8rSfoEFpF2FZj5Lsc23uoSSeY8uVRApISUU0IQgdGrrgcJBCYQCXVXRxMfjyyGaNjmVUZvc+zzXFce6pVovjmibiTROxmule5pbMXEOYBdgC65v9lUa7dFFCkXtJ7Hsd87S0kWARXBUUySeptJEXsyJoopIWTPbFJXmMDiGvrpY7qu//aBz2QeqoSLooUSoGSlaEBAHhXyZWRNBHFLM98cf5GucSG/RUIQCntIaHHo7pykyr+bonQ3H07IIoKZ6qKDt+H/EMuhSyuYzzA9tAXW13YrDn6jk6llOyMqQvkPcrGE1v8mvHx7Y8J320YjGSZULJASxz2ggdSLX1zB0tjMeXNyIHwadFIIsdreknXoPtyV8gx5XQzMlb+Zjg4fUL3Ob4sz/ABicHQ8WCPExI6cWMP5iB6+nt7rrx5m89ffbhzeUvf107mouk1HXWyDy4cWJoaXbt25vsuR4q1R2PFH5JaGm2xRgXQ9fqvU+INmBnQxNgY2LTcWN2Qa4e7b3XynW9Xm1nOdkytay+GsaKACxc3PdOKeUjmSPLnWeSguYWABtOHU31UCkufb0pEClGz2KEIpKyB7I5mvkiErR1YSQD+iUUfmytZua3catxoD7qLm7XEWD7hP8gcbJNBTMbBAJBK0uLi0x0bA9bqlWhAu6aO6O/W1ABCO605Qxj5Rxmvb/AC2h4e6yX1yegoE9lehmTJSpMqBKxsLnAuA4CgDSkJCBQKobonDtYUApiV4YWh3yu6hQUEg20FvKW70T3KhIRaLUAolSSQJCKTpAkIQgEKyCXyZN/lxycEVI3cOR6eqrQNJNJAKQKiFYZf5Ai2RinF24N+b6X6eyCNrTh5j8LIjmi4ex24G6+yyoC1m3N7iWSzqu5rfirVNckLsvINEAFrOAaFcri3fVR7oV1q6+UzmZ9oZKXJPHVJSY90bw9pojkH0WGke6EyS5xPcoIpAkKTa3CxYvkKUobvLmtoE3t9PZUQLS3qCPql3UnyOkNuJJ6WVGlAIQhUCFdPA2Ly9s8c29gedl/IT/AEmwOR+iqpQFpEoQgkGuLSQCQOprgJGuKtTZNIyJ8YcdjyCR2v1VfdCGDRWg4rxi+e5zRzQYSd316dFmVr8iSRoDzYAoIKwOU9qOiLQJA90ihBKlZLO+SKOM7dsdhtNAPJs2as/dVtFlBFGkC7oSTQL7qyWRsjgWxtjAaBTfUCrUEkAgIAsFXtyXDDfjbIy1zw8uI+a69eqCq+EiEX6otUCEk1AUnSVp2gKJIAF32SIIJBBBHFFSjkfFI2WNxa9jg5rh2I5BRJI+WR0j3Eue4ucT3JVEEXxXZSLCGscSPmvgEWPqOyioC07SpFIC0yUkIBCCEUgVovlMVSiRyglalfFKFpjlAWhFIQFpgJAWmDR6oLYceXIcWxMLiBZrsFU4EGj/AJV8GVLjB4ieW7xtdR6hUOJcbKCT5HyBjXGw0bW/RQqk28FMmz0QJHRCEUIQgoEj2QpxNa6VrXu2tJFu9AiGXxmANEZEm4kv3dR6UiCE5Ewia5jS6+XuocC+qnlMiZkPZC4ujB+Vx7j1VA6oBNDqvhJAIQn2QBSU9gMe7cLutvdQQCfZJCAQhXSmAxQiJrw8N/mFxsF3t6IKUWrWytbivi8lhc5wIkIO5tdh7KpA7V+FA3LzseBz9jZZGsLuOATV8rOgGjaX4HV1PS4NK13L06XLMkcD3M86OO9xF1wferXKUnPLzbnEk9STaipPj3UIR3QqgQhCATohoNGj3pJSMj3RtjL3FjSSGk8AnrSBEikkIKAU2mPyiC077sOB7elKs9Ve6FgxWSieMuLi0xC9za79KopCqU7SQgdpIKSBoQEKB2i+EnHaLpM9XexpVSQhIKIlaEkd1QISQoGEAWUk+6oEKyKXyg/+XG/c0t+dt17j3VdcBAIQeL+inIwNDCCTuYCioIQhESLW7bvlRQpVwgVJUmOSpIK00HqB6lMj+wQDQXGgLJ7Kb3Nk2BsbWENDXUSdx9TagOqfdAi0g0UlInlRKA5RSaECQhCgAacCr8nIbkOa8RMjdXO3i/euyzlBCp0LUrG3vd9b4UEx0UAmgCykOnRFf//Z";
// //#endregion
// //create_task(description, checked, priority, duedate, id, notes);
// tasks = [
//     {
//         description: "Description",
//         checked : false,
//         priority : "high",
//         duedate : "2022-12-25",
//         id : create_id(10),
//         notes : [
//             {
//                 text: "this machine",
//                 id : create_id(10)
//             }
//         ]
//     },
//     {
//         description: "Description",
//         checked : false,
//         priority : "high",
//         duedate : "2022-12-25",
//         id : create_id(10),
//         notes : [
//             {
//                 text: "this machine",
//                 id : create_id(10)
//             }
//         ]
//     },
// ];

// id = create_id(10);

// project = create_project(label, description, img, tasks, id);
// projectDom = create_project_main_dom(project, null);
// main.append(projectDom);