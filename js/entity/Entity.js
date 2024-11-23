import Calculations from "../engine/Calculations.js";
export default class Entity {
    constructor(id, centerPoint, size, offsetAngle, maxAngle, chunkAngle, pointMap, rotationDirection, baseRotation, isSymetric, drawLines, moveMe, moveSpeed, vectorX, vectorY, pointsToCenterDistance) {
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
        this.drawLines = drawLines;
        this.shouldMove = moveMe;
        this.moveSpeed = moveSpeed;
        //ToDo vector needs to propagate to all points in entity, not just center point.
        //this.centerPoint.setVector(vectorX, vectorY);
        this.vectorX = vectorX;
        this.vectorY = vectorY;
        this.pointsToCenterDistance = pointsToCenterDistance;
        this.setUp();
    }
    setUp() {
        console.log("setUp");
        this.centerPoint.setVector(this.vectorX, this.vectorY);
        if (this.chunkAngle == 0) {
            return;
        }
        this.updatePointMap();
        for (const [id, point] of this.pointMap) {
            point.setVector(this.vectorX, this.vectorY);
        }
    }
    update(maxX, maxY) {
        this.centerPoint.setFutureX(maxX);
        this.centerPoint.setFutureY(maxY);
        for (let [id, point] of this.pointMap) {
            point.setFutureX(maxX);
            point.setFutureY(maxY);
        }
    }
    moveMe() {
        //console.log("moveMe - " + this.id);
        this.centerPoint.moveMeX();
        this.centerPoint.moveMeY();
        for (let [id, point] of this.pointMap) {
            point.moveMeX();
            point.moveMeY();
        }
    }
    updateOffsetAngle(offsetAngle) {
        this.offsetAngle = offsetAngle;
        this.updatePointMap();
    }
    getOffsetAngle() {
        return this.offsetAngle;
    }
    getDrawLines() {
        return this.drawLines;
    }
    getId() {
        return this.id;
    }
    getPointMap() {
        return this.pointMap;
    }
    getCenterPoint() {
        return this.centerPoint;
    }
    updatePointMap() {
        this.pointMap.clear();
        // formula to draw cyrcular shapes
        for (let j = 1; (this.chunkAngle * j) <= this.maxAngle; j++) {
            const pointId = "point_" + j;
            let distanceToCenter = 0;
            if (this.pointsToCenterDistance.length != (this.maxAngle / this.chunkAngle)) {
                distanceToCenter = this.size;
            }
            else {
                distanceToCenter = this.size * this.pointsToCenterDistance[j - 1];
            }
            const point = Calculations.pointB_angleB_lengthC(pointId, this.centerPoint, ((this.offsetAngle + this.baseRotation) + (this.chunkAngle * j)) * this.rotationDirection, distanceToCenter, false);
            this.pointMap.set(pointId, point);
        }
    }
}
