export default class BasicPoint {
    constructor(id, x, y, color = "#ff0000") {
        this.futureX = 0;
        this.futureY = 0;
        this.radius = 5;
        this.vectorX = 0;
        this.vectorY = 0;
        this.hitBorder = false;
        this.id = id;
        this.x = x;
        this.y = y;
        this.color = color;
    }
    setFutureX(maxX) {
        if (this.vectorX != 0) {
            this.futureX = this.x + this.vectorX;
            if (this.futureX <= 0 || maxX <= this.futureX) {
                this.vectorX = this.vectorX * -1;
            }
            this.futureX = this.x + this.vectorX;
            console.log("setFutureX: " + this.futureX);
        }
    }
    setFutureY(maxY) {
        if (this.vectorY != 0) {
            this.futureY = this.y + this.vectorY;
            if (this.futureY <= 0 || maxY <= this.futureY) {
                this.vectorY = this.vectorY * -1;
            }
            this.futureY = this.y + this.vectorY;
            console.log(this.id + " vectorY: " + this.vectorY);
        }
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
    handleOutOfBorder(maxX, maxY) {
        if (this.x < 0) {
            this.futureX = maxX;
        }
        else if (maxX < this.x) {
            this.futureX = 0;
        }
        if (this.y < 0) {
            this.futureY = maxY;
        }
        else if (maxY < this.y) {
            this.futureY = 0;
        }
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
