export default class MeteorBuilder {
    constructor(id, centerPoint) {
        this.id = id;
        this.centerPoint = centerPoint;
        this.size = 10;
        this.offsetAngle = 0;
        this.maxAngle = 360;
        this.chunkAngle = 90;
        this.rotationDirection = 1;
        this.baseRotation = 0;
        this.isSymetric = true;
        this.pointMap = new Map();
        //this.vector = new Vector("default", this.centerPoint, this.centerPoint);
        this.moveMe = false;
        this.moveSpeed = 1;
    }
    Size(value) {
        this.size = value;
        return this;
    }
    OffsetAngle(value) {
        this.offsetAngle = value;
        return this;
    }
    MaxAngle(value) {
        this.chunkAngle = value;
        return this;
    }
    ChunkAngle(value) {
        this.chunkAngle = value;
        return this;
    }
    RotationDirection(value) {
        this.rotationDirection = value;
        return this;
    }
    BaseRotation(value) {
        this.baseRotation = value;
        return this;
    }
    IsSymetric(value) {
        this.isSymetric = value;
        return this;
    }
    PointMap(value) {
        this.pointMap = value;
        return this;
    }
    MoveMe(value) {
        this.moveMe = value;
        return this;
    }
    MoveSpeed(value) {
        this.moveSpeed = value;
        return this;
    }
}
