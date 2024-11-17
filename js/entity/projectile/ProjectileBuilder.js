import Projectile from "./Projectile.js";
export default class ProjectileBuilder {
    constructor(id, centerPoint) {
        this.angle = 0;
        this.size = 10;
        this.vectorX = 0;
        this.vectorY = 0;
        this.id = id;
        this.centerPoint = centerPoint;
    }
    Angle(value) {
        this.angle = value;
        return this;
    }
    Size(value) {
        this.size = value;
        return this;
    }
    VectorX(value) {
        this.vectorX = value;
        return this;
    }
    VectorY(value) {
        this.vectorY = value;
        return this;
    }
    build() {
        return new Projectile(this.id, this.centerPoint, this.angle, this.size, this.vectorX, this.vectorY);
    }
}
