import Calculations from "../engine/Calculations.js";
import IPoint from "../geometry/point/IPoint";
import IEntity from "./IEntity";


export default class Entity implements IEntity {

    private id: string;
    private centerPoint: IPoint;
    private size: number;
    private offsetAngle: number;
    private maxAngle: number;
    private chunkAngle: number;
    private pointMap: Map<string, IPoint>;
    private rotationDirection: number;
    private baseRotation: number;

    private isSymetric: boolean;
    private drawLines: boolean;
    private shouldMove: boolean;

    private moveSpeed: number;

    private vectorX: number;
    private vectorY: number;

    private pointsToCenterDistance: number[];

    constructor(
        id: string,
        centerPoint: IPoint,
        size: number,
        offsetAngle: number,
        maxAngle: number,
        chunkAngle: number,
        pointMap: Map<string, IPoint>,
        rotationDirection: number,
        baseRotation: number,

        isSymetric: boolean,
        drawLines: boolean,
        moveMe: boolean,

        moveSpeed: number,

        vectorX: number,
        vectorY: number,

        pointsToCenterDistance: number[]
    ) {
        this.id = id;
        this.centerPoint = centerPoint;
        this.size = size;
        this.offsetAngle = offsetAngle;
        this.maxAngle = maxAngle;
        this.chunkAngle = chunkAngle;
        this.pointMap = pointMap;
        this.rotationDirection = rotationDirection;
        this.baseRotation = baseRotation;

        this.isSymetric = isSymetric;
        this.drawLines = drawLines;
        this.shouldMove = moveMe;

        this.moveSpeed = moveSpeed;

        //ToDo vector needs to propagate to all points in entity, not just center point.
        //this.centerPoint.setVector(vectorX, vectorY);


        this.vectorX = vectorX;
        this.vectorY = vectorY;

        this.pointsToCenterDistance = pointsToCenterDistance;



        this.setUp();

    }

    setUp(): void {
        console.log("setUp");

        this.centerPoint.setVector(this.vectorX, this.vectorY);
        if (this.chunkAngle == 0) {
            return;
        }

        this.updatePointMap();

        for (const [id, point] of this.pointMap) {
            point.setVector(this.vectorX, this.vectorY);
        }

    }

    update(maxX: number, maxY: number): void {

        this.centerPoint.setFutureX(maxX);
        this.centerPoint.setFutureY(maxY);
        for (let [id, point] of this.pointMap) {
            point.setFutureX(maxX);
            point.setFutureY(maxY);
        }
    }

    moveMe(): void {
        //console.log("moveMe - " + this.id);
        this.centerPoint.moveMeX();
        this.centerPoint.moveMeY();
        for (let [id, point] of this.pointMap) {
            point.moveMeX();
            point.moveMeY();
        }
    }

    updateOffsetAngle(offsetAngle: number): void {
        this.offsetAngle = offsetAngle;
        this.updatePointMap();
    }

    getOffsetAngle(): number {
        return this.offsetAngle;
    }

    getDrawLines(): boolean {
        return this.drawLines;
    }

    getId(): string {
        return this.id;
    }

    getPointMap(): Map<string, IPoint> {
        return this.pointMap;
    }

    getCenterPoint(): IPoint {
        return this.centerPoint;
    }


    private updatePointMap() {


        this.pointMap.clear();

        // formula to draw cyrcular shapes
        for (let j = 1; (this.chunkAngle * j) <= this.maxAngle; j++) {            
            const pointId = "point_" + j;
            let distanceToCenter: number = 0;
            if (this.pointsToCenterDistance.length != (this.maxAngle / this.chunkAngle)) {
                distanceToCenter = this.size;
            } else {
                distanceToCenter = this.size * this.pointsToCenterDistance[j - 1];
            }
            const point = Calculations.pointB_angleB_lengthC(
                pointId,
                this.centerPoint,
                ((this.offsetAngle + this.baseRotation) + (this.chunkAngle * j)) * this.rotationDirection,
                distanceToCenter,
                false
            );
            this.pointMap.set(pointId, point);
        }
    }

}


