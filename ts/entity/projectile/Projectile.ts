import UpdateContainer from "../../engine/update/UpdateContainer";
import IPoint from "../../geometry/point/IPoint";
import ICustomObject from "../ICustomObject";
import IEntity from "../IEntity";

export default class Projectile implements ICustomObject {

    private entity:IEntity;

    constructor(entity:IEntity) {
        this.entity = entity;
    }

    /**
     * Generate body points which should be in line.
     */
    setUp(): void {
        this.entity.setUp();

    }

    update(updateContainer:UpdateContainer): void {
        this.entity.update(updateContainer.maxX, updateContainer.maxY);

    }

    moveMe(): void {
        this.entity.moveMe();

    }

    getEntity(): IEntity {
        return this.entity;
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


