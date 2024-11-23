import Calculations from "../../engine/Calculations.js";
import ProjectileData from "./ProjectileData.js";
export default class Player {
    constructor(entity) {
        this.entity = entity;
    }
    setUp() {
        this.entity.setUp();
    }
    update(updateContainer) {
        // the "shimering" is caused by rounding of calculation of points coordinations
        // rotation of player to be pointing to the target
        const angle = Calculations.angleBetweenTwoPoints(this.entity.getCenterPoint().getX(), this.entity.getCenterPoint().getY(), updateContainer.mouseData.x, updateContainer.mouseData.y);
        this.entity.updateOffsetAngle(angle);
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
    getCenterPoint() {
        return this.entity.getCenterPoint();
    }
}
