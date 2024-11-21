


export default interface IPoint {
    getId(): string;
    getX(): number;
    getY(): number;
    getColor(): string;
    getRadius(): number;
    setVector(vectorX: number, vectorY: number): void;
    setFutureX(maxX:number): void;
    setFutureY(maxY:number): void;
    moveMeX(): void;
    moveMeY(): void;
    handleOutOfBorder(maxX:number, maxY:number):void;
}






