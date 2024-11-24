import UpdateInputContainer from "../../engine/update/UpdateInputContainer.js";
import UpdateOutputContainer from "../../engine/update/UpdateOutputContainer.js";
import IPoint from "../../geometry/point/IPoint";
import ICustomObject from "../ICustomObject";
import IEntity from "../IEntity";

export default class Projectile implements ICustomObject {

    private entity: IEntity;

    private doomed: boolean = false;

    constructor(entity: IEntity) {
        this.entity = entity;
    }

    /**
     * Generate body points which should be in line.
     */
    setUp(): void {
        this.entity.setUp();

    }

    update(updateContainer: UpdateInputContainer): UpdateOutputContainer {
        this.entity.update(updateContainer.maxX, updateContainer.maxY);

        if (this.entity.getHitBorderX() ||
            this.entity.getHitBorderY()) {
            this.doomed = true;
        }


        return new UpdateOutputContainer(

        );

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

    getDoomed(): boolean {
        return this.doomed;
    }

}


