import Calculations from "../engine/Calculations.js";
export default class Entity {
    constructor(id, centerPoint, size, offsetAngle, maxAngle, chunkAngle, pointMap, rotationDirection, baseRotation, isSymetric, moveMe, moveSpeed, vectorX, vectorY) {
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
        //ToDo vector needs to propagate to all points in entity, not just center point.
        //this.centerPoint.setVector(vectorX, vectorY);
        this.vectorX = vectorX;
        this.vectorY = vectorY;
        this.setUp();
    }
    setUp() {
        console.log("setUp");
        this.pointMap.clear();
        this.centerPoint.setVector(this.vectorX, this.vectorY);
        if (this.chunkAngle == 0) {
            return;
        }
        // formula to draw cyrcular shapes
        for (let j = 1; (this.chunkAngle * j) <= this.maxAngle; j++) {
            // this is not the best place for this, change it later
            if (this.pointsToCenterDistance.length <= this.maxAngle / this.chunkAngle) {
                const change = Math.floor(Math.random() * 10);
                // increment or decrement by chance
                if (Math.floor(Math.random() * 2) == 1) {
                    this.pointsToCenterDistance.push(this.size / 2 - change);
                }
                else {
                    this.pointsToCenterDistance.push(this.size / 2 + change);
                }
            }
            const pointId = "point_" + j;
            let distanceToCenter = 0;
            if (this.isSymetric) {
                distanceToCenter = this.size;
            }
            else {
                distanceToCenter = this.pointsToCenterDistance[j - 1];
            }
            const point = Calculations.pointB_angleB_lengthC(pointId, this.centerPoint, ((this.offsetAngle + this.baseRotation) + (this.chunkAngle * j)) * this.rotationDirection, distanceToCenter);
            this.pointMap.set(pointId, point);
        }
        for (const [id, point] of this.pointMap) {
            point.setVector(this.vectorX, this.vectorY);
        }
    }
    update(maxX, maxY) {
        console.log("projectile update");
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
    getId() {
        return this.id;
    }
    getPointMap() {
        return this.pointMap;
    }
    getCenterPoint() {
        return this.centerPoint;
    }
}
