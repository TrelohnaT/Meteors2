export default class Projectile {
    constructor(entity) {
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
}
