export default class BasicPoint {
    constructor(id, x, y, color = "#000000") {
        this.futureX = 0;
        this.futureY = 0;
        this.radius = 2;
        this.vectorX = 0;
        this.vectorY = 0;
        this.id = id;
        this.x = x;
        this.y = y;
        this.color = color;
    }
    /**
     * also checks if point in out of viewport on X
     * @param maxX
     */
    setFutureX(maxX) {
        let hitBorderX = false;
        if (this.vectorX != 0) {
            this.futureX = this.x + this.vectorX;
            hitBorderX = (this.futureX <= 0 || maxX <= this.futureX);
            if (hitBorderX) {
                this.vectorX = this.vectorX * -1;
            }
            this.futureX = this.x + this.vectorX;
        }
        return hitBorderX;
    }
    /**
     * also checks if point in out of viewport on Y
     * @param maxY
     */
    setFutureY(maxY) {
        let hitBorderY = false;
        if (this.vectorY != 0) {
            this.futureY = this.y + this.vectorY;
            hitBorderY = (this.futureY <= 0 || maxY <= this.futureY);
            if (hitBorderY) {
                this.vectorY = this.vectorY * -1;
            }
            this.futureY = this.y + this.vectorY;
        }
        return hitBorderY;
    }
    moveMeX() {
        if (this.futureX != 0) {
            this.x = this.futureX;
        }
    }
    moveMeY() {
        if (this.futureY != 0) {
            this.y = this.futureY;
        }
    }
    setVector(vectorX, vectorY) {
        this.vectorX = vectorX;
        this.vectorY = vectorY;
    }
    set_x_and_y(x, y) {
        this.x = x;
        this.y = y;
    }
    getId() {
        return this.id;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    getColor() {
        return this.color;
    }
    getRadius() {
        return this.radius;
    }
}
