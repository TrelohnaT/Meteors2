import IEntity from "../entity/IEntity.js";
import IPoint from "../geometry/point/IPoint.js";

export default class Canvas {

    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    constructor() {
        this.canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
        this.canvas.width = window.innerWidth - 50;
        this.canvas.height = window.innerHeight - 20;

    }

    getWidth(): number {
        return this.canvas.width;
    }

    getHeight(): number {
        return this.canvas.height;
    }

    clear(): void {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawEntity(entity: IEntity) {

        this.drawPoint(entity.getCenterPoint());

        for (const [id, point] of entity.getPointMap()) {
            this.drawPoint(point);
        }
    }

    drawPoint(point: IPoint) {

        this.ctx.beginPath();
        this.ctx.arc(point.getX(), point.getY(), point.getRadius(), 0, 2 * Math.PI);
        this.ctx.fillStyle = point.getColor();
        this.ctx.fill();
        this.ctx.strokeStyle = point.getColor();
        this.ctx.stroke();
    }

}