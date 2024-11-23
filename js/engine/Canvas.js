export default class Canvas {
    constructor() {
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = window.innerWidth - 50;
        this.canvas.height = window.innerHeight - 20;
    }
    getWidth() {
        return this.canvas.width;
    }
    getHeight() {
        return this.canvas.height;
    }
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    drawEntity(customObject) {
        this.drawPoint(customObject.getCenterPoint());
        const tmp = Array.from(customObject.getPointMap().values());
        for (let i = 0; i < tmp.length; i++) {
            this.drawPoint(tmp[i]);
            if (customObject.getEntity().getDrawLines()) {
                // draw line to previous point
                if (i != 0) {
                    this.drawLine(tmp[i - 1], tmp[i]);
                }
                // draw line from last to first point 
                if (i == (tmp.length - 1)) {
                    this.drawLine(tmp[i], tmp[0]);
                }
            }
        }
        // for (const [id, point] of entity.getPointMap()) {
        //     this.drawPoint(point);
        // }
    }
    drawPoint(point) {
        this.ctx.beginPath();
        this.ctx.arc(point.getX(), point.getY(), point.getRadius(), 0, 2 * Math.PI);
        this.ctx.fillStyle = point.getColor();
        this.ctx.fill();
        this.ctx.strokeStyle = point.getColor();
        this.ctx.stroke();
    }
    drawLine(start, end) {
        this.ctx.beginPath();
        this.ctx.moveTo(start.getX(), start.getY());
        this.ctx.lineTo(end.getX(), end.getY());
        this.ctx.stroke();
    }
}
