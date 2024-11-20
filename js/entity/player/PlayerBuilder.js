import Player from "./Player";
export default class PlayerBuilder {
    constructor(id, centerPoint) {
        this.size = 10;
        this.offsetAngle = 0;
        this.maxAngle = 360;
        this.chunkAngle = 72;
        this.pointMap = new Map();
        this.rotationDirection = 1;
        this.baseRotation = 180;
        this.moveMe = false;
        this.isSymetric = true;
        this.moveSpeed = 1;
        this.id = id;
        this.centerPoint = centerPoint;
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
    build() {
        return new Player(this.id, this.centerPoint, this.size, this.offsetAngle, this.maxAngle, this.chunkAngle, this.pointMap, this.rotationDirection, this.baseRotation, this.isSymetric, this.moveMe, this.moveSpeed);
    }
}
