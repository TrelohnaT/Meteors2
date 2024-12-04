import Calculations from "../../engine/Calculations.js";
import UpdateOutputContainer from "../../engine/update/UpdateOutputContainer.js";
import ProjectileData from "./ProjectileData.js";
export default class Player {
    constructor(entity) {
        this.entity = entity;
    }
    setUp() {
        this.entity.setUp();
    }
    update(updateContainer) {
        const angle = Calculations.angleBetweenTwoPoints(this.entity.getCenterPoint().getX(), this.entity.getCenterPoint().getY(), updateContainer.mouseData.x, updateContainer.mouseData.y);
        this.entity.updateOffsetAngle(angle);
        return new UpdateOutputContainer();
    }
    moveMe() {
    }
    getProjectileData() {
        return new ProjectileData(this.getCenterPoint().getX(), this.getCenterPoint().getY(), this.entity.getOffsetAngle());
    }
    getEntity() {
        return this.entity;
    }
    getId() {
        return "";
    }
    getPointMap() {
        return this.entity.getPointMap();
    }
    getDoomed() {
        return false;
    }
    getCenterPoint() {
        return this.entity.getCenterPoint();
    }
}
