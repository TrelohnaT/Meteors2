

export default class MouseHandler {

    private id: string;
    private x: number = 0;
    private y: number = 0;

    private leftBtn: boolean = false;
    private middleBtn: boolean = false;
    private rightBtn: boolean = false;

    private down: string = "onmousedown";
    private up: string = "onmouseup";

    constructor(id: string) {
        this.id = id;

    }

    handleEvent(buttonNumber: number, type: string):void {
        if (buttonNumber == 0) {
            if (type == this.down) {
                this.leftBtn = true;
            } else if (type == this.up) {
                this.leftBtn = false;
            }
        } else if (buttonNumber == 1) {
            if (type == this.down) {
                this.middleBtn = true;
            } else if (type == this.up) {
                this.middleBtn = false;
            }
        } else if (buttonNumber == 2) {
            if (type == this.down) {
                this.rightBtn = true;
            } else if (type == this.up) {
                this.rightBtn = false;
            }
        }

    }

    setX(value:number): void {
        this.x = value;
    }
    getX():number {
        return this.x;
    }

    setY(value:number) :void{
        this.y = value;
    }
    getY():number {
        return this.y;
    }

    right():boolean{
        return this.rightBtn;
    }

    middle():boolean {
        return this.middleBtn;
    }
    left():boolean {
        return this.leftBtn;
    }

    clear():void {
        this.leftBtn = false;
        this.middleBtn = false;
        this.rightBtn = false;
    }

}



