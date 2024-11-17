


export default interface IPoint {
    getId(): string;
    getX(): number;
    getY(): number;
    getColor(): string;
    getRadius(): number;
    setVector(vectorX: number, vectorY: number): void;
    setFutureX(): void;
    setFutureY(): void;
    moveMeX(): void;
    moveMeY(): void;
    handleOutOfBorder(maxX:number, maxY:number):void;
}






