export function truchet(width, height) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    let cellW, cellH, edge;

    canvas.width = width;
    canvas.height = height;
    edge = 15 * (Math.random() + 1);
    context.lineWidth = Math.random() * 4 + 1
    cellW = canvas.width / edge;
    cellH = canvas.height / edge;
    
    context.fillStyle = "azure";
    context.strokeStyle = "purple";
    context.fillRect(0, 0, canvas.width, canvas.height);
    for (let x = 0; x < cellW; x++)
        for (let y = 0; y < cellH; y++) {
            if (Math.random() < .5) {
                context.beginPath();
                context.arc(x * edge, y * edge, edge / 2, 0, Math.PI / 2, 0);
                context.stroke();
                context.beginPath();
                context.arc((x + 1) * edge, (y + 1) * edge, edge / 2, 3 * Math.PI / 2, Math.PI, 1);
                context.stroke();
            }
            else {
                context.beginPath();
                context.arc((x + 1) * edge, y * edge, edge / 2, Math.PI / 2, Math.PI, 0);
                context.stroke();
                context.beginPath();
                context.arc(x * edge, (y + 1) * edge, edge / 2, 0, 3 * Math.PI / 2, 1);
                context.stroke();
            }
        }
    return canvas.toDataURL();
}