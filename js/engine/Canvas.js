export default class Canvas {
    constructor() {
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = window.innerWidth - 50;
        this.canvas.height = window.innerHeight - 20;
    }
    drawEntity(entity) {
        for (const [key, value] of entity.getPointMap()) {
            console.log("drawing pont: " + key);
            this.drawPoint(value);
        }
    }
    drawPoint(point) {
        this.ctx.beginPath();
        this.ctx.arc(point.getX(), point.getY(), point.getRadius(), 0, 2 * Math.PI);
        this.ctx.fillStyle = point.getColor();
        this.ctx.fill();
        this.ctx.strokeStyle = point.getColor();
        this.ctx.stroke();
    }
}
