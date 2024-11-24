import UpdateOutputContainer from '../../engine/update/UpdateOutputContainer';
export default class Meteor {
    constructor(entity) {
        this.doomed = false;
        this.entity = entity;
    }
    setUp() {
        this.entity.setUp();
    }
    update(updateContainer) {
        this.entity.update(updateContainer.maxX, updateContainer.maxY);
        return new UpdateOutputContainer(false);
    }
    moveMe() {
        this.entity.moveMe();
    }
    getEntity() {
        return this.entity;
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
    getDoomed() {
        return this.doomed;
    }
}
