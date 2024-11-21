import IPoint from "../../geometry/point/IPoint";
import IEntity from "../IEntity";

export default class Projectile implements IEntity {

    private entity:IEntity;

    constructor(entity:IEntity) {
        this.entity = entity;
    }

    /**
     * Generate body points which should be in line.
     */
    setUp(): void {

        this.entity.setUp();

        // const chunkAngle = 180; // projectile will be line
        // this.centerPoint.setVector(this.vectorX, this.vectorY);

        // for (let j = 0; j < 2; j++) {
        //     const pointId: string = "point_" + j;

        //     let point: IPoint = Calculations.pointB_angleB_lengthC(
        //         pointId,
        //         this.centerPoint,
        //         ((this.angle) + (chunkAngle * j)) * 1,
        //         this.size / 2
        //     );
        //     point.setVector(this.vectorX, this.vectorY);
        //     this.pointMap.set(pointId, point);
        // }
    }

    update(maxX:number, maxY:number): void {


        this.entity.update(maxX, maxY);

        // console.log("projectile update");
        // this.centerPoint.setFutureX();
        // this.centerPoint.setFutureY();
        // for(let [id, point] of this.pointMap) {
        //     point.setFutureX();
        //     point.setFutureY();
        // }
    }

    moveMe(): void {
        
        this.entity.moveMe();

        // this.centerPoint.moveMeX();
        // this.centerPoint.moveMeY();
        // for(let [id, point] of this.pointMap) {
        //     point.moveMeX();
        //     point.moveMeY();
        // }
    }

    getPointMap(): Map<string, IPoint> {
        return this.entity.getPointMap();
    }
    
    getCenterPoint(): IPoint {
        return this.entity.getCenterPoint();
    }

    getId(): string {
        return this.entity.getId();
    }

}


