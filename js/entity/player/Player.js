export default class Player {
    constructor(id, centerPoint, size, offsetAngle, maxAngle, chunkAngle, pointMap, rotationDirection, baseRotation, isSymetric, moveMe, moveSpeed) {
        this.pointsToCenterDistance = new Array();
        this.id = id;
        this.centerPoint = centerPoint;
        this.size = size;
        this.offsetAngle = offsetAngle;
        this.maxAngle = maxAngle;
        this.chunkAngle = chunkAngle;
        this.pointMap = pointMap;
        this.rotationDirection = rotationDirection;
        this.baseRotation = baseRotation;
        this.isSymetric = isSymetric;
        this.shouldMove = moveMe;
        this.moveSpeed = moveSpeed;
        this.setUp();
    }
    setUp() {
    }
    update() {
    }
    moveMe() {
    }
    getId() {
        return "";
    }
    getPointMap() {
        return new Map();
    }
    getCenterPoint() {
        return this.centerPoint;
    }
}
