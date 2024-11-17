export default class Canvas {
    constructor() {
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = window.innerWidth - 50;
        this.canvas.height = window.innerHeight - 20;
    }
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    drawEntity(entity) {
        for (const [id, point] of entity.getPointMap()) {
            this.drawPoint(point);
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
