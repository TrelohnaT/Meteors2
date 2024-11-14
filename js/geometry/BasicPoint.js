export default class BasicPoint {
    constructor(id, x, y, color) {
        this.nextX = 0;
        this.nextY = 0;
        this.radius = 10;
        this.vectorX = 0;
        this.vectorY = 0;
        this.hitBorder = false;
        this.id = id;
        this.x = x;
        this.y = y;
        this.color = color;
    }
    moveMe(maxX, maxY) {
        if (this.x <= 0 || maxX <= this.x) {
            this.vectorX = this.vectorX * -1;
            this.hitBorder = true;
        }
        else if (this.y <= 0 || maxY <= this.y) {
            this.vectorY = this.vectorY * -1;
            this.hitBorder = true;
        }
        else {
            this.hitBorder = false;
        }
        this.x = this.x + this.vectorX;
        this.y = this.y + this.vectorY;
    }
    set_vector_x_and_y(vectorX, vectorY) {
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
