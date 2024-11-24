import UpdateOutputContainer from "../../engine/update/UpdateOutputContainer.js";
export default class Projectile {
    constructor(entity) {
        this.doomed = false;
        this.entity = entity;
    }
    /**
     * Generate body points which should be in line.
     */
    setUp() {
        this.entity.setUp();
    }
    update(updateContainer) {
        this.entity.update(updateContainer.maxX, updateContainer.maxY);
        if (this.entity.getHitBorderX() ||
            this.entity.getHitBorderY()) {
            this.doomed = true;
        }
        return new UpdateOutputContainer();
    }
    moveMe() {
        this.entity.moveMe();
    }
    getEntity() {
        return this.entity;
    }
    getPointMap() {
        return this.entity.getPointMap();
    }
    getCenterPoint() {
        return this.entity.getCenterPoint();
    }
    getId() {
        return this.entity.getId();
    }
    getDoomed() {
        return this.doomed;
    }
}
