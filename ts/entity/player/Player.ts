import IPoint from "../../geometry/point/IPoint.js";
import IEntity from "../IEntity";


export default class Player implements IEntity {


    private entity:IEntity;

    constructor(
        entity:IEntity
    ) {
        this.entity = entity;

    }

    setUp(): void {
        this.entity.setUp();
    }

    update(): void {

    }

    moveMe(): void {

    }

    getId(): string {
        return "";
    }

    getPointMap(): Map<string, IPoint> {
        return this.entity.getPointMap();
    }

    
    getCenterPoint(): IPoint {
        return this.entity.getCenterPoint();
    }



}


