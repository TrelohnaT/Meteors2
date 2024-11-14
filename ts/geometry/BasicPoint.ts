import IPoint from "./IPoint";



export default class BasicPoint implements IPoint {

    private id: string;
    private x: number;
    private y: number;
    private nextX: number = 0;
    private nextY: number = 0;
    private radius: number = 10;
    private color: string;

    private vectorX: number = 0;
    private vectorY: number = 0;
    
    private hitBorder: boolean = false;

    constructor(
        id: string,
        x: number,
        y: number,
        color: string
    ) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.color = color;

    }

    moveMe(maxX: number, maxY: number):void {

        if (this.x <= 0 || maxX <= this.x) {
            this.vectorX = this.vectorX * -1;
            this.hitBorder = true;
        } else

        if (this.y <= 0 || maxY <= this.y) {
            this.vectorY = this.vectorY * -1;
            this.hitBorder = true;
        } else {
            this.hitBorder = false;
        }
        this.x = this.x + this.vectorX;
        this.y = this.y + this.vectorY;
    }

    set_vector_x_and_y(vectorX: number, vectorY: number) {
        this.vectorX = vectorX;
        this.vectorY = vectorY;
    }

    set_x_and_y(x:number, y:number) {
        this.x = x;
        this.y = y;
    }


    getId(): string {
        return this.id;
    }

    getX(): number {
        return this.x;
    }

    getY(): number {
        return this.y;
    }

    getColor(): string {
        return this.color;
    }
    getRadius(): number {
        return this.radius;
    }

}



