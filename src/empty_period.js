import { map } from "./utilities";

export const emptyObj = (
    () => {
        const empty = document.createElement("div");
        const message = document.createElement("h2");
        const container = document.createElement("div");
        const img = document.createElement("img");
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        const link = document.createElement("a");
        const reload = document.createElement("button");
        let animeKiller, reg, intervals, subs, color, dt;


        intervals = ["week", "month", "year", "all"];
        subs = ["earthporn", "TouhouArt", "brutalism", "artporn"];
        reg = /^https:\/\/i\.redd\.it\/\w+\.(jpg|png|jpeg)/i;
        color = 0;
        dt = 0;

        empty.append(message);
        empty.append(container);
        container.append(img);
        container.append(reload);
        container.append(link);

        empty.classList.add("empty-period");
        container.classList.add("empty-container");

        message.innerText = "There doesn't seem to be anything for this period, have a pic instead.";
        canvas.width = 200;
        canvas.height = 200;
        link.setAttribute("alt", "image source");
        link.setAttribute("target", "_blank");

        img.addEventListener("load", replace);

        reload.addEventListener("click", fetch_image);

        show_loading();
        fetch_image();

        function replace() {
            cancelAnimationFrame(animeKiller);
            canvas.replaceWith(img);
            reload.style.display = "block";
        }

        function fetch_image() {
            let interval, sub;

            interval = intervals[~~(Math.random() * intervals.length)];
            sub = subs[~~(Math.random() * subs.length)];
            show_loading();
            reload.style.display = "none";
            link.style.display = "none";
            img.replaceWith(canvas);
            fetch(`https://www.reddit.com/r/${sub}/top.json?t=${interval}&limit=100`, { method: "GET" })
                .then(res => res.json())
                .then(res => {
                    let child;

                    do {
                        child = res.data.children[~~(Math.random() * res.data.children.length)];
                    } while (!reg.test(child.data.url));

                    link.style.display = "block";
                    link.innerText = `by u/${child.data.author} on reddit`;
                    link.href = `https://old.reddit.com${child.data.permalink}`;
                    img.src = child.data.url;
                }).catch(error => {
                    console.log(error);
                    img.src = "./pepe.jpg";
                });
        }

        function show_loading() {
            let circles, distance, angle, angleInc, minRad, maxRad;

            circles = 20;
            distance = 45;
            angle = 0;
            angleInc = Math.PI * 2 / circles;
            minRad = 1;
            maxRad = 6;

            context.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < circles; i++, angle += angleInc) {
                let radius;

                radius = minRad + Math.abs(maxRad * Math.sin(map(dt % circles, 0, circles, 0, Math.PI * 2) + i * Math.PI * 3 / circles));
                context.beginPath();
                context.fillStyle = `hsl(${(i * 10 + color) % 360}, 100%, 50%)`;
                context.arc(distance * Math.cos(angle) + canvas.width / 2, distance * Math.sin(angle) + canvas.height / 2, radius, 0, Math.PI * 2);
                context.fill();
            }
            color += 1;
            dt += .1;

            animeKiller = requestAnimationFrame(show_loading);
        }

        return empty;
    }
)();