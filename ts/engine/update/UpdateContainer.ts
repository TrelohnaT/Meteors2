import MouseData from "../mouse/MouseData";

export default class UpdateContainer {

    maxX: number;
    maxY: number;

    mouseData: MouseData;

    constructor(maxX: number, maxY: number, mouseData: MouseData) {
        this.maxX = maxX;
        this.maxY = maxY;
        this.mouseData = mouseData;
    }

}

