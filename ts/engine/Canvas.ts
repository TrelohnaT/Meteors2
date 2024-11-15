import IEntity from "../entity/IEntity.js";
import IPoint from "../geometry/point/IPoint.js";

export default class Canvas{
    
    private canvas: HTMLCanvasElement;
    private ctx :CanvasRenderingContext2D;
    
    constructor() {
        this.canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
        this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
        this.canvas.width = window.innerWidth - 50;
        this.canvas.height = window.innerHeight - 20;
        

    }

    drawEntity(entity: IEntity) {
        for(const [key, value] of entity.getPointMap()) {
            console.log("drawing pont: " + key);
            this.drawPoint(value);
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