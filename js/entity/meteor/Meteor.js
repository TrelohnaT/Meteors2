export default class Meteor {
    constructor(entity) {
        this.entity = entity;
    }
    setUp() {
        this.entity.setUp();
    }
    update(maxX, maxY) {
        this.entity.update(maxX, maxY);
    }
    moveMe() {
        this.entity.moveMe();
    }
    getId() {
        return this.entity.getId();
    }
    getPointMap() {
        return this.entity.getPointMap();
    }
    getCenterPoint() {
        return this.entity.getCenterPoint();
    }
}
