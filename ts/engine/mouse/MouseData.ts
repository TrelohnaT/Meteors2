



export default class MouseData {

    x: number = 0;
    y: number = 0;

    leftBtn: boolean = false;
    middleBtn: boolean = false;
    rightBtn: boolean = false;

    constructor(
        x: number,
        y: number,
        leftBtn: boolean,
        middleBtn: boolean,
        rightBtn: boolean
    ) {
        this.x = x;
        this.y = y;
        this.leftBtn = leftBtn;
        this.middleBtn = middleBtn;
        this.rightBtn = rightBtn;
    }

}

