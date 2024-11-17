export default class MouseHandler {
    constructor(id) {
        this.x = 0;
        this.y = 0;
        this.leftBtn = false;
        this.middleBtn = false;
        this.rightBtn = false;
        this.down = "onmousedown";
        this.up = "onmouseup";
        this.id = id;
    }
    handleEvent(buttonNumber, type) {
        if (buttonNumber == 0) {
            if (type == this.down) {
                this.leftBtn = true;
            }
            else if (type == this.up) {
                this.leftBtn = false;
            }
        }
        else if (buttonNumber == 1) {
            if (type == this.down) {
                this.middleBtn = true;
            }
            else if (type == this.up) {
                this.middleBtn = false;
            }
        }
        else if (buttonNumber == 2) {
            if (type == this.down) {
                this.rightBtn = true;
            }
            else if (type == this.up) {
                this.rightBtn = false;
            }
        }
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
