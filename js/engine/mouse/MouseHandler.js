import MouseData from "./MouseData.js";
class MouseHandler {
    constructor(id) {
        this.x = 0;
        this.y = 0;
        this.leftBtn = false;
        this.middleBtn = false;
        this.rightBtn = false;
        this.id = id;
    }
    handleEvent(buttonNumber, type) {
        if (buttonNumber == 0) {
            if (type == MouseHandler.down) {
                this.leftBtn = true;
            }
            else if (type == MouseHandler.up) {
                this.leftBtn = false;
            }
        }
        else if (buttonNumber == 1) {
            if (type == MouseHandler.down) {
                this.middleBtn = true;
            }
            else if (type == MouseHandler.up) {
                this.middleBtn = false;
            }
        }
        else if (buttonNumber == 2) {
            if (type == MouseHandler.down) {
                this.rightBtn = true;
            }
            else if (type == MouseHandler.up) {
                this.rightBtn = false;
            }
        }
    }
    getData() {
        return new MouseData(this.x, this.y, this.leftBtn, this.middleBtn, this.rightBtn);
    }
    setX(value) {
        this.x = value;
    }
    getX() {
        return this.x;
    }
    setY(value) {
        this.y = value;
    }
    getY() {
        return this.y;
    }
    right() {
        return this.rightBtn;
    }
    middle() {
        return this.middleBtn;
    }
    left() {
        return this.leftBtn;
    }
    clear() {
        this.leftBtn = false;
        this.middleBtn = false;
        this.rightBtn = false;
    }
}
MouseHandler.down = "onmousedown";
MouseHandler.up = "onmouseup";
export default MouseHandler;
