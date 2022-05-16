export const emptyObj = (
    () => {
        const empty = document.createElement("div");
        const message = document.createElement("h2");
        const container = document.createElement("div");
        const img = document.createElement("img");
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        const reload = document.createElement("button");
        let animeKiller, reg, intervals, subs;

        intervals = ["week", "month", "year", "all"];
        subs = ["earthporn", "TouhouArt", "brutalism"];
        reg = /^https:\/\/i\.redd\.it\/\w+\.(jpg|png|jpeg)/i;

        empty.append(message);
        empty.append(container);
        container.append(img);
        container.append(reload);

        empty.classList.add("empty-period");
        container.classList.add("empty-container");

        message.innerText = "There doesn't seem to be anything for this period, have a pic instead.";
        canvas.width = 200;
        canvas.height = 200;

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
            img.replaceWith(canvas);
            fetch(`https://www.reddit.com/r/${sub}/top.json?t=${interval}&limit=100`, { method: "GET" })
                .then(res => res.json())
                .then(res => {
                    let child;

                    do {    
                        child = res.data.children[~~(Math.random() * res.data.children.length)];
                    } while (!reg.test(child.data.url));

                    img.src = child.data.url;
                }).catch(error => {
                    console.log(error);
                    img.src = "./pepe.jpg";
                });
        }

        function show_loading() {
            let x, y, radius;

            x = Math.random() * canvas.width;
            y = Math.random() * canvas.height;
            radius = Math.random() * 100 + 50;
            context.fillStyle = "rgb(255, 255, 255, .05)";
            context.fillRect(0, 0, canvas.width, canvas.height);
            context.fillStyle = "red";
            context.beginPath();
            context.arc(x, y, radius, 0, Math.PI * 2);
            context.stroke();

            animeKiller = requestAnimationFrame(show_loading);
        }

        return empty;
    }
)();