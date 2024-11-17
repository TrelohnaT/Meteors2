import IPoint from "../../geometry/point/IPoint";
import IEntity from "../IEntity";
import Calculations from '../../engine/Calculations.js';

export default class Projectile implements IEntity {


    private id: string;
    private centerPoint: IPoint;
    private pointMap: Map<string, IPoint> = new Map();

    private angle: number;
    private size: number;

    private vectorX: number;
    private vectorY: number;

    constructor(
        id: string,
        centerPoint: IPoint,
        angle: number,
        size: number,
        vectorX: number,
        vectorY: number
    ) {
        this.id = id;
        this.centerPoint = centerPoint;
        this.angle = angle;
        this.size = size;
        this.vectorX = vectorX;
        this.vectorY = vectorY;

        this.setUp();
    }

    /**
     * Generate body points which should be in line.
     */
    setUp(): void {
        const chunkAngle = 180; // projectile will be line
        this.centerPoint.setVector(this.vectorX, this.vectorY);

        for (let j = 0; j < 2; j++) {
            const pointId: string = "point_" + j;

            let point: IPoint = Calculations.pointB_angleB_lengthC(
                pointId,
                this.centerPoint,
                ((this.angle) + (chunkAngle * j)) * 1,
                this.size / 2
            );
            point.setVector(this.vectorX, this.vectorY);
            this.pointMap.set(pointId, point);
        }
    }

    update(): void {
        console.log("projectile update");
        this.centerPoint.setFutureX();
        this.centerPoint.setFutureY();
        for(let [id, point] of this.pointMap) {
            point.setFutureX();
            point.setFutureY();
        }
    }

    moveMe(): void {
        this.centerPoint.moveMeX();
        this.centerPoint.moveMeY();
        for(let [id, point] of this.pointMap) {
            point.moveMeX();
            point.moveMeY();
        }
    }

    getPointMap(): Map<string, IPoint> {
        return this.pointMap;
    }

    getId(): string {
        return this.id;
    }

}


