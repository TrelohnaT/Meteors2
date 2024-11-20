import IPoint from "./IPoint";



export default class BasicPoint implements IPoint {

    private id: string;
    private x: number;
    private y: number;
    private futureX: number = 0;
    private futureY: number = 0;
    private radius: number = 5;
    private color: string;

    private vectorX: number = 0;
    private vectorY: number = 0;

    private hitBorder: boolean = false;

    constructor(
        id: string,
        x: number,
        y: number,
        color: string = "#ff0000"
    ) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.color = color;

    }

    setFutureX(): void {
        if (this.vectorX != 0) {
            this.futureX = this.x - this.vectorX;
            console.log("setFutureX: " + this.futureX);
        }
    }
    setFutureY(): void {
        if (this.vectorY != 0) {
            this.futureY = this.y - this.vectorY;
            console.log("setFutureY: " + this.futureY);
        }
    }

    moveMeX(): void {

        if (this.futureX != 0) {
            this.x = this.futureX;
            console.log("moveMeX: " + this.x);
        }
    }
    moveMeY(): void {
        if (this.futureY != 0) {
            this.y = this.futureY;
            console.log("moveMeY: " + this.y);
        }
    }


    setVector(vectorX: number, vectorY: number): void {
        this.vectorX = vectorX;
        this.vectorY = vectorY;
    }

    set_x_and_y(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    handleOutOfBorder(maxX: number, maxY: number): void {
        if (this.x < 0) {
            this.futureX = maxX;
        } else if (maxX < this.x) {
            this.futureX = 0;
        }
        if (this.y < 0) {
            this.futureY = maxY;
        } else if (maxY < this.y) {
            this.futureY = 0;
        }
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



