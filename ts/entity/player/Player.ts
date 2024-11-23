import Calculations from "../../engine/Calculations.js";
import UpdateContainer from "../../engine/update/UpdateContainer.js";
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

    update(updateContainer: UpdateContainer): void {
        // the "shimering" is caused by rounding of calculation of points coordinations
        // rotation of player to be pointing to the target
        const angle = Calculations.angleBetweenTwoPoints(
            this.entity.getCenterPoint().getX(),
            this.entity.getCenterPoint().getY(),
            updateContainer.mouseData.x,
            updateContainer.mouseData.y
        )
        this.entity.updateOffsetAngle(angle);

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


    getCenterPoint(): IPoint {
        return this.entity.getCenterPoint();
    }



}


