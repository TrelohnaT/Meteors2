import IPoint from "./IPoint";



export default class BasicPoint implements IPoint {

    private id: string;
    private x: number;
    private y: number;
    private futureX: number = 0;
    private futureY: number = 0;
    private radius: number = 2;
    private color: string;

    private vectorX: number = 0;
    private vectorY: number = 0;

    private hitBorder: boolean = false;

    constructor(
        id: string,
        x: number,
        y: number,
        color: string = "#000000"
    ) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.color = color;

    }

    setFutureX(maxX: number): void {
        if (this.vectorX != 0) {
            this.futureX = this.x + this.vectorX;
            if (this.futureX <= 0 || maxX <= this.futureX) {
                this.vectorX = this.vectorX * -1;
            }
            this.futureX = this.x + this.vectorX;
        }
    }
    setFutureY(maxY: number): void {
        if (this.vectorY != 0) {
            this.futureY = this.y + this.vectorY;
            if (this.futureY <= 0 || maxY <= this.futureY) {
                this.vectorY = this.vectorY * -1;
            }
            this.futureY = this.y + this.vectorY;
        }
    }

    moveMeX(): void {
        if (this.futureX != 0) {
            this.x = this.futureX;
        }
    }
    moveMeY(): void {
        if (this.futureY != 0) {
            this.y = this.futureY;
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



