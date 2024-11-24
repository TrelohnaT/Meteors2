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
    /**
     * also checks if point in out of viewport on X
     * @param maxX 
     */
    setFutureX(maxX: number): boolean {
        let hitBorderX = false;
        if (this.vectorX != 0) {
            this.futureX = this.x + this.vectorX;
            hitBorderX = (this.futureX <= 0 || maxX <= this.futureX);
            if (hitBorderX) {
                this.vectorX = this.vectorX * -1;
            } 
            this.futureX = this.x + this.vectorX;
        }
        return hitBorderX;
    }
    /**
     * also checks if point in out of viewport on Y
     * @param maxY 
     */
    setFutureY(maxY: number): boolean {
        let hitBorderY = false;
        if (this.vectorY != 0) {
            this.futureY = this.y + this.vectorY;
            hitBorderY = (this.futureY <= 0 || maxY <= this.futureY);
            if (hitBorderY) {
                this.vectorY = this.vectorY * -1;
            }
            this.futureY = this.y + this.vectorY;
        }
        return hitBorderY;
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



