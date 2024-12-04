import Calculations from "../../engine/Calculations.js";
import UpdateInputContainer from "../../engine/update/UpdateInputContainer.js";
import UpdateOutputContainer from "../../engine/update/UpdateOutputContainer.js";
import IPoint from "../../geometry/point/IPoint.js";
import IEntity from "../IEntity";
import IPlayer from "./IPlayer.js";
import ProjectileData from "./ProjectileData.js";


export default class Player implements IPlayer {


    private entity: IEntity;

    constructor(
        entity: IEntity
    ) {
        this.entity = entity;

    }

    setUp(): void {
        this.entity.setUp();
    }

    update(updateContainer: UpdateInputContainer): UpdateOutputContainer {
        const angle = Calculations.angleBetweenTwoPoints(
            this.entity.getCenterPoint().getX(),
            this.entity.getCenterPoint().getY(),
            updateContainer.mouseData.x,
            updateContainer.mouseData.y
        )
        this.entity.updateOffsetAngle(angle);
        return new UpdateOutputContainer();
    }

    moveMe(): void {

    }

    getProjectileData(): ProjectileData {

        return new ProjectileData(
            this.getCenterPoint().getX(),
            this.getCenterPoint().getY(),
            this.entity.getOffsetAngle()
        )
    }

    getEntity(): IEntity {
        return this.entity;
    }

    getId(): string {
        return "";
    }

    getPointMap(): Map<string, IPoint> {
        return this.entity.getPointMap();
    }

    getDoomed(): boolean {
        return false;
    }

    getCenterPoint(): IPoint {
        return this.entity.getCenterPoint();
    }



}


