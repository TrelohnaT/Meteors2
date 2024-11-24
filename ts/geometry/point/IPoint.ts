


export default interface IPoint {
    getId(): string;
    getX(): number;
    getY(): number;
    getColor(): string;
    getRadius(): number;
    setVector(vectorX: number, vectorY: number): void;
    setFutureX(maxX:number): boolean;
    setFutureY(maxY:number): boolean;
    moveMeX(): void;
    moveMeY(): void;
}






